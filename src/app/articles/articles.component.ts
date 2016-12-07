import { Component, OnInit } from '@angular/core';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  errorMessage: string;

  constructor(private articleService: ArticleService){

  }
  ngOnInit(){
    this.getArticles();
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

  deleteArticle(article:Article):void{
    let articleindex:number = this.articles.findIndex(art => art._id == article._id)
    this.articles.splice(articleindex, 1);
  }

}
