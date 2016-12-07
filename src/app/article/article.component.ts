import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Article} from './article.model';
import {ArticleService} from './article.service';
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
  @Output() articleDelete:EventEmitter<any> = new EventEmitter();

  constructor(private articeService:ArticleService, private router:Router) { 

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
    this.articleDelete.emit();
    return false;
  }

  detailview():boolean{
    console.log('in detailview() articlecomp');
    this.router.navigate(['/article', this.article._id]);
    
    // console.log(this.article._id);
    return false;
  }
  
  ngOnInit() {
  }

}
