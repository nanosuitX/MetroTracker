export class CardDetails{


constructor(public cardNo:number,public type:string, public balance:number, public lastRecharge:string){
         this.cardNo = cardNo
         this.type = type
         this.balance = balance
         this.lastRecharge = lastRecharge
	}	
	
}

//cardNo INTEGER PRIMARY KEY,type VARCHAR(32),balance INTEGER,lastRecharge VARCHAR(32))