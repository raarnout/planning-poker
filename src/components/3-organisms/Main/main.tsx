import Button from '../../1-atoms/Button';
import { createNewGame } from '../../../api/firebase';

const createGame = async () => {
	console.log('create new game');
	createNewGame();
};

export const Main = () => {
	return (
		<section id="main" className="container-fluid text-center">
			<Button label="start new Game" onClick={createGame}></Button>
		</section>
	);
};
