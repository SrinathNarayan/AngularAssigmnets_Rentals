import { Component, OnInit } from '@angular/core';
import { Rides } from 'src/app/Model/rides';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']

})
export class HistoryComponent implements OnInit {
  mybikes : Rides[]=[];
  
  constructor() { 

    this.mybikes = [
      { BikeID: 211 , BikeName: "Bullet", CustomerName: "Mota", CityName:"Pali" },
      { BikeID: 236,BikeName: "KTM", CustomerName: "Lokesh", CityName: "Chennai" },
      { BikeID: 236,BikeName: "BMW", CustomerName: "Piyush", CityName: "Pune" },
      { BikeID: 236,BikeName: "DUCATI", CustomerName: "Kishore", CityName: "BomBay" },
      { BikeID: 236,BikeName: "YAMAHA", CustomerName: "Jk", CityName: "Jaipur" },



    ];
  }
  public handleAddride(R: any) {
    console.log(JSON.stringify(R));
    this.mybikes.push(R);
  }
  public handleremoveride(ids: any) {
    console.log(" Removed.." + ids);
    this.mybikes.forEach((item, index) => {
      if (item.BikeID == ids) {
        this.mybikes.splice(index,1)
  
      }
    });
  }

  ngOnInit(): void {
  }

}

