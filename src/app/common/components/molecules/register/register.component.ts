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
	data: IDataDialog = {
		titleModal: 'Vacio',
		contentModal: 'Lleno'
	};
	public registerForm = new FormGroup({
		userName: new FormControl(),
		email: new FormControl(),
		pass: new FormControl(),
		confirmPass: new FormControl()
	});

	declarations: IRegister = {};
	constructor(
		private formBuilder: FormBuilder,
		private modalService: ModalServiceService,
		public dialog: MatDialog
	) {
		this.declarations = {
			button: 'Registrar',
			enlace: 'Volver al login'
		};
	}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			userName: ['', Validators.required, Validators.minLength(4), Validators.maxLength(10)],
			email: ['', Validators.required, Validators.email],
			pass: ['', Validators.required, Validators.minLength(4), Validators.maxLength(10)],
			confirmPass: ['', Validators.required, Validators.minLength(4), Validators.maxLength(10)]
		});
	}

	onSubmit() {
		console.log(this.registerForm.value);
	}

	clickModalTerms() {
		this.modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
