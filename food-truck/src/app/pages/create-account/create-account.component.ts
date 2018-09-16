import { Component } from '@angular/core';

import { Account } from '../../models/account'; 
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

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

	constructor(private router: Router, private accountService: AccountService) {}

	onSubmit() {
		this.submitted = true;
		this.router.navigate(['/login']);
	}

	createAccount() {
		this.displayError = false;
		
		if(!this.accountService.createAccount(this.model.username, this.model.password, this.model.type)) {
			this.displayError = true;
		};
	}
}
