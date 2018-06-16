import { NgModule } from '@angular/core';
import { ProductService } from './products/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ProductService, HttpClient]
})
export class CoreModule { }
