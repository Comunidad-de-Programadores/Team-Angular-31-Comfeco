import { Component, Input } from '@angular/core';
import { IEvent } from './../../../models/carousel';

@Component({
	selector: 'app-item-event',
	templateUrl: './item-event.component.html',
	styleUrls: ['./item-event.component.scss']
})
export class ItemEventComponent {
	@Input() item: IEvent = <IEvent>{};
}
