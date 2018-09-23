import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { IEvent } from '../../models/i-event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event : IEvent
  constructor(private eventService : EventService,  private route : ActivatedRoute) { }

  ngOnInit() {
    this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe((event: IEvent) => {
        this.event = event;
    });
  }


}
