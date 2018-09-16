import { Injectable } from "@angular/core";
import { Vendor } from "../models/vendor";

@Injectable()
export class VendorProfileService {

    private _vendors: Vendor[];

    constructor() { 
        this._vendors = [];
    }

    get vendors(): Vendor[] {
        return this._vendors;
    }

    createVendorProfile(foodTruckName: string, foodType: string, menu: File, images: Array<File>) {
        const id = this._vendors.length;
        const newVendor = new Vendor(id, foodTruckName, foodType, menu, images);

        this._vendors.push(newVendor);
    }
}