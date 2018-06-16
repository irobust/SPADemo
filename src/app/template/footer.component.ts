import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  menuSelectedItem: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.menuSelected.subscribe(
      (menuItem) => { this.menuSelectedItem = menuItem }
    );
  }

}
