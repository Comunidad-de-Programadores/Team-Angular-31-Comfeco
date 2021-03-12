import { Component } from '@angular/core';
import { IActivities } from '@team31/models/interfaces/activities-item.interface';

@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
	activitiesItems: Array<IActivities> = [
		{
			titleMessage: 'PROGRAMACION EN GRUPO'
		}
	];
}
