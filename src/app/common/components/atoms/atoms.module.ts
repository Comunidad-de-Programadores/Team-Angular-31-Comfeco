import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardContainerComponent } from './card-container/card-container.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		SocialFooterComponent
	],
	imports: [MatDialogModule, CommonModule, MatButtonModule],
	exports: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		SocialFooterComponent
	]
})
export class AtomModule {}
