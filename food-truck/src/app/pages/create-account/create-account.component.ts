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
	displayError = false;
	newAccountForm: FormGroup;

	constructor(
		private router: Router, 
		private accountService: AccountService, 
		private fb: FormBuilder
	) {}

	get username() {
		return this.newAccountForm.get('username');
	}

	get password() {
		return this.newAccountForm.get('password');
	}

	ngOnInit() {
		this.newAccountForm = this.fb.group(this.model);
		this.newAccountForm.get('username').setValidators(Validators.required);
		this.newAccountForm.get('password').setValidators(Validators.required);
	}

	onSubmit() {
		this.displayError = false;
		this.accountService.createAccount(JSON.stringify(this.newAccountForm.value)).subscribe((account : Account) => {
			this.router.navigate(['/login']);
		},
		error => this.displayError = true);
	}
}
