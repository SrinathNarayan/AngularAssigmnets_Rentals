import RideBaseModel from "./RideBaseModel";


export class Rides extends RideBaseModel {
    static BikesID: any;

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



  



