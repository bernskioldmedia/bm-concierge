<?php

namespace BernskioldMedia\WP\Concierge\Services;

class AccessibilityReview extends BaseService {

	public string $key = 'accessibility';

	public function __construct() {
		parent::__construct();
		$this->title = __( 'Accessibility Audit', 'bm-concierge' );
	}

	public function get_cost( bool $express = false ): float {
		if ( $express ) {
			return $this->data->pricing->express->{$this->get_currency()};
		}

		return $this->data->pricing->standard->{$this->get_currency()};
	}
}
