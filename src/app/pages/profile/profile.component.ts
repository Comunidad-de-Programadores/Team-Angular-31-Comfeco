import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	name = '';
	constructor(public auth: AngularFireAuth) {}

	async edit(): Promise<void> {
		const authUser = await this.auth.currentUser;
		try {
			void authUser?.updateProfile({ displayName: this.name });
		} catch (error) {
			console.log(error);
		}
	}
}
