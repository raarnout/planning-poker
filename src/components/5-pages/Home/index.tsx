import Button from '../../1-atoms/Button';
import PokerGame from '../PokerGame';
import { useNavigate, useParams } from 'react-router-dom';
import { isValidGameId } from '../../../api/firebase';
import { useEffect, useState } from 'react';

enum PageState {
	LOADING = 0,
	NEW = 1,
	EXISTING = 2,
	ERROR = 3
}

export const Home = () => {
	const [pageState, setPageState] = useState(PageState.NEW);
	const navigate = useNavigate();
	const param = useParams();

	useEffect(() => {
		if (param?.id) {
			setPageState(PageState.LOADING);
			const fetchData = async () => {
				const isValid = await isValidGameId(param.id as string);
				const pageState = isValid ? PageState.EXISTING : PageState.NEW;
				setPageState(pageState);
			};

			fetchData().catch(() => setPageState(PageState.ERROR));
		}
	}, [param.id]);

	const navigateToNew = () => {
		navigate('/new');
	};

	return (
		<section id="main" className="container-fluid text-center">
			{(() => {
				switch (pageState) {
					case PageState.LOADING:
						return <div>isLoading</div>;
					case PageState.NEW:
						return (
							<Button
								label="start new Game"
								onClick={() => {
									navigateToNew();
								}}
							></Button>
						);
					case PageState.EXISTING:
						return <PokerGame />;
					case PageState.ERROR:
						return <div>error</div>;
				}
			})()}
		</section>
	);
};
