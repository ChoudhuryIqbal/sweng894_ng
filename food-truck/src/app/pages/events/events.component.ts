import { Component, OnInit } from '@angular/core';
import{ Vendor } from "../../models/vendor"
import { ActivatedRoute } from "@angular/router"

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : any
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
    
}

