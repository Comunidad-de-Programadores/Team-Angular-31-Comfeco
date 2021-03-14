import { Component } from '@angular/core';
import { ISubMenu } from './common/models/profile.interface';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
	titleSubMenu = 'Mi Perfil';
	receiveEventSubMenu(submenu: ISubMenu): void {
		console.log(submenu);
	}
}
