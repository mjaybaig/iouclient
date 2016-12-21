import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../article/article.model';
import {ArticleService} from '../article/article.service';
import {ArticlesPubSubService} from '../shared/articlespubsub.service';
import {Debt} from '../shared/debt.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  providers:[ArticleService]
})
export class ArticleFormComponent implements OnInit {
  debtForm:FormGroup;
  @Input() userid:string;
  newdebt:Debt;

  constructor(fb: FormBuilder, private articleService:ArticleService, private aps:ArticlesPubSubService) {
    this.debtForm = fb.group({
      'owedby': ['',Validators.required],
      'amount': ['', Validators.required]
    });
   }
   
  onSubmit(f:any){
    console.log("In onSubmit");
    this.newdebt = new Debt(f.amount, false, f.owedby, null);
    this.articleService.addDebt(this.userid, f.owedby, f.amount)
                        .subscribe(newDebt => {
                                          if(newDebt['ok'] == 1){
                                            this.aps.next(this.newdebt);
                                          } 
                                        },
                                   error => console.log(error),
                                   () => console.log('New article added!'));

    this.debtForm.reset();
  }
  ngOnInit() {

  }

}
