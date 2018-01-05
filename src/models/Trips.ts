export class Trips{


constructor(public tripTime:number, public type:number,public cardNo:number, public source:string, public destination:string, public tripCharge:number){
         this.tripTime = tripTime
         this.type = type
         this.cardNo = cardNo
         this.source = source
         this.destination = destination
         this.tripCharge = tripCharge
	}	
	
}
