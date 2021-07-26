<?php

namespace BernskioldMedia\WP\Concierge;

use BMCG_Vendor\BernskioldMedia\WP\PluginBase\BasePlugin;

defined( 'ABSPATH' ) || exit;

class Plugin extends BasePlugin {

	protected static string $slug             = 'bm_concierge';
	protected static string $version          = 'VERSION';
	protected static string $textdomain       = 'bm-concierge';
	protected static string $plugin_file_path = BM_CONCIERGE_FILE_PATH;

	protected static array $boot = [
		Assets::class,
	];
}
