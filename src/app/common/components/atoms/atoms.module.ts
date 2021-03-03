import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CardContainerComponent } from './card-container/card-container.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent
	],
	imports: [MatDialogModule, CommonModule, MatButtonModule, RouterModule],
	exports: [
		SocialLoginComponent,
		CardContainerComponent,
		MatCardModule,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent
	]
})
export class AtomModule {}
