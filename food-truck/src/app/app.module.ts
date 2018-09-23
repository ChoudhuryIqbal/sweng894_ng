import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ComponentsModule } from './exports/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './exports/services.module'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ComponentsModule,
		AppRoutingModule,
		ServicesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
