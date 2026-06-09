<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if (!class_exists('BPLVFPlugin')) {

	class BPLVFPlugin {

		public function __construct() {
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
			
			wp_localize_script('bplvf-voice-feedback-view-script', 'voiceRecorder', [
				'ajaxUrl' => admin_url('admin-ajax.php'),
				'nonce' => wp_create_nonce('voice_feedback_nonce'),
				'source_page' => $title,
				'source_url'  => $current_url,
				'ask_name_email' => $ask_name_email
			]);
			wp_localize_script('bplvf-voice-feedback-editor-script', 'voiceRecorder', [
				'ajaxUrl' => admin_url('admin-ajax.php'),
				'nonce' => wp_create_nonce('voice_feedback_nonce'),
				'source_page' => $title,
				'source_url'  => $current_url,
				'ask_name_email' => $ask_name_email
			]);
		}

		public function onInit() {
			register_block_type(BPLVF_DIR_PATH . 'build/block');
		}
	}
	new BPLVFPlugin();
}
