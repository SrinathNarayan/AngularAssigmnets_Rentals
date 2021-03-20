import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rides } from 'src/app/Model/rides';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']

})
export class HistoryComponent implements OnInit {
  mybikes : Rides[]=[];
  
  constructor(private route:Router) { 

    this.mybikes = [
      { BikeID: 211 , BikeName: "Bullet", CustomerName: "Mota", CityName:"Pali" },
      { BikeID: 235,BikeName: "KTM", CustomerName: "Lokesh", CityName: "Chennai" },
      { BikeID: 789,BikeName: "BMW", CustomerName: "Piyush", CityName: "Pune" },
      { BikeID: 561,BikeName: "DUCATI", CustomerName: "Kishore", CityName: "BomBay" },
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
  Book(){
    this.route.navigate(['requirement']);
}

  ngOnInit(): void {
  }

}

