export class Menu {
    // add instance variables
    display: string;
    route: string;
    title: string;

    // add constructor
    constructor(display: string, route: string, title: string) {
        this.display = display;
        this.route = route;
        this.title = title;
    }
}