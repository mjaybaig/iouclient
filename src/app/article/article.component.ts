import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';
import {ArticleService} from '../article.service';
import '../rxjs-operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  },
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { 

    }

    voteUp(): boolean{
      this.article.voteUp();
      return false;
    }

    voteDown():boolean{
      this.article.voteDown();
      return false;
    }

  ngOnInit() {
  }

}
