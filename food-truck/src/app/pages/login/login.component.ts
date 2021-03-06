import { Component } from '@angular/core';
import { Account } from "../../models/Account";
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
	loggedInUser : string;

	types = [this.CUSTOMER, this.VENDOR];
	credentials = {
		username: '',
		password: ''
	};

	submitted = false;
	displayError = false;
	authenticated;

	constructor(private router: Router, private accountService: AccountService) {}

	onSubmit() {
		this.displayError = false;
        this.accountService.getAccount(this.credentials.username).subscribe((account : Account) => {
            if(account && (this.credentials.password === account.password)) {
				sessionStorage.setItem("username", this.credentials.username);
				this.loggedInUser = this.credentials.username;
				this.submitted = true;
				this.router.navigate(['/events']);
            }else {
				this.displayError = true;
			}
		});
	}
}
