import { NgModule } from '@angular/core';
import { CardContainerComponent } from './card-container/card-container.component';
import { SocialLoginComponent } from './social-login/social-login.component';

@NgModule({
	declarations: [SocialLoginComponent, CardContainerComponent],
	exports: [SocialLoginComponent, CardContainerComponent]
})
export class AtomModule {}
