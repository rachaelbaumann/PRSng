export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    isPreApproved: boolean;

    constructor() {
        this.id = 0;
        this.isPreApproved = false;
    }
}