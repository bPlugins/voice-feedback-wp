<?php
if (!defined('ABSPATH')) exit;

if (!class_exists('BPLVF_Handle_Email_Notification')) {

    class BPLVF_Handle_Email_Notification {

        private static $option_key = 'bplvf_feedback_settings';

        // Make this PUBLIC so other classes can set it (wp_mail_failed handler sets it).
        public static $mail_error = '';

        public static function handle($args) {

            $settings = get_option(self::$option_key);
            $email = $settings['email'];
			
			if ( empty($email['enabled']) ) {
				return;
			}

            // Validate array keys to avoid notices
            $audio_url  = isset($args['audio_url']) ? $args['audio_url'] : '';
            $page_title = isset($args['page_title']) ? $args['page_title'] : '';
            $page_url   = isset($args['page_url']) ? $args['page_url'] : '';
            // $duration   = isset($args['duration']) ? $args['duration'] : '';
            $ip         = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : '';
            $agent      = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) : '';
            $timestamp  = current_time('mysql');

            // Replacement tags
            $replacements = [
                '{page_title}' => $page_title,
                '{page_url}'   => $page_url,
                '{audio_link}' => $audio_url,
                '{ip}'         => $ip,
                '{agent}'      => $agent,
                // '{duration}'   => $duration,
                '{datetime}'   => $timestamp,
                '{user_name}'  => isset($args['user_name']) ? $args['user_name'] : '',
                '{user_email}' => isset($args['user_email']) ? $args['user_email'] : '',
            ];

            // Determine recipient
            if(!empty($email['send_to']) && $email['send_to'] === 'admin')  {
                $recipient = get_option('admin_email');
            } else {
                $custom = !empty($email['custom_email']) ? $email['custom_email'] : '';
                $emails = array_map('trim', explode(',', $custom));
                $valid_emails = [];

                // Validate Email Format
                foreach ($emails as $mail) {
                    if (is_email($mail)) {
                        $valid_emails[] = $mail;
                    }
                }

                $recipient = !empty($valid_emails) ? $valid_emails : get_option('admin_email');
            }

            // Compose subject/body
            $subject = !empty($email['subject']) ? strtr($email['subject'], $replacements) : 'New Voice Feedback';
            $body_template = !empty($email['body_template']) ? $email['body_template'] : "You received a new voice feedback.\n\nPage: {page_url}\nIP: {ip}\nListen: {audio_link}";

            $body = wpautop(strtr($body_template, $replacements));

            $headers = [
                'Content-Type: text/html; charset=UTF-8',
                'From: Voice Feedback <no-reply@' . wp_parse_url(home_url(), PHP_URL_HOST) . '>',
            ];

            $attachments = [];

            // Attach or link audio
            if ( ! empty($email['attach_feedback']) && ! empty($audio_url) ) {
                $tmp = self::download_for_attachment($audio_url);
                if ($tmp) $attachments[] = $tmp;
            }

            // Send email
            $sent = wp_mail($recipient, $subject, $body, $headers, $attachments);

            // // Logging
            // if (!empty($email['enable_logging'])) {

            //     $log = [
            //         'status'    => $sent ? 'sent' : 'failed',
            //         'timestamp' => $timestamp,
            //         'error'     => $sent ? '' : (self::$mail_error ? self::$mail_error : 'Unknown error'),
            //         'audio'     => $audio_url,
            //         'page_url'  => $page_url,
            //         'duration'  => $duration,
            //         'ip'        => $ip,
            //         'agent'     => $agent,
            //     ];

            //     if (!isset($settings['email_logs']) || !is_array($settings['email_logs'])) {
            //         $settings['email_logs'] = [];
            //     }

            //     array_unshift($settings['email_logs'], $log);
            //     $settings['email_logs'] = array_slice($settings['email_logs'], 0, 100);

            //     update_option(self::$option_key, $settings);
            // }

            // Cleanup attachment temp file if downloaded
            if (isset($tmp) && is_file($tmp)) {
                $tmp_dir = sys_get_temp_dir();
                if (strpos(realpath($tmp), realpath($tmp_dir)) === 0) {
                    @wp_delete_file($tmp);
                } else {
                    @wp_delete_file($tmp);
                }
            }
        }

        /** Download audio temporarily for attachment */
        private static function download_for_attachment($url) {
            if (empty($url)) {
                return false;
            }

            // Download file using WP core function
            $tmp = download_url($url, 30);

            if (is_wp_error($tmp)) {
                self::$mail_error = $tmp->get_error_message();
                return false;
            }

            // Ensure file has extension
            $ext = pathinfo(wp_parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
            if ($ext) {
                $new_tmp = $tmp . '.' . $ext;
                global $wp_filesystem;
                if (empty($wp_filesystem)) {
                    require_once ABSPATH . 'wp-admin/includes/file.php';
                    WP_Filesystem();
                }
                if ($wp_filesystem && $wp_filesystem->move($tmp, $new_tmp)) {
                    return $new_tmp;
                }
                // phpcs:ignore WordPress.WP.AlternativeFunctions.rename_rename
                if (rename($tmp, $new_tmp)) {
                    return $new_tmp;
                }
                return false;
            }

            return $tmp;
        }
    }
}
