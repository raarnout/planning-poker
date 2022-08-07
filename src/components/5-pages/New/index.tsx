import { createNewGame } from '../../../api/firebase';
import { useEffect } from 'react';

const createGame = async () => {
	createNewGame();
};

export const New = () => {
	useEffect(() => {
		createGame();
	});

	return (
		<section id="main" className="container-fluid text-center">
			new
		</section>
	);
};
