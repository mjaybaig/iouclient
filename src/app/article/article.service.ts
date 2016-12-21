import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Article} from './article.model';
import {Debt} from '../shared/debt.model';
  
  
const baseURL:string = 'http://localhost:3000/api';

@Injectable()
export class ArticleService {
  http:Http;

  constructor(http: Http) {
    this.http = http;
   }

  //Get all debts owed to current user
  getOwedToMe(id:string): Observable<Debt[]>{
    // console.log("In getArticles");
    return this.http.get(baseURL+'/mydebts/to/'+id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // getArticle(id:string):Observable<Article>{
  //   console.log('in getArticle:'+id);
  //   return this.http.get(baseURL+'/article/'+id)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  // addArticle(title:string, link:string, detail:string): Observable<Article>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});

  //   return this.http.post(baseURL+'/article', {title, link, detail}, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  // updateVotes(id:string, votes:number, title:string, link:string, detail:string):Observable<Article>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});

  //   console.log("In updateVotes service");
  //   return this.http.put(baseURL+'/article/'+id, {title, link, votes, detail}, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }
    addDebt(id:string, name:string, amount:number):Observable<Debt>{
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      console.log("In updateVotes service");
      return this.http.put(baseURL+'/mydebts/to/'+id, {name, amount}, options)
                      .map(this.extractData)
                      .catch(this.handleError);
  }

  // deleteArticle(id:string){
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});
  //   console.log("In updateVotes service");
  //   return this.http.delete(baseURL+'/article/'+id, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  private extractData(res: Response){
    let body = res.json();
    console.log("in extractData");
    console.log(body);
    return body || { };
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.err || JSON.stringify(body);
      errMsg=`${error.status} - ${error.statusText} || ''} ${err}`;

    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
