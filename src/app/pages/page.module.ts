import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MoleculesModule } from '@team31/components-molecules/molecules.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModalServiceService } from '../common/services/modal-service.service';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [LoginPageComponent],
	imports: [MoleculesModule],
	exports: [LoginPageComponent],
	providers: [ModalServiceService]
})
export class PageModule {}
