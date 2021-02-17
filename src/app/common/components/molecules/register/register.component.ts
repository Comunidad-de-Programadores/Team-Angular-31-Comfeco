import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegister } from '../../../models/register';
import { ModalServiceService } from '../../../services/modal-service.service';
import { MatDialog } from '@angular/material/dialog';
import { IDataDialog } from '../../../models/data-dialog';
import { VariableStatic } from '../../../static/variable-static';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	data: IDataDialog = {
		titleModal: 'Vacio',
		contentModal: 'Lleno'
	};
	public createForm() {
		return new FormGroup({
			userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
			email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
			pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
			confirmPass: new FormControl('', [Validators.required, Validators.minLength(8)])
		});
	}

	registerForm: FormGroup;

	declarations: IRegister = {};
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

	ngOnInit(): void {}

	onSubmit(): void {
		console.log('Saved');
		this.registerForm.reset();
	}

	clickModalTerms() {
		this.modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
