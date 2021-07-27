import { Button, Flex, FlexBlock, FlexItem, Modal, Notice } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';

export default function OrderModal( props ) {
	const {
		title,
		isOpen,
		onClose,
		hasBeenSubmitted,
		children,
		submitButtonText = __( 'Place Order', 'bm-concierge' ),
		thankYouNotice = __( 'Thanks for placing your concierge order. You will receive a confirmation at your e-mail address shortly.', 'bm-concierge' ),
		onSubmit,
	} = props;

	if ( ! isOpen ) {
		return null;
	}

	return (
		<Modal title={ title } onRequestClose={ onClose } style={ { maxWidth: 'calc(100% - 96px)', width: '640px' } }>
			{ hasBeenSubmitted ? (
				<Notice status="success" isDismissible={ false }>
					{ thankYouNotice }
				</Notice>
			) : (
				  <>
					  { children }
					  <Flex expanded={ true } justify="flex-end">
						  <FlexBlock>
							  <Button href={ _x( 'https://bernskioldmedia.com/en/terms-policies/concierge/', 'concierge terms page', 'bm-concierge' ) } target="_blank" style={ {
								  color: '#666',
								  textDecoration: 'underline',
							  } }>
								  { __( 'Our concierge terms apply ›', 'bm-concierge' ) }
							  </Button>
						  </FlexBlock>
						  <FlexItem>
							  <Button variant="secondary" isSecondary onClick={ onClose } style={ { margin: '4px' } }>
								  { __( 'Never Mind', 'bm-concierge' ) }
							  </Button>
						  </FlexItem>
						  <FlexItem>
							  <Button variant="primary" isPrimary onClick={ onSubmit } style={ { margin: '4px' } }>
								  { submitButtonText }
							  </Button>
						  </FlexItem>
					  </Flex>
				  </>
			  ) }
		</Modal>
	);
}
