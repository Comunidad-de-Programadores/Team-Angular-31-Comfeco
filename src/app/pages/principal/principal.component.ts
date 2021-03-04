import { Component } from '@angular/core';
import { Sponsor, TeamLeader } from '@team31/models/carousel';
import { ITeamLeaderItem, Framework } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
	sourceTeamLeader: Array<ITeamLeaderItem>;
	sourceSponsor: Array<Sponsor>;
	constructor() {
		this.sourceTeamLeader = [
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			},
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			},
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			},
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			},
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			},
			{
				leader_name: 'Kevin',
				image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
				type: Framework.Angular
			}
		];
		this.sourceSponsor = [
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' },
			{ photo: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg' }
		];
	}
}
