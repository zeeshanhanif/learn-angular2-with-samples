import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire) {
    
   }

  ngOnInit() {
  }

  signup(email,passwrod){
    this.af.auth.createUser({
      email: email,
      password: passwrod,
    });
  }

  login(email,passwrod) {
    this.af.auth.login({
      email: email,
      password: passwrod,
    })    
  }

  logout() {
     this.af.auth.logout();
  }



}
