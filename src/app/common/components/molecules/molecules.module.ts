import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AtomModule } from '../atoms/atoms.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		AtomModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		MatSlideToggleModule
	],
	exports: [LoginComponent, RegisterComponent]
})
export class MoleculesModule {}
