import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'dob'
})
export class DobPipe implements PipeTransform {

  transform(value: any): any {


let CurrentYear:any = new Date().getFullYear();
let UserYear:any = new Date(value).getFullYear();
let userAge=CurrentYear-UserYear;

    return userAge + " Years";
  }

}
