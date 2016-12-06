import {ArticleService} from '../article.service';

export class Article{
    _id:string;
    title:string;
    link: string;
    votes:number

    constructor(private articleService:ArticleService, title:string, link:string, votes?: number, id?:string){
        this._id = id;
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    public voteUp():void {
        this.votes += 1;
        console.log(this.votes);
        // this.articleService.updateVotes(this._id, this.votes);
    }

    public voteDown(): void{
        this.votes -= 1;
        console.log(this.votes);
        // this.articleService.updateVotes(this._id, this.votes);  
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