import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product';
import { BASEURL } from '../settings';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[];
  public menuSelected = new EventEmitter<number>();
  
  private _selectedMenu: number;
  get selectedMenu(): number{
    return this._selectedMenu;
  }

  set selectedMenu(value: number){
    this._selectedMenu = value;
    this.menuSelected.emit(value);
  }

  public filterTextChanged = new EventEmitter<string>();
  private _serviceURL = BASEURL + "products";

  public selectedProduct: Product;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Product[]>(this._serviceURL)
              .pipe(
                tap((p)=> {console.log(p)}),
                map((p)=> p)
              );
  }

  removeById(productId: number): Observable<Object> {
    return this.http.delete<Object>(this._serviceURL + '/' + productId);
  }

  add(product: Product): Observable<Object>{
    return this.http.post(this._serviceURL, product);
    // return this.http.post(this._serviceURL, {
    //   params: new HttpParams().set('productId', '11')
    //                           .set('productCode', product.productCode)
    //                           .set('productName', product.productName)
    //                           .set('productPrice', product.price.toString())
    //                           .set('rating', product.rating.toString())
    // });
  }

  edit(product: Product): Observable<Object> {
    return this.http.put(this._serviceURL + '/' + product.id, product);
  }

}






