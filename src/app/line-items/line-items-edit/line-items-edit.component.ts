import { Component, OnInit } from '@angular/core';
// import:
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { LineItemsService } from '../line-items.service';
import { LineItems } from '../line-items.class';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-line-items-edit',
  templateUrl: './line-items-edit.component.html',
  styleUrls: ['./line-items-edit.component.css']
})
export class LineItemsEditComponent implements OnInit {

  prli: LineItems;
  prs: PurchaseRequest[];
  products: Product[];

  save(): void {
    this.prlisvc.change(this.prli).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  compareFn(v1, v2) {
    return v1.id === v2.id;
  }

  constructor(
    private sys: SystemService,
    private prlisvc: LineItemsService, 
    private prsvc: PurchaseRequestService, 
    private productsvc: ProductService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();

    let id = this.route.snapshot.params.id;

    this.prlisvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.prli = resp.data;
  });

  this.prsvc.list().subscribe(resp => {
    console.log("response: ", resp);
    this.prs = resp.data;
  });

  this.productsvc.list().subscribe(resp => {
    console.log("response: ", resp);
    this.products = resp.data;
  });
  }

}
