import { Component, OnInit } from '@angular/core';
// import
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  // create instance of an EMPTY user
  vendor: Vendor = new Vendor();

   // save things
   save(): void {
    this.vendorsvc.add(this.vendor).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
  }

}
