import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  cus: string = "http://localhost:3000/cutomer";

 getcus(id:any):Promise<customer[]>{
   return this.http.get<customer[]>(this.cus+"?customerId="+id).toPromise();
 }
}
