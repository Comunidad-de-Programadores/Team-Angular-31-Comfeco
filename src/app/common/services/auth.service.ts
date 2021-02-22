import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
@Injectable()
export class AuthService {
	constructor(private _authService: AngularFireAuth) {}

	singInWithEmailAndPassword(
		email: string,
		password: string
	): Promise<firebase.auth.UserCredential> {
		return this._authService.signInWithEmailAndPassword(email, password);
	}

	sendPasswordResetEmail(email: string): Promise<void> {
		return this._authService.sendPasswordResetEmail(email);
	}

	verifyPasswordresetCode(actionCode: string): Promise<string> {
		return this._authService.verifyPasswordResetCode(actionCode);
	}

	confirmPasswordReset(actioncode: string, newPassword: string): Promise<void> {
		return this._authService.confirmPasswordReset(actioncode, newPassword);
	}

	createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
		return this._authService.createUserWithEmailAndPassword(email, password);
	}

	async setUsername(username: string): Promise<void> {
		const currentUser = await this._authService.currentUser;
		void currentUser?.updateProfile({
			displayName: username
		});
	}
}
