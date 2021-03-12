import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NguCarouselModule } from '@ngu/carousel';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { CarouselComponent } from './carousel-leaders/carousel.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { EventsComponent } from './events/events.component';
import { MenuCommunityComponent } from './menu-community/menu-community.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';
import { EventsUserComponent } from './events-user/events-user.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		UserEditComponent,
		CardProfileComponent,
		ActivitiesComponent,
		EventsUserComponent
	],
	imports: [
		NguCarouselModule,
		CommonModule,
		AtomModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		UserEditComponent,
		CardProfileComponent,
		ActivitiesComponent
	],
	providers: [MatDatepickerModule]
})
export class MoleculesModule {}
