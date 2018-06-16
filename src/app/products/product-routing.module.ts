import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { NewProductComponent } from './new-product.component';
import { EditProductComponent } from './edit-product.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/new', component: NewProductComponent},
  { path: 'products/edit', component: EditProductComponent}    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
