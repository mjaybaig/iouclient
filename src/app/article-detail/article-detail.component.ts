import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {
  article:Article;
  constructor(private router:Router, private articleService:ArticleService, private route:ActivatedRoute) {
    
   }

  backtolist():boolean{
    this.router.navigate(['/articles']);
    return false;
  }
  ngOnInit() {
    this.route.params
              .switchMap((params:Params) => this.articleService.getArticle(params['id']))
              .subscribe((article:Article) => {
                this.article = article
                console.log(article)});
  }

}
