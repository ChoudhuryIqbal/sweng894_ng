import { Injectable } from '@angular/core';
import { Event } from "../models/event";
import { Observable, of } from 'rxjs';
@Injectable()
export class CreateEventService {
	private event : Event[];
  	constructor() { 
  		this.event = [];
  	}

    get events(): Event[] {
        return this.event;
    }

  savedata(): Observable<event[]> {
    return of(Event);
  }

}
