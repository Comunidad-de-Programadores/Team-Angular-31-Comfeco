import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './common/components/molecules/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SocialLoginComponent } from './common/components/atoms/social-login/social-login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialFooterComponent } from './common/components/atoms/social-footer/social-footer.component';
import { HeaderComponent } from '@team31/components-atoms/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ProfileComponent,
		SocialLoginComponent,
		SocialFooterComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
