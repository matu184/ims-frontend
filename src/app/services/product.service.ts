import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<Product[]>([]);
  public readonly products$ = this._products.asObservable();
  private apiUrl = 'http://localhost:5247/api';


  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http.get<Product[]>('http://localhost:5247/api/products')
      .subscribe(data => this._products.next(data));
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }
  
}
