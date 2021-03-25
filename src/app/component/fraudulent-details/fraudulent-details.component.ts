import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fake } from 'src/app/Model/fake';
import { FraudService } from 'src/app/service/fraud.service';

@Component({
  selector: 'app-fraudulent-details',
  templateUrl: './fraudulent-details.component.html',
  styleUrls: ['./fraudulent-details.component.css']
})
export class FraudulentDetailsComponent implements OnInit {

  constructor(private frauds: FraudService,private route:Router) { }

  columns =["BanId" ,"Banned Currencies", "Banned Country", "Amount Limit", "Blocked And Banned Accounts", "Time Range"];

  index =[ "BanID", "banned_currencies", "Banned_Country", "amount_limit", "Blocked_banned_accounts", "date_Time"];
  fakes:fake[]=[];

  ngOnInit(): void {
    this.frauds.getfraud().subscribe(
      (Response)=>
      {
        this.fakes=Response;
        console.log(this.fakes)
      },
      (error)=>{
        console.log("error:"+error);

      }
    )
  }
  Book(){
    this.route.navigate(['track']);
}
}
