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
import { AuthService } from '../admin/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyValidators } from '../shared/my.validators';
var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        // this.route.queryParams.subscribe((params: Params) => {
        //   if (params['loginAgain']) {
        //     this.message = 'Пожалуйста, введите данные.';
        //   } else if (params['authFailed']) {
        //     this.message = 'Сессия истекла. Введите данные заново.';
        //   }
        // })
        this.form = new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
            ]),
            confirmPassword: new FormControl(null, [
                Validators.required
            ])
        }, [MyValidators.confirmPassword]);
    };
    RegisterPageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        var user = {
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.auth.register(user).subscribe(function () {
            _this.form.reset;
            _this.router.navigate(['/']);
            _this.submitted = false;
        }, function () {
            _this.submitted = false;
        });
        // this.form.reset;
        // this.router.navigate(['/admin','dashboard'])
        // this.submitted = false;
    };
    RegisterPageComponent = __decorate([
        Component({
            selector: 'register-page',
            templateUrl: './register-page.component.html',
            styleUrls: ['./register-page.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            ActivatedRoute])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());
export { RegisterPageComponent };
//# sourceMappingURL=register-page.component.js.map