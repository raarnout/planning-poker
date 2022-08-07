import { createNewGame } from '../../../api/firebase';
import Button, { ButtonType } from '../../1-atoms/Button';

const createGame = async () => {
	createNewGame();
};

export const New = () => {
	return (
		<section id="main" className="container-fluid text-center">
			<div>
				<span>Title</span> <input></input>
			</div>
			<div>
				<span>Voting System</span>
				<input></input>
			</div>
			<Button
				label={'Create Game'}
				type={ButtonType.SUBMIT}
				onClick={createGame}
			></Button>
		</section>
	);
};
