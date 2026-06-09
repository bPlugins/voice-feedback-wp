<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'BPLVF_Shortcode' ) ) {

	class BPLVF_Shortcode {

		protected static $shortcode_used = false;

		public static function init() {
			// ShortCodes and Render
			add_shortcode( 'voice_feedback', [ __CLASS__, 'bplvf_voice_feedbacks_shortcode' ] );
			add_shortcode( 'global_voice_feedback', [ __CLASS__, 'bplvf_global_shortcode' ] );
			add_filter( 'the_posts', [ __CLASS__, 'detect_shortcode_usage' ] );
			add_action( 'template_redirect', [ __CLASS__, 'conditionally_add_footer_render' ] );
		}

		public static function detect_shortcode_usage( $posts ) {
			if ( empty( $posts ) ) {
				return $posts;
			}

			foreach ( $posts as $post ) {
				if ( has_shortcode( $post->post_content, 'voice_feedback' ) ) {
					self::$shortcode_used = true;
					break;
				}
			}

			return $posts;
		}

		public static function conditionally_add_footer_render() {
			if ( is_admin() || wp_doing_ajax() ) {
				return;
			}

			$global_settings = get_option( 'global_voice_feedback' );
			$applyGlobally   = isset( $global_settings['voiceFeedback']['applyGlobally'] ) ? $global_settings['voiceFeedback']['applyGlobally'] : true;

			if ( $applyGlobally ) {
				add_action( 'wp_footer', [ __CLASS__, 'render_global_voice_block' ] );
			}
		}

		public static function render_global_voice_block() {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output is block HTML, which is escaped during block rendering.
			echo self::bplvf_global_shortcode();
		}

		public static function bplvf_voice_feedbacks_shortcode( $atts ) {
			self::$shortcode_used = true;
			$atts                 = shortcode_atts( [ 'id' => 0 ], $atts );
			$id                   = (int) $atts['id'];

			$post = get_post( $id );
			if ( ! $post || $post->post_type !== 'voice_feedback' ) {
				return '<p>Voice Feedback not found.</p>';
			}

			// Get block settings (from post content)
			$blocks         = parse_blocks( $post->post_content );
			$block_settings = [];

			foreach ( $blocks as $block ) {
				if ( isset( $block['blockName'] ) && $block['blockName'] === 'bplvf/voice-feedback' ) {
					$block_settings = $block['attrs'];
					break;
				}
			}

			$meta_settings = get_post_meta( $post->ID, 'bplvf_settings', true );
			$meta_settings = is_array( $meta_settings ) ? $meta_settings : [];

			$block_settings = is_array( $block_settings ) ? $block_settings : [];

			$replace_settings = array_replace_recursive( $meta_settings, $block_settings );
			$settings         = bplvf_block_settings( $replace_settings );

			$block = [
				'blockName'    => 'bplvf/voice-feedback',
				'attrs'        => $settings,
				'innerBlocks'  => [],
				'innerHTML'    => '',
				'innerContent' => [],
			];

			return render_block( $block );
		}

		public static function bplvf_global_shortcode() {
			self::$shortcode_used = true;
			$global_settings      = get_option( 'global_voice_feedback', [] );
			$merged               = bplvf_merge_with_defaults( $global_settings );

			$block = [
				'blockName'    => 'bplvf/voice-feedback',
				'attrs'        => $merged,
				'innerBlocks'  => [],
				'innerHTML'    => '',
				'innerContent' => [],
			];

			return render_block( $block );
		}
	}
}
