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

	model = new Account('', '');
	
	submitted = false;
	displayError = false;

	constructor(private router: Router, private accountService: AccountService) {}

	onSubmit() {
		this.submitted = true;
		this.router.navigate(['/login']);
	}

	createAccount() {
		this.displayError = false;
		
		if (!this.accountService.createAccount(this.model.username, this.model.password)) {
			this.displayError = true;
		};
	}
}
