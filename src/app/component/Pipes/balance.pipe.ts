import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(value: any): any {

    let totalbal: number = 50000;
    let WithDrawen: number = (value)
    let avail = totalbal - WithDrawen
    return avail;
  }

}
