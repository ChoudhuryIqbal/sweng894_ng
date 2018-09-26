import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { Vendor } from '../../models/vendor';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    eventForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private eventService: EventService) { }

    ngOnInit() {
        this.eventForm = this.formBuilder.group({
            vendorDescription: new FormControl(),
            eventDescription: new FormControl(),
            startDate: new FormControl(),
            startTime: new FormControl(),
            endDate: new FormControl(),
            endTime: new FormControl(),
            location: new FormControl(),
        });
    }

    onSubmit() {
        // TODO: Dynamically pull Vendor, utilize time fields

        const id = this.eventService.events.length;
        const vendor = new Vendor('username', 'name', 'foodType', 'description', 'menu');
        const event = new Event(
            id, 
            this.eventForm.value.vendorDescription,
            this.eventForm.value.startDate,
            this.eventForm.value.endDate,
            this.eventForm.value.location,
            this.eventForm.value.eventDescription,
            vendor
        );

        this.eventService.createEvent(event).then(() => {
            this.router.navigate(['/events']);
        });
    }
}