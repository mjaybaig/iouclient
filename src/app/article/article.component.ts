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

  constructor(private articeService:ArticleService) { 

    }

    voteUp():boolean{
      this.articeService.updateVotes(this.article._id, this.article.votes+1, this.article.title, this.article.link)
                        .subscribe(res => {
                                    console.log(res)
                                    this.article.votes += 1
                                  },
                                  error => console.log(error));
      // this.article.voteUp();
      return false;
    }

    voteDown():boolean{
      this.articeService.updateVotes(this.article._id, this.article.votes-1, this.article.title, this.article.link)
                        .subscribe(res => {
                                    console.log(res.votes)
                                    this.article.votes -= 1
                                  },
                                  error => console.log(error));
      // this.article.voteDown();
      return false;
    }

    delete():boolean{
      this.articeService.deleteArticle(this.article._id)
                        .subscribe(res => console.log(res),
                                    error => console.log(error));
      return false;
    }

  ngOnInit() {
  }

}
