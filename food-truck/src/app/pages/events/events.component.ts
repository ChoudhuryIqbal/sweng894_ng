import { Component, OnInit } from '@angular/core';
import{ Vendor } from "../../models/vendor"
import { EventService } from "../../services/event.service"
import { EventsResolver } from "../../services/events-resolver.service"

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : any
  constructor(private vendorService : EventService) { }

  ngOnInit() {
    this.events = this.vendorService.getEvents()
    }
    
}

