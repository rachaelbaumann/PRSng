import { User } from "../user/user.class";

export class PurchaseRequest {
    ID: number;
    user: User;
    description: string;
    justification: string;
    dateNeeded: string;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: string;
    reasonForRejection: string;
    userId: number;

    constructor() {
        this.ID = 0;
        this.total = 0;
        this.deliveryMode = "Mail";
        this.submittedDate = (new Date()).toLocaleDateString();
        this.status = "NEW";
    }
}