import { Component, OnInit } from '@angular/core';
// imports:
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];

  save(): void {
    this.productsvc.add(this.product).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vendorsvc.list().subscribe(resp => {
      console.log("Vendors: ", resp.data);
      // this displays the data
      this.vendors = resp.data;
  }

}
