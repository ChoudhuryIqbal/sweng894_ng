import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './exports/routes';

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
