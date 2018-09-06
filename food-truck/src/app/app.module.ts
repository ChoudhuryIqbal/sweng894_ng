import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RestService } from './services/rest.service';
import { ComponentsModule } from './exports/components.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ComponentsModule
	],
	providers: [RestService],
	bootstrap: [AppComponent]
})
export class AppModule { }
