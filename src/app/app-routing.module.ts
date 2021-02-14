import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'resetPassword', component: ResetPasswordComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
