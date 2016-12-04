import { Component } from '@angular/core';
import {Article} from './article/article.model';
import {ArticleService} from './article.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {
  articles: Article[] = [];
  errorMessage: string;

  constructor(private articleService: ArticleService){

  }
  ngOnInit(){
    this.getArticles();
  }


  addArticle(title:HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    if(!title || !link){
      return ;
    }
    this.articleService.addArticle(title.value, link.value)
                      .subscribe(
                        article => this.articles.push(article),
                        error => this.errorMessage = <any>error
                      );
    title.value = '';
    link.value = '';
    return false;
  }
  getArticles(){
    this.articleService.getArticles()
                        .subscribe(
                          articles => this.articles = articles,
                          error => this.errorMessage = "Error in setting articles: "+<any>error
                        );
  }
  // sortedArticles():Article[]{
  //   return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  // }
}
