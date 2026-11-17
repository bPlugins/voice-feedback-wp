<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! class_exists( '\BPLVF_PromoBanner' ) ) {

    class BPLVF_PromoBanner {
        const DISMISSED_KEY   = 'bplvf_promo_banner_dismissed_v5';
        const EXPIRATION_DATE = '2026-12-05 23:59:59';
        const COUPON_URL      = 'https://bplugins.com/products/voice-feedback/pricing/?utm_source=admin&utm_medium=dashboard&utm_campaign=bfcm2026';
        private static $rendered = false;

        public function __construct() {
            add_action( 'in_admin_header',                    [ $this, 'render_banner' ], 20 );
            add_action( 'admin_notices',                      [ $this, 'render_banner' ], 9999 );
            add_action( 'all_admin_notices',                  [ $this, 'render_banner' ], 9999 );

            add_action( 'admin_head',                         [ $this, 'enqueue_styles' ] );
            add_action( 'admin_footer',                       [ $this, 'enqueue_scripts' ] );
            add_action( 'wp_ajax_bplvf_dismiss_promo_banner',  [ $this, 'ajax_dismiss' ] );

            // Add promotional offer link to plugin action links on plugins.php
            $plugin_file = defined('BPLVF_DIR_PATH') ? plugin_basename(BPLVF_DIR_PATH . 'voice-feedback.php') : 'voice-feedback/voice-feedback.php';
            add_filter( "plugin_action_links_{$plugin_file}",               [ $this, 'add_plugin_action_link' ], 20 );
            add_filter( "network_admin_plugin_action_links_{$plugin_file}", [ $this, 'add_plugin_action_link' ], 20 );
      
        }




        private function is_target_screen(): bool {
            global $pagenow;

            if ( isset( $_GET['bplvf_show_banner'] ) ) {
                return true;
            }
            
            if ( isset( $_GET['page'] ) ) {
                $page = sanitize_key( $_GET['page'] );
                if (
                    strpos( $page, 'voice-feedback' ) !== false ||
                    strpos( $page, 'all-voice-feedback' ) !== false ||
                    strpos( $page, 'global-feedback-settings' ) !== false ||
                    strpos( $page, 'bplvf-global-settings' ) !== false ||
                    strpos( $page, 'bplvf-dashboard') !== false
                ) {
                    return true;
                }
            }

            // 3. Screen object detection
            $screen = get_current_screen();
            if ( $screen ) {
                $id   = $screen->id ?? '';
                $base = $screen->base ?? '';
                
                if ( 'dashboard' === $id || 'dashboard' === $base ) {
                    return true;
                }

                if ( isset( $screen->post_type ) && 'ppt_viewer' === $screen->post_type ) {
                    return true;
                }

                if (
                    strpos( $id, 'officeviewer' ) !== false ||
                    strpos( $base, 'officeviewer' ) !== false ||
                    strpos( $base, 'officeviewer' ) !== false
                ) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Check if current date is past December 5, 2026
         */
        private function is_expired(): bool {
            $expiry_timestamp = strtotime( self::EXPIRATION_DATE );
            $current_time     = time();
            return ( $current_time > $expiry_timestamp );
        }

        /**
         * Check if current user has permanently dismissed the banner
         */
        private function is_dismissed(): bool {
            if ( isset( $_GET['bplvf_show_banner'] ) ) {
                return false;
            }
            return (bool) get_user_meta( get_current_user_id(), self::DISMISSED_KEY, true );
        }

        /**
         * Determine if the banner should be omitted
         */
        private function should_skip(): bool {
            if ( ! $this->is_target_screen() ) {
                return true;
            }
            
            if ( $this->is_expired() ) {
                return true;
            }
            if ( $this->is_dismissed() ) {
                return true;
            }

            return false;
        }

        /* ------------------------------------------------------------------ */
        /*  Pro CSS Styles (Design 5)                                         */
        /* ------------------------------------------------------------------ */

        public function enqueue_styles(): void {
            if ( $this->should_skip() ) { return; }
            ?>
            <style id="bplvf-promo-banner-css">
            #bplvf-promo-banner,
            .bplvf-promo-banner-wrap {
                --bpl-primary:        #2690F0;
                --bpl-primary-hover:  #237bcdff;
                --bpl-secondary:      #ff7a00;
                --bpl-dark:           #070127;
                --bpl-text:           #1b2e4b;
                --bpl-muted:          #475569;

                display: flex !important;
                position: relative !important;
                top: auto !important;
                left: auto !important;
                width: auto !important;
                height: auto !important;
                min-height: 84px !important;
                opacity: 1 !important;
                visibility: visible !important;
                background: #ffffff !important;
                border: 1px solid #cbd5e1 !important;
                border-radius: 0 !important;
                box-shadow: 0 3px 12px rgba(7, 1, 39, 0.05) !important;
                align-items: stretch !important;
                overflow: hidden !important;
                margin: 16px 20px 16px 20px !important;
                padding: 0 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
                box-sizing: border-box !important;
                z-index: 9999 !important;
                animation: bplvfBannerSlide .3s ease both;
            }
            @keyframes bplvfBannerSlide {
                from { opacity: 0; transform: translateY(-6px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            /* Left Brand Ribbon Block */
            #bplvf-promo-banner .bplvf-brand-ribbon {
                width: 140px;
                min-width: 140px;
                background: linear-gradient(135deg, var(--bpl-primary) 0%, var(--bpl-dark) 100%);
                color: #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 12px 10px;
                gap: 6px;
                flex-shrink: 0;
            }
            #bplvf-promo-banner .bplvf-brand-ribbon img {
                width: 38px;
                height: 38px;
                object-fit: contain;
                filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.35));
            }
            #bplvf-promo-banner .bplvf-brand-ribbon .bplvf-ribbon-title {
                font-size: 10.5px;
                font-weight: 800;
                letter-spacing: .7px;
                text-transform: uppercase;
                color: #ffffff;
                text-align: center;
                line-height: 1.2;
            }

            /* Main Content Zone */
            #bplvf-promo-banner .bplvf-content-zone {
                flex: 1;
                padding: 14px 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                flex-wrap: wrap;
                padding-right: 38px;
            }

            /* Left Text Stack */
            #bplvf-promo-banner .bplvf-text-stack {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            #bplvf-promo-banner .bplvf-headline {
                font-size: 14px;
                font-weight: 700;
                color: var(--bpl-dark);
                display: flex;
                align-items: center;
                gap: 8px;
                margin: 0;
                line-height: 1.3;
            }
            #bplvf-promo-banner .bplvf-discount-chip {
                background: #ffedd5;
                color: #c2410c;
                border: 1px solid #fed7aa;
                font-size: 11px;
                font-weight: 700;
                padding: 2px 8px;
                border-radius: 0;
                letter-spacing: .2px;
            }

            /* Feature Checklist */
            #bplvf-promo-banner .bplvf-feature-chips {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 12px;
                color: var(--bpl-muted);
                flex-wrap: wrap;
            }
            #bplvf-promo-banner .bplvf-feature-chips span {
                display: inline-flex;
                align-items: center;
                gap: 4px;
            }
            #bplvf-promo-banner .bplvf-feature-chips .check-icon {
                color: #10b981;
                font-weight: 800;
            }

            /* CTA Action Button */
            #bplvf-promo-banner .bplvf-btn-cta {
                background: var(--bpl-primary);
                color: #ffffff !important;
                padding: 9px 20px;
                border-radius: 0;
                font-size: 12.5px;
                font-weight: 600;
                text-decoration: none !important;
                box-shadow: 0 2px 8px rgba(20, 110, 245, 0.32);
                transition: background-color .15s ease, transform .15s ease, box-shadow .15s ease;
                white-space: nowrap;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            #bplvf-promo-banner .bplvf-btn-cta:hover {
                background: var(--bpl-primary-hover);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(20, 110, 245, 0.45);
            }

            /* Dismiss Button (×) */
            #bplvf-promo-banner .bplvf-banner-dismiss-btn {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                cursor: pointer;
                color: #94a3b8;
                font-size: 20px;
                line-height: 1;
                padding: 6px;
                transition: color .15s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
            }
            #bplvf-promo-banner .bplvf-banner-dismiss-btn:hover {
                color: var(--bpl-dark);
            }

            /* Responsive */
            @media (max-width: 960px) {
                #bplvf-promo-banner .bplvf-brand-ribbon {
                    width: 110px;
                    min-width: 110px;
                }
            }
            @media (max-width: 782px) {
                #bplvf-promo-banner,
                .bplvf-promo-banner-wrap {
                    flex-direction: column !important;
                    align-items: stretch !important;
                    margin: 12px 10px 14px 10px !important;
                }
                #bplvf-promo-banner .bplvf-brand-ribbon {
                    width: 100%;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 8px 16px;
                }
                #bplvf-promo-banner .bplvf-content-zone {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 14px 16px;
                }
            }
            </style>
            <?php
        }

        public function enqueue_scripts(): void {
            if ( $this->should_skip() ) { return; }
            $dismiss_nonce = wp_create_nonce( 'bplvf_dismiss_promo' );
            $ajax_url      = admin_url( 'admin-ajax.php' );
            ?>
            <script id="bplvf-promo-banner-js">
            (function () {
              
                function positionBanner() {
                    var banner = document.getElementById('bplvf-promo-banner');
                    if (!banner) return;

                    var dashboardEl = document.getElementById('bplvfAdminDashboard') || document.getElementById('bplvfAnalyticsPage');
                    if (dashboardEl && banner.nextElementSibling !== dashboardEl && banner.parentElement !== dashboardEl.parentElement) {
                        dashboardEl.parentElement.insertBefore(banner, dashboardEl);
                    }
                }

                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', positionBanner);
                } else {
                    positionBanner();
                }

                // Handle permanent dismiss
                var btn = document.getElementById('bplvf-banner-close');
                if (!btn) return;
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    var banner = document.getElementById('bplvf-promo-banner');
                    if (banner) {
                        banner.style.transition = 'opacity .25s ease, transform .25s ease';
                        banner.style.opacity    = '0';
                        banner.style.transform  = 'translateY(-6px)';
                        setTimeout(function() { banner.remove(); }, 260);
                    }
                    var fd = new FormData();
                    fd.append('action', 'bplvf_dismiss_promo_banner');
                    fd.append('nonce',  '<?php echo esc_js( $dismiss_nonce ); ?>');
                    fetch('<?php echo esc_url( $ajax_url ); ?>', {
                        method: 'POST',
                        credentials: 'same-origin',
                        body: fd
                    });
                });
            })();
            </script>
            <?php
        }

        public function render_banner(): void {
            if ( self::$rendered ) {
                return;
            }
            if ( $this->should_skip() ) {
                return;
            } 

            self::$rendered = true;

            $coupon_url = esc_url( self::COUPON_URL );
            $icon_url = 'https://ps.w.org/voice-feedback/assets/icon-128x128.png?rev=3475105';
            ?>
            <!-- Voice Feedback Promo Banner (Standalone container, immune to .notice suppression) -->
            <div id="bplvf-promo-banner" class="bplvf-promo-banner-wrap">

                <!-- Left Asymmetric Brand Ribbon -->
                <div class="bplvf-brand-ribbon">
                    <img src="<?php echo $icon_url; ?>" alt="Voice Feedback" />
                    <span class="bplvf-ribbon-title">Voice Feedback</span>
                </div>

                <!-- Main Content Zone -->
                <div class="bplvf-content-zone">
                    <div class="bplvf-text-stack">
                        <div class="bplvf-headline">
                            <span><?php esc_html_e( "Voice Feedback's Biggest Black Friday Sale is Live!", 'voice-feedback' ); ?></span>
                            <span class="bplvf-discount-chip"><?php esc_html_e( 'Save 45%', 'voice-feedback' ); ?></span>
                        </div>
                        <p style="margin-top: 0;">Get flat 45% OFF and unlock email integration, screen recording, advanced display triggers, and many more features at our biggest sale of the year!</p> 
                        <div class="bplvf-feature-chips">
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Enable Email Notifications', 'voice-feedback'); ?></span>
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Custom Icon Branding
', 'voice-feedback'); ?></span>
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Screen Recording & Capture', 'voice-feedback'); ?></span>
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Advanced Display & Scroll Triggers', 'voice-feedback'); ?></span>
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Complete Typography Control', 'voice-feedback'); ?></span>
                                  <span><strong class="check-icon">✓</strong> <?php esc_html_e('Positioning & Offset Alignment', 'voice-feedback'); ?></span>
                        </div>
                    </div>

                    <!-- CTA Button -->
                    <a href="<?php echo $coupon_url; ?>" target="_blank" rel="noopener noreferrer" class="bplvf-btn-cta">
                        <?php esc_html_e( 'Grab The Deal Now →', 'voice-feedback' ); ?>
                    </a>
                </div>

                <!-- Dismiss Button -->
                <button id="bplvf-banner-close"
                        class="bplvf-banner-dismiss-btn"
                        title="<?php esc_attr_e( 'Dismiss', 'voice-feedback' ); ?>"
                        aria-label="<?php esc_attr_e( 'Dismiss banner', 'voice-feedback' ); ?>">
                    &times;
                </button>

            </div>
            <?php
        }

        /* ------------------------------------------------------------------ */
        /*  Plugin Action Links on plugins.php                                */
        /* ------------------------------------------------------------------ */
        public function add_plugin_action_link( array $actions ): array {
            if ( $this->is_expired() ) {
                return $actions;
            }

            $offer_link = sprintf(
                '<a href="%s" target="_blank" rel="noopener noreferrer" style="color: #ff7a00; font-weight: 700;">%s</a>',
                esc_url( self::COUPON_URL ),
                esc_html__( 'Biggest Black Friday Sale - Save 45%', 'voice-feedback' )
            );

            $actions['special_offer'] = $offer_link;

            return $actions;
        }

        /* ------------------------------------------------------------------ */
        /*  AJAX Handler: Permanent Dismissal                                 */
        /* ------------------------------------------------------------------ */

        public function ajax_dismiss(): void {
            check_ajax_referer( 'bplvf_dismiss_promo', 'nonce' );
            update_user_meta( get_current_user_id(), self::DISMISSED_KEY, 1 );
            wp_send_json_success();
        }
    }

    new BPLVF_PromoBanner();
}
