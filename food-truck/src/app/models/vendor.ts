
import { EventDetails } from './event-details';

export class Vendor {
    constructor(public id: number, public name: string, public foodType: string, public description: string, public menu: string, public images: Array<File>, public eventDetail : EventDetails) {}
}