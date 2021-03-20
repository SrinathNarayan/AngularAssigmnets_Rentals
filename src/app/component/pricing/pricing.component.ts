import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyconersionService } from 'src/app/service/currencyconersion.service';
import { UnitconversionService } from 'src/app/service/unitconversion.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  mybikeslist: any;
    
  public inr:number = 0;
  myCountries:string="";
  myOutput:any;
  myCurrency:string="";
  mySelect:string ="";
  num:number=0;
  conVal:any;
  constructor(private calc:CurrencyconersionService, private Ucalc:UnitconversionService,private route:Router ) { }
  myFran:any;
 
  displaySelectedDropDown(e:any)
  {
  this.myOutput='';
  this.myCurrency='';
  this.myCountries = e.target.value;

  if(this.myCountries == 'usa') {this.myOutput = this.calc.multi(this.inr,0.014).toFixed(2); this.myCurrency = 'Dollars'}; 
  if(this.myCountries == 'uk') {
  this.myCurrency = 'Pounds sterling';
  this.myOutput = this.calc.multi(this.inr,0.0099  ).toFixed(2);
  }
  if(this.myCountries == 'singapore') {
  this.myCurrency = 'Dollars';
  this.myOutput = this.calc.multi(this.inr,0.019).toFixed(2);
  }
  if(this.myCountries == 'dubai') {
    this.myCurrency = 'Dirhams';
    this.myOutput = this.calc.multi(this.inr,0.051  ).toFixed(2);
    }
    if(this.myCountries == 'China') {
      this.myCurrency = 'Yuans ';
      this.myOutput = this.calc.multi(this.inr,0.090 ).toFixed(2);
      }


}
public distance:number = 0;
  units:string="";
  myoutput:any;
  MyUnit:string="";
  myselect:string ="";
  Num:number=0;
  ConVal:any;
  displaySelectedUnitDropDown(e:any)
  {
  this.myoutput='';
  this.MyUnit='';
  console.log(this.distance)
  this.units = e.target.value;

  if(this.units == 'meter') {this.myoutput = this.Ucalc.multi(this.distance,100); 
    this.MyUnit = 'Meter'}; 
  if(this.units == 'kilometer') {
  this.MyUnit = 'Kilo-Meter';
  this.myoutput = this.Ucalc.multi(this.distance,1000);
  }
  if(this.units == 'cetimeter') {
  this.MyUnit = 'Ceti-Meter';
  this.myoutput = this.Ucalc.multi(this.distance,0.001);
  }
  
  

    }

  ngOnInit(): void {
  }
  Book(){
    this.route.navigate(['Pipes'])
}

}
