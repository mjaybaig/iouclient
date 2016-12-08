import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  providers:[ArticleService]
})
export class ArticleFormComponent implements OnInit {
  articleForm:FormGroup;

  constructor(fb: FormBuilder, private articleService:ArticleService) {
    this.articleForm = fb.group({
      'title': ['',Validators.required],
      'link': ['', Validators.required],
      'detail': ['', Validators.required]
    });
   }
   
  onSubmit(f:any){
    this.articleService.addArticle(f.title, f.link, f.detail)
                        .subscribe();
  }
  ngOnInit() {
    
  }

}
