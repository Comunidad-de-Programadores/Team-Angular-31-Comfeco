import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PathProject } from '@team31/static/path-project';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
	constructor(private route: Router) {}

	clickGoProfile(): void {
		void this.route.navigateByUrl(PathProject.PROFILE);
	}

	clickCloseSession(): void {
		void this.route.navigateByUrl(PathProject.LOGIN);
	}
}
