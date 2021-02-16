import { NgModule } from '@angular/core';
//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBannerModule } from '@team31/components-atoms/header-banner.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialFooterComponent } from './common/components/atoms/social-footer/social-footer.component';
import { SocialLoginComponent } from './common/components/atoms/social-login/social-login.component';
import { LoginComponent } from './common/components/molecules/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule,
		HeaderBannerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
