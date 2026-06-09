<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bplvf_get_setting_value( $key, $default = null ) {
    $values = get_option( 'settings-dashboard', [] );
    return isset( $values[ $key ] ) ? $values[ $key ] : $default;
}

function bplvf_block_settings($settings = []) {
    $attributes = [
        "alignment" => "center",
        "voiceFeedback" => [
            "applyGlobally" => false,
            "startRecordingText" => "Send Voice Feedback",
            "stopRecording" => "⏹️ Stop",
            "isScreenRecord" => false,
            "startScreenRecordingText" => "Start Screen Recording"
        ],
        "container" => [
            "bgColor" => "#f0fdf4",
            "border" => [
                "color" => "#25d366",
                "style" => "solid",
                "width" => "2px"
            ],
            "width" => [
                "desktop" => "400px",
                "tablet" => "400px",
                "mobile" => "100%"
            ],
            "borderRadius" => 15,
            "padding" => [
                "side" => 4,
                "top" => "16px",
                "right" => "16px",
                "bottom" => "16px",
                "left" => "16px"
            ]
        ],
        "buttons" => [
            "normal" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "hover" => [
                "bgColor" => "#1da851",
                "color" => "#ffffff"
            ],
            "borderRadius" => 30,
            "typo" => [
                "fontSize" => [
                    "desktop" => 16,
                    "tablet" => 16,
                    "mobile" => 16
                ],
                "fontUnit" => "px",
                "fontFamily" => "default",
                "fontWeight" => 400,
                "textTransform" => "none",
                "lineHeight" => 1.5,
                "letterSpace" => "0px",
                "fontStyle" => "normal"
            ],
            "padding" => [
                "side" => 4,
                "top" => "10px",
                "right" => "10px",
                "bottom" => "10px",
                "left" => "10px"
            ]
        ],
        "drawer" => [
            "colors" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "drawerHeadline" => "Voice Feedback",
            "drawerHeadlineTypo" => [
                "fontSize" => [
                    "desktop" => "20px",
                    "tablet" => 16,
                    "mobile" => 16
                ],
                "fontVariant" => 400,
                "fontWeight" => 400,
                "letterSpace" => "1px",
                "lineHeight" => "20px",
                "textDecoration" => "none",
                "textTransform" => "none"
            ],
            "spaceFromBottom" => 30,
            "drawerPosition" => "right"
        ],
        "recordingTabs" => [
            "inactiveRecordingTab" => [
                "bgColor" => "#ffffff",
                "color" => "#25d366"
            ],
            "activeRecordingTab" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "buttons" => [
                "borderRadius" => 30,
                "typo" => [
                    "fontSize" => [
                        "desktop" => 16,
                        "tablet" => 16,
                        "mobile" => 16
                    ]
                ],
                "padding" => [
                    "side" => 4,
                    "top" => "10px",
                    "right" => "10px",
                    "bottom" => "10px",
                    "left" => "10px"
                ],
                "isDisplayIcon" => true,
                "iconSize" => 20,
                "isDisplayText" => true
            ],
            "audioTab" => [
                "text" => "Audio",
                "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>'
            ],
            "screenTab" => [
                "text" => "Screen",
                "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>'
            ],
            "maxWidth" => "250px",
            "borderRadius" => 30
        ],
        "globalFeedback" => [
            "template" => "defaultDrawer",
            "stickyFeedback" => [
                "position" => "bottomRight",
                "offset" => [
                    "top" => 20,
                    "right" => 20,
                    "bottom" => 20,
                    "left" => 20
                ],
                "buttonContent" => [
                    "pulseButton" => true,
                    "contentType" => "icon",
                    "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>',
                    "text" => "Share your thoughts",
                    "iconSize" => 30,
                    "iconColor" => "#ffffff",
                    "colors" => [
                        "bgColor" => "#25d366",
                        "color" => "#ffffff"
                    ],
                    "borderRadius" => 30,
                    "typo" => [
                        "fontSize" => [
                            "desktop" => 16,
                            "tablet" => 16,
                            "mobile" => 16
                        ]
                    ]
                ],
                "padding" => [
                    "desktop" => [
                        "top" => "10px",
                        "right" => "10px",
                        "bottom" => "10px",
                        "left" => "10px"
                    ],
                    "tablet" => [
                        "top" => "10px",
                        "right" => "10px",
                        "bottom" => "10px",
                        "left" => "10px"
                    ],
                    "mobile" => [
                        "top" => "5px",
                        "right" => "5px",
                        "bottom" => "5px",
                        "left" => "5px"
                    ]
                ]
            ],
            "notification" => [
                "style" => "notification2",
                "bgColor" => "#25d366",
                "closeButton" => [
                    "color" => "#ffffff"
                ],
                "reappearTime" => 3
            ],
            "slideIn" => [
                "borderRadius" => 15
            ],
            "functionality" => [
                "showFeedbackOn" => "always",
                "hideOnScrollUp" => false,
                "scrollDistance" => 200,
                "choosenSectionsIds" => "",
                "showAfterTime" => 0
            ],
            "sharedData" => [
                "position" => "rightCenter",
                "contentTitle" => "Hey There!",
                "contentSubTitle" => "Lets hear what you think! 💭.",
                "contentTitleTypo" => [
                    "fontFamily" => "default",
                    "fontSize" => [
                        "desktop" => 20,
                        "tablet" => 16,
                        "mobile" => 16
                    ],
                    "fontStyle" => "normal",
                    "fontWeight" => 400,
                    "letterSpace" => "1px",
                    "lineHeight" => "1.7",
                    "textDecoration" => "none",
                    "textTransform" => "none"
                ],
                "contentSubTitleTypo" => [
                    "fontFamily" => "default",
                    "fontSize" => [
                        "desktop" => 15,
                        "tablet" => 13,
                        "mobile" => 10
                    ],
                    "fontStyle" => "normal",
                    "fontWeight" => 400,
                    "letterSpace" => "1px",
                    "lineHeight" => "1.7",
                    "textDecoration" => "none",
                    "textTransform" => "none"
                ],
                "colors" => [
                    "contentTitleColor" => "#ffffff",
                    "contentSubTitleColor" => "#ffffff"
                ]
            ]
        ]
    ];
    return array_replace_recursive($attributes, $settings);
}

