import { Path, SVG } from '@wordpress/components';

export default function icon() {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" size="20" style={ {
			width: '20px',
			height: '20px'
		} }>
			<Path fill="currentColor" d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"></Path>
		</SVG>
	);
}
