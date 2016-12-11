export class Article{
    _id:string;
    title:string;
    link: string;
    votes:number;
    detail:string;

    constructor(title:string, details:string, link:string, votes?: number, id?:string){
        this._id = id;
        this.title = title;
        this.link = link;
        this.detail = details;
        this.votes = votes || 0;
    }


    public voteUp():void {
        this.votes += 1;
        console.log(this.votes);
    }

    public voteDown(): void{
        this.votes -= 1;
        console.log(this.votes);
    }

    

    domain(): string{
        try{
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch(err){
            return null;
        }
    }
}