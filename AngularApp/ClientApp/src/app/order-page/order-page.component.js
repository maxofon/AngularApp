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
import { OrderService } from '../shared/services/order.service';
import { CartService } from '../shared/services/cart.service';
import { AlertService } from '../shared/services/alert.service';
var OrderPageComponent = /** @class */ (function () {
    function OrderPageComponent(auth, alert, router, route, orderService, cartService) {
        this.auth = auth;
        this.alert = alert;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.cartService = cartService;
        this.submitted = false;
    }
    OrderPageComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            name: new FormControl("" + this.auth.user, [
                Validators.required
            ]),
            surname: new FormControl(null, [
                Validators.required
            ]),
            address: new FormControl(null, [
                Validators.required
            ]),
            email: new FormControl("" + this.auth.email, [
                Validators.required,
                Validators.email
            ]),
            phone: new FormControl(null, [
                Validators.required
            ]),
        });
    };
    OrderPageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        var order = {
            name: this.form.value.name,
            surname: this.form.value.surname,
            email: this.form.value.email,
            address: this.form.value.address,
            phone: this.form.value.phone
        };
        this.orderService.create(order).subscribe(function () {
            _this.form.reset;
            _this.router.navigate(['/']);
            _this.submitted = false;
            _this.cartService.updateTotal();
            _this.alert.success(_this.auth.user + ", \u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D.");
        }, function () {
            _this.submitted = false;
        });
    };
    OrderPageComponent = __decorate([
        Component({
            selector: 'order-page',
            templateUrl: './order-page.component.html',
            styleUrls: ['./order-page.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            AlertService,
            Router,
            ActivatedRoute,
            OrderService,
            CartService])
    ], OrderPageComponent);
    return OrderPageComponent;
}());
export { OrderPageComponent };
//# sourceMappingURL=order-page.component.js.map