import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DisneyComponent } from './disney/disney.component';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    DisneyComponent,
    VideoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
