import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  ratingScores = [1,2,3,4,5];
  selectedRating?: number = null;

  selectedProduct: Product;

  result = false;
  lastestProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.selectedProduct = this.productService.selectedProduct;
  }

  doEditProduct(){
    this.productService.edit(this.selectedProduct).subscribe(
      (response) => {
        if(response) { 
          this.result = true;
          this.lastestProduct = <Product> response;
        }
      }
    );
  }

}
