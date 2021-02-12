import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	email = 'kevin@comfeco.com';
	password = '123456';

	constructor(private auth: AngularFireAuth, private router: Router) {}

	async login(): Promise<void> {
		try {
			const singIn = await this.auth.signInWithEmailAndPassword(this.email, this.password);
			if (singIn) {
				void this.router.navigate(['profile']);
			}
		} catch (error) {
			console.error('Error cl:', error);
		}
	}

	async register(): Promise<void> {
		try {
			const singIn = await this.auth.createUserWithEmailAndPassword(this.email, this.password);
			if (singIn) {
				console.log(singIn);
				void this.router.navigate(['profile']);
			}
		} catch (error) {
			console.log(error);
		}
	}
}
