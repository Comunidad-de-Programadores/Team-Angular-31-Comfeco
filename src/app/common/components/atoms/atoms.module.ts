import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';
import { CardContainerComponent } from './card-container/card-container.component';
import { CarouselSponsorsComponent } from './carousel-sponsors/carousel-sponsors.component';
import { CounterComponent } from './counter/counter.component';
import { ItemCommunityComponent } from './item-community/item-community.component';
import { ItemEventComponent } from './item-event/item-event.component';
import { ModalTerminosComponent } from './modal-terminos/modal-terminos.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { ItemActivityComponent } from './item-activity/item-activity.component';
import { InsigniaComponent } from './insignia/insignia.component';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		SocialLoginComponent,
		CardContainerComponent,
		ModalTerminosComponent,
		CounterComponent,
		TeamLeaderComponent,
		CarouselSponsorsComponent,
		ItemCommunityComponent,
		ItemEventComponent,
		ItemActivityComponent,
		InsigniaComponent
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
		CarouselSponsorsComponent,
		ItemCommunityComponent,
		ItemEventComponent,
		ItemActivityComponent,
		InsigniaComponent
	]
})
export class AtomModule {}
