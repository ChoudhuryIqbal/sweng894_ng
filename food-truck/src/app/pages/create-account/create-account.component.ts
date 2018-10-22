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

	model = new Account('', '', null);
	newAccount: Account;
	newAccountForm: FormGroup;
	menu: Array<any> = [];
	newItem = new MenuItem(null, null);
	submitted = false;
	displayError = false;

	constructor(private router: Router, private accountService: AccountService, private fb: FormBuilder) {}

	get username() {
		return this.newAccountForm.get('username');
	}

	get password() {
		return this.newAccountForm.get('password');
	}

	get menuItems() {
		return this.newAccountForm.get('menu') as FormArray;
	}

	ngOnInit() {
		this.newAccountForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			menu: this.fb.array([
				this.fb.control('')
			])
		});
	}

	onSubmit() {
		this.displayError = false;
		this.model.menu = this.menu;
		this.accountService.createAccount(JSON.stringify(this.newAccountForm.value)).subscribe((account : Account) => {
			this.router.navigate(['/login']);
		},
		error => this.displayError = true);
	}

	addItem() {
		this.menuItems.push(this.fb.control(''));
	}

	deleteItem(index: number) {
		this.menu.splice(index, 1);
	}
}
