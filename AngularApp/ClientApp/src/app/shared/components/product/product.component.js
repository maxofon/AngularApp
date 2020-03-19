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
import { CartService } from '../../services/cart.service';
import { AlertService } from '../../services/alert.service';
var ProductComponent = /** @class */ (function () {
    function ProductComponent(alert, cartService) {
        this.alert = alert;
        this.cartService = cartService;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product.id);
        this.alert.success("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 " + product.name + " \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
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