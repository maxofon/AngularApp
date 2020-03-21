var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { map } from 'rxjs/operators';
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/orders';
    }
    OrderService.prototype.create = function (order) {
        return this.http.post("" + this.apiUrl, order);
    };
    OrderService.prototype.getAll = function () {
        return this.http.get("" + this.apiUrl)
            .pipe(map(function (response) {
            return response.map(function (order) {
                return __assign(__assign({}, order), { orderTime: new Date(order.orderTime) });
            });
        }));
    };
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
    OrderService.prototype.getByUsername = function (username) {
        return this.http.get(this.apiUrl + "/" + username)
            .pipe(map(function (response) {
            return response.map(function (order) {
                return __assign(__assign({}, order), { orderTime: new Date(order.orderTime) });
            });
        }));
    };
    OrderService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/" + id);
    };
    OrderService.prototype.update = function (order) {
        return this.http.put(this.apiUrl + "/" + order.id, order);
    };
    OrderService.prototype.remove = function (id) {
        return this.http.delete(this.apiUrl + "/" + id);
    };
    OrderService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map