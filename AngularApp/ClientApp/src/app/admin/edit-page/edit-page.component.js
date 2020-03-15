var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { ProductsService } from '../../shared/products.service';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from "../shared/services/alert.service";
var EditPageComponent = /** @class */ (function () {
    function EditPageComponent(alert, route, productsService) {
        this.alert = alert;
        this.route = route;
        this.productsService = productsService;
        this.submitted = false;
    }
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(switchMap(function (params) {
            return _this.productsService.getById(params['id']);
        }))
            .subscribe(function (product) {
            _this.product = product;
            _this.form = new FormGroup({
                name: new FormControl(product.name, Validators.required),
                company: new FormControl(product.company, Validators.required)
            });
        });
    };
    EditPageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.uSub = this.productsService.update(__assign(__assign({}, this.product), { name: this.form.value.name, company: this.form.value.company })).subscribe(function () {
            _this.submitted = false;
            _this.alert.success('Продукт был обновлен');
        });
    };
    EditPageComponent.prototype.ngOnDestroy = function () {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    };
    EditPageComponent = __decorate([
        Component({
            selector: 'app-edit-page',
            templateUrl: './edit-page.component.html',
            styleUrls: ['./edit-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            ActivatedRoute,
            ProductsService])
    ], EditPageComponent);
    return EditPageComponent;
}());
export { EditPageComponent };
//# sourceMappingURL=edit-page.component.js.map