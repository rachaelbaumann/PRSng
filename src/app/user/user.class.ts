// don't forget to export the class or else you can't use it anywhere
export class User {
    // must be same as variables in Java
    ID: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    // create default constructor with variables that cannot be null
    constructor() {
        this.ID = 0;
        this.isReviewer = false;
        this.isAdmin = false;
    }
}