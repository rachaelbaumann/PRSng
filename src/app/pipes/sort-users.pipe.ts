import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[]): User[] { // import User class
    let sortColumn = "lastName";
    return users.sort(compareFn);

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
