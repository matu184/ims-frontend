import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model'; 

@Injectable({ providedIn: 'root' })
export class CategoryService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5247/api/categories');
  }
}
