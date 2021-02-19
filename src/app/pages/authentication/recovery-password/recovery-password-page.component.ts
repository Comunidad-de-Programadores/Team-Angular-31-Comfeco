import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../common/services/auth.service';

@Component({
	selector: 'app-recovery-password-page',
	templateUrl: './recovery-password-page.component.html',
	styleUrls: ['./recovery-password-page.component.scss']
})
export class RecoveryPasswordPageComponent {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	recoveryForm: FormGroup;

	constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) {
		this.recoveryForm = this.fb.group({
			email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
		});
	}

	get recoveryFormControl(): FormGroup['controls'] {
		return this.recoveryForm.controls;
	}

	async sendPasswordResetEmail(): Promise<void> {
		try {
			await this._authService.sendPasswordResetEmail(this.recoveryForm.controls['email'].value);
			void this.router.navigate(['login']);
		} catch (error) {
			console.error('Error cl:', error);
		}
	}
}
