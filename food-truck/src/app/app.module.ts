import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ComponentsModule } from './exports/components.module';
import { AppRoutingModule } from './app-routing.module';

import { RestService } from './services/rest.service';
import { AccountService } from './services/account.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ComponentsModule,
		AppRoutingModule
	],
	providers: [RestService, AccountService],
	bootstrap: [AppComponent]
})
export class AppModule { }
