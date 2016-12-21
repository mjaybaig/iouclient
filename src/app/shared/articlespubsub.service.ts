import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {Debt} from './debt.model';

@Injectable()
export class ArticlesPubSubService extends ReplaySubject<Debt> {

  constructor() {
    super();
  }

}