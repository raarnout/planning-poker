import React from 'react';
import { Color } from '../../../types/color';

interface FooterProps {
	bgColor?: Color;
}

/**
 * Primary UI component for user interaction
 */
export const Footer = (props: FooterProps) => {
	return (
		<footer
			id="footer"
			className="container-fluid"
			style={{
				backgroundColor: props.bgColor
			}}
		>
			footer
		</footer>
	);
};
