import { Component } from '@angular/core';
import {Article} from './article/article.model';
import {ArticleService} from './article/article.service';
import {ArticlesPubSubService} from './shared/articlespubsub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService, ArticlesPubSubService]
})
export class AppComponent {

  constructor(private aps:ArticlesPubSubService){

  }
  ngOnInit(){

  }
}
