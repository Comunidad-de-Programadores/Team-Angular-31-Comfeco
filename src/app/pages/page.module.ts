import { NgModule } from '@angular/core';
import { MoleculesModule } from '@team31/components-molecules/molecules.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
	declarations: [LoginPageComponent],
	exports: [LoginPageComponent],
	imports: [MoleculesModule]
})
export class PageModule {}
