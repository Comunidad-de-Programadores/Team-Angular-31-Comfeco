import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [LoginPageComponent],
	exports: [LoginPageComponent]
})
export class PageModule {}
