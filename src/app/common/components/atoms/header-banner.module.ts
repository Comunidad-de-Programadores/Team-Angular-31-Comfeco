import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialFooterComponent,
		TerminosCondicionesComponent
	],
	exports: [HeaderComponent, FooterComponent]
})
export class HeaderBannerModule {}
