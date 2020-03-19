import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/interfaces/User';

@Injectable({providedIn: 'root'})
export class UserService {
    apiUrl: string = 'https://localhost:44344/api/users';

    constructor(private http: HttpClient) {
    }

    create(user: User): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}`, user);
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}`);
    }
    
    getById(id: string): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

    update(user: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
