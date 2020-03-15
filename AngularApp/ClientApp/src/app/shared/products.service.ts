import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './interfaces/Product';

@Injectable({providedIn: 'root'})
export class ProductsService {
    apiUrl: string = 'https://localhost:44344/api/products';

  constructor(private http: HttpClient) {
  }

  create(product: Product): Observable<Product> {
      return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  update(product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
