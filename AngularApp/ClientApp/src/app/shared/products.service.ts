import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {FbCreateResponse, Product} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductsService {
    apiUrl: string = 'https://localhost:44344/api/products';

  constructor(private http: HttpClient) {
  }

  create(product: Product): Observable<Product> {
      return this.http.post(`${this.apiUrl}/products.json`, product)
      .pipe(map( (response: FbCreateResponse) => {
        return {
          ...product,
          //id: response.name,
          //date: new Date(product.date)
        };
    }));
  }

  getAll(): Observable<Product[]> {
      return this.http.get(`${this.apiUrl}`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            //id: key,
            //date: new Date(response[key].date)
          }));
      }));
  }

    getById(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${id}`)
            .pipe(map((product: Product) => {
        return {
          ...product,id,
          //date: new Date(product.date)
        };
      }));
  }

    update(product: Product): Observable<Product> {
        return this.http.patch<Product>(`${this.apiUrl}/products/${product.id}`, product)
  }

  remove(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }
}
