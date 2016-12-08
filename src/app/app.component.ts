import { Component } from '@angular/core';
import {Article} from './article/article.model';
import {ArticleService} from './article/article.service';
import {ArticlesComponent} from './articles/articles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticlesComponent, ArticleService]
})
export class AppComponent {
  // articles: Article[] = [];
  // errorMessage: string;

  constructor(private articlecomp:ArticlesComponent){

  }
  ngOnInit(){
    // this.getArticles();
  }


  addArticle(title:HTMLInputElement, link: HTMLInputElement, detail:HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value}, detail: ${detail.value} and link: ${link.value}`);
    if(!title || !link){
      return ;
    }
    this.articlecomp.addArticle(title.value, link.value, detail.value);
    title.value = '';
    link.value = '';
    detail.value = '';
    return false;
  }
}
