import { Vendor } from './vendor';

export class Review {
    constructor(
        public vendorUsername: string,
        public comment: string,
        public rating: number
    ) { }
}