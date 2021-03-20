import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {
  Cardnum: string="36985213654789"
  customer:any[]=[
    {Id:101,Name:"Ram",City:"Chennai",Fee:20000,Dob:new Date("05/03/1998")},
    {Id:235,Name:"Ravi",City:"Pune",Fee:36000,Dob:new Date("07/07/1988")},
    {Id:123,Name:"Lokesh",City:"Delhi",Fee:7000,Dob:new Date("05/12/1968"),},
    {Id:693,Name:"Kihore",City:"Agra",Fee:30000,Dob:new Date("05/11/1969")},
    {Id:582,Name:"Jk",City:"Mumbai",Fee:24000,Dob:new Date("05/09/1975")},
    {Id:110,Name:"Gopi",City:"Kerala",Fee:32000,Dob:new Date("05/08/1947")},
  ];

  Accounts:any[]=[
    {Name:"Ram",AccNo:321654987,Balance:50000, WithDrawen:40000,CardNumber:"5632147896325",INR:9000},
    {Name:"Mehul",AccNo:896547123,Balance:50000, WithDrawen:20000,CardNumber:"36985147369852",INR:3000},
    {Name:"Kishore",AccNo:369852147,Balance:50000, WithDrawen:36000,CardNumber:"25874136985",INR:4000},
    {Name:"Lokesh",AccNo:789456123,Balance:50000, WithDrawen:48000,CardNumber:"32145698702314",INR:5000},
    
  ];
  constructor(private route:Router ) { }

  ngOnInit(): void {
  }
  
  Book(){
    this.route.navigate(['Account'])
}
}
