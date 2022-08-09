import Button from '../../1-atoms/Button';
import PokerGame from '../PokerGame';
import { useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();
	const param = useParams();

	let isValidId: boolean = false;
	if (param && param.id) {
		console.log('homepage read gameId = ', param);
		console.log('clear id from url');
		isValidId = true;
	}

	const navigateToNew = () => {
		navigate('/new');
	};

	return (
		<section id="main" className="container-fluid text-center">
			{isValidId ? (
				<PokerGame />
			) : (
				<Button
					label="start new Game"
					onClick={() => {
						navigateToNew();
					}}
				></Button>
			)}
		</section>
	);
};
