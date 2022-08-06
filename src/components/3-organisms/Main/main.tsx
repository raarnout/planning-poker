import { Color } from '../../../types/color';
import { MouseEvent } from 'react';
import Button from '../../1-atoms/Button';

interface MainProps {
	bgColor?: Color;
}

export const Main = (props: MainProps) => {
	const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const button: HTMLButtonElement = event.currentTarget;
		console.log('start new game', button);
	};

	return (
		<section id="main" className="container-fluid text-center">
			<Button label="New Game" onClick={clickHandler}></Button>
		</section>
	);
};
