import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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
    return this.http.post<Product>('http://localhost:5247/api/products', product).pipe(
      tap(() => this.loadProducts()) 
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
  
  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }
  
  
  
  
}
