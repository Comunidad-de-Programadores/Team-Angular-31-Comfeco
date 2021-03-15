import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';
import { AuthService } from '@team31/services/auth.service';
import { HeaderService } from '@team31/services/header.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../common/services/message.service';
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
	email = 'kevin@comfeco.com';
	password = '123456';
	hidePassword = true;
	dataSubscription: Subscription | undefined;
	constructor(
		private authFirebase: AuthService,
		private _messageService: MessageService,
		private router: Router,
		private userDataService: UserdataService,
		private headerService: HeaderService
	) {}

	ngOnDestroy(): void {
		this.dataSubscription?.unsubscribe();
	}

	async login(): Promise<void> {
		try {
			const singIn = await this.authFirebase.singInWithEmailAndPassword(this.email, this.password);
			if (singIn && singIn.user) {
				const userDataService = await this.authFirebase.loadProfileData(singIn.user.uid);
				if (userDataService) {
					userDataService.profile.uid = singIn.user.uid;
					userDataService.profile.email = this.email;

					this.userDataService.setUserProfileData = userDataService;

					void this.router.navigateByUrl('/principal');
					this.headerService.showMenu(true);
				}
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
			console.error('Error cl:', error);
		}
	}
}
