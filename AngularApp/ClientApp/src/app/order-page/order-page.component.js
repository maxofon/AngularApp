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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
var OrderPageComponent = /** @class */ (function () {
    function OrderPageComponent(auth, router, route, cartService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.submitted = false;
    }
    OrderPageComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ]),
            surname: new FormControl(null, [
                Validators.required
            ]),
            address: new FormControl(null, [
                Validators.required
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            phone: new FormControl(null, [
                Validators.required
            ]),
        });
    };
    OrderPageComponent.prototype.submit = function () {
    };
    OrderPageComponent = __decorate([
        Component({
            selector: 'order-page',
            templateUrl: './order-page.component.html',
            styleUrls: ['./order-page.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            ActivatedRoute,
            CartService])
    ], OrderPageComponent);
    return OrderPageComponent;
}());
export { OrderPageComponent };
//# sourceMappingURL=order-page.component.js.map