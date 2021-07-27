import { useSelect } from '@wordpress/data';

export const useServices = () => {
	const { services = {} } = useSelect( ( select ) => {
		return select( 'bm/concierge' ).getServices();
	}, [] );

	const { onpage, proofreading, layout, accessibility } = services;

	return {
		enabledServicesCount: Object.keys( services ).length,
		hasLoadedServices: Object.keys( services ).length > 0,
		isOnpageEnabled: onpage === true,
		isProofreadingEnabled: proofreading === true,
		isLayoutEnabled: layout === true,
		isAccessibilityEnabled: accessibility === true,
	};
};
