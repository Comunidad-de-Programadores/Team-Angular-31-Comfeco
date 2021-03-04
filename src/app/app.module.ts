import { NgModule } from '@angular/core';
//Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBannerModule } from '@team31/components-atoms/header-banner.module';
import { HeaderService } from '@team31/services/header.service';
import { ModalService } from '@team31/services/modal.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase),
		BrowserAnimationsModule,
		HeaderBannerModule,
		MatDialogModule
	],
	providers: [HeaderService, ModalService],
	bootstrap: [AppComponent]
})
export class AppModule {}
