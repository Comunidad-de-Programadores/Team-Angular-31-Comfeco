import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { AuthService } from '@team31/services/auth.service';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [LoginPageComponent, RegisterPageComponent],
	imports: [
		CommonModule,
		AtomModule,
		FormsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		MatSlideToggleModule
	],

	exports: [LoginPageComponent, RegisterPageComponent],
	providers: [AuthService]
})
export class AuthenticationModule {}
