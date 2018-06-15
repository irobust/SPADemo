import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './template/header.component';
import { FooterComponent } from './template/footer.component';
import { ContentComponent } from './template/content.component';
import { CoreModule } from './core.module';
import { ProductModule } from './products/product.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ProductModule,
    RouterModule.forRoot([
        { path: '', pathMatch: 'full', redirectTo: 'products'},
        { path: '**', pathMatch: 'full', redirectTo: 'products'}
    ])
  ],
  providers: [],
  bootstrap: [HeaderComponent, 
              FooterComponent, 
              ContentComponent]
})
export class AppModule { }
