import { Component, OnInit, Input } from '@angular/core';
import {Debt} from '../shared/debt.model';
import {ArticleService} from '../article/article.service';
@Component({
  selector: 'app-closed-debts',
  templateUrl: './closed-debts.component.html',
  styleUrls: ['./closed-debts.component.css'],
  providers: [ArticleService]
})
export class ClosedDebtsComponent implements OnInit {
  @Input() userid;
  closedDebts:Debt[] = [];
  constructor(private debtService:ArticleService) { }

  ngOnInit() {
    this.getClosedDebts();
  }

  getClosedDebts(){
    this.debtService.getOwedToMe(this.userid)
                    .subscribe(debts=>{
                       for(let tdebt of debts){
                        if(tdebt.isClosed === true){
                          this.closedDebts.push(tdebt);
                        }
                      }
                    },
                    error=>console.log(error));
    // console.log(this.closedDebts);
  }

}
