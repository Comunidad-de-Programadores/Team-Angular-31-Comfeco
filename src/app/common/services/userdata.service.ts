import { Injectable } from '@angular/core';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';

@Injectable({
	providedIn: 'root'
})
export class UserdataService {
	userProfileData: IUserProfile | undefined;

	set setUserProfileData(data: IUserProfile) {
		this.userProfileData = data;
	}

	get getUserProfileData(): IUserProfile | undefined {
		return this.userProfileData;
	}

	updateProfileData(data: IUserProfile, updateData: Partial<IUserProfile>): IUserProfile {
		return { ...data, ...updateData };
	}
}
