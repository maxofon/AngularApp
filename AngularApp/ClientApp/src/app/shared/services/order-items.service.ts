import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderItem} from '../interfaces/OrderItem';

@Injectable({providedIn: 'root'})
export class OrderItemsService {
    apiUrl: string = 'https://localhost:44344/api/orderLine';

    constructor(private http: HttpClient) {
    }

    create(orderItem: OrderItem): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/Post`, orderItem);
    }

    getAll(): Observable<OrderItem[]> {
        return this.http.get<OrderItem[]>(`${this.apiUrl}/GetAll`);
    }

    getById(id: string): Observable<OrderItem> {
        return this.http.get<OrderItem>(`${this.apiUrl}/GetById/${id}`);
    }

    getByOrderId(id: string): Observable<OrderItem[]> {
        return this.http.get<OrderItem[]>(`${this.apiUrl}/GetByOrderId/${id}`);
    }

    update(orderItem: OrderItem): Observable<OrderItem> {
        return this.http.put<OrderItem>(`${this.apiUrl}/Put/${orderItem.id}`, orderItem);
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`);
    }
}
