import { Injectable } from '@angular/core';
import { Event } from "../models/event";

@Injectable()
export class CreateEventService {
	private event : Event[];
  	constructor() {
  		this.event = [];
  	}

    get events(): Event[] {
        return this.event;
    }
}
