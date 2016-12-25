export class Debt{
    idindex:number;
    amount:number;
    owedby:string;
    owedto:string;
    isClosed:boolean;
    desc:string;

    constructor(amount:number, isclosed:boolean, owedby?:string, owedto?:string, id?:number, desc?:string){
        this.amount = amount;
        this.owedby = owedby;
        this.owedto = owedto;
        this.isClosed = isclosed;
        this.idindex = id;
        this.desc = desc;
    }

    closeDebt(){
        this.isClosed = true;
    }
    getIsClosed(){
        return this.isClosed;
    }
}