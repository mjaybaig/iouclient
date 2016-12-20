export class Debt{
    private id: string;
    private amount:number;
    private owedby:string;
    private owedto:string;
    private isClosed:boolean;

    constructor(id:string, amount:number, owedby:string, owedto:string, isclosed:boolean){
        this.id = id;
        this.amount = amount;
        this.owedby = owedby;
        this.owedto = owedto;
        this.isClosed = isclosed;
    }
}