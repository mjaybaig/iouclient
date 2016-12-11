<<<<<<< HEAD
import {ArticleService} from '../article.service';
import { Response} from '@angular/http';

=======
>>>>>>> cc
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

<<<<<<< HEAD
    voteUp(): void{
        console.log('model: '+this._id);
        this.votes += 1;
        this.articleService.updateVotes(this._id, this.votes);

=======
    public voteUp():void {
        this.votes += 1;
        console.log(this.votes);
>>>>>>> cc
    }

    public voteDown(): void{
        this.votes -= 1;
<<<<<<< HEAD
        // this.articleService.updateVotes(this._id, this.votes);  
=======
        console.log(this.votes);
>>>>>>> cc
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