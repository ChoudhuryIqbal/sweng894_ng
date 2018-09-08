import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  { path: 'createAccount', component: CreateAccountComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}