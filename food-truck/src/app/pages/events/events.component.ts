import { Component, OnInit } from '@angular/core';
import{ Vendor } from "../../models/vendor"
import { ActivatedRoute } from "@angular/router"
import { IEvent } from "../../models/i-event"

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : IEvent[]
  constructor(private route : ActivatedRoute ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
    
}

