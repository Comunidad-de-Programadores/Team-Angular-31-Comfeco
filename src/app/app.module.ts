import { NgModule } from '@angular/core';
//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBannerModule } from 'src/app/common/components/atoms/header-banner.module';
import { AtomModule } from 'src/app/common/components/atoms/atoms.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule,
		HeaderBannerModule,
		PageModule,
		AtomModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
