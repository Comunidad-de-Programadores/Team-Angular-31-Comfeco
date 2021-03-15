import { Component, OnInit } from '@angular/core';
import { ICardProfile } from '@team31/models/interfaces/user-profile.interface';
import { UserdataService } from '@team31/services/userdata.service';
import { AREA_ITEMS } from './../../../../../../common/models/constants/team-leader.const';

@Component({
	selector: 'app-submodule-profile',
	templateUrl: './submodule-profile.component.html',
	styleUrls: ['./submodule-profile.component.scss']
})
export class SubmoduleProfileComponent implements OnInit {
	constructor(private userdataService: UserdataService) {}
	dataProfile: ICardProfile = <ICardProfile>{};

	ngOnInit(): void {
		this.loadDataCardProfile();
	}

	loadDataCardProfile(): void {
		const dataService = this.userdataService.getUserProfileData;
		if (dataService) {
			this.dataProfile.area =
				AREA_ITEMS.find((area) => area.id === dataService.profile.idArea)?.value ?? '';
			this.dataProfile.biography = dataService.profile.biography ?? 'Actualiza tu Biografía';
			this.dataProfile.name = dataService.profile.nick ?? 'Actualiza tu Nick';
			if (dataService.profile.redSocial) {
				this.dataProfile.redSocial = dataService.profile.redSocial;
			}
		}
	}
}
