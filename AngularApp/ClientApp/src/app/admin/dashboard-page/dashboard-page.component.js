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
import { ProductsService } from '../../shared/services/products.service';
import { AlertService } from '../shared/services/alert.service';
var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(alert, productsService) {
        this.alert = alert;
        this.productsService = productsService;
        this.products = [];
        this.searchStr = '';
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.productsService.getAll().subscribe(function (products) {
            _this.products = products;
            // console.log('Products: ',this.products);
        });
    };
    DashboardPageComponent.prototype.ngOnDestroy = function () {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    DashboardPageComponent.prototype.remove = function (id) {
        var _this = this;
        this.dSub = this.productsService.remove(id).subscribe(function () {
            _this.products = _this.products.filter(function (product) { return product.id !== id; });
            _this.alert.danger('Продукт был удален');
        });
    };
    DashboardPageComponent = __decorate([
        Component({
            selector: 'app-dashboard-page',
            templateUrl: './dashboard-page.component.html',
            styleUrls: ['./dashboard-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            ProductsService])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());
export { DashboardPageComponent };
//# sourceMappingURL=dashboard-page.component.js.map