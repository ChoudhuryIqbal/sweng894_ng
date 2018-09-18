import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../exports/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../exports/routes';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';

describe('CreateAccountComponent', () => {
	let component: CreateAccountComponent;
	let fixture: ComponentFixture<CreateAccountComponent>;
	let accountService: AccountService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ ComponentsModule, FormsModule, RouterTestingModule.withRoutes(ROUTES) ],
			providers: [ AccountService ]
		}).compileComponents();
	}));

	beforeEach(inject([AccountService], (_accountService: AccountService) => {
		fixture = TestBed.createComponent(CreateAccountComponent);
		component = fixture.componentInstance;

		accountService = _accountService;
		accountService.reset();

		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create a new account', () => {
		const username = 'user';
		const password = 'pass';
		const type = 'Customer';
		const newAccount = new Account(username, password, type);

		component.model = newAccount;

		expect(accountService.accounts[username]).toBeUndefined();

		component.createAccount();
		
		expect(accountService.accounts[username]).toEqual(newAccount);
	});

	it('should not overwrite an existing account', () => {
		const username = 'user';
		const password = 'pass';
		const type = 'Customer';
		const newAccount = new Account(username, password, type);

		component.model = newAccount;
		component.createAccount();

		expect(accountService.accounts[username]).toEqual(newAccount);

		const newPassword = 'newpass';
		component.model = new Account(username, newPassword, type);
		component.createAccount();

		expect(accountService.accounts[username]['password']).toBe(password);
	});

	it('should display an error if a username is already taken', () => {
		const username = 'user';
		const password = 'pass';
		const type = 'Customer';
		const newAccount = new Account(username, password, type);

		expect(component.displayError).toBe(false);

		component.model = newAccount;
		component.createAccount();

		// Try to register the account again
		component.createAccount();

		expect(component.displayError).toBe(true);
	});
});
