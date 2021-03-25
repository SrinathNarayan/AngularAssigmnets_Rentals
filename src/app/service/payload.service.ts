import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Payment } from '../Model/Payment';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor(private http : HttpClient) { }
  url:string =" http://localhost:3000/payment";

  getdetails(){
    return this.http.get<Payment[]>(this.url)
  }

  getPayment():Promise<Payment[]>
  {
    return this.http.get<Payment[]>(this.url).toPromise();
  }
  getPayment1(id:any):Promise<Payment[]>
  {
    return this.http.get<Payment[]>(this.url+"?id="+id).toPromise();
  }

}

