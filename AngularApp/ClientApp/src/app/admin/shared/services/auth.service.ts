import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FbAuthResponse} from '../../../shared/interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../../../shared/interfaces/User';

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

      return new Subject<string>();
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.user;
    // return true;
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error
    this.error$.next(message)

    // switch (message) {
    //   case 'INVALID_EMAIL':
    //     this.error$.next('Неверный email')
    //     break
    //   case 'INVALID_PASSWORD':
    //     this.error$.next('Неверный пароль')
    //     break
    //   case 'EMAIL_NOT_FOUND':
    //     this.error$.next('Такого email нет')
    //     break
    // }

    console.log(this.error$)

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
    if (response) {
      const expDate = new Date(new Date().getTime() + 3600000); //1 час
      localStorage.setItem('expires', expDate.toString())
      localStorage.setItem('user-name', response.name)
    } else {
      localStorage.clear()
    }
  }

}
