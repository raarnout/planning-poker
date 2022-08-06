import React from 'react';
import './header.scss';

/**
 * Primary UI component for user interaction
 */
export const Header = () => {
	return (
		<header id="header" className="container-fluid text-center">
			<div className="row">
				<div className="col"></div>
				<div className="col-8 align-items-center">
					<h1>Planning Poker</h1>
				</div>
				<div className="col"></div>
			</div>
		</header>
	);
};
