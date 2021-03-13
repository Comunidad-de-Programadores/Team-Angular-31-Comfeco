import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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
	showVerifyPassword = false;
	showNewPassword = false;
	uidProfile = '';
	changePassword = false;
	hidePassword = true;
	hideNewPassword = true;
	hideConfirmPassword = true;
	profileForm: FormGroup;
	passwordsForm: FormGroup;
	currentUser: IUserProfile = <IUserProfile>{};

	constructor(
		private fb: FormBuilder,
		public authFirebase: AngularFireAuth,
		private _authService: AuthService,
		private customvalidators: CustomValidatorsService,
		private _messageService: MessageService,
		private userDataService: UserdataService
	) {
		if (this.userDataService.getUserProfileData) {
			this.currentUser = this.userDataService.getUserProfileData;
		}
		this.profileForm = this.createProfileForm();
		this.passwordsForm = this.fb.group(
			{
				password: [''],
				newPassword: ['', [Validators.required, Validators.minLength(6)]],
				confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
			},
			{
				validator: this.customvalidators.MatchPassword('newPassword', 'confirmPassword')
			}
		);
	}

	ngOnInit(): void {
		this.loadProfileData();
	}

	get getProfileFormControl(): FormGroup['controls'] {
		return this.profileForm.controls;
	}

	get getPasswordsFormControl(): FormGroup['controls'] {
		return this.passwordsForm.controls;
	}

	loadProfileData(): void {
		if (Object.keys(this.currentUser).length > 0) {
			this.getProfileFormControl['nick'].setValue(this.currentUser.nick);
			this.getProfileFormControl['email'].setValue(this.currentUser.email);
			this.getProfileFormControl['idGender'].setValue(this.currentUser.idGender);

			if (this.currentUser.dateB) {
				const dateB = new Date(this.currentUser.dateB?.seconds * 1000);
				this.getProfileFormControl['dateB'].setValue(dateB);
				if (typeof this.currentUser.dateB === 'string') {
					const dateString = formatDate(this.currentUser.dateB, 'MM/dd/yyyy', 'EN');
					this.getProfileFormControl['dateB'].setValue(new Date(dateString));
				}
			}
			this.getProfileFormControl['idCountry'].setValue(this.currentUser.idCountry);
			this.getProfileFormControl['idArea'].setValue(this.currentUser.idArea);
			this.getProfileFormControl['facebook'].setValue(this.currentUser.facebook);
			this.getProfileFormControl['github'].setValue(this.currentUser.github);
			this.getProfileFormControl['linkedin'].setValue(this.currentUser.linkedin);
			this.getProfileFormControl['twitter'].setValue(this.currentUser.twitter);
			this.getProfileFormControl['biography'].setValue(this.currentUser.biography);
		}
	}

	createProfileForm(): FormGroup {
		return this.fb.group({
			nick: ['', [Validators.required, Validators.minLength(4)]],
			idGender: ['', [Validators.required]],
			email: [{ value: '', disabled: true }, [Validators.required]],
			dateB: ['', [Validators.required]],
			idCountry: ['', [Validators.required]],
			idArea: ['', [Validators.required]],
			facebook: ['', [Validators.required]],
			github: ['', [Validators.required]],
			linkedin: ['', [Validators.required]],
			twitter: ['', [Validators.required]],
			biography: ['', [Validators.required, Validators.maxLength(140)]]
		});
	}

	async verifyPassword(): Promise<void> {
		try {
			const response = await this._authService.verifyPassword(
				this.getPasswordsFormControl['password'].value
			);
			if (response) {
				this.showNewPassword = !this.showNewPassword;
				this.showVerifyPassword = false;
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}

	saveProfile(): void {
		try {
			this._authService.updateProfileData(this.currentUser.uid, this.profileForm.value);
			if (this.showNewPassword) {
				void this._authService.updatePassword(
					this.getPasswordsFormControl['confirmPassword'].value
				);
			}
			if (this.userDataService.getUserProfileData) {
				this.userDataService.setUserProfileData = this.userDataService.updateProfileData(
					this.userDataService.getUserProfileData,
					<IUserProfile>this.profileForm.value
				);
			}
			this._messageService.openInfo('Perfil actualizado exitosamente', 'end', 'top');
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}

	toggleVerifyPassword(event: MatSlideToggleChange): void {
		this.showVerifyPassword = event.checked;
	}
}
