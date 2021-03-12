import { Component, Input } from '@angular/core';
import { IActivities } from '@team31/models/interfaces/activities-item.interface';

@Component({
	selector: 'app-item-activity',
	templateUrl: './item-activity.component.html',
	styleUrls: ['./item-activity.component.scss']
})
export class ItemActivityComponent {
	@Input() itemActivity: IActivities = <IActivities>{};
}
