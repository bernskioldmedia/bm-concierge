import { Button, PanelBody, SelectControl, Spinner } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useOrder } from '../../hooks/order';
import { useMachineTranslationPrice } from '../../hooks/price';
import OrderModal from '../order-modal';

export default function MachineTranslation() {
	const {
		orderModalOpen,
		orderSubmitted,
		placeOrder,
		closeOrderModal,
		openOrderModal,
	} = useOrder();
	const { formattedNormalPrice } = useMachineTranslationPrice();
	const [ targetLanguage, setTargetLanguage ] = useState( null );

	const title = () => {
		if ( formattedNormalPrice ) {
			return sprintf( __( 'Machine Translation: %s', 'bm-concierge' ), formattedNormalPrice );
		}

		return (
			<>{ __( 'Machine Translation: ', 'bm-concierge' ) }<Spinner /></>
		);
	};

	return (
		<PanelBody title={ title() } initialOpen={ false }>
			<p>{ __( 'Translate this page into a language of your choice instantly with our automated machine learning translation, powered by industry-leading DeepL.', 'bm-concierge' ) }</p>
			<ul>
				<li><strong>{ __( 'Turnaround', 'bm-concierge' ) }:</strong> { __( 'Immediately', 'bm-concierge' ) }</li>
				<li><strong>{ __( 'Price', 'bm-concierge' ) }:</strong> { formattedNormalPrice }</li>
			</ul>
			<Button variant="secondary" isSecondary onClick={ openOrderModal }>
				{ __( 'Proceed to Order', 'bm-concierge' ) }
			</Button>
			<OrderModal
				title={ __( 'Machine Translation Concierge', 'bm-concierge' ) }
				isOpen={ orderModalOpen }
				onClose={ closeOrderModal }
				hasBeenSubmitted={ orderSubmitted }
				submitButtonText={ __( 'Send for Machine Translation', 'bm-concierge' ) }
				showRefreshAfterSubmit={ true }
				onSubmit={ () => {
					placeOrder( {
						type: 'machine_translation',
						price: formattedNormalPrice,
						targetLanguage,
					} );
				} }
			>
				<p>{ __( 'Translate this page into a language of your choice instantly with our automated machine learning translation, powered by industry-leading DeepL.', 'bm-concierge' ) }</p>
				<p>{ __( "When you order, your text will be translated right away. Machine translations are a great way to kickstart translations but do require a human touch afterwards.", 'bm-concierge' ) }</p>
				<p><strong>{ __( "Note: The contents of the current page will be replaced with the translation." ) }</strong></p>
				<SelectControl
					label={ __( 'Language', 'bm-concierge' ) }
					onChange={ ( value ) => setTargetLanguage( value ) }
					value={ targetLanguage }
					options={ [
						{
							label: __( 'English (UK)' ),
							value: 'EN-GB',
						},
						{
							label: __( 'English (US)' ),
							value: 'EN-US',
						},
						{
							label: __( 'Swedish' ),
							value: 'SV',
						}
					] }
				/>
				<hr className="bm-concierge-divider" />
				<p>{ __( 'Your Price:', 'bm-concierge' ) } <strong>{ formattedNormalPrice }</strong></p>
			</OrderModal>
		</PanelBody>
	);
}
