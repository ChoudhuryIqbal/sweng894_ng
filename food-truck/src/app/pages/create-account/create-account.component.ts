import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Account } from '../../models/account'; 
import { AccountService } from '../../services/account.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

	readonly CUSTOMER = 'customer';
	readonly VENDOR = 'vendor';

	types = [this.CUSTOMER, this.VENDOR];
	model = new Account(null, null, null, null);

	submitted = false;

	constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

	onSubmit() {
		this.submitted = true;
	}

	createAccount() {
		this.accountService.createAccount(this.model.username, this.model.password, this.model.type);
		console.log(this.accountService.accounts);
	}
}
