import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
//import {HomeComponent} from './components/home/home.component'
import {AppRoutes} from './routes'
import {Components} from './components'


export const firebaseConfig = {
    apiKey: "AIzaSyBZXXxKBww7fF8-w4tFcM3KCzr7JL_Nt9E",
    authDomain: "newtodolist-b6740.firebaseapp.com",
    databaseURL: "https://newtodolist-b6740.firebaseio.com",
    storageBucket: "newtodolist-b6740.appspot.com",
    messagingSenderId: "213742222915"
};


@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
