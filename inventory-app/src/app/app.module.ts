import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { ProductsListComponent } from './components/products-list/products-list.component'
import {ProductsListComponent} from './components';
import {ProductRowComponent} from './components';
import {ProductImageComponent} from './components';
import {ProductDisplayComponent} from './components';
import {ProductDepartmentComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
