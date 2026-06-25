<?php
/**
 * Plugin Name:   Voice Feedback – Collect Anonymous Voice Messages & Real User Insights Instantly
 * Description:   Send Voice feedback to the site admin on the go. User can embed the voice feedback form in the contact form by shortcode. 
 * Version:       2.2.4
 * Author:        bPlugins
 * Author URI:    https://bplugins.com
 * License:       GPLv3
 * License URI:   https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:   voice-feedback
 * Domain Path:   /languages
 */

 if (! defined('ABSPATH')) exit; // Exit if accessed directly
 

if ( function_exists( 'bplvf' ) ) {
    bplvf()->set_basename( true, __FILE__ );
} else {
    define('BPLVF_DIR_PATH', plugin_dir_path(__FILE__));
    define('BPLVF_DIR_URL', plugin_dir_url(__FILE__));
    define('BPLVF_VERSION', "2.2.4");

    if ( ! function_exists( 'bplvf' ) ) {
        // Create a helper function for easy SDK access.
        function bplvf() {
            global $bplvf;
    
            if ( ! isset( $bplvf ) ) {
                // Include Freemius SDK.
                require_once dirname(__FILE__) . '/vendor/freemius/start.php';

                 $bplvf = fs_dynamic_init( array(
                    'id'                  => '19712',
                    'slug'                => 'voice-feedback',
                    'premium_slug'        => 'voice-feedback-pro',
                    'type'                => 'plugin',
                    'public_key'          => 'pk_e2acd90aa2e40812def1d0880deae',
                    'is_premium'          => false,
                    'premium_suffix'      => 'Pro',
                    // If your plugin is a serviceware, set this option to false.
                    'has_premium_version' => true,
                    'has_addons'          => false,
                    'has_paid_plans'      => true,
                    'has_affiliation'     => 'selected',
                    'menu'                => array(
                        'slug'           => 'voice-feedback',
                        'first-path'     => 'admin.php?page=bplvf-dashboard',
                        'contact'        => false,
                        'support'        => false,
                        'affiliation'    => false,
                    ),
                ) );
            }
    
            return $bplvf;
        }
    
        // Init Freemius.
        bplvf();
        // Signal that SDK was initiated.
        do_action( 'bplvf_loaded' );
    }

    // Load Main Plugin Class
    require_once BPLVF_DIR_PATH . 'includes/class-bplvf-main.php';
    new BPLVF_VoiceFeedback();

    add_action('wp_mail_failed', function ($error) {
        if (is_wp_error($error)) {
            BPLVF_Handle_Email_Notification::$mail_error = $error->get_error_message();
            // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- Log email failure details for administrative troubleshooting.
            error_log('BPLVF MAIL FAILED: ' . $error->get_error_message());
        }
    });

    

}

