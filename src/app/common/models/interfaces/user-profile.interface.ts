import { Timestamp } from '@firebase/firestore-types';
export interface IUserProfile {
	nick?: string;
	email?: string;
	idGender?: number;
	dateB?: Timestamp;
	idCountry?: number;
	idArea?: number;
	facebook?: string;
	github?: string;
	linkedin?: string;
	twitter?: string;
	biography?: string;
	uid: string;
}

interface IInsignia {
	urlImage: string;
	name: string;
	description: string;
	howToWin: string;
}
export interface IUserData {
	email: string;
	uid: string;
	facebook?: string;
	github?: string;
	linkedin?: string;
	twitter?: string;
}
