import { Component, OnInit, Input } from '@angular/core';
import {Debt} from '../shared/debt.model';
import {ArticleService} from '../article/article.service';
import {ArticlesPubSubService} from '../shared/articlespubsub.service';
import '../rxjs-operators';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
  providers: [ArticleService]
})
export class DebtsComponent implements OnInit {
  debts:Debt[] = [];
  errorMessage:string;
  @Input() userid:string;

  constructor(private articleService:ArticleService, private aps:ArticlesPubSubService) { }
  getDebts(){
    this.articleService.getOwedToMe(this.userid)
                        .subscribe(
                          debts => this.debts = debts,
                          error => this.errorMessage = "Error in setting articles: "+<any>error
                        );
  }

  closeDebt(index:number){
    this.articleService.closeDebt(this.userid, index)
                        .subscribe(
                          res=>{
                            if(res['ok'] == 1){
                              console.log("here");
                              this.debts[index].isClosed = true;
                            }
                            else{
                              console.log("did not res 1 instead res "+res);
                            }
                          },
                          err=>console.log(err)
                        )
  }
  ngOnInit() {
    
    this.getDebts();
    this.aps.subscribe(newdebt=>{console.log(newdebt),this.debts.push(newdebt)},
                       error=>this.errorMessage = <any>error,
                       ()=>console.log("Updated debts!"));
  }

}
