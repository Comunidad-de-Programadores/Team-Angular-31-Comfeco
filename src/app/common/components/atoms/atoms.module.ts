import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialLoginComponent } from './social-login/social-login.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [SocialLoginComponent, CardContainerComponent, ModalTerminosComponent],
	imports: [MatDialogModule, CommonModule, MatButtonModule, RouterModule],
	exports: [SocialLoginComponent, CardContainerComponent, ModalTerminosComponent]
})
export class AtomModule {}
