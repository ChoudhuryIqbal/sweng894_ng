import { Injectable } from "@angular/core";

@Injectable()
export class Vendor {
    constructor(public id: number, public name: string, public foodType: string, public description: string, public menu: string) {}
}