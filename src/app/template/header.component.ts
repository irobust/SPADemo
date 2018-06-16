import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  private _txtFilter;
  get txtFilter(): string{
    return this._txtFilter;
  }

  set txtFilter(value: string){
    this._txtFilter = value;
    this.productService.filterTextChanged.emit(value);
  }
  constructor(private productService:ProductService,
              private router: Router) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){}

  selectMenu(menuItem: number){
    this.productService.selectedMenu = menuItem;
  }

  goToNewProductPage(e){
    this.router.navigate(['/products/new']);
    e.preventDefault();
  }
}
