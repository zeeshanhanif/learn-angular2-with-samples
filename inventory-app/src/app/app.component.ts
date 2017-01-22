import { Component } from '@angular/core';
import { Product } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products: Product[];

  constructor(){
    this.products = [
          new Product(
              'MYSHOES',
              'Black Running Shoes',
              
              './../../../assets/resources/images/products/black-shoes.jpg',
              ['Men', 'Shoes', 'Running Shoes'],
              109.99),
          new Product(
              'NEATOJACKET',
              'Blue Jacket',
              './../../../assets/resources/images/products/blue-jacket.jpg',
              ['Women', 'Apparel', 'Jackets & Vests'],
              238.99),
          new Product(
              'NICEHAT',
              'A Nice Black Hat',
              './../../../assets/resources/images/products/black-hat.jpg',
              ['Men', 'Accessories', 'Hats'],
              29.99)
    ];
    
  }

  productWasSelected(product: Product){
    console.log("Product Clicked: ",product);
  }
}
