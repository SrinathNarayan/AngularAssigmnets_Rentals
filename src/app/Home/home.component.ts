import { Component } from '@angular/core';
import { Bikes } from '../Model/bikes';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({ templateUrl: 'home.component.html' })



export class HomeComponent {
    public  myname :string = " ";
    Alert :Boolean= false;
     public myno: number =0;
     public pin: number =0;
     public  mycity :string = " ";
     public  mycountry :string = " ";
     mybikes: Bikes[] = [];
    Title = 'Bikes Rentals';
    Titles = 'Bikes Rent';
    public selectedride: string;
    public bullet4url: string = "https://news.maxabout.com/wp-content/uploads/2019/11/Royal-Enfield-Classic-350-Single-Seat-7.jpg"
    constructor( private route:Router ) {

        setTimeout(() => {
          // this.javaurl =this.angularurl 
          this.Title = "RENT A BIKE..."
          this.Titles = "Thank You For Your Comments"
          console.log("here")
    
        }, 8000);
        this.Alert= true;
        this.mybikes = [
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
            { BikeID: 211, BikeName: "Mota", BikeModel: "Bullet",BikeCC:250 },
      
      
          ];

}


public handlename(e: any) {
    this.myname = e.target.value;
    console.log('Welcome..' + this.myname);
}
public handleno(p: any) {
    this.myno = p.target.value;
    console.log(this.myno);
  }

  public handlepin(c: any) {
    this.pin = c.target.value;
    console.log(  this.pin);
  
}
Book(){
    this.route.navigate(['History'])
}

public handlecity(b: any) {
    this.mycity = b.target.value;
    console.log(  this.mycity);
}
selectChangeHandler(event: any) {
    this.selectedride = event.target.value
}
public handlecountry(n: any) {
    this.mycountry = n.target.value;
    console.log(  this.mycountry);
}
 
opensweet(){
    Swal.fire({
        title: 'Success !',
        text: 'Our team Will Revert Back To You!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}
}

