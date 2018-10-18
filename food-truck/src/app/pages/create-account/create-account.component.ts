import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { MenuItem } from '../../models/menuItem';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

	model = new Account('', '', null);
	newAccount: Account;
	menu: Array<any> = [];
	newItem = new MenuItem(null, null);
	submitted = false;
	displayError = false;

	constructor(private router: Router, private accountService: AccountService) { }

	onSubmit() {
		if (this.submitted) {
			this.router.navigate(['/login']);
		}
	}

	createAccount() {
		this.displayError = false;
		this.model.menu = this.menu;
		this.accountService.createAccount(JSON.stringify(this.model)).subscribe((account: Account) => {
			this.submitted = true;
			this.newAccount = account;

			if (!this.newAccount) {
				this.displayError = true;
			}
		});
	}

	addItem() {
		this.menu.push(this.newItem)
		this.newItem = new MenuItem(null, null);
	}

	deleteItem(index: number) {
		this.menu.splice(index, 1);
	}
}
