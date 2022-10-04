import { db } from './firebase-config';
import {
	addDoc,
	collection,
	CollectionReference,
	DocumentData
} from 'firebase/firestore';

const getCollectionRef = (): CollectionReference<DocumentData> => {
	return collection(db, 'users');
};

export type Role = 'HOST' | 'SPECTATOR' | 'ATTENDEE';

export type UserData = {
	id?: string;
	name: string;
    role: Role;
};

export const createUser = async (
	data: UserData
): Promise<string> => {
	const UserRef = await addDoc(getCollectionRef(), data);
	return UserRef.id;
};
