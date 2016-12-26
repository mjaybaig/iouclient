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
                          debts => {
                            for(let tdebt in debts){
                              if(!debts[tdebt].isClosed){
                                this.debts.push(new Debt(
                                  debts[tdebt].amount,
                                  debts[tdebt].isClosed,
                                  debts[tdebt].owedby,
                                  null,
                                  +tdebt,
                                  debts[tdebt].desc
                                ));
                              }
                            }
                          },
                          error => this.errorMessage = "Error in setting articles: "+<any>error
                        );
  }

  closeDebt(index:number){
    this.articleService.closeDebt(this.userid, index)
                        .subscribe(
                          res=>{
                            if(res['ok'] == 1){
                              console.log("here");
                              let closedindex = this.debts.findIndex(dres => dres.idindex==index);
                              this.debts[closedindex].isClosed = true;
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
