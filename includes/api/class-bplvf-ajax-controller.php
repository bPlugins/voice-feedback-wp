<?php
if(!defined('ABSPATH')) exit;


if(!class_exists('BPLVF_Ajax_Controller')) {

    class BPLVF_Ajax_Controller {
        const GLOBAL_KEY = 'global_voice_feedback';

        public static function init() {
            add_action('wp_ajax_bplvf_save_global', [__CLASS__, 'handle_save_global']);
            add_action('wp_ajax_bplvf_get_global', [__CLASS__, 'handle_get_global']);
            add_action('wp_ajax_bplvf_toggle_resolved', [__CLASS__, 'handle_toggle_resolve']);
            add_action('wp_ajax_bplvf_delete_user_feedback', [__CLASS__, 'handle_delete_user_feedback']);
        }

        // Save or Update Global
        public static function handle_save_global() {
            check_ajax_referer('bplvf_nonce', 'nonce');
            // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Decoded settings array is recursively sanitized below using self::sanitize_recursive.
            $settings_raw = isset($_POST['settings']) ? wp_unslash($_POST['settings']) : '[]';
            $settings = json_decode($settings_raw, true);
            if (!is_array($settings)) {
                wp_send_json_error(['message' => 'Invalid data']);
            }
            $settings = self::sanitize_recursive($settings);
            update_option(self::GLOBAL_KEY, $settings);
            wp_send_json_success(['message' => 'Global settings saved']);
        }
        
        // Get Global
        public static function handle_get_global() {
            check_ajax_referer('bplvf_nonce', 'nonce');
            $settings = get_option('global_voice_feedback', []);
            wp_send_json_success(['settings' => $settings]);
        }

        // Toggle Feedback isResolved
        public static function handle_toggle_resolve() {
            check_ajax_referer('bplvf_voice_feedback_nonce', 'nonce');
        
            $id = isset($_POST['id']) ? intval(wp_unslash($_POST['id'])) : 0;
            if (!$id) {
                wp_send_json_error();
            }
        
            $current_value = get_post_meta($id, 'isResolve', true);
            $new_value = $current_value ? 0 : 1;
            update_post_meta($id, 'isResolve', $new_value);
        
            wp_send_json_success();
        }
    
        // Delete Feedback
        public static function handle_delete_user_feedback() {
            check_ajax_referer('bplvf_voice_feedback_nonce', 'nonce');
        
            $id = isset($_POST['id']) ? intval(wp_unslash($_POST['id'])) : 0;
            if (!$id) {
                wp_send_json_error();
            }
        
            $deleted = wp_delete_post($id, true);
            if ($deleted) {
                wp_send_json_success();
            } else {
                wp_send_json_error();
            }
        }

        /**
         * Recursively sanitize values
         */
        private static function sanitize_recursive($data) {
            if (is_array($data)) {
                foreach ($data as $key => $value) {
                    $data[$key] = self::sanitize_recursive($value);
                }
                return $data;
            }

            if (is_bool($data) || is_numeric($data)) {
                return $data;
            }

            return sanitize_text_field($data);
        }
    }
}