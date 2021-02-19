import { Injectable } from '@angular/core';
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	ActivatedRoute,
	Params
} from '@angular/router';
import { Observable } from 'rxjs';
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
