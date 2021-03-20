import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyconersionService {

  constructor() { }
  public multi(a:number,b:number):number{
    return a*b;
  }
}
