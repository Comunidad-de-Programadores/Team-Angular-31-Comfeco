import { Component } from '@angular/core';
import { IEvent } from '@team31/models/carousel';
import { EVENT_ITEMS } from '@team31/models/constants/team-leader.const';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent {
	listEvents: IEvent[] = EVENT_ITEMS;
}
