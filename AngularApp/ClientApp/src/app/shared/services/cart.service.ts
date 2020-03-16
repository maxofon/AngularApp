import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../interfaces/Cart';

@Injectable({providedIn: 'root'})
export class CartService {
    apiUrl: string = 'https://localhost:44344/api/cart';

    constructor(private http: HttpClient) {
    }

    create(productId: string): Observable<Cart> {
        return this.http.post<Cart>(`${this.apiUrl}/${productId}`, null);
    }

    getAll(): Observable<Cart[]> {
        return this.http.get<Cart[]>(`${this.apiUrl}`);
    }

    getById(id: string): Observable<Cart> {
        return this.http.get<Cart>(`${this.apiUrl}/${id}`);
    }

    update(cart: Cart): Observable<Cart> {
        return this.http.put<Cart>(`${this.apiUrl}/${cart.id}`, cart);
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
