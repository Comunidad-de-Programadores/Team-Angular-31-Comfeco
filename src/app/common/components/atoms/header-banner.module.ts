import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialFooterComponent,
		NavMenuComponent,
		AvatarComponent
	],
	exports: [HeaderComponent, FooterComponent]
})
export class HeaderBannerModule {}
