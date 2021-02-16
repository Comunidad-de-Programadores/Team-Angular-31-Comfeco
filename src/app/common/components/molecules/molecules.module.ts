import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AtomModule } from '../atoms/atoms.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [AtomModule],
	exports: [LoginComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoleculesModule {}
