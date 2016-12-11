import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service';
import {Router} from '@angular/router';
import {ArticlesPubSubService} from '../shared/articlespubsub.service';
import '../rxjs-operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit{
  articles: Article[] = [];
  errorMessage: string;


  constructor(private articleService: ArticleService, private aps:ArticlesPubSubService, private router:Router){

  }
  ngOnInit(){

    this.getArticles();
    this.aps.subscribe(newarticle=>{console.log("About to push!"),this.articles.push(newarticle)},
                       error=>this.errorMessage = <any>error,
                       ()=>console.log("Updated articles!"));
  }

  
  voteUp(article:Article):boolean{
    let artIndex:number = this.articles.findIndex(a => a._id == article._id);
    this.articleService.updateVotes(article._id, article.votes+1, article.title, article.link, article.detail)
                      .subscribe(res => {
                                  console.log(res)
                                  this.articles[artIndex].votes += 1
                                },
                                error => this.errorMessage = <any>error);
    // this.article.voteUp();
    return false;
  }

  voteDown(article:Article):boolean{
    let artIndex:number = this.articles.findIndex(a => a._id == article._id);
    this.articleService.updateVotes(article._id, article.votes-1, article.title, article.link, article.detail)
                      .subscribe(res => {
                                  console.log(res.votes)
                                  this.articles[artIndex].votes -= 1
                                },
                                error => this.errorMessage = <any>error);
    // this.article.voteDown();
    return false;
  }

  addArticle(title:string, link: string, detail:string){
    this.articleService.addArticle(title, link, detail)
                      .subscribe(
                        article => this.articles.push(article),
                        error => this.errorMessage = <any>error
                      );
  }
  getArticles(){
    this.articleService.getArticles()
                        .subscribe(
                          articles => this.articles = articles,
                          error => this.errorMessage = "Error in setting articles: "+<any>error
                        );
  }
  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }

  deleteArticle(article:Article):boolean{
    this.articleService.deleteArticle(article._id)
                  .subscribe(res => console.log(res),
                              error => this.errorMessage = <any>error,
                              () => {
                                console.log("Done!");
                                let articleindex:number = this.articles.findIndex(art => art._id == article._id)
                                this.articles.splice(articleindex, 1);
                              });
    return false;
  }

  detailview(article:Article):boolean{
    this.router.navigate(['/article', article._id]);
    return false;
  }
}
