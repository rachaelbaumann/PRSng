import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'sortVendors'
})
export class SortVendorsPipe implements PipeTransform {

  transform(vendors: Vendor[]): Vendor[] { // import User class
    let sortColumn = "name";
    return vendors.sort(compareFn);

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
