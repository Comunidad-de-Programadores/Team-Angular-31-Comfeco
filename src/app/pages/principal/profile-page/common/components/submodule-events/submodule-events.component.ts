import { Component, OnInit } from '@angular/core';
import { IEvents } from '@team31/models/interfaces/profile-module.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'app-submodule-events',
	templateUrl: './submodule-events.component.html',
	styleUrls: ['./submodule-events.component.scss']
})
export class SubmoduleEventsComponent implements OnInit {
	constructor(private profileService: ProfileService) {}

	listEvents: IEvents[] = [];
	ngOnInit(): void {
		this.profileService.getEvents().subscribe((events) => {
			this.listEvents = events;
		});
	}
}
