import Button from '../../1-atoms/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	let navigate = useNavigate();
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
