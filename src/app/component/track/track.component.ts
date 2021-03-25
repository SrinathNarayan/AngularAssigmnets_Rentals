import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/Model/customer';
import { fake } from 'src/app/Model/fake';
import { Payment } from 'src/app/Model/Payment';
import { CustomerService } from 'src/app/service/customer.service';
import { FraudService } from 'src/app/service/fraud.service';
import { PayloadService } from 'src/app/service/payload.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  selction: any;
  local: any;
  details: Payment[] = [];
  fraud: fake[] = [];
  customers:customer[]=[];
  constructor(private pay: PayloadService, private ban: FraudService,private cus:CustomerService,private route:Router) { }
  bancolumns = ["BanId", "Banned Currencies", "Banned Country", "Amount Limit", "Blocked And Banned Accounts", "Time Range"];
  cuscolumns = ["Customer Id", "Customer Types", "Credit Card Types", " Currencies", "Countries", "Cities"];
  columns = ["Transection Id", "Customer Id", "Amount Paid", "CurrencyType", "From Account", "To Account", "Beneficiary Account", "Bank Charges"];
  ngOnInit(): void {


  }
  displaySelectedDropDown(e: any) {
    this.selction = e.target.value;
  }

  displayhistoryHandle(e: any) {
this.details=[];
    this.pay.getPayment1(e).then((data) => this.details = data);

  }
  displaybannedHandle(e: any) {
    this.fraud = [];
    this.ban.getban(e).then((mydata) => this.fraud = mydata);
  }
  displaycustomerHandle(e:any){
    this.customers=[];
    this.cus.getcus(e).then((cusdata)=> this.customers = cusdata);

  }
  Book(){
    this.route.navigate(['search']);
}

}
