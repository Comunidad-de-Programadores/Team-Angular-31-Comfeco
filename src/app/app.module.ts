import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, ProfileComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
