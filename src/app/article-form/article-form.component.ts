import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service';
import {ArticlesPubSubService} from '../shared/articlespubsub.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  providers:[ArticleService]
})
export class ArticleFormComponent implements OnInit {
  articleForm:FormGroup;

  constructor(fb: FormBuilder, private articleService:ArticleService, private aps:ArticlesPubSubService) {
    this.articleForm = fb.group({
      'title': ['',Validators.required],
      'link': ['', Validators.required],
      'detail': ['', Validators.required]
    });
   }
   
  onSubmit(f:any){
    this.articleService.addArticle(f.title, f.link, f.detail)
                        .subscribe(newArticle => {this.aps.next(newArticle), console.log("Went to next!")},
                                   error => console.log(error),
                                   () => console.log('New article added!'));
    this.articleForm.reset();
  }
  ngOnInit() {

  }

}
