import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
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
	newAccount : Account;
	submitted = false;
	displayError = false;


	constructor(private router: Router, private accountService: AccountService) {}

	onSubmit() {
		if(this.submitted){
			this.router.navigate(['/login']);
		}
	}

	createAccount() {
		this.displayError = false;
		this.accountService.createAccount(JSON.stringify(this.model)).subscribe((account : Account) => {
			this.submitted = true;
			this.newAccount = account;
			if (!this.newAccount) {
				this.displayError = true;
			}
		});
		
		
	}
}
