import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http'
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SubCategoryModule } from './components/sub-category/sub-category.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SubCategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


