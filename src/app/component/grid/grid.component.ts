import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Bikes } from 'src/app/Model/bikes';

import { Rides } from 'src/app/Model/rides';
import { UpdatehistoryComponent } from '../updatehistory/updatehistory.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  mybikes:Rides;
  
  birth:Date=new Date("1998-12-25");
  @Input()
  bikes: Rides[]=[];
  public ride:Rides= new Rides(0 ,'' , '', '');
  @Output()
  public eAddride:EventEmitter<Rides>= new EventEmitter<Rides>();
  @Output()
  public eRemoveride:EventEmitter<number>= new EventEmitter<number>();
  constructor( private bottomsheet:MatBottomSheet) {

   
   }
   
  

  ngOnInit(): void {
  }

  handleAddride(ids:any,Bname:string ,cname:string,Ccname: string){
    this.ride =new Rides(ids,Bname,cname,Ccname);
    console.log(JSON.stringify(this.ride));
    this.eAddride.emit(this.ride);
    

}
handleremoveride(ids:number)
{
  console.log(ids);
  this.eRemoveride.emit(ids);
}
openBottomSheet(a:any){
  this.bikes.forEach(item =>
    {
      if(item.BikeID == a)
      {
        

      this.bottomsheet.open(UpdatehistoryComponent,{

      data:[ "Bike Id"+":" + item.BikeID ,
      "\nBike Name"+":" + item.BikeName,
      "\nCustomer Name"+":" + item.CustomerName,
      "\nCity Name "+":" + item.CityName
    ]

      
      



  });
  
}
})
}

}
