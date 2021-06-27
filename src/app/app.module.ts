import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, NewsComponent, ProductsComponent,ProductsContentComponent } from './componemts';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    HomeComponent,
    ProductsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
