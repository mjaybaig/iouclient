import { Component, Pipe } from '@angular/core';
import {Article} from './article/article.model';
import {ArticleService} from './article/article.service';
import {ArticlesPubSubService} from './shared/articlespubsub.service';
import {Debt} from './shared/debt.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService, ArticlesPubSubService]
})
export class AppComponent {
  debts:Debt[] = [];
  errorMessage:string;
  constructor(private aps:ArticlesPubSubService, private articleService:ArticleService){

  }
  ngOnInit(){
    this.getArticles();
  }

  getArticles(){
    this.articleService.getOwedToMe('5858f270fe38416ac308acfb')
                        .subscribe(
                          debts => this.debts = debts,
                          error => this.errorMessage = "Error in setting articles: "+<any>error
                        );
  }
}