function bplvf_merge_with_defaults($global_settings = []) {
    $attributes = [
        "alignment" => "center",
        "voiceFeedback" => [
            "applyGlobally" => true,
            "startRecordingText" => "Send Voice Feedback",
            "stopRecording" => "⏹️ Stop",
            "isScreenRecord" => false,
            "startScreenRecordingText" => "Start Screen Recording"
        ],
        "container" => [
            "bgColor" => "#f0fdf4",
            "border" => [
                "color" => "#25d366",
                "style" => "solid",
                "width" => "2px"
            ],
            "width" => [
                "desktop" => "400px",
                "tablet" => "400px",
                "mobile" => "100%"
            ],
            "borderRadius" => 15,
            "padding" => [
                "side" => 4,
                "top" => "16px",
                "right" => "16px",
                "bottom" => "16px",
                "left" => "16px"
            ]
        ],
        "buttons" => [
            "normal" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "hover" => [
                "bgColor" => "#1da851",
                "color" => "#ffffff"
            ],
            "borderRadius" => 30,
            "typo" => [
                "fontSize" => [
                    "desktop" => 16,
                    "tablet" => 16,
                    "mobile" => 16
                ],
                "fontUnit" => "px",
                "fontFamily" => "default",
                "fontWeight" => 400,
                "textTransform" => "none",
                "lineHeight" => 1.5,
                "letterSpace" => "0px",
                "fontStyle" => "normal"
            ],
            "padding" => [
                "side" => 4,
                "top" => "10px",
                "right" => "10px",
                "bottom" => "10px",
                "left" => "10px"
            ]
        ],
        "drawer" => [
            "colors" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "drawerHeadline" => "Voice Feedback",
            "drawerHeadlineTypo" => [
                "fontSize" => [
                    "desktop" => 20,
                    "tablet" => 16,
                    "mobile" => 16
                ],
                "fontVariant" => 400,
                "fontWeight" => 400,
                "letterSpace" => "0px",
                "lineHeight" => 1,
                "textDecoration" => "none",
                "textTransform" => "none"
            ],
            "spaceFromBottom" => 30,
            "drawerPosition" => "right"
        ],
        "recordingTabs" => [
            "inactiveRecordingTab" => [
                "bgColor" => "#ffffff",
                "color" => "#25d366"
            ],
            "activeRecordingTab" => [
                "bgColor" => "#25d366",
                "color" => "#ffffff"
            ],
            "buttons" => [
                "borderRadius" => 30,
                "typo" => [
                    "fontSize" => [
                        "desktop" => 16,
                        "tablet" => 16,
                        "mobile" => 16
                    ]
                ],
                "padding" => [
                    "side" => 4,
                    "top" => "10px",
                    "right" => "10px",
                    "bottom" => "10px",
                    "left" => "10px"
                ],
                "isDisplayIcon" => true,
                "iconSize" => 20,
                "isDisplayText" => true
            ],
            "audioTab" => [
                "text" => "Audio",
                "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>'
            ],
            "screenTab" => [
                "text" => "Screen",
                "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>'
            ],
            "maxWidth" => "250px",
            "borderRadius" => 30
        ],
        "globalFeedback" => [
            "template" => "defaultDrawer",
            "stickyFeedback" => [
                "position" => "bottomRight",
                "offset" => [
                    "top" => 20,
                    "right" => 20,
                    "bottom" => 20,
                    "left" => 20
                ],
                "buttonContent" => [
                    "pulseButton" => true,
                    "contentType" => "icon",
                    "icon" => '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path></svg>',
                    "text" => "Share your thoughts",
                    "iconSize" => 30,
                    "iconColor" => "#ffffff",
                    "colors" => [
                        "bgColor" => "#25d366",
                        "color" => "#ffffff"
                    ],
                    "borderRadius" => 30,
                    "typo" => [
                        "fontSize" => [
                            "desktop" => 16,
                            "tablet" => 16,
                            "mobile" => 16
                        ]
                    ]
                ],
                "padding" => [
                    "desktop" => [
                        "top" => "10px",
                        "right" => "10px",
                        "bottom" => "10px",
                        "left" => "10px"
                    ],
                    "tablet" => [
                        "top" => "10px",
                        "right" => "10px",
                        "bottom" => "10px",
                        "left" => "10px"
                    ],
                    "mobile" => [
                        "top" => "5px",
                        "right" => "5px",
                        "bottom" => "5px",
                        "left" => "5px"
                    ]
                ]
            ],
            "notification" => [
                "style" => "notification2",
                "bgColor" => "#25d366",
                "closeButton" => [
                    "color" => "#ffffff"
                ],
                "reappearTime" => 3
            ],
            "slideIn" => [
                "borderRadius" => 15
            ],
            "functionality" => [
                "showFeedbackOn" => "always",
                "hideOnScrollUp" => false,
                "scrollDistance" => 200,
                "choosenSectionsIds" => "",
                "showAfterTime" => 0
            ],
            "sharedData" => [
                "position" => "rightCenter",
                "contentTitle" => "Hey There!",
                "contentSubTitle" => "Lets hear what you think! 💭.",
                "contentTitleTypo" => [
                    "fontFamily" => "default",
                    "fontSize" => [
                        "desktop" => 20,
                        "tablet" => 16,
                        "mobile" => 16
                    ],
                    "fontStyle" => "normal",
                    "fontWeight" => 400,
                    "letterSpace" => "1px",
                    "lineHeight" => "1.7",
                    "textDecoration" => "none",
                    "textTransform" => "none"
                ],
                "contentSubTitleTypo" => [
                    "fontFamily" => "default",
                    "fontSize" => [
                        "desktop" => 15,
                        "tablet" => 13,
                        "mobile" => 10
                    ],
                    "fontStyle" => "normal",
                    "fontWeight" => 400,
                    "letterSpace" => "1px",
                    "lineHeight" => "1.7",
                    "textDecoration" => "none",
                    "textTransform" => "none"
                ],
                "colors" => [
                    "contentTitleColor" => "#ffffff",
                    "contentSubTitleColor" => "#ffffff"
                ]
            ]
        ]
    ];
    return array_replace_recursive($attributes, $global_settings);
}

/**
 * Get the count of unread feedback posts.
 *
 * @return int Number of unread feedback posts.
 */
function bplvf_get_unread_feedback_count() {
    $unread_posts = get_posts([
        'post_type'      => 'voice_recording',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'fields'         => 'ids',
        'meta_query'     => [
            [
                'key'     => 'bplvf_read',
                'value'   => '0',
                'compare' => '='
            ]
        ]
    ]);
    return count($unread_posts);
}

/**
 * Mark all unread feedback posts as read.
 */
function bplvf_mark_all_feedback_as_read() {
    $unread_posts = get_posts([
        'post_type'      => 'voice_recording',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'fields'         => 'ids',
        'meta_query'     => [
            [
                'key'     => 'bplvf_read',
                'value'   => '0',
                'compare' => '='
            ]
        ]
    ]);

    foreach ($unread_posts as $post_id) {
        update_post_meta($post_id, 'bplvf_read', 1);
    }
}

