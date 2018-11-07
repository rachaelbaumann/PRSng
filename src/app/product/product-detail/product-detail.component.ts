import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
import { SystemService } from '../../system/system.service';
// import ProductService
import { ProductService } from '../product.service';
// import Product class
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

   // add delete fucntion
   delete(): void {
    this.productsvc.remove(this.product).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute, 
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    // gets the :id from the router
    let id = this.route.snapshot.params.id; // must be same id as in routing-module
    // get the user from the user service
    this.productsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.product = resp.data;
    });
  }

}
