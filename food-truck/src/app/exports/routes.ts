import { Routes } from "@angular/router";
import { CreateAccountComponent } from "../pages/create-account/create-account.component";
import { EditProfileComponent } from "../pages/edit-profile/edit-profile.component";
import { CreateEventComponent } from "../pages/create-event/create-event.component";
import { LoginComponent } from "../pages/login/login.component";
import { HomeComponent } from "../pages/home/home.component";
import { VendorsListComponent } from "../pages/vendors-list/vendors-list.component";
import { VendorDetailsComponent } from "../pages/vendor-details/vendor-details.component"

export const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'createAccount', component: CreateAccountComponent },
	{ path: 'editProfile', component: EditProfileComponent },
	{ path: 'createEvent', component: CreateEventComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path : 'vendors', component : VendorsListComponent},
	{ path : 'vendor/:id', component : VendorDetailsComponent }

];