import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CardContainerComponent } from './card-container/card-container.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		TerminosCondicionesComponent,
		SocialFooterComponent
	],
	imports: [MatDialogModule, CommonModule],
	exports: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		TerminosCondicionesComponent,
		SocialFooterComponent
	]
})
export class AtomModule {}
