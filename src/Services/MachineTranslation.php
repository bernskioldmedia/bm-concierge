<?php

namespace BernskioldMedia\WP\Concierge\Services;

class MachineTranslation extends BaseService {

	public string $key = 'machine_translation';

	public function __construct() {
		parent::__construct();
		$this->title = __( 'Machine Translation', 'bm-concierge' );
	}

	public function get_cost( int $words ): float {
		$word_price = $this->data->wordPricing->{$this->get_currency()};

		return ( $words * $word_price );
	}

	public function order( array $data = [] ) {
		parent::order( $data ); // Processes the data and sends confirmation.

		$translated = $this->get_translated_data( $data['postId'], $data['targetLanguage'] );
		$this->save_to_post( $data['postId'], $translated['title'], $translated['content'] );
	}

	public function get_translated_data( int $post_id, string $targetLanguage ): array {
		$api_key = defined( 'BM_CONCIERGE_ML_TRANSLATION_API_KEY' ) ? BM_CONCIERGE_ML_TRANSLATION_API_KEY : null;

		if ( ! $api_key ) {
			return [
				'title'   => null,
				'content' => null,
			];
		}

		$post = get_post( $post_id );

		$response = wp_remote_post( 'https://api-free.deepl.com/v2/translate', [
			'body' => "auth_key=$api_key&text=$post->post_title&text=$post->post_content&target_lang=$targetLanguage",
		] );

		$body = wp_remote_retrieve_body( $response );
		$data = json_decode( $body );

		return [
			'title'   => $data->translations[0]->text,
			'content' => $data->translations[1]->text,
		];
	}

	public function save_to_post( int $post_id, ?string $title = null, ?string $content = null ): void {
		$args       = [];
		$args['ID'] = $post_id;

		if ( $title ) {
			$args['post_title'] = $title;
		}

		if ( $content ) {
			$args['post_content'] = $content;
		}

		wp_update_post( $args );
	}
}
