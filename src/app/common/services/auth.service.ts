import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class AuthService {
	constructor(private _authService: AngularFireAuth) {}

	singInWithEmailAndPassword(email: string, password: string) {
		return this._authService.signInWithEmailAndPassword(email, password);
	}

	sendPasswordResetEmail(email: string) {
		return this._authService.sendPasswordResetEmail(email);
	}

	verifyPasswordresetCode(actionCode: string): Promise<string> {
		return this._authService.verifyPasswordResetCode(actionCode);
	}

	confirmPasswordReset(actioncode: string, newPassword: string) {
		return this._authService.confirmPasswordReset(actioncode, newPassword);
	}
}
