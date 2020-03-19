import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../interfaces/Order';

@Injectable({providedIn: 'root'})
export class OrderService {
    apiUrl: string = 'https://localhost:44344/api/orders';

    constructor(private http: HttpClient) {
    }

    create(order: Order): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}`, order);
    }

    getAll(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}`);
    }

    getById(id: string): Observable<Order> {
        return this.http.get<Order>(`${this.apiUrl}/${id}`);
    }

    update(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiUrl}/${order.id}`, order);
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
