import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent {
	@Input() image = '';
	@Input() title = '';
	@Input() description = '';
}
