import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollor'
})
export class DollorPipe implements PipeTransform {

  transform(value: any): any {

    let dollor: any = 72.36;
    let INR:any  =  (value)
    let avail = INR*dollor
    return avail;
  }

}
