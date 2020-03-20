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
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrderItemsService } from '../../../shared/services/order-items.service';
var OrderItemsDashboardPageComponent = /** @class */ (function () {
    function OrderItemsDashboardPageComponent(alert, orderItemsService, route) {
        this.alert = alert;
        this.orderItemsService = orderItemsService;
        this.route = route;
        this.orderItems = [];
        this.loaded = false;
    }
    OrderItemsDashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.route.params
            .pipe(switchMap(function (params) {
            return _this.orderItemsService.getByOrderId(params['orderId']);
        }))
            .subscribe(function (orderItems) {
            _this.orderItems = orderItems;
            _this.loaded = true;
        });
    };
    OrderItemsDashboardPageComponent.prototype.remove = function (id) {
        var _this = this;
        this.dSub = this.orderItemsService.remove(id).subscribe(function () {
            _this.orderItems = _this.orderItems.filter(function (orderItem) { return orderItem.id !== id; });
            _this.alert.danger('Строка заказа была удалена');
        });
    };
    OrderItemsDashboardPageComponent.prototype.ngOnDestroy = function () {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    OrderItemsDashboardPageComponent = __decorate([
        Component({
            selector: 'order-items-dashboard-page',
            templateUrl: './order-items-dashboard-page.component.html',
            styleUrls: ['./order-items-dashboard-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            OrderItemsService,
            ActivatedRoute])
    ], OrderItemsDashboardPageComponent);
    return OrderItemsDashboardPageComponent;
}());
export { OrderItemsDashboardPageComponent };
//# sourceMappingURL=order-items-dashboard-page.component.js.map