import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fake } from '../Model/fake';

@Injectable({
  providedIn: 'root'
})
export class FraudService {


  constructor(private http: HttpClient) { }
  fraud: string = "http://localhost:3000/fraudulent_payment";

  getfraud() {
    return this.http.get<fake[]>(this.fraud)
  }
  getban(id : any): Promise<fake[]> {
    return this.http.get<fake[]>(this.fraud+"?BanID="+id).toPromise();
  }
}
