import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AtomModule } from '../atoms/atoms.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		AtomModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [LoginComponent]
})
export class MoleculesModule {}
