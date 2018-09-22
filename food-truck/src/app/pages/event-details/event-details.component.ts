import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  vendor : any
  constructor(private vendorService : EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.vendor = this.vendorService.getEvent(+this.route.snapshot.params['id'])
  }
}
