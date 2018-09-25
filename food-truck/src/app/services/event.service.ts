import { Injectable } from "@angular/core";
import { Vendor } from "../models/vendor";
import { RestService } from "./rest.service";
import { Observable, of } from 'rxjs';
import { IEvent } from '../models/i-event';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {
    event : any
    constructor(public restService : RestService) { 
        
    }

    getEvent(id : number) : Observable<IEvent>{
        return this.restService.get("/api/getEvent/" + id)
        .pipe(catchError(this.handleError<any>('getEvent')));
    }

    getEvents() : Observable<IEvent[]>{
        return this.restService.get('/api/getEvents')
        .pipe(catchError(this.handleError<any>('getEvents', [])));
    }

    private handleError<T> (operation='operation', result?: T){
		return ( error : any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}

    createEvent(username: string, name: string, foodType: string, menu: string, description: string) {
        const newVendor = new Vendor(username, name, foodType, description, menu);

        EVENTS.push(newVendor);
    }
}
const EVENTS = [
    {username: "user1", name : "Italian Junky", foodType : "Italian", description: "Fun and loud with delicious food", menu : "/src/app/images/Italian.png"},
    {username: "user2", name : "Mexican Jiggler", foodType : "Mexican", description: "Zesty and authentic", menu : "/src/app/images/Mexican.jpg"},
]