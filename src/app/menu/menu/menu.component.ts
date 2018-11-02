import { Component, OnInit } from '@angular/core';
//import Menu (26.1)
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // create a new array of menus (26.2)
  menus: Menu[] = [
    new Menu("Home", "/home", "Home Page"),
    new Menu("About", "/about", "About Page"),
    new Menu("Users", "/users/list", "User List"),
    new Menu("Vendors", "/vendors/list", "Vendor List"),
    new Menu("Products", "/products/list", "Product List"),
    new Menu("Purchase Requests", "/prs/list", "Request List"),
    new Menu("Line Items", "/prlis/list", "Line Items List")
  ]

  constructor() { }

  ngOnInit() {
  }

}
