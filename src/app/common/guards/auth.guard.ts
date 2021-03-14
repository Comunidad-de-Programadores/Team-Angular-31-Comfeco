import { HostListener, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/internal/operators';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from '@team31/services/message.service';
import { UserdataService } from '@team31/services/userdata.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	@HostListener('window:beforeunload', ['$event'])
	setCurrentUserData(): void {
		// sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
		console.log('xd');
	}

	constructor(
		private router: Router,
		private auth: AngularFireAuth,
		private _messageService: MessageService,
		private userDataService: UserdataService
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
		this.detechRefreshPage();
		return response;
	}

	// I determine if the current route-request is part of a page refresh.
	private isPageRefresh(): boolean {
		// If the router has yet to establish a single navigation, it means that this
		// navigation is the first attempt to reconcile the application state with the
		// URL state. Meaning, this is a page refresh.
		return !this.router.navigated;
	}

	private detechRefreshPage() {
		window.onbeforeunload = () => {
			sessionStorage.setItem(
				'currentUser',
				JSON.stringify(this.userDataService.getUserProfileData)
			);
		};
	}
}
