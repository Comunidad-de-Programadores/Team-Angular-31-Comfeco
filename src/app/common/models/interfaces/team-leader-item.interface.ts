export interface ITeamLeaderItem {
	id?: number;
	leader_name: string;
	image: string;
	type: Framework;
}

export enum Framework {
	Angular = 'assets/images/frameworks-logos/angular-logo.png',
	React = 'assets/images/frameworks-logos/react-logo.png',
	Svelte = 'assets/images/frameworks-logos/svelte-logo.png',
	Vue = 'assets/images/frameworks-logos/vue-logo.png',
	Leaders2022 = 'Leaders2022'
}
