import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/internal/operators';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from '@team31/services/message.service';
import { UserdataService } from '@team31/services/userdata.service';
import { HeaderService } from '@team31/services/header.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AngularFireAuth,
		private _messageService: MessageService,
		private userDataService: UserdataService,
		private headerService: HeaderService
	) {}

	async canActivate(): Promise<boolean> {
		const response = await this.auth.authState
			.pipe(
				take(1),
				// eslint-disable-next-line @typescript-eslint/require-await
				switchMap(async (authState) => {
					if (authState) {
						if (!this.userDataService.getUserProfileData) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							this.userDataService.setUserProfileData = JSON.parse(
								sessionStorage.getItem('currentUser') || '{}'
							);
							sessionStorage.removeItem('currentUser');
						}
						return true;
					} else {
						void this.router.navigate(['/login']);
						this._messageService.openError('Primero inicia sesión	', 'end', 'top');
						return false;
					}
				})
			)
			.toPromise();

		const showHeader = sessionStorage.getItem('showHeader');
		if (showHeader && showHeader.includes('/principal')) {
			this.headerService.showMenu(true);
			sessionStorage.removeItem('showHeader');
		}
		this.detechRefreshPage();
		return response;
	}

	private detechRefreshPage() {
		window.onbeforeunload = () => {
			sessionStorage.setItem(
				'currentUser',
				JSON.stringify(this.userDataService.getUserProfileData)
			);
			sessionStorage.setItem('showHeader', this.router.url);
		};
	}
}
