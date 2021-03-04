import { Component } from '@angular/core';
import { Sponsor, TeamLeader } from '@team31/models/carousel';

@Component({
	selector: 'app-principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
	sourceTeamLeader: Array<TeamLeader>;
	sourceSponsor: Array<Sponsor>;
	constructor() {
		this.sourceTeamLeader = [
			{
				name: 'Kevin',
				photo: 'kevin.jpg',
				technology: 'Angular'
			},
			{
				name: 'Jimmy',
				photo: 'jimmy.jpg',
				technology: 'Angular'
			},
			{
				name: 'Kurt',
				photo: 'kurt.jpg',
				technology: 'Angular'
			},
			{
				name: 'William',
				photo: 'william.jpg',
				technology: 'Angular'
			},
			{
				name: 'Whisgel',
				photo: 'whisgel.jpg',
				technology: 'Angular'
			}
		];
		this.sourceSponsor = [
			{ photo: 'image1' },
			{ photo: 'image2' },
			{ photo: 'image3' },
			{ photo: 'image4' },
			{ photo: 'image5' },
			{ photo: 'image6' },
			{ photo: 'image7' },
			{ photo: 'image8' },
			{ photo: 'image9' }
		];
	}
}
