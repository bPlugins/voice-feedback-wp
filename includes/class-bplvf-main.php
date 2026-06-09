<?php

class BPLVoiceFeedback {

    public function __construct() {
        add_action('init', ['BPLVF_Ajax_Controller', 'init']);
        add_action('init', ['BPLVF_Shortcode', 'init']);
        add_action('plugins_loaded', [__CLASS__, 'load_dependencies']);

        // Load Admin Scripts
        add_action('admin_enqueue_scripts', [__CLASS__, 'load_admin_scripts']);

    }



    public static function load_dependencies() {
        require_once BPLVF_DIR_PATH . 'includes/admin/class-bplvf-admin.php';
        require_once BPLVF_DIR_PATH . 'includes/feature/class-bplvf-block.php';
        require_once BPLVF_DIR_PATH . 'includes/api/class-bplvf-ajax-controller.php';
        require_once BPLVF_DIR_PATH . 'includes/functions.php';
        require_once BPLVF_DIR_PATH . 'includes/api/class-bplvf-rest.php';
        require_once BPLVF_DIR_PATH . 'includes/feature/class-bplvf-handle-email-notification.php';
        require_once BPLVF_DIR_PATH . 'includes/feature/class-bplvf-handle-feedback-upload.php';
        require_once BPLVF_DIR_PATH . 'includes/feature/class-bplvf-shortcode.php'; 

        new BPLVF_Handle_Feedback_Upload();
    }

    public static function load_admin_scripts($screen) {
        wp_register_style(
            'bplvf-admin-style',
            false,
            [],
            BPLVF_VERSION
        );
        wp_enqueue_style( 'bplvf-admin-style' );
        $custom_css = "
            .fs-submenu-item.voice-feedback.pricing.upgrade-mode {
                background:  #268BF0;
                border-radius: 0;
                color: #fff;
                display: inline-block;
                padding: 6px 40px 6px 15px;
            }
        ";

         wp_add_inline_style( 'bplvf-admin-style', $custom_css );

        // Common data
        $localize_data = [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bplvf_nonce')
        ];

        if ("toplevel_page_voice-feedback" === $screen) {
            
            $feedbacks = get_posts([
                'post_type'      => 'voice_recording',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ]);

            $user_feedbacks = array_map(function($post) {
                $is_read = get_post_meta($post->ID, 'bplvf_read', true);
                $unread = ($is_read === '0' || (class_exists('AdminVoiceFeedback') && in_array($post->ID, AdminVoiceFeedback::$unread_feedback_ids)));
                
                $user_name = get_post_meta($post->ID, 'voice_user_name', true);
                $user_email = get_post_meta($post->ID, 'voice_user_email', true);
                $user_info = get_post_meta($post->ID, 'voice_user_info', true);
                
                if (empty($user_name) && !empty($user_info)) {
                    if (preg_match('/Display Name:\s*(.*)/i', $user_info, $matches)) {
                        $user_name = trim($matches[1]);
                    } elseif (preg_match('/Username:\s*(.*)/i', $user_info, $matches)) {
                        $user_name = trim($matches[1]);
                    }
                }
                if (empty($user_email) && !empty($user_info)) {
                    if (preg_match('/Email:\s*(.*)/i', $user_info, $matches)) {
                        $user_email = trim($matches[1]);
                    }
                }

                return [
                    'id'                    => $post->ID,
                    'source_page_title'     => get_post_meta($post->ID, 'source_page_title', true),
                    'source_page_url'       => get_post_meta($post->ID,'source_page_url', true),
                    'audioUrl'              => get_post_meta($post->ID, 'voice_file_url', true),
                    'resolved'              => (bool) get_post_meta($post->ID, 'isResolve', true),
                    'unread'                => $unread,
                    'createdAt'             => get_the_date('Y-m-d', $post),
                    'user_name'             => $user_name,
                    'user_email'            => $user_email,
                ];
            }, $feedbacks);


            wp_enqueue_script('bplvf-user-feedback-script', BPLVF_DIR_URL. 'build/user-feedback.js', ['react','react-dom','wp-components'], BPLVF_VERSION, true);
            wp_enqueue_style('bplvf-user-feedback-style', BPLVF_DIR_URL. 'build/user-feedback.css', [], BPLVF_VERSION);

            wp_localize_script('bplvf-user-feedback-script', 'bplvfUsersFeedback', [
                'ajaxUrl' => admin_url('admin-ajax.php'),
                'nonce'   => wp_create_nonce('bplvf_voice_feedback_nonce'),
                'feedbacks' => $user_feedbacks,
            ]);
        }

        if ("voice-feedback_page_all-voice-feedback" === $screen) {
            wp_enqueue_script('bplvf-all-voice-feedback-script', BPLVF_DIR_URL. 'build/all-feedbacks.js', ['react','react-dom','wp-components'], BPLVF_VERSION, true);
            wp_enqueue_style('bplvf-all-voice-feedback-style', BPLVF_DIR_URL. 'build/all-feedbacks.css', [], BPLVF_VERSION);
    
            wp_localize_script('bplvf-all-voice-feedback-script', 'bplvfSettings', ['nonce'   => wp_create_nonce('wp_rest')]);
        }
    
        if ("voice-feedback_page_global-feedback-settings" === $screen) {
            wp_enqueue_script('bplvf-voice-feedback-settings-script', BPLVF_DIR_URL . 'build/settings.js', ['react', 'react-dom','wp-components'], BPLVF_VERSION, true);
            wp_enqueue_style('bplvf-voice-feedback-settings-style', BPLVF_DIR_URL . 'build/settings.css', [], BPLVF_VERSION);

            wp_localize_script('bplvf-voice-feedback-settings-script', 'bplvfSettings', ['nonce'   => wp_create_nonce('wp_rest')]);
        }

        if ("voice-feedback_page_bplvf-dashboard" === $screen) {
            $asset_file = include BPLVF_DIR_PATH . 'build/admin-dashboard.asset.php';
            wp_enqueue_script('bplvf-dashboard-script', BPLVF_DIR_URL . 'build/admin-dashboard.js', array_merge($asset_file['dependencies'], ['wp-util']), BPLVF_VERSION, true);
            wp_enqueue_style('bplvf-dashboard-style', BPLVF_DIR_URL . 'build/admin-dashboard.css', [], BPLVF_VERSION);
        }

        if ("voice-feedback_page_bplvf-global-settings" === $screen) {
            wp_enqueue_script('bplvf-feedback-settings-script', BPLVF_DIR_URL. 'build/feedback-settings.js', ['react','react-dom','wp-components'], BPLVF_VERSION, true);
            wp_enqueue_style('bplvf-feedback-settings-style', BPLVF_DIR_URL. 'build/feedback-settings.css', [], BPLVF_VERSION);
    
            wp_localize_script('bplvf-feedback-settings-script', 'bplvfSettings', ['nonce'   => wp_create_nonce('wp_rest')]);
        }
    }

}