import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	show = false;
	uidProfile = '';

	profileForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		public auth: AngularFireAuth,
		private _authService: AuthService,
		private _messageService: MessageService
	) {
		this.profileForm = this.fb.group({
			nick: ['', [Validators.required]],
			gender: ['', [Validators.required]],
			email: [{ value: '', disabled: true }, [Validators.required]],
			dateB: ['', [Validators.required]],
			country: ['', [Validators.required]],
			area: ['', [Validators.required]],
			facebook: ['', [Validators.required]],
			github: ['', [Validators.required]],
			linkedin: ['', [Validators.required]],
			twitter: ['', [Validators.required]],
			biography: ['', [Validators.required]]
		});
	}

	ngOnInit(): void {
		this.loadProfileData();
	}

	get profileFormControl(): FormGroup['controls'] {
		return this.profileForm.controls;
	}

	loadProfileData(): void {
		this.auth.user.subscribe((user) => {
			const uid = user?.uid || '';
			console.log(uid);
			this.uidProfile = user?.uid || '';
			this._authService.loadProfileData(uid).subscribe((user: IUserProfile[]) => {
				const currentUser = user[0];
				console.log(user);
				// console.log(currentUser.dateB);
				this.profileFormControl['nick'].setValue(currentUser.nick);
				this.profileFormControl['email'].setValue(currentUser.email);
				this.profileFormControl['gender'].setValue(currentUser.gender);
				this.profileFormControl['dateB'].setValue(new Date(currentUser.dateB || ''));
				this.profileFormControl['country'].setValue(currentUser.country);
				this.profileFormControl['area'].setValue(currentUser.area);
				this.profileFormControl['facebook'].setValue(currentUser.facebook);
				this.profileFormControl['github'].setValue(currentUser.github);
				this.profileFormControl['linkedin'].setValue(currentUser.linkedin);
				this.profileFormControl['twitter'].setValue(currentUser.twitter);
				this.profileFormControl['biography'].setValue(currentUser.biography);
			});
		});
	}

	showToggle(): void {
		this.show = !this.show;
		const dateB = formatDate(this.profileFormControl['dateB'].value, 'M/d/yy', 'EN');
		this.profileFormControl['dateB'].setValue(dateB);
		// console.log(this.profileForm.value);
		// this._authService.test(this.uidProfile);
		this._authService.updateProfileData(this.uidProfile, this.profileForm.value);
	}

	saveProfile(): void {
		try {
			const dateB = formatDate(this.profileFormControl['dateB'].value, 'M/d/yy', 'EN');
			this.profileFormControl['dateB'].setValue(dateB);
			this._authService.updateProfileData(this.uidProfile, this.profileForm.value);
			this._messageService.openInfo('Usuario registrado exitosamente', 'end', 'top');
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}
}
