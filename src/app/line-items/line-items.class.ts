import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItems {
    id: number;
    pr: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
    }
}