import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rides } from 'src/app/Model/rides';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  bikes: Rides[]=[];
  public ride:Rides= new Rides(0 ,'' , '', '');
  @Output()
  public eAddride:EventEmitter<Rides>= new EventEmitter<Rides>();
  @Output()
  public eRemoveride:EventEmitter<number>= new EventEmitter<number>();
  constructor() {

   
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

}
