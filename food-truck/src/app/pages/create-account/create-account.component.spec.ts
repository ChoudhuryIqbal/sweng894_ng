import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';
import { AccountService } from '../../services/account.service';
import { NgModule } from '@angular/core';

describe('CreateAccountComponent', () => {
	let component: CreateAccountComponent;
	let fixture: ComponentFixture<CreateAccountComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CreateAccountComponent],
			imports: [FormsModule, ReactiveFormsModule  ],
			providers: [AccountService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CreateAccountComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
