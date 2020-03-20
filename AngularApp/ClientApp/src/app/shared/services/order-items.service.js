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
var OrderItemsService = /** @class */ (function () {
    function OrderItemsService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/orderLine';
    }
    OrderItemsService.prototype.create = function (orderItem) {
        return this.http.post(this.apiUrl + "/Post", orderItem);
    };
    OrderItemsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/GetAll");
    };
    OrderItemsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/GetById/" + id);
    };
    OrderItemsService.prototype.getByOrderId = function (id) {
        return this.http.get(this.apiUrl + "/GetByOrderId/" + id);
    };
    OrderItemsService.prototype.update = function (orderItem) {
        return this.http.put(this.apiUrl + "/Put/" + orderItem.id, orderItem);
    };
    OrderItemsService.prototype.remove = function (id) {
        return this.http.delete(this.apiUrl + "/Delete/" + id);
    };
    OrderItemsService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], OrderItemsService);
    return OrderItemsService;
}());
export { OrderItemsService };
//# sourceMappingURL=order-items.service.js.map