import React from 'react';
import { Color } from '../../types/color';

interface IContainerProps {
	children: React.ReactNode;
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
	bgColor?: Color;
}

/**
 * Bootstrap container
 * https://getbootstrap.com/docs/5.0/examples/grid/#containers
 */
export const Container = (props: IContainerProps) => {
	const maxWidth: string = props.maxWidth ? `-${props.maxWidth}` : ``;
	const style: object = props.bgColor
		? { 'background-color': props.bgColor }
		: {};

	return (
		<div className={`container${maxWidth}`} style={style}>
			{props.children}
		</div>
	);
};
