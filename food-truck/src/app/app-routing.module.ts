import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAccountComponent } from './pages/create-account/create-account.component';
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";

const routes: Routes = [
  { path: 'createAccount', component: CreateAccountComponent},
  {path: 'editProfile', component: EditProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}