import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IDataDialog } from '@team31/models/data-dialog';
import { IRegister } from '@team31/models/register';
import { ModalServiceService } from '@team31/services/modal-service.service';
import { VariableStatic } from 'src/app/common/static/variable-static';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	data: IDataDialog = {
		titleModal: 'Vacio',
		contentModal: 'Lleno'
	};

	registerForm: FormGroup;

	declarations: IRegister = {};

	public createForm() {
		return new FormGroup({
			userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
			email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
			pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
			confirmPass: new FormControl('', [Validators.required, Validators.minLength(8)])
		});
	}

	constructor(
		private modalService: ModalServiceService,
		public dialog: MatDialog,
		private fb: FormBuilder
	) {
		this.registerForm = this.createForm();
		this.declarations = {
			button: 'Registrar',
			enlace: 'Volver al login'
		};
	}

	onSubmit(): void {
		console.log('Saved');
		this.registerForm.reset();
	}

	clickModalTerms() {
		this.modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
