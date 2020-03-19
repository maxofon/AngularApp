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
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../shared/services/cart.service';
import { AlertService } from '../shared/services/alert.service';
import { AuthService } from '../shared/services/auth.service';
var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(auth, route, productsService, cartService, alert) {
        this.auth = auth;
        this.route = route;
        this.productsService = productsService;
        this.cartService = cartService;
        this.alert = alert;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init ProductPageComponent');
        this.product$ = this.route.params
            .pipe(switchMap(function (params) {
            return _this.productsService.getById(params['id']);
        }));
    };
    ProductPageComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product.id);
        this.alert.success("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 " + product.name + " \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    };
    ProductPageComponent = __decorate([
        Component({
            selector: 'app-product-page',
            templateUrl: './product-page.component.html',
            styleUrls: ['./product-page.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            ActivatedRoute,
            ProductsService,
            CartService,
            AlertService])
    ], ProductPageComponent);
    return ProductPageComponent;
}());
export { ProductPageComponent };
//# sourceMappingURL=product-page.component.js.map