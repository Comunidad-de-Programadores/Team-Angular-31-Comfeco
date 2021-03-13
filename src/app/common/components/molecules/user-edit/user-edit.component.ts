import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';
import { UserdataService } from '@team31/services/userdata.service';
import { CustomValidatorsService } from 'src/app/pages/authentication/common/service/custom-validators.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	show = false;
	uidProfile = '';
	changePassword = false;
	hidePassword = true;
	hideNewPassword = true;
	hideConfirmPassword = true;
	profileForm: FormGroup;
	currentUser: IUserProfile;
	constructor(
		private fb: FormBuilder,
		public authFirebase: AngularFireAuth,
		private _authService: AuthService,
		private customvalidators: CustomValidatorsService,
		private _messageService: MessageService,
		private userDataService: UserdataService
	) {
		this.currentUser = this.userDataService.getUserProfileData;
		this.profileForm = this.createForm();
	}

	ngOnInit(): void {
		this.loadProfileData();
		// this._authService.changePassword('123456');
	}

	get profileFormControl(): FormGroup['controls'] {
		return this.profileForm.controls;
	}

	loadProfileData(): void {
		// this.authFirebase.user.subscribe((user) => {
		// 	const uid = user?.uid || '';
		// 	console.log(uid);
		// 	this.uidProfile = user?.uid || '';
		// 	this._authService.loadProfileData(uid).subscribe((user: IUserProfile[]) => {
		// 		const currentUser = user[0];
		// 		console.log(user);
		// 		// console.log(currentUser.dateB);
		// 		this.profileFormControl['nick'].setValue(currentUser.nick);
		// 		this.profileFormControl['email'].setValue(currentUser.email);
		// 		this.profileFormControl['gender'].setValue(currentUser.gender);
		// 		this.profileFormControl['dateB'].setValue(new Date(currentUser.dateB || ''));
		// 		this.profileFormControl['country'].setValue(currentUser.country);
		// 		this.profileFormControl['area'].setValue(currentUser.area);
		// 		this.profileFormControl['facebook'].setValue(currentUser.facebook);
		// 		this.profileFormControl['github'].setValue(currentUser.github);
		// 		this.profileFormControl['linkedin'].setValue(currentUser.linkedin);
		// 		this.profileFormControl['twitter'].setValue(currentUser.twitter);
		// 		this.profileFormControl['biography'].setValue(currentUser.biography);
		// 	});
		// });

		console.log(this.currentUser);
		this.profileFormControl['nick'].setValue(this.currentUser.nick);
		this.profileFormControl['email'].setValue(this.currentUser.email);
		this.profileFormControl['gender'].setValue(this.currentUser.gender);
		this.profileFormControl['dateB'].setValue(new Date(this.currentUser.dateB || ''));
		this.profileFormControl['country'].setValue(this.currentUser.country);
		this.profileFormControl['area'].setValue(this.currentUser.area);
		this.profileFormControl['facebook'].setValue(this.currentUser.facebook);
		this.profileFormControl['github'].setValue(this.currentUser.github);
		this.profileFormControl['linkedin'].setValue(this.currentUser.linkedin);
		this.profileFormControl['twitter'].setValue(this.currentUser.twitter);
		this.profileFormControl['biography'].setValue(this.currentUser.biography);
	}

	createForm(): FormGroup {
		return this.fb.group(
			{
				nick: ['', [Validators.required, Validators.minLength(4)]],
				gender: ['', [Validators.required]],
				email: [{ value: '', disabled: true }, [Validators.required]],
				dateB: ['', [Validators.required]],
				country: ['', [Validators.required]],
				area: ['', [Validators.required]],
				changePassword: ['', []],
				password: ['', []],
				facebook: ['', [Validators.required]],
				github: ['', [Validators.required]],
				linkedin: ['', [Validators.required]],
				twitter: ['', [Validators.required]],
				biography: ['', [Validators.required]],
				newPassword: ['', [Validators.minLength(6)]],
				confirmPassword: ['', [Validators.minLength(6)]]
			},
			{
				validator: this.customvalidators.MatchPassword('newPassword', 'confirmPassword')
			}
		);
	}

	showToggle(): void {
		this.show = !this.show;
	}

	verifyPassword(): void {
		console.log(this.profileFormControl['password'].value);
		console.log(this._authService.verifyPassword(this.profileFormControl['password'].value));
	}

	saveProfile(): void {
		try {
			const dateB = formatDate(this.profileFormControl['dateB'].value, 'M/d/yy', 'EN');
			this.profileFormControl['dateB'].setValue(dateB);
			this._authService.updateProfileData(this.currentUser.uid, this.profileForm.value);
			this._messageService.openInfo('Perfil actualizado exitosamente', 'end', 'top');
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}
}
