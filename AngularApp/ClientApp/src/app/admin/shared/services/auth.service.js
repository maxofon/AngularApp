var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.error$ = new Subject();
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            //const expDate = new Date(localStorage.getItem('fb-token-exp'));
            //if (new Date > expDate) {
            //  this.logout();
            //  return null;
            //}
            //return localStorage.getItem('fb-token')
            return 'test';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        user.returnSecureToken = true;
        //return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        //  .pipe(
        //    tap(this.setToken),
        //    catchError(this.handleError.bind(this))
        //  )
        return new Subject();
    };
    AuthService.prototype.logout = function () {
        this.setToken(null);
    };
    AuthService.prototype.isAuthenticated = function () {
        // return !!this.token;
        return true;
    };
    AuthService.prototype.handleError = function (error) {
        var message = error.error.error.message;
        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('Неверный email');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Неверный пароль');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Такого email нет');
                break;
        }
        console.log(this.error$);
        return throwError(error);
    };
    AuthService.prototype.setToken = function (response) {
        if (response) {
            var expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        }
        else {
            localStorage.clear();
        }
    };
    AuthService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map