import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
//import {HomeComponent} from './components/home/home.component'
import {AppRoutes} from './routes'
import {Components} from './components'

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
