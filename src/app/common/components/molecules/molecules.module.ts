import { NgModule } from '@angular/core';
import { AtomModule } from '../atoms/atoms.module';
import { LoginComponent } from './login/login.component';
@NgModule({
	declarations: [LoginComponent],
	imports: [AtomModule],
	exports: [LoginComponent]
})
export class MoleculesModule {}
