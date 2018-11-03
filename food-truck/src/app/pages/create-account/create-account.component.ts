import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { MenuItem } from '../../models/menu-item';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

	model = new Account('', '');
	newAccount: Account;
	newAccountForm: FormGroup;
	newItem = new MenuItem(null, null);
	submitted = false;
	displayError = false;
	regions = ['Malvern', 'Philadelphia'];
	loggedInUser : string;
	public isCollapsed = true;

	constructor(private router: Router, private accountService: AccountService, private fb: FormBuilder) {}

	get username() {
		return this.newAccountForm.get('username');
	}

	get password() {
		return this.newAccountForm.get('password');
	}

	ngOnInit() {
		this.loggedInUser = sessionStorage.getItem("username");

		this.newAccountForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		})
	}

	onSubmit() {
		this.displayError = false;
		this.accountService.createAccount(JSON.stringify(this.newAccountForm.value)).subscribe((account : Account) => {
			this.router.navigate(['/login']);
		},
		error => this.displayError = true);
	}

}
