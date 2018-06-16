import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { remove } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  _filterText: string;
    get filterText(): string {
        return this._filterText;
    }
    set filterText(value: string) {
        this._filterText = value;
        this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products;
    }

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = products;
      }
    );
    this.productService.filterTextChanged.subscribe(
      (filterText) => { this.filterText = filterText }
    );
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  removeProduct(product: Product){
    this.productService.removeById(product.productId)
      .subscribe(
        response => {
          if(response){
            remove(this.filteredProducts, p => p.productId == product.productId);
          }
        }
      );
  }

  editProduct(product: Product){
    this.productService.selectedProduct = product;
    this.router.navigate(['/products/edit']);
  }

}
