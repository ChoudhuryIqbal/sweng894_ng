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
	newItem = new MenuItem(null, null);
	submitted = false;
	displayError = false;
	loggedInUser : string;
	public isCollapsed = true;

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
		this.loggedInUser = sessionStorage.getItem("username");

		this.newAccountForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			name: ['', Validators.maxLength(300)],
			foodType:['', Validators.maxLength(200)],
			description: ['', Validators.maxLength(300)],
			menu: this.fb.array([
				this.fb.control('')
			])
		});

		if(this.loggedInUser){
			this.isCollapsed = false;
			this.newAccountForm.setValue({
				username: this.loggedInUser, 
				password: "",
				name : "",
				foodType: "",
				description: "",
				menu: ["test"]});
		}
	}

	onSubmit() {
		this.displayError = false;
		if (!this.menuItems.pristine) {
			this.model.menu = this.menuItems.value;
		}
		this.accountService.createAccount(JSON.stringify(this.newAccountForm.value)).subscribe((account : Account) => {
			this.router.navigate(['/login']);
		},
		error => this.displayError = true);
	}

	addItem() {
		this.menuItems.push(this.fb.control(''));
	}

	removeItem(index: number) {
		this.menuItems.removeAt(index);
	}
}
