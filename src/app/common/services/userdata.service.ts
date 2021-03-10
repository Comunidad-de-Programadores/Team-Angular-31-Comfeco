import { Injectable } from '@angular/core';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';

@Injectable({
	providedIn: 'root'
})
export class UserdataService {
	userProfileData: IUserProfile = <IUserProfile>{};

	set setUserProfileData(data: IUserProfile) {
		this.userProfileData = data;
	}

	get getUserProfileData(): IUserProfile {
		return this.userProfileData;
	}
}
