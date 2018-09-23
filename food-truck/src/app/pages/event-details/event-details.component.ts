import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any
  events : any
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
    this.event = this.events.find(event => event.id === +this.route.snapshot.params['id'])
  }


}
