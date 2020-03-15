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
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../shared/products.service";
import { AlertService } from "../shared/services/alert.service";
var CreatePageComponent = /** @class */ (function () {
    function CreatePageComponent(alert, productsService) {
        this.alert = alert;
        this.productsService = productsService;
    }
    CreatePageComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            company: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
        });
    };
    CreatePageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var product = {
            name: this.form.value.name,
            company: this.form.value.company,
            price: this.form.value.price
        };
        this.productsService.create(product).subscribe(function () {
            _this.form.reset();
            _this.alert.success('Создан новый пост');
        });
        console.log('new product', product);
    };
    CreatePageComponent = __decorate([
        Component({
            selector: 'app-create-page',
            templateUrl: './create-page.component.html',
            styleUrls: ['./create-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            ProductsService])
    ], CreatePageComponent);
    return CreatePageComponent;
}());
export { CreatePageComponent };
//# sourceMappingURL=create-page.component.js.map