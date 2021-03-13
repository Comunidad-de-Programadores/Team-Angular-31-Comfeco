export interface IUserProfile {
	nick?: string;
	email?: string;
	gender?: number;
	dateB?: string;
	country?: number;
	area?: number;
	facebook?: string;
	github?: string;
	linkedin?: string;
	twitter?: string;
	biography?: string;
	uid: string;
}

export interface IUserData {
	email: string;
	uid: string;
	facebook?: string;
	github?: string;
	linkedin?: string;
	twitter?: string;
}
