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

type TypeNameSubMenu = 'Mi Perfil' | 'Insignias' | 'Grupos' | 'Eventos';
