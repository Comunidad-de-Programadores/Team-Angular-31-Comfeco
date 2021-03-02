import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CardContainerComponent } from './card-container/card-container.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { ImagePipe } from '../../pipes/image.pipe';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent,
		ImagePipe
	],
	imports: [MatDialogModule, CommonModule, MatButtonModule, RouterModule],
	exports: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent
	]
})
export class AtomModule {}
