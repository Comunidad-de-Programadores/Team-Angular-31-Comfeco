import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NguCarouselModule } from '@ngu/carousel';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { CarouselComponent } from './carousel-leaders/carousel.component';
import { EventsComponent } from './events/events.component';
import { MenuCommunityComponent } from './menu-community/menu-community.component';
import { MatCardModule } from '@angular/material/card';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		CardProfileComponent,
		ActivitiesComponent
	],
	imports: [NguCarouselModule, CommonModule, AtomModule, MatIconModule, MatCardModule],

	exports: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		CardProfileComponent,
		ActivitiesComponent
	],
	providers: []
})
export class MoleculesModule {}
