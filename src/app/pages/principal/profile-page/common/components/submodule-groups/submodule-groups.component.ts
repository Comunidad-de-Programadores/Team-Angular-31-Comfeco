import { Component, OnInit } from '@angular/core';
import { IGroups } from '../../models/group.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'app-submodule-groups',
	templateUrl: './submodule-groups.component.html',
	styleUrls: ['./submodule-groups.component.scss']
})
export class SubmoduleGroupsComponent implements OnInit {
	constructor(private profileService: ProfileService) {}

	ngOnInit(): void {
		this.profileService.getGroups().subscribe((groups: IGroups[]) => {
			console.log(groups);
			groups.forEach((group) => {
				console.log(JSON.parse(group.members.toString()));
			});
		});
	}
}
