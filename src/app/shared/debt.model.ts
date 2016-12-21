export class Debt{
    private amount:number;
    private owedby:string;
    private owedto:string;
    private isClosed:boolean;

    constructor(amount:number, isclosed:boolean, owedby?:string, owedto?:string){
        this.amount = amount;
        this.owedby = owedby;
        this.owedto = owedto;
        this.isClosed = isclosed;
    }
}