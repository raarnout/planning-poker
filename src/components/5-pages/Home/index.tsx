import Button from '../../1-atoms/Button';
import { useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();
	const gameId = useParams().gameId;
	console.log('gameId: ', gameId);

	const navigateToNew = () => {
		console.log('navigateToNew');
		navigate('/new');
	};

	return (
		<section id="main" className="container-fluid text-center">
			<Button
				label="start new Game"
				onClick={() => {
					navigateToNew();
				}}
			></Button>
		</section>
	);
};
