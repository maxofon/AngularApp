var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let OrderItemsService = class OrderItemsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/orderLines';
    }
    create(orderItem) {
        return this.http.post(`${this.apiUrl}`, orderItem);
    }
    getAll() {
        return this.http.get(`${this.apiUrl}`);
    }
    getById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    getByOrderId(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    update(orderItem) {
        return this.http.put(`${this.apiUrl}/${orderItem.id}`, orderItem);
    }
    remove(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
};
OrderItemsService = __decorate([
    Injectable({ providedIn: 'root' })
], OrderItemsService);
export { OrderItemsService };
//# sourceMappingURL=order-items.service.js.map