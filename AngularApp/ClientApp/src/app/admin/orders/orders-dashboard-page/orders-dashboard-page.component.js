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
import { AlertService } from '../../../shared/services/alert.service';
import { OrderService } from '../../../shared/services/order.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
var OrdersDashboardPageComponent = /** @class */ (function () {
    function OrdersDashboardPageComponent(alert, orderService, route) {
        this.alert = alert;
        this.orderService = orderService;
        this.route = route;
        this.orders = [];
        this.loaded = false;
    }
    OrdersDashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.route.params
            .pipe(switchMap(function (params) {
            return _this.orderService.getByUsername(params['userName']);
        }))
            .subscribe(function (orders) {
            _this.orders = orders;
            _this.loaded = true;
        });
    };
    OrdersDashboardPageComponent.prototype.remove = function (id) {
        var _this = this;
        this.dSub = this.orderService.remove(id).subscribe(function () {
            _this.orders = _this.orders.filter(function (product) { return product.id !== id; });
            _this.alert.danger('Заказ был удален');
        });
    };
    OrdersDashboardPageComponent.prototype.ngOnDestroy = function () {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    OrdersDashboardPageComponent = __decorate([
        Component({
            selector: 'orders-dashboard-page',
            templateUrl: './orders-dashboard-page.component.html',
            styleUrls: ['./orders-dashboard-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            OrderService,
            ActivatedRoute])
    ], OrdersDashboardPageComponent);
    return OrdersDashboardPageComponent;
}());
export { OrdersDashboardPageComponent };
//# sourceMappingURL=orders-dashboard-page.component.js.map