import { ref, set, push } from 'firebase/database';
import { db } from './firebase';

type User = {
	name: string;
};

const usersRef = ref(db, 'users');

const addUser = async (userData: User) => {
	const newUserRef = push(usersRef);
	set(newUserRef, userData);
	return newUserRef.key;
};

export { addUser };
