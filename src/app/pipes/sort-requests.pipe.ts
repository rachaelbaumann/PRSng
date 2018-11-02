import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseRequest } from '../purchase-request/purchase-request.class';

@Pipe({
  name: 'sortRequests'
})
export class SortRequestsPipe implements PipeTransform {

  transform(prs: PurchaseRequest[]): PurchaseRequest[] {
    let sortColumn = "description";
    return prs.sort(compareFn);

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
