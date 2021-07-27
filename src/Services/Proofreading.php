<?php

namespace BernskioldMedia\WP\Concierge\Services;

class Proofreading extends BaseService {

	public string $key = 'proofreading';

	public function __construct() {
		parent::__construct();
		$this->title = __( 'Proofreading', 'bm-concierge' );
	}

	public function get_cost( int $words, bool $express = false ): float {
		$tier           = $express ? 'express' : 'standard';
		$word_price     = $this->data->wordPricing->{$tier}->{$this->get_currency()};
		$starting_price = $this->data->startingPrice->{$tier}->{$this->get_currency()};

		return $starting_price + ( $words * $word_price );
	}
}
