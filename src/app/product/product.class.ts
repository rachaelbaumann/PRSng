import { Vendor } from "../vendor/vendor.class";

export class Product {
    ID: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor() {
        this.ID = 0;
    }
}