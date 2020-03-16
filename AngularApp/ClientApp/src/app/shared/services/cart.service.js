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
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/cart';
    }
    CartService.prototype.create = function (cart) {
        return this.http.post("" + this.apiUrl, cart);
    };
    CartService.prototype.getAll = function () {
        return this.http.get("" + this.apiUrl);
    };
    CartService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/" + id);
    };
    CartService.prototype.update = function (cart) {
        return this.http.put(this.apiUrl + "/" + cart.id, cart);
    };
    CartService.prototype.remove = function (id) {
        return this.http.delete(this.apiUrl + "/" + id);
    };
    CartService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map