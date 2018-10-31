import { Component, OnInit } from '@angular/core';
// import:
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

// create an instance of user
vendor: Vendor;

// save things
save(): void {
  this.vendorsvc.change(this.vendor).subscribe(resp => {
    console.log("response: ", resp);
    this.router.navigateByUrl('/vendors/list');
  });
}

// inject imports into contsrtuctor
constructor(
  private vendorsvc: VendorService, private route: ActivatedRoute, private router: Router
) { }

// add to ngOnInit
ngOnInit() {
  let id = this.route.snapshot.params.id;
  this.vendorsvc.get(id).subscribe(resp => {
    console.log("response: ", resp);
    this.vendor = resp.data;
  })
}

}
