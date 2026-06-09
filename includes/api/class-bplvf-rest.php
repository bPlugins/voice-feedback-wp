<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if (!class_exists('BPLVoiceFeedbackAPI')) {

class BPLVoiceFeedbackAPI {

    private static $option_key = 'bplvf_feedback_settings';

    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * REGISTER ROUTES
     */
    public function register_routes() {
        /* --------------------------------------------
         * BLOCK ROUTES
         * -------------------------------------------- */
        register_rest_route('bplvf/v1', '/block', [
            'methods'  => WP_REST_Server::CREATABLE,
            'callback' => [$this, 'save_block'],
            'permission_callback' => [$this, 'permission']
        ]);

        register_rest_route('bplvf/v1', '/block', [
            'methods'  => WP_REST_Server::READABLE,
            'callback' => [$this, 'get_all_block'],
            'permission_callback' => '__return_true'
        ]);

        register_rest_route('bplvf/v1', '/block/(?P<id>\d+)', [
            'methods'  => WP_REST_Server::READABLE,
            'callback' => [$this, 'get_single_block'],
            'permission_callback' => '__return_true'
        ]);

        register_rest_route('bplvf/v1', '/block/(?P<id>\d+)', [
            'methods'  => WP_REST_Server::DELETABLE,
            'callback' => [$this, 'delete_block'],
            'permission_callback' => [$this, 'permission']
        ]);


        /* --------------------------------------------
         * Feedback Settings (Global)
         * -------------------------------------------- */
        /* SETTINGS GET */
        register_rest_route('bplvf/v1', '/settings', [
            'methods'  => WP_REST_Server::READABLE,
            'callback' => [__CLASS__, 'get_settings'],
            'permission_callback' => [$this, 'permission']
        ]);

        /* SETTINGS POST */
        register_rest_route('bplvf/v1', '/settings', [
            'methods'  => WP_REST_Server::CREATABLE,
            'callback' => [__CLASS__, 'save_settings'],
            'permission_callback' => [$this, 'permission']
        ]);


        /* --------------------------------------------
         * Feedback Settings (Global)
         * -------------------------------------------- */
        /* SETTINGS GET */
        register_rest_route('bplvf/v1', '/global-feedback', [
            'methods'  => WP_REST_Server::READABLE,
            'callback' => [__CLASS__, 'get_global_feedback'],
            'permission_callback' => [$this, 'permission']
        ]);

        /* SETTINGS POST */
        register_rest_route('bplvf/v1', '/global-feedback', [
            'methods'  => WP_REST_Server::CREATABLE,
            'callback' => [__CLASS__, 'save_global_feedback'],
            'permission_callback' => [$this, 'permission']
        ]);

        
    }

    /**
     * Only Admin Allowed
     */
    public function permission() {
        return current_user_can('manage_options');
    }


    /* ==========================================================
     *  SHARED HELPERS
     * ========================================================== */
    /**
     * SAVE ITEM (create/update)
     */
    private function save_item($request, $post_type, $meta_key, $extra_meta = []) {

        $id       = intval($request->get_param('id'));
        $title    = sanitize_text_field($request->get_param('title') ?: 'Untitled');
        $settings = $request->get_param('settings');

        if (!is_array($settings)) {
            $settings = [];
        }

        $post_data = [
            'post_title'  => $title,
            'post_type'   => $post_type,
            'post_status' => 'publish',
        ];

        if ($id > 0) {
            $post_data['ID'] = $id;
            $result = wp_update_post($post_data, true);
        } else {
            $result = wp_insert_post($post_data, true);
        }

        if (is_wp_error($result)) {
            return new WP_Error('save_error', $result->get_error_message(), ['status' => 400]);
        }

        update_post_meta($result, $meta_key, $settings);

        foreach ($extra_meta as $key => $value) {
            update_post_meta($result, $key, $value);
        }

        return [
            'id'       => $result,
            'title'    => $title,
            'settings' => $settings,
            'created'  => get_the_date('Y/m/d \a\t g:i a', $result)
        ];
    }
    
    /**
     * GET SINGLE ITEM
     */
    private function get_single_item($id, $meta_key, $block_name = null) {

        $post = get_post($id);
        if (!$post) {
            return new WP_Error('not_found', 'Item not found', ['status' => 404]);
        }

        $meta_settings = get_post_meta($post->ID, $meta_key, true);
        $meta_settings = is_array($meta_settings) ? $meta_settings : [];

        // If block → merge block attributes from content
        if ($block_name) {
            $block_settings = $this->extract_block_settings($post, $block_name);
            $settings = array_replace_recursive($meta_settings, $block_settings);
        } else {
            $settings = $meta_settings;
        }

        return [
            'id'       => $post->ID,
            'title'    => $post->post_title,
            'settings' => $settings,
            'created'  => get_the_date('Y/m/d \a\t g:i a', $post)
        ];
    }


    /**
     * GET ALL ITEMS
     */
    private function get_all_items($post_type, $meta_key, $block_name = null) {

        $query = new WP_Query([
            'post_type'      => $post_type,
            'post_status'    => 'publish',
            'posts_per_page' => -1,
            'orderby'        => 'date',
            'order'          => 'DESC'
        ]);

        $items = [];

        foreach ($query->posts as $post) {

            $meta_settings = get_post_meta($post->ID, $meta_key, true);
            $meta_settings = is_array($meta_settings) ? $meta_settings : [];

            if ($block_name) {
                $block_settings = $this->extract_block_settings($post, $block_name);
                $settings = array_replace_recursive($meta_settings, $block_settings);
            } else {
                $settings = $meta_settings;
            }

            $items[] = [
                'id'       => $post->ID,
                'title'    => $post->post_title,
                'settings' => $settings,
                'created'  => get_the_date('Y/m/d \a\t g:i a', $post)
            ];
        }

        return $items;
    }


    /**
     * DELETE ITEM
     */
    private function delete_item($id) {
        if (!$id) {
            return new WP_Error('invalid_id', 'Invalid ID', ['status' => 400]);
        }

        wp_delete_post($id, true);
        return ['deleted' => true];
    }

    /**
     * Extract Gutenberg block attributes
     */
    private function extract_block_settings($post, $block_name) {
        $blocks = parse_blocks($post->post_content);

        foreach ($blocks as $block) {
            if ($block['blockName'] === $block_name) {
                return isset($block['attrs']) && is_array($block['attrs'])
                    ? $block['attrs']
                    : [];
            }
        }

        return [];
    }


    /* ==========================================================
     * BLOCK ROUTES
     * ========================================================== */
    public function save_block($request) {
        return $this->save_item($request, 'voice_feedback', 'bplvf_settings');
    }

    public function get_single_block($request) {
        return $this->get_single_item(
            intval($request['id']),
            'bplvf_settings',
            'bplvf/voice-feedback'
        );
    }

    public function get_all_block() {
        return $this->get_all_items(
            'voice_feedback',
            'bplvf_settings',
            'bplvf/voice-feedback'
        );
    }

    public function delete_block($request) {
        return $this->delete_item(intval($request['id']));
    }


    /* --------------------------------------------
    * Feedback Settings (Global)
    * -------------------------------------------- */

    /**
     * Default Settings Structure
     */
    public static function default_settings() {
        return [
            'email' => [
                'enabled' => false,
                'send_to' => 'admin',
                "custom_email" => "",
                'subject' => 'New Voice Feedback',
                'body_template' => "
                    You received a new voice feedback.
                    Page: {page_url}
                    IP: {ip}
                    Listen: {audio_link}",
                'attach_feedback' => false,
                'enable_logging' => true,
            ],
            "email_logs" => [ 
            ],
            'privacy' => [
                'ask_name_email' => false,
            ]
        ];
    }

    public static function default_global_feedback() {
        return [
            'voiceFeedback' => [
                'applyGlobally' => true,
                'startRecordingText' => 'Send Voice Feedback',
                'stopRecording' => '⏹️ Stop',
                'isScreenRecord' => false,
                'startScreenRecordingText' => 'Start Screen Recording',
            ],
    
            'buttons' => [
                'normal' => [
                    'bgColor' => '#25d366',
                    'color'   => '#ffffff',
                ],
                'hover' => [
                    'bgColor' => '#1da851',
                    'color'   => '#ffffff',
                ],
                'borderRadius' => 30,
                'typo' => [
                    'fontSize' => [
                        'desktop' => 16,
                        'tablet'  => 16,
                        'mobile'  => 16,
                    ],
                ],
                'padding' => [
                    'side'   => 4,
                    'top'    => '10px',
                    'right'  => '10px',
                    'bottom' => '10px',
                    'left'   => '10px',
                ],
            ],
    
            'drawer' => [
                'colors' => [
                    'bgColor' => '#25d366',
                    'color'   => '#ffffff',
                ],
                'drawerHeadline' => 'Voice Feedback',
                'drawerHeadlineTypo' => [
                    'fontSize' => [
                        'desktop' => 20,
                        'tablet'  => 16,
                        'mobile'  => 16,
                    ],
                    'fontVariant'   => 400,
                    'fontWeight'    => 400,
                    'letterSpace'   => '0px',
                    'lineHeight'    => 1,
                    'textDecoration'=> 'none',
                    'textTransform' => 'none',
                ],
                'spaceFromBottom' => 30,
                'drawerPosition'  => 'right',
            ],
    
            'recordingTabs' => [
                'bgColor' => '#efefef',
    
                'inactiveRecordingTab' => [
                    'bgColor' => '#ffffff',
                    'color'   => '#25d366',
                ],
                'activeRecordingTab' => [
                    'bgColor' => '#25d366',
                    'color'   => '#ffffff',
                ],
    
                'buttons' => [
                    'borderRadius' => 30,
                    'typo' => [
                        'fontSize' => [
                            'desktop' => 16,
                            'tablet'  => 16,
                            'mobile'  => 16,
                        ],
                    ],
                    'padding' => [
                        'side'   => 4,
                        'top'    => '10px',
                        'right'  => '10px',
                        'bottom' => '10px',
                        'left'   => '10px',
                    ],
                    'isDisplayIcon' => true,
                    'iconSize'      => 20,
                    'isDisplayText' => true,
                ],
    
                'audioTab' => [
                    'text' => 'Audio',
                    'icon' => '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>',
                ],
    
                'screenTab' => [
                    'text' => 'Screen',
                    'icon' => '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path></svg>',
                ],
    
                'maxWidth'     => '250px',
                'borderRadius' => 30,
            ],
    
            'globalFeedback' => [
                'template' => 'defaultDrawer',
    
                'stickyFeedback' => [
                    'position' => 'bottomRight',
                    'offset' => [
                        'top'    => 20,
                        'right'  => 20,
                        'bottom' => 20,
                        'left'   => 20,
                    ],
    
                    'buttonContent' => [
                        'pulseButton' => true,
                        'contentType' => 'icon',
                        'icon' => '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>',
                        'text' => 'Share your thoughts',
                        'iconSize'  => 30,
                        'iconColor' => '#ffffff',
                        'colors' => [
                            'bgColor' => '#25d366',
                            'color'   => '#ffffff',
                        ],
                        'borderRadius' => 30,
                        'typo' => [
                            'fontSize' => [
                                'desktop' => 16,
                                'tablet'  => 16,
                                'mobile'  => 16,
                            ],
                        ],
                        'padding' => [
                            'side' => 4,
                        ],
                    ],
    
                    'padding' => [
                        'desktop' => [
                            'top'    => '10px',
                            'right'  => '10px',
                            'bottom' => '10px',
                            'left'   => '10px',
                        ],
                        'tablet' => [
                            'top'    => '10px',
                            'right'  => '10px',
                            'bottom' => '10px',
                            'left'   => '10px',
                        ],
                        'mobile' => [
                            'top'    => '5px',
                            'right'  => '5px',
                            'bottom' => '5px',
                            'left'   => '5px',
                        ],
                    ],
                ],
    
                'notification' => [
                    'style'   => 'notification2',
                    'bgColor' => '#25d366',
                    'closeButton' => [
                        'color' => '#ffffff',
                    ],
                    'reappearTime' => 3,
                ],
    
                'slideIn' => [
                    'borderRadius' => 15,
                ],
    
                'functionality' => [
                    'showFeedbackOn'     => 'always',
                    'hideOnScrollUp'     => false,
                    'scrollDistance'     => 200,
                    'choosenSectionsIds' => '',
                    'showAfterTime'      => 0,
                ],
    
                'sharedData' => [
                    'position' => 'rightCenter',
                    'contentTitle' => 'Hey There!',
                    'contentSubTitle' => 'Lets hear what you think! 💭.',
                    'contentTitleTypo' => [
                        'fontFamily'    => 'default',
                        'fontSize'      => ['desktop' => 20, 'tablet' => 16, 'mobile' => 16],
                        'fontStyle'     => 'normal',
                        'fontWeight'    => 400,
                        'letterSpace'   => '1px',
                        'lineHeight'    => '1.7',
                        'textDecoration'=> 'none',
                        'textTransform' => 'none',
                    ],
                    'contentSubTitleTypo' => [
                        'fontFamily'    => 'default',
                        'fontSize'      => ['desktop' => 15, 'tablet' => 13, 'mobile' => 10],
                        'fontStyle'     => 'normal',
                        'fontWeight'    => 400,
                        'letterSpace'   => '1px',
                        'lineHeight'    => '1.7',
                        'textDecoration'=> 'none',
                        'textTransform' => 'none',
                    ],
                    'colors' => [
                        'contentTitleColor'    => '#ffffff',
                        'contentSubTitleColor' => '#ffffff',
                    ],
                ],
            ],
        ];
    }
    
    
    /**
     * GET SETTINGS
     */
    public static function get_settings() {
        $saved = get_option(self::$option_key, []);

        // Merge with defaults (so no missing keys)
        $settings = wp_parse_args($saved, self::default_settings());

        return new WP_REST_Response($settings, 200);
    }
    public static function get_global_feedback() {
        $saved = get_option("global_voice_feedback", []);
        $defaults = self::default_global_feedback();

        // Recursively merge defaults and restore empty icons if DB has empty strings
        $settings = self::deep_merge($defaults, $saved);
        $settings = self::restore_empty_icons($settings, $defaults);

        return new WP_REST_Response($settings, 200);
    }

    /**
     * SAVE SETTINGS
     */
    public static function save_settings(WP_REST_Request $request) {
        $params = $request->get_json_params();
        $defaults = self::default_settings();

        // --- SANITIZATION ---
        $sanitizedData = [
            'email' => [
                'enabled'        => !empty($params['email']['enabled']),
                'send_to'        => sanitize_text_field($params['email']['send_to'] ?? $defaults['email']['send_to']),
                'custom_email'   => sanitize_text_field($params['email']['custom_email'] ?? $defaults['email']['custom_email']),
                'subject'        => sanitize_text_field($params['email']['subject'] ?? $defaults['email']['subject']),
                'body_template'  => wp_kses_post($params['email']['body_template'] ?? $defaults['email']['body_template']),
                'attach_feedback' => !empty($params['email']['attach_feedback']),
                'enable_logging' => !empty($params['email']['enable_logging']),
            ],
            "email_logs" => [
            ],
            'privacy' => [
                'ask_name_email' => !empty($params['privacy']['ask_name_email']),
            ]
        ];
        
        update_option(self::$option_key, $sanitizedData);

        return new WP_REST_Response([
            'status' => 'success',
            'message' => 'Settings Saved Successfully!',
            'data' => $sanitizedData
        ], 200);
    }

    public static function save_global_feedback( WP_REST_Request $request ) {
        $params   = $request->get_json_params();
        $defaults = self::default_global_feedback();

        // Merge user data over defaults (keeps structure safe)
        $merged = self::deep_merge( $defaults, is_array( $params ) ? $params : [] );

        // Restore empty icons to default SVGs
        $merged = self::restore_empty_icons( $merged, $defaults );

        // Sanitize everything recursively
        $sanitizedData = self::sanitize_recursive( $merged );

        update_option("global_voice_feedback", $sanitizedData );

        return new WP_REST_Response( [
            'status'  => 'success',
            'message' => 'Global Feedback Settings Saved Successfully!',
            'data'    => $sanitizedData,
        ], 200 );
    }

    /**
         * Deep merge arrays (child overrides parent)
         */
        private static function deep_merge($defaults, $custom) {
            foreach ($custom as $key => $value) {
                if (isset($defaults[$key]) && is_array($defaults[$key]) && is_array($value)) {
                    $defaults[$key] = self::deep_merge($defaults[$key], $value);
                } else {
                    $defaults[$key] = $value;
                }
            }
            return $defaults;
        }

        /**
         * Recursively sanitize values
         */
        private static function sanitize_recursive($data, $key = '') {
            if (is_array($data)) {
                foreach ($data as $k => $value) {
                    $data[$k] = self::sanitize_recursive($value, $k);
                }
                return $data;
            }

            if (is_bool($data) || is_numeric($data)) {
                return $data;
            }

            if ($key === 'icon') {
                return self::sanitize_svg($data);
            }

            return sanitize_text_field($data);
        }

        /**
         * Sanitize SVG helper using wp_kses
         */
        private static function sanitize_svg($svg) {
            if (empty($svg)) {
                return '';
            }
            $allowed_tags = [
                'svg' => [
                    'class'           => true,
                    'viewbox'         => true,
                    'width'           => true,
                    'height'          => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'stroke-linecap'  => true,
                    'stroke-linejoin' => true,
                    'xmlns'           => true,
                    'version'         => true,
                ],
                'path' => [
                    'd'               => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'stroke-linecap'  => true,
                    'stroke-linejoin' => true,
                    'class'           => true,
                ],
                'g' => [
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'class'           => true,
                ],
                'circle' => [
                    'cx'              => true,
                    'cy'              => true,
                    'r'               => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'class'           => true,
                ],
                'rect' => [
                    'x'               => true,
                    'y'               => true,
                    'width'           => true,
                    'height'          => true,
                    'rx'              => true,
                    'ry'              => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'class'           => true,
                ],
                'polygon' => [
                    'points'          => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'class'           => true,
                ],
                'polyline' => [
                    'points'          => true,
                    'fill'            => true,
                    'stroke'          => true,
                    'stroke-width'    => true,
                    'class'           => true,
                ],
            ];

            return wp_kses($svg, $allowed_tags);
        }

        /**
         * Restore empty icon settings to their defaults recursively
         */
        private static function restore_empty_icons($settings, $defaults) {
            if (is_array($settings) && is_array($defaults)) {
                foreach ($defaults as $key => $default_val) {
                    if (!isset($settings[$key])) {
                        $settings[$key] = $default_val;
                    } elseif (is_array($default_val) && is_array($settings[$key])) {
                        $settings[$key] = self::restore_empty_icons($settings[$key], $default_val);
                    } elseif ($key === 'icon' && empty($settings[$key])) {
                        $settings[$key] = $default_val;
                    }
                }
            }
            return $settings;
        }

}

new BPLVoiceFeedbackAPI();

}
?>
