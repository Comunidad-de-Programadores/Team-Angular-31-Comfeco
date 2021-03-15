import { TypeNameSubMenu } from '@team31/models/types';

export interface IEvents {
	urlImage: string;
	name: string;
	description: string;
}

export interface ISubMenu {
	pathImage: string;
	name: TypeNameSubMenu;
	select: boolean;
}
