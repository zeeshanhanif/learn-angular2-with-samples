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
    
   }

  ngOnInit() {
  }

}
