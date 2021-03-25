import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { money } from 'src/app/Model/money';
import { MoneylistService } from 'src/app/service/moneylist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  moneys: money[] = [];
  searchText:any;
  constructor(private mom:MoneylistService,private route:Router) { }
  columns= [ "Currency Code", "Currency Name", "Country Name", "Code"];
  Currency :any;
  index =[ "CurrencyCode", "CurrencyName", "CountryName", "code"];

  ngOnInit(): void {
    this.mom.getlist().subscribe((Response)=> {
       this.moneys=Response;
       }
     )
  }
  Book(){
    this.route.navigate(['']);
}
  /*
     Search(){
   if(this.Currency  == " "){
     this.ngOnInit();
   }else{
       this.moneys = this.moneys.filter(res =>{
         return res.CurrencyName.toLowerCase().match(this.Currency.toLowerCase());
       });
     }
   }*/
      
    }
      
  
  

