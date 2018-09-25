import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event: Event
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe((event: Event) => {
            this.event = event;
        });
    }
}
