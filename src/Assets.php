<?php
/**
 * Handles the loading of scripts and styles for the
 * theme through the proper enqueuing methods.
 *
 * @author  Bernskiold Media <info@bernskioldmedia.com>
 * @package BernskioldMedia\WP\Concierge
 * @since   1.0.0
 **/

namespace BernskioldMedia\WP\Concierge;

use BMCG_Vendor\BernskioldMedia\WP\PluginBase\AssetManager;

defined( 'ABSPATH' ) || exit;

class Assets extends AssetManager {

	public static function hooks(): void {
		parent::hooks();

		add_action( 'enqueue_block_editor_assets', [ self::class, 'block_editor' ] );
	}

	public static function block_editor(): void {
		if ( true !== apply_filters( 'bm/concierge/enabled', true ) ) {
			return;
		}

		$meta = require_once Plugin::get_path( 'assets/scripts/dist/block-editor.asset.php' );
		wp_register_script( 'bm-concierge-block-editor', Plugin::get_url( 'assets/scripts/dist/block-editor.js' ), $meta['dependencies'] ?? [],
			$meta['version'] ?? Plugin::get_version(), true );

		wp_enqueue_script( 'bm-concierge-block-editor' );
		wp_set_script_translations( 'bm-concierge-block-editor', 'bm-concierge', Plugin::get_path( 'languages/' ) );
	}
}
