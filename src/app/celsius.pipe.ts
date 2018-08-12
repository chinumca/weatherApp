import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value=(value-273.15).toFixed(2)+"°C";
    return value;
  }

}
