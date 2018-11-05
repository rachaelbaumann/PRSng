import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItems {
    id: number;
    request: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
    }
}