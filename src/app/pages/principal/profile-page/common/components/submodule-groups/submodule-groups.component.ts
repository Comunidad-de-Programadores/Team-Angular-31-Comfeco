import { Component, OnInit } from '@angular/core';
import { IGroups } from '@team31/models/interfaces/profile-module.interface';
import { ProfileService } from '@team31/services/profile.service';

@Component({
	selector: 'app-submodule-groups',
	templateUrl: './submodule-groups.component.html',
	styleUrls: ['./submodule-groups.component.scss']
})
export class SubmoduleGroupsComponent implements OnInit {
	constructor(private profileService: ProfileService) {}

	ngOnInit(): void {
		this.profileService.getGroups().subscribe((groups: IGroups[]) => {
			groups.forEach((group) => {
				console.log(JSON.parse(group.members.toString()));
			});
		});
	}
}
