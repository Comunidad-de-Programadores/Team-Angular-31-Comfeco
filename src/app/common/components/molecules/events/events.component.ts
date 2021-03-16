import { Component, Input } from '@angular/core';
import { IEvents } from '@team31/models/interfaces/profile-module.interface';
import { ChannelEventsService } from '@team31/services/channel-events.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent {
	@Input() item: IEvents = <IEvents>{};

	constructor(private channelEventsService: ChannelEventsService) {}
	clickParticipate(): void {
		this.channelEventsService.sendEvent(this.item);
	}
}
