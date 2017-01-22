import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-display',
  inputs : ['price'],
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  price: number;
  constructor() { }

  ngOnInit() {
  }

}
