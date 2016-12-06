import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';
import '../rxjs-operators';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private articleService:ArticleService) { 

  }

    voteUp(): boolean{
      console.log('comp: '+this.article._id);
      this.articleService.updateVotes(this.article._id, this.article.votes+1)
      // this.article.voteUp();
      return false;
    }

    voteDown():boolean{
      this.articleService.updateVotes(this.article._id, this.article.votes-1)
      // this.article.voteDown;
      return false;
    }

  ngOnInit() {
    
  }

}
