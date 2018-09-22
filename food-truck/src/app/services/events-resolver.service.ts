import { Injectable } from "@angular/core";
import { RestService } from "./rest.service"
import { Vendor } from "../models/vendor"
import { Resolve } from '@angular/router'


//get vendor data
@Injectable()
export class EventsResolver implements Resolve<any> {
    constructor(private restService : RestService){}

    resolve() {
        return this.restService.get('/api/vendors')
    }
    
}