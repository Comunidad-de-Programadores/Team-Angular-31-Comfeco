import { NgModule } from '@angular/core';
import { AtomModule } from '../atoms/atoms.module';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		AtomModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSlideToggleModule,
		MatButtonModule
	],
	exports: [LoginComponent]
})
export class MoleculesModule {}
