import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '../../../common/services/message.service';
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	email = 'kevin@comfeco.com';
	password = '123456';
	hidePassword = true;
	constructor(
		private auth: AuthService,
		private router: Router,
		private _messageService: MessageService
	) {}

	async login(): Promise<void> {
		try {
			const singIn = await this.auth.singInWithEmailAndPassword(this.email, this.password);
			if (singIn) {
				console.log(singIn);
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
			console.error('Error cl:', error);
		}
	}
}
