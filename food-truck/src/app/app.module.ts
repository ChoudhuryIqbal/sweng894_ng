import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

@NgModule({
	declarations: [
		AppComponent,
		CreateAccountComponent,
		CreateEventComponent,
		EditProfileComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
