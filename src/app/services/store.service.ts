import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private http = inject(HttpClient);

  constructor() {}

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${STORE_BASE_URL}/products/categories`);
  }
}
