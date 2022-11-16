import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../1-atoms/Button';
import PokerGame from '../PokerGame';
import { isGameExisting } from '../../../persistence/games';
import { PageState } from '../../../constants/enums/page-state';
export const Home = () => {
	const [pageState, setPageState] = useState(PageState.NEW);
	const navigate = useNavigate();
	const param = useParams();

	/*
	 * react-router-dom history.replace() does refresh the page sometimes.
	 * To avoid this, we use windows.history.replaceState();
	 */
	const removeIdFromURL = () => {
		window.history.replaceState(null, 'home', '/');
	};

	useEffect(() => {
		if (param?.id) {
			setPageState(PageState.LOADING);
			const fetchData = async () => {
				const isExisting = await isGameExisting(param.id as string);
				const pageState = isExisting ? PageState.EXISTING : PageState.NEW;
				setPageState(pageState);
				if (pageState === PageState.NEW) {
					removeIdFromURL();
				}
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
						return <div>something went wrong</div>;
				}
			})()}
		</section>
	);
};
