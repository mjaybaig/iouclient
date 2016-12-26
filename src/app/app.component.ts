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
  userId:string ='585eda4af36d2873dac7b9b3';
  
  constructor(private aps:ArticlesPubSubService){

  }
  ngOnInit(){

  }
}
