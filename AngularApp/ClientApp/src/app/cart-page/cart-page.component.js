var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { AlertService } from '../shared/services/alert.service';
var CartPageComponent = /** @class */ (function () {
    function CartPageComponent(alert, cartService) {
        this.alert = alert;
        this.cartService = cartService;
        this.carts = [];
    }
    CartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.cartService.getAll().subscribe(function (carts) {
            _this.carts = carts;
            _this.loaded = true;
        });
    };
    CartPageComponent.prototype.remove = function (cart) {
        var _this = this;
        var amount = cart.price * cart.quantity;
        this.dSub = this.cartService.remove(cart.id).subscribe(function () {
            _this.carts = _this.carts.filter(function (c) { return c.id !== cart.id; });
            _this.cartService.updateTotal();
            _this.loaded = true;
            _this.alert.danger("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 " + amount + " \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B");
        });
    };
    CartPageComponent.prototype.ngOnDestroy = function () {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    CartPageComponent = __decorate([
        Component({
            selector: 'app-cart-page',
            templateUrl: './cart-page.component.html',
            styleUrls: ['./cart-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            CartService])
    ], CartPageComponent);
    return CartPageComponent;
}());
export { CartPageComponent };
//# sourceMappingURL=cart-page.component.js.map