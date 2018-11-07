import { Component, OnInit } from '@angular/core';
// imports
import { SystemService } from '../../system/system.service';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(
    private vendorsvc: VendorService,
    private sys: SystemService
    ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.vendorsvc.list().subscribe(resp => {
      console.log("Vendors: ", resp.data);
      // this displays the data
      this.vendors = resp.data;
    });
  }

}
