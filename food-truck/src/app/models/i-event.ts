import { Vendor } from "./vendor";

export interface IEvent{
    id: number;
    vendorUsername: string;
    start : Date;
    end: Date;
    address: string;
    saleDescription : string;
    vendor : Vendor;
}