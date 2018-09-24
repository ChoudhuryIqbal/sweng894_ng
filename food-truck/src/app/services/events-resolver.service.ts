import { Injectable } from "@angular/core";
import { RestService } from "./rest.service"
import { Vendor } from "../models/vendor"
import { Resolve } from '@angular/router'
import { EventService } from '../services/event.service'

//get vendor data
@Injectable()
export class EventsResolverService implements Resolve<any> {
    constructor(private eventService : EventService){}

    resolve() {
        return this.eventService.getEvents();
    }
    
}