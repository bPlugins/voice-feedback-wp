<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class AdminVoiceFeedback {

    public static $unread_feedback_ids = [];

    public function __construct() {
        add_action('admin_menu', [__CLASS__, 'register_admin_menu']);
    }
    
 
    public static function register_admin_menu() {
        // Mark all as read if we are visiting the feedback page
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        if ( current_user_can( 'manage_options' ) && isset( $_GET['page'] ) && $_GET['page'] === 'voice-feedback' ) {
            $unread_posts = get_posts([
                'post_type'      => 'voice_recording',
                'post_status'    => 'publish',
                'posts_per_page' => -1,
                'fields'         => 'ids',
                // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
                'meta_query'     => [
                    [
                        'key'     => 'bplvf_read',
                        'value'   => '0',
                        'compare' => '='
                    ]
                ]
            ]);
            self::$unread_feedback_ids = is_array( $unread_posts ) ? $unread_posts : [];

            if ( function_exists( 'bplvf_mark_all_feedback_as_read' ) ) {
                bplvf_mark_all_feedback_as_read();
            }
        }

        $unread_count = function_exists( 'bplvf_get_unread_feedback_count' ) ? bplvf_get_unread_feedback_count() : 0;
        $badge = '';
        if ( $unread_count > 0 ) {
            $badge = sprintf( ' <span class="awaiting-mod count-%d"><span class="pending-count">%d</span></span>', $unread_count, $unread_count );
        }

        // Top-level menu: Voice Feedback
        add_menu_page(
            'Voice Feedback',              
            'Voice Feedback' . $badge,             
            'manage_options',                
            'voice-feedback',               
            [__CLASS__, 'render_users_feedbacks_page'], 
            'dashicons-microphone',          
            25    
        );

        // Submenu: User Feedback
        add_submenu_page(
            'voice-feedback',
            'All Feedback', 
            'All Feedback' . $badge, 
            'manage_options', 
            'voice-feedback', 
            [__CLASS__, 'render_users_feedbacks_page']
        );
        
        // Submenu: Add New Feedback
        add_submenu_page(
            'voice-feedback',
            'Add New Feedback',
            'Add New Feedback',
            'manage_options',
            'all-voice-feedback',
            [__CLASS__, 'render_all_voice_feedback_page']
        );

        // Submenu: Global Feedback Templates
        add_submenu_page(
            'voice-feedback',
            'Voice Setting',
            'Global Feedback Templates',
            'manage_options',
            'global-feedback-settings',
            [__CLASS__, 'render_global_settings_page']
        );

        // Submenu: Feedback Settings
        add_submenu_page(
            'voice-feedback',
            'Settings',
            'Settings',
            'manage_options',
            'bplvf-global-settings',
            [__CLASS__, 'render_feedback_settings_page']
        );

        // Submenu: Demo & Help
         add_submenu_page(
            'voice-feedback',
            'Help & Demos',
            __('<span style="color: #f18500;">Help & Demos</span>', "voice-feedback"),   
            'manage_options',
            'bplvf-dashboard',
            [__CLASS__,'render_dashboard_page']
        );
    }

    public static function render_dashboard_page() {
        ?>
        <div id="bplvfAdminDashboardPageWrapper"
        data-info='<?php echo esc_attr( wp_json_encode( [
					'version'    => BPLVF_VERSION, 
					'adminUrl'   => admin_url()
				] ) ); ?>'
        ></div>
        <?php
    }

    // Users Feedback Page
    public static function render_users_feedbacks_page() {
    ?>
        <style>
            #wpcontent {
                padding: 0 !important;
            }
        </style>
        <div
           class="vfd-settings-page-wrapper" id="vfdUsersFeedbacksWrapper"
           data-admin-url="<?php echo esc_url( admin_url() ); ?>"
           data-user="<?php echo esc_url( get_avatar_url( get_current_user_id(), [ 'size' => 32 ] ) ); ?>"
        >
        </div>
    <?php
    }

    // Start Global Voice Feedback Page
    public static function render_global_settings_page() {
        ?>
          <style>
            #wpcontent {
                padding: 0 !important;
            }
          </style>
          <div class="vfd-settings-page-wrapper" 
             id="vfdSettingsWrapper"
             data-info='<?php echo esc_attr( wp_json_encode( [
                  'adminUrl' => admin_url(),
              ] ) ); ?>'>
          </div>
        <?php
      }
    
    // All Voice Feedback
    public static function render_all_voice_feedback_page() {
        ?>
        <style>
            #wpcontent {
                padding: 0 !important;
            }
        </style>
        <div
           id="allFeedbackPageWrapper" 
           data-info='<?php echo esc_attr( wp_json_encode( [
                'adminUrl' => admin_url(),
            ] ) ); ?>'>
        </div>
        <?php
    }

    // Feedback Settings
    public static function render_feedback_settings_page() {
        ?>
          <style>
            #wpcontent {
                padding: 0 !important;
            }
          </style>
          <div class="vfd-settings-page-wrapper" 
             id="bplvfFeedbackSettingsWrapper"
             data-user="<?php echo esc_url( get_avatar_url( get_current_user_id(), [ 'size' => 32 ] ) ); ?>"
             data-info='<?php echo esc_attr( wp_json_encode( [
                'adminUrl' => admin_url(),
            ] ) ); ?>'>
          </div>
        <?php
      }

}
new AdminVoiceFeedback();
