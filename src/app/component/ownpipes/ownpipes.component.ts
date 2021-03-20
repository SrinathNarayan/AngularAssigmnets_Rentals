import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownpipes',
  templateUrl: './ownpipes.component.html',
  styleUrls: ['./ownpipes.component.css']
})
export class OwnpipesComponent implements OnInit {
  customer:any[]=[
    {Id:101,Name:"Ram",City:"Chennai",Fee:20000,Dob:new Date("05/03/1998")},
    {Id:235,Name:"Ravi",City:"Pune",Fee:36000,Dob:new Date("07/07/1988")},
    {Id:123,Name:"Lokesh",City:"Delhi",Fee:7000,Dob:new Date("05/12/1968")},
    {Id:693,Name:"Kihore",City:"Agra",Fee:30000,Dob:new Date("05/11/1969")},
    {Id:582,Name:"Jk",City:"Mumbai",Fee:24000,Dob:new Date("05/09/1975")},
    {Id:110,Name:"Gopi",City:"Kerala",Fee:32000,Dob:new Date("05/08/1947")},
  ];
  constructor(private route:Router ) { }

  ngOnInit(): void {
  }
  Book(){
    this.route.navigate(['CustomPipes']);
  }

}
