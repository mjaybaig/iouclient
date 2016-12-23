export class Debt{
    amount:number;
    owedby:string;
    owedto:string;
    isClosed:boolean;

    constructor(amount:number, isclosed:boolean, owedby?:string, owedto?:string){
        this.amount = amount;
        this.owedby = owedby;
        this.owedto = owedto;
        this.isClosed = isclosed;
    }

    closeDebt(){
        this.isClosed = true;
    }
    getIsClosed(){
        return this.isClosed;
    }
}