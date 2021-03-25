import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Model/Payment';
import { PayloadService } from 'src/app/service/payload.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private payload: PayloadService,private route:Router ) { }

  
  columns= ["Transection Id", "Customer Id", "Amount Paid", "CurrencyType", "From Account", "To Account", "Beneficiary Account", "Bank Charges"];

  index =[ "id", "Customerid", "payment_amount", "currency", "from_Account", "To_Account", "beneficiary_account", "bank_charges"];
  details:Payment[]=[];

  ngOnInit(): void {
    //    this.payload.getdetails().subscribe(
    //   (Response)=>
    //   {
    //     this.details=Response;
    //   },
    //   (error)=>{
    //     console.log("error:"+error);

    //   }
    // )

    this.payload.getPayment().then((resonse)=>{this.details = resonse })
  }
  Book(){
    this.route.navigate(['fraud'])
}
}   
