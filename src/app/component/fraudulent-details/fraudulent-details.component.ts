import { Component, OnInit } from '@angular/core';
import { fake } from 'src/app/Model/fake';
import { FraudService } from 'src/app/service/fraud.service';

@Component({
  selector: 'app-fraudulent-details',
  templateUrl: './fraudulent-details.component.html',
  styleUrls: ['./fraudulent-details.component.css']
})
export class FraudulentDetailsComponent implements OnInit {

  constructor(private frauds: FraudService) { }

  columns =[ "Banned Currencies", "Banned Country", "Amount Limit", "Blocked And Banned Accounts", "Time Range"];

  index =[ "banned_currencies", "Banned_Country", "amount_limit", "Blocked_banned_accounts", "date_Time"];
  fakes:fake[]=[];

  ngOnInit(): void {
    this.frauds.getfraud().subscribe(
      (Response)=>
      {
        this.fakes=Response;
      },
      (error)=>{
        console.log("error:"+error);

      }
    )
  }

}
