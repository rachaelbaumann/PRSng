import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    let sortColumn = "name";
    return products.sort(compareFn);

    function compareFn(a, b) {
      // convert to upper case so it can sort properly
      var x = (a[sortColumn]).toUpperCase();
      var y = (b[sortColumn]).toUpperCase();

      if (x === y) return 0;
      if (x < y) return -1;
      else return 1;
    } 
  }

}
