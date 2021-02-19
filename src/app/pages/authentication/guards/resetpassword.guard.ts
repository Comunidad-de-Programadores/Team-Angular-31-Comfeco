import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../common/services/auth.service';

@Injectable()
export class ResetpasswordGuard implements CanActivate {
	mode = '';
	actionCode = '';
	actionCodeChecked = false;
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private auth: AuthService
	) {}

	canActivate(): boolean {
		return true;
	}
}
