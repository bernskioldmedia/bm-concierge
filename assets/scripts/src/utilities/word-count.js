import { serialize } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import { count } from '@wordpress/wordcount';

export function getWordCount() {
	const blocks = select( 'core/block-editor' ).getBlocks();
	return count( serialize( blocks ), 'words' );
}
