<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if(!class_exists('BPLVF_Handle_Feedback_Upload')) {
    class BPLVF_Handle_Feedback_Upload {

        public function __construct() {
            // Actions For Voice Feedback Upload
            add_action('wp_ajax_nopriv_save_audio', [__CLASS__, 'voice_feedback_handle_upload']);
            add_action('wp_ajax_save_audio', [__CLASS__, 'voice_feedback_handle_upload']);
        }
        
        public static function voice_feedback_handle_upload() {
            if ( !isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'voice_feedback_nonce') ) {
                wp_send_json_error('Invalid nonce.');
            }
        
            $page_title = isset($_POST['sourcePage']) ? sanitize_text_field(wp_unslash($_POST['sourcePage'])) : '';
            $page_url = isset($_POST['sourceUrl']) ? esc_url_raw(wp_unslash($_POST['sourceUrl'])) : '';
            $user_name = isset($_POST['userName']) ? sanitize_text_field(wp_unslash($_POST['userName'])) : '';
            $user_email = isset($_POST['userEmail']) ? sanitize_email(wp_unslash($_POST['userEmail'])) : '';
            // $feedback_duration = isset($_POST['feedback_duration']) ? filter_var($_POST['feedback_duration'], FILTER_SANITIZE_NUMBER_INT) : '';
        
            if (!isset($_FILES['audio']) || !isset($_FILES['audio']['error']) || (int) $_FILES['audio']['error'] !== UPLOAD_ERR_OK) {
                wp_send_json_error('No audio file uploaded or file error.');
            }
        
            // Use the raw $_FILES array values — do NOT sanitize tmp_name
            $file = [
                'name'     => isset($_FILES['audio']['name']) ? sanitize_file_name(wp_unslash($_FILES['audio']['name'])) : '',
                'type'     => isset($_FILES['audio']['type']) ? sanitize_text_field(wp_unslash($_FILES['audio']['type'])) : '',
                'tmp_name' => isset($_FILES['audio']['tmp_name']) ? sanitize_text_field(wp_unslash($_FILES['audio']['tmp_name'])) : '',
                'error'    => (int) $_FILES['audio']['error'],
                'size'     => isset($_FILES['audio']['size']) ? (int) $_FILES['audio']['size'] : 0,
            ];
        
            // Validate extension + mime using WP helper (safer)
            $check = wp_check_filetype_and_ext($file['tmp_name'], $file['name']);
            $ext = $check['ext'];
            $type = $check['type'];
        
            $allowed_exts = array('mp3','wav','webm','ogg','m4a');
            if (empty($ext) || ! in_array(strtolower($ext), $allowed_exts, true)) {
                wp_send_json_error('Invalid audio file type.');
            }
        
            // Use wp_handle_upload; allow webm mapping if needed
            $upload_overrides = array(
                'test_form' => false,
            );
        
            require_once ABSPATH . 'wp-admin/includes/file.php';
            $uploaded = wp_handle_upload($file, $upload_overrides);
        
            if (isset($uploaded['file'])) {
                $file_url = esc_url($uploaded['url']);
        
                // User info
                if (!empty($user_name) || !empty($user_email)) {
                    $user_info = sprintf(
                        "Name: %s\nEmail: %s\nGuest IP: %s\nUser Agent: %s",
                        $user_name,
                        $user_email,
                        sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'] ?? 'N/A')),
                        sanitize_text_field(wp_unslash($_SERVER['HTTP_USER_AGENT'] ?? 'N/A'))
                    );
                } elseif (is_user_logged_in()) {
                    $current_user = wp_get_current_user();
                    $user_info = sprintf(
                        "Username: %s\nEmail: %s\nUser ID: %d\nDisplay Name: %s",
                        $current_user->user_login,
                        $current_user->user_email,
                        $current_user->ID,
                        $current_user->display_name
                    );
                } else {
                    $user_info = sprintf(
                        "Guest IP: %s\nUser Agent: %s",
                        sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'] ?? 'N/A')),
                        sanitize_text_field(wp_unslash($_SERVER['HTTP_USER_AGENT'] ?? 'N/A'))
                    );
                }
        
                // ensure post title exists
                $post_title = $page_title ?: 'Voice Feedback - ' . current_time('Y-m-d H:i:s');
        
                // Insert custom post with title and current time
                $post_id = wp_insert_post(array(
                    'post_title'     => $post_title,
                    'post_type'      => 'voice_recording',
                    'post_status'    => 'publish',
                    'post_date'      => current_time('mysql'),
                    'post_date_gmt'  => current_time('mysql', 1),
                ));
        
                if (!is_wp_error($post_id) && $post_id) {
                    update_post_meta($post_id, 'voice_file_url', $file_url);
                    // update_post_meta($post_id, 'feedback_duration', $feedback_duration);
                    update_post_meta($post_id, 'voice_user_info', sanitize_textarea_field($user_info));
                    update_post_meta($post_id, 'voice_user_name', sanitize_text_field($user_name));
                    update_post_meta($post_id, 'voice_user_email', sanitize_email($user_email));
                    update_post_meta($post_id, 'isResolve', false);
                    update_post_meta($post_id, 'bplvf_read', 0);
                    update_post_meta($post_id, 'source_page_title', sanitize_text_field($page_title));
                    update_post_meta($post_id, 'source_page_url', esc_url_raw($page_url));
        
                    // Process feedback email + logs
                    BPLVF_Handle_Email_Notification::handle([
                        'audio_url'  => $file_url,
                        'page_title' => $page_title,
                        'page_url'   => $page_url,
                        'user_name'  => $user_name,
                        'user_email' => $user_email,
                        // 'duration'   => $feedback_duration,
                    ]);

                   
                    wp_send_json_success('Audio saved and added to voice library.');
                } else {
                    wp_send_json_error(is_wp_error($post_id) ? $post_id->get_error_message() : 'Failed to create post.');
                }
            } else {
                wp_send_json_error('Failed to upload audio.');
            }
        
            wp_die();
        }
        


    }
}