import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {Article} from '../article/article.model';

@Injectable()
export class ArticlesPubSubService extends ReplaySubject<Article> {

  constructor() {
    super();
  }

}