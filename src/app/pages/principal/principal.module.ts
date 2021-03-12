import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { MoleculesModule } from '@team31/components-molecules/molecules.module';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';
import { CustomValidatorsService } from '../authentication/common/service/custom-validators.service';
import { HomePageComponent } from './home-page/home-page.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { ProfileService } from './profile-page/common/services/profile.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SubmoduleEventsComponent } from './profile-page/common/components/submodule-events/submodule-events.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [HomePageComponent, ProfilePageComponent, SubmoduleEventsComponent],
	imports: [
		PrincipalRoutingModule,
		MoleculesModule,
		AtomModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [],
	providers: [AuthService, CustomValidatorsService, MessageService, ProfileService]
})
export class PrincipalModule {}
