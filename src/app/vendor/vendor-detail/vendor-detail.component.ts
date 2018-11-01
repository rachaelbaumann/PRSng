import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import UserService
import { VendorService } from '../vendor.service';
// import User class
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  // need a property to hold a single user
  vendor : Vendor;

  // add delete fucntion
  delete(): void {
    this.vendorsvc.remove(this.vendor).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  // add to constructor
  constructor(
    private route: ActivatedRoute, 
    private vendorsvc: VendorService,
    private router: Router
    ) { }

  ngOnInit() {
    // add this to ngOnInit.... ugh!
    // gets the :id from the router
    let id = this.route.snapshot.params.id; // must be same id as in routing-module
    // get the user from the user service
    this.vendorsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.vendor = resp.data;
    });
  }

}