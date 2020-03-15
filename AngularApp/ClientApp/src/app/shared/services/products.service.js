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
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/products';
    }
    ProductsService.prototype.create = function (product) {
        return this.http.post("" + this.apiUrl, product);
    };
    ProductsService.prototype.getAll = function () {
        return this.http.get("" + this.apiUrl);
    };
    ProductsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/" + id);
    };
    ProductsService.prototype.update = function (product) {
        return this.http.put(this.apiUrl + "/" + product.id, product);
    };
    ProductsService.prototype.remove = function (id) {
        return this.http.delete(this.apiUrl + "/" + id);
    };
    ProductsService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map