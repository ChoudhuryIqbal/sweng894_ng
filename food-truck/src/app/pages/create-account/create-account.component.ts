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

	readonly CUSTOMER = 'Customer';
	readonly VENDOR = 'Vendor';

	types = [this.CUSTOMER, this.VENDOR];
	model = new Account('', '', this.CUSTOMER);

	submitted = false;
	displayError = false;

	constructor(private accountService: AccountService) {}

	onSubmit() {
		this.submitted = true;
	}

	createAccount() {
		this.displayError = false;
		
		if(!this.accountService.createAccount(this.model.username, this.model.password, this.model.type)) {
			this.displayError = true;
		};
	}
}
