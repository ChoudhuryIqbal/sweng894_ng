import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Vendor } from 'src/app/models/vendor';
import { Observable, forkJoin } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event: Event;
    vendor: Vendor;
    loggedInUser : string;
    canEdit : boolean;
    displayError : boolean;

    constructor(private eventService: EventService, private accountService: AccountService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { };

    ngOnInit() {
        this.loggedInUser = sessionStorage.getItem("username");
        
        this.vendor = new Vendor('', '', '', '', [])
        // const eventObservable: Observable<Event> = this.eventService.getEvent(+this.route.snapshot.params['id']);
        // const vendorObservable: Observable<Vendor> = this.eventService.getEvent(+this.route.snapshot.params['id']).pipe(
        //     switchMap((event: Event) => this.accountService.getVendorDetails(event.vendorUsername))
        // );
        
        // forkJoin(vendorObservable, eventObservable).subscribe(
        //     ([vendor, event]: [Vendor, Event]) => {
        //         this.event = event[0];
        //         this.vendor = vendor[0];
        //     }
        // );

        this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe((event : Event) => {
            this.event = event[0];
            this.canEdit = this.loggedInUser === this.event.vendorUsername;
            this.accountService.getVendorDetails(this.event.vendorUsername).subscribe((vendor : Vendor) => {
                this.vendor = vendor[0];
                }
            )
        })
    }

    goToCreateEvent(){
        sessionStorage.setItem("eventId", String(this.event.id));
        this.router.navigate(['createEvent']);
    }

    deleteEvent(){
        this.eventService.deleteEvent(this.event.id).subscribe((response) => {
			this.router.navigate(['events']);
		},
        error => this.displayError = true);
    }
}
