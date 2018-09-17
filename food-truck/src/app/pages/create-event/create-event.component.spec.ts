import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event.component';
import { VendorService } from '../../services/vendor.service';

describe('CreateEventComponent', () => {
    let component: CreateEventComponent;
    let fixture: ComponentFixture<CreateEventComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateEventComponent],
            imports: [FormsModule, ReactiveFormsModule],
            providers: [VendorService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateEventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
