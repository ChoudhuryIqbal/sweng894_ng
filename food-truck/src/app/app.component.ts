import { Component } from '@angular/core';
import { ComponentsModule } from './exports/components.module'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'food-truck';
}
