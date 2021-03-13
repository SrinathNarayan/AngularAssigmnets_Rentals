import RideBaseModel from "./RideBaseModel";


export class Rides extends RideBaseModel {

    constructor( BikeID:number,BikeName:string ,CustomerName:string,CityName: string){
        super();
        this.BikeID=BikeID;
        this.BikeName=BikeName;
        this.CustomerName=CustomerName;
        this.CityName=CityName;
    
       
    }
    
    
    BikeID: number;
    BikeName: string;
    CustomerName:string;
    CityName: string;
    
    


}



  



