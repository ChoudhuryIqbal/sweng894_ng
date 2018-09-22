import { Injectable } from "@angular/core";
import { Vendor } from "../models/vendor";

@Injectable()
export class EventService {

    constructor() { 
        
    }

    getEvents() {
        return EVENTS;
    }

    getEvent(id:number) {
        return EVENTS.find(vendor => vendor.id === id)
    }

    createEvent(id: number, name: string, foodType: string, menu: string, images: Array<File>, description: string) {
        const newVendor = new Vendor(id, name, foodType, description, menu, images, null);

        EVENTS.push(newVendor);
    }
}
const EVENTS = [
    {id: 1, name : "Italian Junky", foodType : "Italian", description: "Fun and loud with delicious food", menu : "/src/app/images/Italian.png", images : null},
    {id: 2, name : "Mexican Jiggler", foodType : "Mexican", description: "Zesty and authentic", menu : "/src/app/images/Mexican.jpg", images : null},
]