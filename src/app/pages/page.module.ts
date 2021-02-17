import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { MoleculesModule } from '../common/components/molecules/molecules.module';
import { ModalServiceService } from '../common/services/modal-service.service';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [MoleculesModule],
	exports: [LoginPageComponent],
	providers: [ModalServiceService]
})
export class PageModule {}
