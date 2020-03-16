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
var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(route, productsService) {
        this.route = route;
        this.productsService = productsService;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init ProductPageComponent');
        this.product$ = this.route.params
            .pipe(switchMap(function (params) {
            return _this.productsService.getById(params['id']);
        }));
    };
    ProductPageComponent = __decorate([
        Component({
            selector: 'app-product-page',
            templateUrl: './product-page.component.html',
            styleUrls: ['./product-page.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ProductsService])
    ], ProductPageComponent);
    return ProductPageComponent;
}());
export { ProductPageComponent };
//# sourceMappingURL=product-page.component.js.map