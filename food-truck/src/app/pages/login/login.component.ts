import { Component } from '@angular/core';

import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

	readonly CUSTOMER = 'customer';
	readonly VENDOR = 'vendor';

	types = [this.CUSTOMER, this.VENDOR];
	credentials = {
		username: '',
		password: ''
	};

	submitted = false;
	displayError = false;

	constructor(private router: Router, private accountService: AccountService) {}

	onSubmit() {
		if (this.accountService.authenticated) {
			this.submitted = true;
			this.router.navigate(['/home']);
		} else {
			this.displayError = true;
		}
	}

	authenticate() {
		this.displayError = false;
		this.accountService.authenticate(this.credentials.username, this.credentials.password);
	}
}
