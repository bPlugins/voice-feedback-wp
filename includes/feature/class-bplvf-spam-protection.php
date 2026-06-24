<?php
/**
 * Spam Protection for Voice Feedback submissions.
 *
 * Runs three layers of checks BEFORE the upload handler:
 *   1. Honeypot (always on, hidden field)
 *   2. Rate limiting (configurable)
 *   3. Cloudflare Turnstile CAPTCHA (optional)
 *
 * All checks fire on the `save_audio` AJAX action at priority 5, so the
 * real upload handler (priority 10) never runs when a check fails.
 *
 * @package VoiceFeedback
 */

if (!defined('ABSPATH')) {
	exit;
}

if (!class_exists('BPLVF_Spam_Protection')) {

	class BPLVF_Spam_Protection
	{

		/**
		 * Hook the checks BEFORE the upload handler (priority 10).
		 */
		public function __construct()
		{
			add_action('wp_ajax_nopriv_save_audio', [$this, 'run_checks'], 5);
			add_action('wp_ajax_save_audio', [$this, 'run_checks'], 5);
		}

		/**
		 * Run all spam checks in order. Any failure ends the request before
		 * the upload handler at priority 10 can fire.
		 */
		public function run_checks()
		{
			if (!$this->check_honeypot()) {
				wp_send_json_error('Submission blocked.', 400);
			}

			if (!$this->check_rate_limit()) {
				$settings = self::get_settings();
				wp_send_json_error($settings['rate_limit_message'], 429);
			}

			if (!$this->check_captcha()) {
				wp_send_json_error('CAPTCHA verification failed.', 403);
			}

			// All checks passed — let the upload handler run.
		}

		/**
		 * Honeypot check. Real users never fill the hidden field; bots that
		 * auto-fill every input will populate it.
		 *
		 * @return bool True if the request passes (field empty / absent).
		 */
		private function check_honeypot()
		{
			$field_name = self::get_honeypot_field_name();

			if (isset($_POST[$field_name])) {
				$value = sanitize_text_field(wp_unslash($_POST[$field_name]));
				if ('' !== trim($value)) {
					return false; // Bot detected.
				}
			}

			return true;
		}

		/**
		 * Rate limit check, keyed by a hashed client IP transient.
		 *
		 * @return bool True if under the limit (or disabled).
		 */
		private function check_rate_limit()
		{
			$settings = self::get_settings();

			if (!$settings['rate_limit_enabled']) {
				return true;
			}

			$ip = self::get_client_ip();
			if ('' === $ip) {
				// Can't identify the client — fail open rather than block everyone.
				return true;
			}

			$hashed_ip = hash('sha256', $ip . wp_salt());
			$transient_key = 'bplvf_rl_' . substr($hashed_ip, 0, 32);
			$window_seconds = max(1, (int) $settings['rate_limit_window']);
			$max = max(1, (int) $settings['rate_limit_max']);

			$count = (int) get_transient($transient_key);

			if ($count >= $max) {
				return false;
			}

			if (0 === $count) {
				// First submission in this window — start the timer.
				set_transient($transient_key, 1, $window_seconds);
			} else {
				// Keep the existing window TTL where possible.
				$ttl = self::get_transient_ttl($transient_key, $window_seconds);
				set_transient($transient_key, $count + 1, $ttl);
			}

			return true;
		}

		/**
		 * Cloudflare Turnstile CAPTCHA verification.
		 *
		 * @return bool True if verification succeeds (or CAPTCHA disabled).
		 */
		private function check_captcha()
		{
			$settings = self::get_settings();

			if (!$settings['captcha_enabled']) {
				return true;
			}

			$token = isset($_POST['cf_turnstile_token'])
				? sanitize_text_field(wp_unslash($_POST['cf_turnstile_token']))
				: '';

			if ('' === $token) {
				return false;
			}

			$secret = $settings['turnstile_secret_key'];
			if ('' === $secret) {
				// Misconfigured — honour fail behaviour rather than hard-block.
				return 'fail_closed' !== $settings['captcha_fail_behaviour'];
			}

			$response = wp_remote_post(
				'https://challenges.cloudflare.com/turnstile/v0/siteverify',
				[
					'timeout' => 5,
					'body' => [
						'secret' => $secret,
						'response' => $token,
						'remoteip' => self::get_client_ip(),
					],
				]
			);

			if (is_wp_error($response) || 200 !== (int) wp_remote_retrieve_response_code($response)) {
				// Cloudflare unreachable — apply fail behaviour.
				return 'fail_closed' !== $settings['captcha_fail_behaviour'];
			}

			$body = wp_remote_retrieve_body($response);
			$result = json_decode($body, true);

			return is_array($result) && isset($result['success']) && true === $result['success'];
		}

		/**
		 * Resolve the client IP based on automatic detection (prioritizing CDN/proxy headers).
		 *
		 * @return string
		 */
		private static function get_client_ip(): string
		{
			if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
				return sanitize_text_field(wp_unslash($_SERVER['HTTP_CF_CONNECTING_IP']));
			}
			if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
				$forwarded = sanitize_text_field(wp_unslash($_SERVER['HTTP_X_FORWARDED_FOR']));
				return trim(explode(',', $forwarded)[0]);
			}
			return sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'] ?? ''));
		}

		/**
		 * Remaining TTL for a transient, falling back to the full window.
		 *
		 * @param string $transient_key  Transient name.
		 * @param int    $window_seconds Configured window length.
		 * @return int
		 */
		private static function get_transient_ttl(string $transient_key, int $window_seconds): int
		{
			$timeout = get_option('_transient_timeout_' . $transient_key);
			if ($timeout) {
				$remaining = (int) $timeout - time();
				if ($remaining > 0) {
					return $remaining;
				}
			}
			return $window_seconds;
		}

		/**
		 * Normalised spam protection settings with defaults applied.
		 *
		 * @return array
		 */
		public static function get_settings(): array
		{
			$saved = get_option('bplvf_feedback_settings', []);
			$spam = (is_array($saved) && isset($saved['spam_protection']) && is_array($saved['spam_protection']))
				? $saved['spam_protection']
				: [];

			return [
				'rate_limit_enabled' => $spam['rate_limit_enabled'] ?? true,
				'rate_limit_max' => (int) ($spam['rate_limit_max'] ?? 5),
				'rate_limit_window' => (int) ($spam['rate_limit_window'] ?? 3600),
				'rate_limit_message' => (string) ($spam['rate_limit_message'] ?? 'Too many submissions. Please try again later.'),
				'ip_source' => (string) ($spam['ip_source'] ?? 'REMOTE_ADDR'),
				'captcha_enabled' => (bool) ($spam['captcha_enabled'] ?? false),
				'turnstile_site_key' => (string) ($spam['turnstile_site_key'] ?? ''),
				'turnstile_secret_key' => (string) ($spam['turnstile_secret_key'] ?? ''),
				'captcha_mode' => (string) ($spam['captcha_mode'] ?? 'invisible'),
				'captcha_fail_behaviour' => (string) ($spam['captcha_fail_behaviour'] ?? 'fail_open'),
			];
		}

		/**
		 * Honeypot field name, stored in its own non-autoloaded option.
		 * Generated once on first access and kept stable thereafter.
		 *
		 * @return string
		 */
		public static function get_honeypot_field_name(): string
		{
			$name = get_option('bplvf_hp_field_name', '');

			if (empty($name)) {
				$suffixes = ['website', 'url', 'address', 'confirm', 'phone_number'];
				$name = 'bplvf_' . $suffixes[array_rand($suffixes)] . '_' . substr(md5(wp_generate_uuid4()), 0, 6);
				update_option('bplvf_hp_field_name', $name, false);
			}

			return $name;
		}
	}
}
