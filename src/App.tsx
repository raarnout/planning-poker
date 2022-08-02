import { useState, useEffect } from 'react';
import './scss/styles.scss';
import { db } from './persistence/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
		<div className="App">
			{games.map(game => {
				return (
					<div key={game.id}>
						<h2>Title: {game.title}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default App;
