import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	mode = '';
	actionCode = '';
	actionCodeChecked = false;
	newPassword = '';
	confirmPassword = '';

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private auth: AuthService
	) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			// No parametros no party
			try {
				if (!params) void this.router.navigate(['/login']);

				this.mode = String(params['mode']);
				this.actionCode = String(params['oobCode']);

				if (params['mode'] === 'resetPassword') {
					// Verificar si el código de reseteo es válido
					void this.verifyPasswordResetCode(this.actionCode);
				}
			} catch (error) {
				console.error('Error cl:', error);
			}
		});
	}

	async verifyPasswordResetCode(actionCode: string): Promise<void> {
		try {
			await this.auth.verifyPasswordresetCode(actionCode);
			this.actionCodeChecked = true;
		} catch (error) {
			alert(error);
			void this.router.navigate(['/login']);
		}
	}

	async handleResetPassword(): Promise<void> {
		if (this.newPassword != this.confirmPassword) {
			alert('New Password and Confirm Password do not match');
			return;
		}
		// Guardar la nueva clave.
		try {
			await this.auth.confirmPasswordReset(this.actionCode, this.newPassword);
			alert('New password has been saved');
			void this.router.navigate(['/login']);
		} catch (error) {
			alert(error);
		}
	}
}
