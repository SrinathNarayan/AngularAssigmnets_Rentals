import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitconversionService {
  [x: string]: any;

  constructor() { }

 public multi(a:number,b:number):number{
    return a*b;
  }
 
}
