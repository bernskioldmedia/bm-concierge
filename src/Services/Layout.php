<?php

namespace BernskioldMedia\WP\Concierge\Services;

class Layout extends BaseService {

	public string $key = 'layout';

	public function __construct() {
		parent::__construct();
		$this->title = __( 'Layout', 'bm-concierge' );
	}

	public function get_cost( int $words, bool $express = false ): float {
		$tier = $express ? 'express' : 'standard';

		if ( $words < $this->data->smallLimit ) {
			return $this->data->pricing->{$tier}->small->{$this->get_currency()};
		}

		if ( $words < $this->data->mediumLimit ) {
			return $this->data->pricing->{$tier}->medium->{$this->get_currency()};
		}

		return $this->data->pricing->{$tier}->large->{$this->get_currency()};
	}
}
