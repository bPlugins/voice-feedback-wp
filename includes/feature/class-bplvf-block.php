<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if (!class_exists('BPLVFPlugin')) {

	class BPLVFPlugin {

		function __construct() {
			add_action('init', [$this, 'onInit']);
			add_action('enqueue_block_assets', [$this, 'load_block_scripts']);
		}

		public static function load_block_scripts() {
			$title = '';
			$id = '';
			$blog_page_id = get_option( 'page_for_posts' );
			if ( $blog_page_id ) {
				$id =  $blog_page_id;
				$title = get_the_title( $blog_page_id );
			}else{
				$id = get_the_ID();
				$title = get_the_title( get_the_ID() );
			}
			
			global $wp;
			$current_url = home_url(add_query_arg([], $wp->request));
			
			$global_settings = get_option('bplvf_feedback_settings', []);
			$ask_name_email = isset($global_settings['privacy']['ask_name_email']) ? (bool) $global_settings['privacy']['ask_name_email'] : false;

			$spam_settings = class_exists('BPLVF_Spam_Protection') ? BPLVF_Spam_Protection::get_settings() : [];
			$captcha_enabled = ! empty($spam_settings['captcha_enabled']);

			$recorder_data = [
				'ajaxUrl' => admin_url('admin-ajax.php'),
				'nonce' => wp_create_nonce('voice_feedback_nonce'),
				'source_page' => $title,
				'source_url'  => $current_url,
				'ask_name_email' => $ask_name_email,
				// Spam protection — secret key is never exposed here.
				'hp_field_name'   => class_exists('BPLVF_Spam_Protection') ? BPLVF_Spam_Protection::get_honeypot_field_name() : '',
				'captcha_enabled' => $captcha_enabled,
				'captcha_site_key' => $captcha_enabled ? ($spam_settings['turnstile_site_key'] ?? '') : '',
				'captcha_mode' => $captcha_enabled ? ($spam_settings['captcha_mode'] ?? 'invisible') : 'invisible',
			];

			wp_localize_script('bplvf-voice-feedback-view-script', 'voiceRecorder', $recorder_data);
			wp_localize_script('bplvf-voice-feedback-editor-script', 'voiceRecorder', $recorder_data);

			wp_add_inline_script(
				'bplvf-voice-feedback-editor-script',
				'const bplvfIsPipeChecker = ' . wp_json_encode( bplvf()->can_use_premium_code() ) . ';',
				'before'
			);
		}

		public function onInit() {
			register_block_type(BPLVF_DIR_PATH . 'build/block');
		}
	}
	new BPLVFPlugin();
}
