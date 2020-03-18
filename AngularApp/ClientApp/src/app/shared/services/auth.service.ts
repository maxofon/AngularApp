import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FbAuthResponse} from '../interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../interfaces/User';

@Injectable({providedIn: 'root'})

export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  apiUrl: string = 'api/account';

  constructor(private http: HttpClient) {
  }

  get user(): string {
    const expDate = new Date(localStorage.getItem('expires'));
    if (new Date > expDate) {
     this.logout();
     return null;
    }

    return localStorage.getItem('user-name')
  }

  login(user: User): Observable<any> {
    // user.returnSecureToken = true;
    return this.http.post(`${this.apiUrl}/login`, user)
     .pipe(
       // tap(this.setToken),
       tap(this.setUser),
       catchError(this.handleError.bind(this))
     )
  }

  loginAsAdmin(user: User): Observable<any> {
    // user.returnSecureToken = true;
    return this.http.post(`${this.apiUrl}/loginAdmin`, user)
        .pipe(
            // tap(this.setToken),
            tap(this.setUser),
            catchError(this.handleError.bind(this))
        )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.user;
    // return true;
  }

  isAdmin(): boolean {
    return !!localStorage.getItem('admin');
    // return true;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error)
    this.error$.next(error.error)
    // console.log('this.error$',this.error$)
    return throwError(error)
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn*1000);
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

  private setUser(response: User | null) {
    // console.log(response);
    if (response) {
      const expDate = new Date(new Date().getTime() + 60000); //1 мин
      localStorage.setItem('expires', expDate.toString())
      localStorage.setItem('user-name', response.name)
      localStorage.setItem('user-email', response.email)
      if (response.role.name == 'admin') {
        localStorage.setItem('admin', 'true')
      }
    } else {
      localStorage.clear()
    }
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user)
        .pipe(
            // tap(this.setToken),
            tap(this.setUser),
            catchError(this.handleError.bind(this))
        )
  }
}
