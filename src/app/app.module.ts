import { NgModule } from '@angular/core';
//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SocialLoginComponent } from './common/components/social-login/social-login.component';

@NgModule({
	declarations: [AppComponent, SocialLoginComponent],
	imports: [
		BrowserModule,
		FormsModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
