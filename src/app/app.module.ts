import { NgModule } from '@angular/core';
//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@team31/components-atoms/header/header.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule,
		PageModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
