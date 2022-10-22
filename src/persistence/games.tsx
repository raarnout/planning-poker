import { ref, set, push, get, child } from 'firebase/database';
import { db } from './firebase';

type Game = {
	title: string;
	host: string;
	votingSystem: string;
};

const gamesRef = ref(db, 'games');

const addGame = async (gameData: Game) => {
	const newGameRef = push(gamesRef);
	set(newGameRef, gameData);
	return newGameRef.key;
};

const isGameExists = async (gameKey: string) => {
	let isExisting = false;
	await get(child(gamesRef, `/${gameKey}`)).then(snapshot => {
		isExisting = snapshot.exists();
	});
	return isExisting;
};

export { addGame, isGameExists };
