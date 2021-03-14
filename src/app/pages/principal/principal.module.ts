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
import { SubMenuComponent } from './profile-page/common/components/sub-menu/sub-menu.component';
import { SubmoduleEventsComponent } from './profile-page/common/components/submodule-events/submodule-events.component';
import { ProfileService } from './profile-page/common/services/profile.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SubmoduleProfileComponent } from './profile-page/common/components/submodule-profile/submodule-profile.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		HomePageComponent,
		ProfilePageComponent,
		SubmoduleEventsComponent,
		SubmoduleProfileComponent,
		SubMenuComponent
	],
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
