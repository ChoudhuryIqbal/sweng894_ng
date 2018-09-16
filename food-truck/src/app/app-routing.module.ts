import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { CreateEventComponent } from "./pages/create-event/create-event.component";
import { LoginComponent } from "./pages/login/login.component";


const routes: Routes = [
	{ path: 'createAccount', component: CreateAccountComponent },
	{ path: 'editProfile', component: EditProfileComponent },
	{ path: 'createEvent', component: CreateEventComponent},
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '/login', pathMatch: 'full' },

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
