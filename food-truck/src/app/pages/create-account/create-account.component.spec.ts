import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../exports/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../exports/routes';
import { AccountService } from '../../services/account.service';

describe('CreateAccountComponent', () => {
	let component: CreateAccountComponent;
	let fixture: ComponentFixture<CreateAccountComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ ComponentsModule, FormsModule, RouterTestingModule.withRoutes(ROUTES) ],
			providers: [ AccountService ]
		}).compileComponents();
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
