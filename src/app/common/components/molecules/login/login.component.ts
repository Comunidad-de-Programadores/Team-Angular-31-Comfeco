import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	email = 'kevin@comfeco.com';
	password = '123456';

	constructor(private auth: AuthService, private router: Router) {}

	async login(): Promise<void> {
		try {
			const singIn = await this.auth.singInWithEmailAndPassword(this.email, this.password);
			if (singIn) {
				void this.router.navigate(['profile']);
			}
		} catch (error) {
			console.error('Error cl:', error);
		}
	}

	async resetPassword(): Promise<void> {
		try {
			await this.auth.sendPasswordResetEmail(this.email);
			alert('A password reset link has been sent to your emailaddress');
		} catch (error) {
			console.error('Error: ', error);
		}
	}
}
