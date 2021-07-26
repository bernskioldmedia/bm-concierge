<?php
/**
 * Installer
 *
 * @package BernskioldMedia\WP\Concierge
 */

namespace BernskioldMedia\WP\Concierge;

use BMCG_Vendor\BernskioldMedia\WP\PluginBase\Installer;

defined( 'ABSPATH' ) || exit;

class Install extends Installer {

	public static function install(): void {
		parent::install();

		do_action( 'bm_concierge_install' );
	}

}
