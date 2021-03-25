import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { money } from '../Model/money';

@Injectable({
  providedIn: 'root'
})
export class MoneylistService {

  constructor(private http: HttpClient) { }
  mon: string = "http://localhost:3000/money";

  getlist(){
    return this.http.get<money[]>(this.mon);
  }

}
