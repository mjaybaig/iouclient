import { Component, OnInit } from '@angular/core';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  errorMessage: string;

  constructor(private articleService: ArticleService){

  }
  ngOnInit(){
    this.getArticles();
  }

  addArticle(title:HTMLInputElement, link: HTMLInputElement, detail:HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value}, detail: ${detail.value} and link: ${link.value}`);
    if(!title || !link){
      return ;
    }
    this.articleService.addArticle(title.value, link.value, detail.value)
                      .subscribe(
                        article => this.articles.push(article),
                        error => this.errorMessage = <any>error
                      );
    title.value = '';
    link.value = '';
    detail.value = '';
    return false;
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
