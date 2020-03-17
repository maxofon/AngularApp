var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { AlertService } from '../../../admin/shared/services/alert.service';
import { CartService } from '../../services/cart.service';
var ProductComponent = /** @class */ (function () {
    function ProductComponent(alert, cartService) {
        this.alert = alert;
        this.cartService = cartService;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function (id) {
        this.cartService.addToCart(id);
        this.alert.success('Продукт был добавлен в корзину');
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProductComponent.prototype, "showAddCart", void 0);
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            CartService])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map