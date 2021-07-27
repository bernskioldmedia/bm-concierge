import apiFetch from '@wordpress/api-fetch';
import { createReduxStore } from '@wordpress/data';

const DEFAULT_STATE = {
	services: [],
	prices: {},
};

const actions = {
	* placeOrder( data ) {
		const response = yield actions.postToApi( '/bm-concierge/v1/order', data );
		return {
			type: 'PLACE_ORDER',
			response,
		};
	},
	setServices( services ) {
		return {
			type: 'SET_SERVICES',
			services,
		};
	},
	setPrices( service, express, normal, currency ) {
		return {
			type: 'SET_PRICES',
			service,
			express,
			normal,
			currency
		};
	},
	fetchFromApi( path ) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
	},
	postToApi( path, data ) {
		return {
			type: 'POST_TO_API',
			path,
			data
		};
	}
};

export default createReduxStore( 'bm/concierge', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'PLACE_ORDER':
				return {
					...state,
					data: action.data,
				};

			case 'SET_SERVICES':
				return {
					...state,
					services: action.services
				};

			case 'SET_PRICES':
				return {
					...state,
					prices: {
						...state.prices,
						[ action.service ]: {
							express: action.express,
							normal: action.normal,
							currency: action.currency,
						},
					},
				};
		}

		return state;
	},
	actions,
	selectors: {
		getServices( state ) {
			const { services } = state;
			return { services };
		},
		getPrices( state ) {
			const { prices } = state;
			return { prices };
		},
	},
	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},

		POST_TO_API( action ) {
			return apiFetch( {
				path: action.path,
				method: 'POST',
				data: action.data,
			} );
		},
	},
	resolvers: {
		* getPrices( type, data ) {
			const response = yield actions.postToApi( '/bm-concierge/v1/' + type, data );
			const { expressPrice, normalPrice, currency } = response;
			return actions.setPrices( type, expressPrice, normalPrice, currency );
		},
		* getServices() {
			const services = yield actions.fetchFromApi( '/bm-concierge/v1/services' );
			return actions.setServices( services );
		}
	},
} );
