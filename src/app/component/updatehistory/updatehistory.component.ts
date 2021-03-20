import { Component, Inject, OnInit } from '@angular/core';
import {MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

import { Rides } from 'src/app/Model/rides';
@Component({
  selector: 'app-updatehistory',
  templateUrl: './updatehistory.component.html',
  styleUrls: ['./updatehistory.component.css']

})
export class UpdatehistoryComponent implements OnInit {
myRides:Rides;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data:any,
  private metBottomSheetRef:MatBottomSheetRef,) { }

  ngOnInit(): void {
    console.log(this.data);


  }
  ngOnDestory(){
    this.metBottomSheetRef.dismiss();
  }
close(){
  this.metBottomSheetRef.dismiss();
}
}
