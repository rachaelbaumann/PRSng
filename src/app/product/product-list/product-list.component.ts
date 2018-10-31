import { Component, OnInit } from '@angular/core';
// import things:
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productsvc: ProductService) { }

  ngOnInit() {
    this.productsvc.list().subscribe(resp => {
      console.log("Products: ", resp.data);
      // this displays the data
      this.products = resp.data;
    });
  }
}
