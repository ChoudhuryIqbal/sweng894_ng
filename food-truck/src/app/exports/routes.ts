import { Routes } from "@angular/router";
import { CreateAccountComponent } from "../pages/create-account/create-account.component";
import { EditProfileComponent } from "../pages/edit-profile/edit-profile.component";
import { CreateEventComponent } from "../pages/create-event/create-event.component";

export const ROUTES: Routes = [
	{ path: 'createAccount', component: CreateAccountComponent },
	{ path: 'editProfile', component: EditProfileComponent },
	{ path: 'createEvent', component: CreateEventComponent }
];