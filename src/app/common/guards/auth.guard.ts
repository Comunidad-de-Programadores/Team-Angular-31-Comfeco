import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/internal/operators';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from '@team31/services/message.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AngularFireAuth,
		private _messageService: MessageService
	) {}

	canActivate(): Observable<boolean> {
		// const token = await this.auth.idToken.toPromise();
		// console.log(token);
		// return true;
		return this.auth.authState.pipe(
			take(1),
			// eslint-disable-next-line @typescript-eslint/require-await
			switchMap(async (authState) => {
				// console.log(authState);
				if (authState) {
					return true;
				} else {
					void this.router.navigate(['/login']);
					this._messageService.openError('Primero inicia sesión	', 'end', 'top');
					return false;
				}
			})
		);
	}
}
