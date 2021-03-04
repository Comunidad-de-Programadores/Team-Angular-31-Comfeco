import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, switchMap } from 'rxjs/internal/operators';
import { CanActivate, Router } from '@angular/router';
// import { MessageService } from '@team31/services/message.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AngularFireAuth // private _messageService: MessageService
	) {}

	canActivate(): Observable<boolean> {
		return this.auth.authState.pipe(
			take(1),
			// eslint-disable-next-line @typescript-eslint/require-await
			switchMap(async (authState) => {
				console.log(authState);
				if (authState) {
					return true;
				} else {
					console.log('No autenticado');
					void this.router.navigate(['/login']);
					return false;
				}
			})
		);
	}
}
