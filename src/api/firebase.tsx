import { db } from './firebase-config';
import {
	addDoc,
	collection,
	CollectionReference,
	doc,
	DocumentData,
	getDoc
} from 'firebase/firestore';

type DocPath = 'games';
type DocData = GameData;

const getCollectionRef = (
	docPath: string
): CollectionReference<DocumentData> => {
	return collection(db, docPath);
};

export type GameData = {
	id?: string;
	title: string;
};

export const createDoc = async (
	docPath: DocPath,
	data: DocData
): Promise<string> => {
	const docRef = await addDoc(getCollectionRef(docPath), data);
	return docRef.id;
};

export const isValidGameId = async (id: string): Promise<boolean> => {
	const docRef = await doc(db, 'games', id);
	const docSnap = await getDoc(docRef);
	return docSnap.exists();
};
