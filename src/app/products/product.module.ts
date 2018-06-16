import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductCodePipe } from './product-code.pipe';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './new-product.component';
import { EditProductComponent } from './edit-product.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductCodePipe,
    NewProductComponent,
    EditProductComponent
  ],
  exports: [
    ProductComponent,
    ProductCodePipe,
    NewProductComponent,
    SharedModule
  ]
})
export class ProductModule { }
