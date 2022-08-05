import { useState, useEffect } from 'react';
import './scss/styles.scss';
import { db } from './api/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container } from './layout-components';

interface IGame {
	id: string;
	title: string;
}

const getGames = async () => {
	const gamesCollectionRef = collection(db, 'games');
	const data = await getDocs(gamesCollectionRef);
	const newData = data.docs.map(doc => ({
		id: doc.id,
		title: doc.data().title
	}));
	return newData;
};

const App = () => {
	const [games, setGames] = useState<IGame[]>([]);

	useEffect(() => {
		getGames()
			.then(games => {
				setGames(games);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Container maxWidth="sm" bgColor="#FF0000">
				{games.map((game, index) => {
					return (
						<div key={game.id} className={'layer layer-' + index}>
							<h2>Title: {game.title}</h2>
						</div>
					);
				})}
			</Container>
			<Container maxWidth="md" bgColor="#00FF00">
				{games.map((game, index) => {
					return (
						<div key={game.id} className={'layer layer-' + index}>
							<h2>Title: {game.title}</h2>
						</div>
					);
				})}
			</Container>
			<Container maxWidth="lg" bgColor="#0000FF">
				{games.map((game, index) => {
					return (
						<div key={game.id} className={'layer layer-' + index}>
							<h2>Title: {game.title}</h2>
						</div>
					);
				})}
			</Container>
		</div>
	);
};
export default App;
