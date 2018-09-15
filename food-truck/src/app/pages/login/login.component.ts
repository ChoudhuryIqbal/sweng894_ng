import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Account } from '../../models/account'; 
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

	readonly CUSTOMER = 'customer';
	readonly VENDOR = 'vendor';

	types = [this.CUSTOMER, this.VENDOR];
	model = new Account(null, null, null, null);

	submitted = false;

	constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

	onSubmit() {
		this.submitted = true;
	}

	login() {
		this.accountService.login(this.model.username, this.model.password, this.model.type);
		console.log(this.accountService.accounts);
	}

}
