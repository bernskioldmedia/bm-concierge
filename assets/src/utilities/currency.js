export function formatCurrency( value, currency ) {
	if ( ! currency ) {
		return value;
	}

	return Intl.NumberFormat( getLocaleForCurrency( currency ), {
		style: 'currency',
		currency,
		maximumFractionDigits: 0,
	} ).format( value );
}

export function getLocaleForCurrency( currency ) {
	switch ( currency ) {
		case 'SEK':
			return 'sv-SE';

		default:
			return 'en-US';
	}
}
