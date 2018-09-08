import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { AccountService } from '../../services/account.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

	accountForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
	})

	constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

	ngOnInit() {}

	// TO DO: Link this to form
	createAccount() {
		
	}

	onSubmit() {
		const username = this.accountForm.value.username;
		const password = this.accountForm.value.password;

		this.accountService.createAccount(username, password);

		console.log(this.accountService.accounts);
	}
}
