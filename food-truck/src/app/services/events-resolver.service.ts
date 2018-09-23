import { Injectable } from "@angular/core";
import { RestService } from "./rest.service"
import { Vendor } from "../models/vendor"
import { Resolve } from '@angular/router'
import { map } from 'rxjs/operators'

//get vendor data
@Injectable()
export class EventsResolverService implements Resolve<any> {
    constructor(private restService : RestService){}

    resolve() {
        return this.restService.get('/api/getEvents').pipe(map(events => events))
    }
    
}