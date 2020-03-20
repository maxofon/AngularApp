import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../interfaces/Order';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OrderService {
    apiUrl: string = 'https://localhost:44344/api/orders';

    constructor(private http: HttpClient) {
    }

    create(order: Order): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}`, order);
    }

    getAll(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}`)
            .pipe(map((response: Order[]) => {
                return response.map((order) => {
                    return {
                        ...order,
                        orderTime: new Date(order.orderTime)
                    }
                })
            }));
    }

    // getAll(): Observable<Post[]> {
    //     return this.http.get(`${environment.fbDbUrl}/posts.json`)
    //         .pipe(map((response: {[key: string]: any}) => {
    //             return Object
    //                 .keys(response)
    //                 .map(key => ({
    //                     ...response[key],
    //                     id: key,
    //                     date: new Date(response[key].date)
    //                 }));
    //         }));
    // }

    getByUsername(username: string): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}/${username}`)
            .pipe(map((response: Order[]) => {
                return response.map((order) => {
                    return {
                        ...order,
                        orderTime: new Date(order.orderTime)
                    }
                })
            }));
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
