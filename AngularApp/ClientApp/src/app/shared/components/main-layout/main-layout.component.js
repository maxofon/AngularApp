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
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(auth, cartService, router) {
        this.auth = auth;
        this.cartService = cartService;
        this.router = router;
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSub = this.cartService.totalAmount$.subscribe(function (value) {
            _this.totalAmount = value;
        });
        this.cartService.updateTotal();
    };
    MainLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.cartSub) {
            this.cartSub.unsubscribe();
        }
    };
    MainLayoutComponent.prototype.logout = function ($event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    MainLayoutComponent = __decorate([
        Component({
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: ['./main-layout.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            CartService,
            Router])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
export { MainLayoutComponent };
//# sourceMappingURL=main-layout.component.js.map
