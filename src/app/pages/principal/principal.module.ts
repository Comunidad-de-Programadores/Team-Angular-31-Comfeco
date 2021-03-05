import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { MoleculesModule } from '@team31/components-molecules/molecules.module';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';
import { CustomValidatorsService } from '../authentication/common/service/custom-validators.service';
import { HomePageComponent } from './home-page/home-page.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [HomePageComponent, ProfilePageComponent],
	imports: [PrincipalRoutingModule, MoleculesModule, AtomModule],
	exports: [],
	providers: [AuthService, CustomValidatorsService, MessageService]
})
export class PrincipalModule {}
