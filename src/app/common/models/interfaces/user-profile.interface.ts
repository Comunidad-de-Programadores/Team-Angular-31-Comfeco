import { Timestamp } from '@firebase/firestore-types';

export interface IUserProfile {
	profile: IUser;
	insignia?: IUserInsignia[];
	group?: IGroupUser;
	events?: IUserEvents[];
}

interface IUser {
	nick?: string;
	email?: string;
	idGender?: number;
	dateB?: Timestamp;
	idCountry?: number;
	idArea?: number;
	redSocial?: IRedSocial;
	biography?: string;
	uid?: string;
}

interface IUserInsignia {
	urlImage: string;
	name: string;
}

interface IGroupUser {
	name: string;
	urlLogo: string;
	members: IMemberGroup[];
}

interface IMemberGroup {
	name: string;
	level: string;
}

interface IUserEvents {
	urlImage: string;
	name: string;
}

export interface ICardProfile {
	name: string;
	area: string;
	biography: string;
	redSocial: IRedSocial;
}

interface IRedSocial {
	facebook?: string;
	github?: string;
	linkedin?: string;
	twitter?: string;
}
