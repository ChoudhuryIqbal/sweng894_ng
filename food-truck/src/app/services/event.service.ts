import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable, of } from 'rxjs';
import { Event } from '../models/event';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {

    events = [];

    sampleEvents = [
        { username: "user1", name: "Italian Junky", foodType: "Italian", description: "Fun and loud with delicious food", menu: "/src/app/images/Italian.png" },
        { username: "user2", name: "Mexican Jiggler", foodType: "Mexican", description: "Zesty and authentic", menu: "/src/app/images/Mexican.jpg" },
    ];

    constructor(private restService: RestService) {
        // TODO: Perhaps initialize events
    }

    createEvent(event: Event) {
        // TODO: Decomposing event to send without Vendor, fix
        const payload = {
            id: event.id,
            vendorUsername: event.vendorUsername,
            saleDescription: event.saleDescription,
            start: event.start,
            end: event.end,
            address: event.address
        };

        this.events.push(event);
        this.postEvent(JSON.stringify(payload));
    }

    getEvent(id: number): Observable<Event> {
        return this.restService.get("/api/getEvent/" + id)
            .pipe(catchError(this.handleError<any>('getEvent')));
    }

    getEvents(): Observable<Event[]> {
        return this.restService.get('/api/getEvents')
            .pipe(catchError(this.handleError<any>('getEvents', [])));
    }

    postEvent(payload: any): Observable<Event> {
        return this.restService.post('/api/createEvent/', payload)
            .pipe(catchError(this.handleError<any>('createEvent')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}
