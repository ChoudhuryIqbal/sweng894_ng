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
    eventId : number;
    eventForm: FormGroup;
    event : Event;

    constructor(private router: Router, private formBuilder: FormBuilder, private eventService: EventService) { }

    ngOnInit() {
        this.eventForm = this.formBuilder.group({
            vendorUsername: new FormControl(),
            eventDescription: new FormControl(),
            startDate: new FormControl(),
            startTime: new FormControl(),
            endDate: new FormControl(),
            endTime: new FormControl(),
            location: new FormControl(),
        });
        this.eventId = +sessionStorage.getItem("eventId");
        sessionStorage.setItem("eventId", "");
        if(this.eventId){
            this.eventService.getEvent(+this.eventId).subscribe((event : Event) => {
                this.event = event[0];
                this.eventForm.setValue({
                    "vendorUsername" : this.event.vendorUsername,
                    "eventDescription" : this.event.saleDescription,
                    "startDate": this.event.start,
                    "startTime" : "",//new Date().getTime(),
                    "endDate" : this.event.end,
                    "endTime" : "",//new Date().getTime(),
                    "location" : this.event.address
                });
            });
        }
        
        
    }

    onSubmit() {
        // TODO: Dynamically pull Vendor, utilize time fields
        if(!this.eventId){
            this.eventId = Math.floor(Math.random() * 879798) + 1;
        }
        const event = new Event(
            this.eventId, 
            sessionStorage.getItem("username"),
            this.eventForm.value.startDate,
            this.eventForm.value.endDate,
            this.eventForm.value.location,
            this.eventForm.value.eventDescription
        );

        this.eventService.createEvent(event).then(() => {
            // sessionStorage.clear();
        });
        this.router.navigate(['/events']);
    }
}