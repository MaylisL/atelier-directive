import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-detail/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';

/* const routes: Routes = [ 
  {path: "", redirectTo: "article-list", pathMatch: "full"},
  {path:'article-list', component: ArticleListComponent },
  {path: 'article/:id', component: ArticleDetailsComponent}
]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
