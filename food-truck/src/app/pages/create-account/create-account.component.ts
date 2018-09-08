import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
	constructor(private accountService: AccountService) {}

	ngOnInit() {
	}

	// TO DO: Link this to form
	createAccount() {
		const username = '';
		const password = '';

		this.accountService.createAccount(username, password);
	}
}
