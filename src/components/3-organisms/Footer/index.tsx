import { Color } from '../../../constants/types/color';

interface FooterProps {
	bgColor?: Color;
}

/**
 * Primary UI component for user interaction
 */
export const Footer = (props: FooterProps) => {
	return (
		<footer id="footer" className="container-fluid text-center mt-5">
			<div className="row">
				<div className="col"></div>
				<div className="col-8 align-items-center">Footer</div>
				<div className="col"></div>
			</div>
		</footer>
	);
};
