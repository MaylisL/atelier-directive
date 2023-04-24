import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DisneyComponent } from './disney/disney.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-detail/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    DisneyComponent,
    VideoCardComponent,
    MyFormComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
