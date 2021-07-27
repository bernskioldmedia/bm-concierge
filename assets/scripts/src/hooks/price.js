import { useSelect } from '@wordpress/data';
import { formatCurrency } from '../utilities/currency';
import { getWordCount } from '../utilities/word-count';

const usePriceSelect = ( type, data = {} ) => {
	const {
		normalPrice = null,
		expressPrice = null,
		currency = null,
	} = useSelect( ( select ) => {
		const { prices } = select( 'bm/concierge' ).getPrices( type, data );
		const { normal, express, currency } = prices[ type ] ?? {};

		return {
			expressPrice: express,
			normalPrice: normal,
			currency,
		};
	}, [ type, data ] );

	const expressPriceExtra = expressPrice - normalPrice;

	return {
		expressPriceExtra,
		expressPrice,
		normalPrice,
		currency,
		formattedExpressPrice: formatCurrency( expressPrice, currency ),
		formattedNormalPrice: formatCurrency( normalPrice, currency ),
		formattedExpressPriceExtra: formatCurrency( expressPriceExtra, currency ),
	};
};

export const useOnPagePrice = () => {
	return usePriceSelect( 'onpage', { wordCount: getWordCount() } );
};
export const useAccessibilityPrice = () => {
	return usePriceSelect( 'accessibility' );
};

export const useProofreadingPrice = () => {
	return usePriceSelect( 'proofreading', { wordCount: getWordCount() } );
};

export const useLayoutPrice = () => {
	return usePriceSelect( 'layout', { wordCount: getWordCount() } );
};
