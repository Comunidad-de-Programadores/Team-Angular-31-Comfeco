import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDataDialog } from '@team31/models/data-dialog';
import { IRegister } from '@team31/models/register';
import { ModalServiceService } from '@team31/services/modal-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomValidatorsService } from '../common/service/custom-validators.service';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	data: IDataDialog = {
		titleModal: 'Vacio',
		contentModal: 'Lleno'
	};
	registerForm: FormGroup;

	declarations: IRegister = {};

	constructor(
		private modalService: ModalServiceService,
		public dialog: MatDialog,
		private fb: FormBuilder,
		private customvalidators: CustomValidatorsService
	) {
		this.registerForm = this.fb.group(
			{
				userName: ['', [Validators.required, Validators.minLength(5)]],
				email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
				pass: [
					'',
					Validators.compose([Validators.required, this.customvalidators.patternValidator()])
				],
				confirmPass: ['', [Validators.required]]
			},
			{
				validator: this.customvalidators.MatchPassword('pass', 'confirmPassword')
			}
		);
		this.declarations = {
			button: 'Registrar',
			enlace: 'Volver al login'
		};
	}

	get registerFormControl(): FormGroup['controls'] {
		return this.registerForm.controls;
	}

	onSubmit(): void {
		console.log('Saved');
		this.registerForm.reset();
	}

	clickModalTerms(): void {
		// this.modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
