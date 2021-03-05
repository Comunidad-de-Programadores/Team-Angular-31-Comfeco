import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { CounterComponent } from './counter/counter.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { CarouselSponsorsComponent } from './carousel-sponsors/carousel-sponsors.component';
import { NguCarouselModule } from '@ngu/carousel';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent,
		CarouselSponsorsComponent
	],
	imports: [
		MatDialogModule,
		CommonModule,
		MatButtonModule,
		RouterModule,
		MatCardModule,
		NguCarouselModule
	],
	exports: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent,
		CarouselSponsorsComponent
	]
})
export class AtomModule {}
