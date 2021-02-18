import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password/recovery-password-page.component';
import { RegisterPageComponent } from './register/register-page.component';

const routes: Routes = [
	{ path: '', component: LoginPageComponent },
	{ path: 'register', component: RegisterPageComponent },
	{ path: 'recovery', component: RecoveryPasswordPageComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
