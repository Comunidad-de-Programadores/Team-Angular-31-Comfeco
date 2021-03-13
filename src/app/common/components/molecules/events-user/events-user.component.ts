import { Component } from '@angular/core';
import { IEvent } from '@team31/models/carousel';
import { EVENT_ITEMS } from '@team31/models/constants/team-leader.const';

@Component({
	selector: 'app-events-user',
	templateUrl: './events-user.component.html',
	styleUrls: ['./events-user.component.scss']
})
export class EventsUserComponent {
	listEvents: IEvent[] = EVENT_ITEMS;
}
