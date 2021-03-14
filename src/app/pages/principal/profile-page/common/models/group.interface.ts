export interface IGroups {
	urlLogo: string;
	nameTechnology: string;
	nameGroup: string;
	description: string;
	members: Array<IMember>;
}

export interface IMember {
	name: string;
	level: string;
}
