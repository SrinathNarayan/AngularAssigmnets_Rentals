import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rides } from 'src/app/Model/rides';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  evenride: Rides[] = [];
  oddride: Rides[] = [];
  mybike:Rides[]=[];
  txtName: string;
  len:number = 0; 
 


  constructor(private route:Router) { 
    this.mybike = [
      { BikeID: 211 ,BikeName: "Bullet", CustomerName: "Mota", CityName:"Pali" },
      { BikeID: 369,BikeName: "KTM", CustomerName: "Lokesh", CityName: "Chennai" },
      { BikeID: 235,BikeName: "BMW", CustomerName: "Piyush", CityName: "Pune" },
      { BikeID: 478,BikeName: "DUCATI", CustomerName: "Kishore", CityName: "BomBay" },
      { BikeID: 528,BikeName: "YAMAHA", CustomerName: "Jk", CityName: "Jaipur" },
    ]

  }
  Book(){
    this.route.navigate(['pricing']);
}

  ngOnInit(): void {
  }

  handleFilter(a:any)
  {
    this.evenride =[];
    this.oddride =[];
    this.len=0;
    this.txtName = a.target.value;
      this.mybike.forEach((item,index)=>
        {
          if(item.BikeID % 2 == 0 && this.txtName=='even')
          {
            this.len = 1;
            this.evenride.push(new Rides(item.BikeID,item.BikeName,item.CustomerName,item.CityName)) ;
          }
          else if(item.BikeID %2 != 0 && this.txtName == "odd" ){
          this.len = 2;
          this.oddride.push(new Rides(item.BikeID,item.BikeName,item.CustomerName,item.CityName)) ;
          console.log(this.oddride);
          }
        });
      
  }
  selectedbike: Rides;
  public handlebikelist(Bikes: Rides) {
    this.selectedbike = Bikes;
    console.log(this.selectedbike);

  }
   }