import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
	AREA_ITEMS,
	COUNTRY_ITEMS,
	GENDER_ITEMS
} from '@team31/models/constants/team-leader.const';
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

	listGender = GENDER_ITEMS;
	listCountry = COUNTRY_ITEMS;
	listArea = AREA_ITEMS;
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
		this.passwordsForm = this.createPasswordsForm();
	}

	ngOnInit(): void {
		this.loadProfileData();
	}

	loadProfileData(): void {
		if (Object.keys(this.currentUser).length > 0) {
			this.getProfileFormControl['nick'].setValue(this.currentUser.profile.nick);
			this.getProfileFormControl['email'].setValue(this.currentUser.profile.email);
			this.getProfileFormControl['idGender'].setValue(this.currentUser.profile.idGender || 0);

			if (this.currentUser.profile.dateB) {
				const dateB = new Date(this.currentUser.profile.dateB?.seconds * 1000);
				this.getProfileFormControl['dateB'].setValue(dateB);
				if (typeof this.currentUser.profile.dateB === 'string') {
					const dateString = formatDate(this.currentUser.profile.dateB, 'MM/dd/yyyy', 'EN');
					this.getProfileFormControl['dateB'].setValue(new Date(dateString));
				}
			}
			this.getProfileFormControl['idCountry'].setValue(this.currentUser.profile.idCountry || 0);
			this.getProfileFormControl['idArea'].setValue(this.currentUser.profile.idArea || 0);

			if (this.currentUser.profile.redSocial) {
				this.profileForm
					.get('redSocial')
					?.get('facebook')
					?.setValue(this.currentUser.profile.redSocial.facebook || '');
				this.profileForm
					.get('redSocial')
					?.get('github')
					?.setValue(this.currentUser.profile.redSocial.github || '');
				this.profileForm
					.get('redSocial')
					?.get('linkedin')
					?.setValue(this.currentUser.profile.redSocial.linkedin || '');
				this.profileForm
					.get('redSocial')
					?.get('twitter')
					?.setValue(this.currentUser.profile.redSocial.twitter || '');
			}

			this.getProfileFormControl['biography'].setValue(this.currentUser.profile.biography || '');
		}
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
			console.log(this.profileForm.value);
			if (this.currentUser.profile.uid) {
				this._authService.updateProfileData(
					this.currentUser.profile.uid,
					<IUserProfile>this.profileForm.value
				);
				if (this.showNewPassword) {
					void this._authService.updatePassword(
						this.getPasswordsFormControl['confirmPassword'].value
					);
				}
				if (this.userDataService.getUserProfileData) {
					// const userProfile = { profile: this.profileForm.value };
					this.userDataService.setUserProfileData = this.userDataService.updateProfileData(
						this.userDataService.getUserProfileData,
						this.profileForm.value
					);
				}
				console.log(this.userDataService.getUserProfileData);
				this._messageService.openInfo('Perfil actualizado exitosamente', 'end', 'top');
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}

	toggleVerifyPassword(event: MatSlideToggleChange): void {
		this.showVerifyPassword = event.checked;
	}

	createProfileForm(): FormGroup {
		return this.fb.group({
			nick: ['', [Validators.required, Validators.minLength(4)]],
			idGender: [0],
			email: [{ value: '', disabled: true }],
			dateB: [''],
			idCountry: [0],
			idArea: [0],
			redSocial: this.fb.group({
				facebook: [''],
				github: [''],
				linkedin: [''],
				twitter: ['']
			}),
			biography: ['', [Validators.maxLength(140)]]
		});
	}

	createPasswordsForm(): FormGroup {
		return this.fb.group(
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

	get getProfileFormControl(): FormGroup['controls'] {
		return this.profileForm.controls;
	}

	get getPasswordsFormControl(): FormGroup['controls'] {
		return this.passwordsForm.controls;
	}
}
