import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';
import { EventService } from '../../services/event.service';
import { RestService } from '../../services/rest.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EditProfileComponent', () => {
	let component: EditProfileComponent;
	let fixture: ComponentFixture<EditProfileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EditProfileComponent],
			imports: [FormsModule, ReactiveFormsModule ],
			providers: [EventService, RestService, HttpClient, HttpHandler]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditProfileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
