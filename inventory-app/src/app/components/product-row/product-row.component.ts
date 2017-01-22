import { Component, OnInit } from '@angular/core';
import { Product} from '../../models';

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class':'item'},
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
