import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  ratingScores = [1,2,3,4,5];
  selectedRating?: number = null;

  newProduct: Product = {
    productCode: 0,
    productName: '',
    price: 0,
    rating: null
  };

  isAdded = false;
  lastestProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  doAddProduct(){
    this.productService.add(this.newProduct).subscribe(
      (response) => {
        if(response) { 
          this.isAdded = true;
          this.lastestProduct = <Product> response;
        }
      }
    );
  }

}
