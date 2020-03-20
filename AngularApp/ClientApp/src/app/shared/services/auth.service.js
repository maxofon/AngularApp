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
import { catchError, tap } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.error$ = new Subject();
        this.apiUrl = 'api/account';
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            var expDate = new Date(localStorage.getItem('expires'));
            if (new Date > expDate) {
                this.logout();
                return null;
            }
            return localStorage.getItem('user-name');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        // user.returnSecureToken = true;
        return this.http.post(this.apiUrl + "/login", user)
            .pipe(
        // tap(this.setToken),
        tap(this.setUser), catchError(this.handleError.bind(this)));
    };
    AuthService.prototype.loginAsAdmin = function (user) {
        // user.returnSecureToken = true;
        return this.http.post(this.apiUrl + "/loginAdmin", user)
            .pipe(
        // tap(this.setToken),
        tap(this.setUser), catchError(this.handleError.bind(this)));
    };
    AuthService.prototype.logout = function () {
        this.http.get(this.apiUrl + "/logout");
        this.setUser(null);
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.user;
        // return true;
    };
    AuthService.prototype.isAdmin = function () {
        return !!localStorage.getItem('admin');
        // return true;
    };
    AuthService.prototype.handleError = function (error) {
        console.log(error);
        this.error$.next(error.error);
        // console.log('this.error$',this.error$)
        return throwError(error);
    };
    AuthService.prototype.setUser = function (response) {
        // console.log(response);
        if (response) {
            var expDate = new Date(new Date().getTime() + 600000); //10 мин
            localStorage.setItem('expires', expDate.toString());
            localStorage.setItem('user-name', response.name);
            localStorage.setItem('user-email', response.email);
            if (response.role.name == 'admin') {
                localStorage.setItem('admin', 'true');
            }
        }
        else {
            localStorage.clear();
        }
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/register", user)
            .pipe(
        // tap(this.setToken),
        tap(this.setUser), catchError(this.handleError.bind(this)));
    };
    AuthService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map