import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(private router: Router) {
    Observable.timer(2000)
    .do(val=> console.log("Routing to Home"))
    .subscribe(val=>{
      this.router.navigate(['/home']);
    })
   }

  ngOnInit() {
  }

}
