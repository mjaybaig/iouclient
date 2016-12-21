import { Component, Pipe } from '@angular/core';
import {Article} from './article/article.model';
import {ArticlesPubSubService} from './shared/articlespubsub.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticlesPubSubService]
})
export class AppComponent {
  userId:string ='5858f270fe38416ac308acfb';
  constructor(private aps:ArticlesPubSubService){

  }
  ngOnInit(){

  }
}
