import { Component, Input } from '@angular/core';
import { IEvent } from '../../../models/carousel';

@Component({
	selector: 'app-item-event-user',
	templateUrl: './item-event-user.component.html',
	styleUrls: ['./item-event-user.component.scss']
})
export class ItemEventUserComponent {
	@Input() item: IEvent = <IEvent>{};
}
