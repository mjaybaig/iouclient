import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
// import { ArticleComponent } from './article/article.component';
// import { ArticlesComponent } from './articles/articles.component';
// import {ArticleDetailComponent} from './article-detail/article-detail.component'
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormComponent } from './article-form/article-form.component';
import { DebtsComponent } from './debts/debts.component';
import { ClosedDebtsComponent } from './closed-debts/closed-debts.component';


// const approutes:Routes = 
// [
//   { path: 'article/:id', component: 'ArticleDetailComponent'},
//   { path: 'articles', component: 'ArticlesComponent'} 
// ];
// const appRoutes: Routes = [
//   { path: '', component: ArticlesComponent },
//   { path: 'articles', component: ArticlesComponent},
//   { path: 'articles/:listid', component: ArticlesComponent},
//   { path: 'article/:id', component: ArticleDetailComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ArticleFormComponent,
    DebtsComponent,
    ClosedDebtsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
