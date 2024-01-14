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

  getAllProducts(limit = 12, sort = 'desc'): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
    );
  }
}
