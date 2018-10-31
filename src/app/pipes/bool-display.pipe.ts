import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBoolean: boolean, args?: any): any {
    return aBoolean ? "Yes" : "No";
  }

}
