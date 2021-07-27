<?php

namespace BernskioldMedia\WP\Concierge\Services;

class OnPageOptimization extends BaseService {

	public string $key = 'onpage';

	public function __construct() {
		parent::__construct();
		$this->title = __( 'On-Page SEO Optimization', 'bm-concierge' );
	}

	public function get_cost( int $wordCount, bool $express = false ): float {
		$tier = $express ? 'express' : 'standard';
		if ( $wordCount < $this->data->smallLimit ) {
			return $this->data->pricing->{$tier}->small->{$this->get_currency()};
		}

		return $this->data->pricing->{$tier}->large->{$this->get_currency()};
	}

	protected function get_order_internal_email_message_extra_meta(): void {
		?>
		<p><strong>Keyword:</strong> <?php echo $this->order_data->keyword; ?></p>
		<?php
	}
}
