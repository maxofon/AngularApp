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
    ProductPageComponent.prototype.addToCart = function (id) {
        this.cartService.addToCart(id);
        this.alert.success('Продукт был добавлен в корзину');
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
