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
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['loginAgain']) {
                _this.message = 'Пожалуйста, введите данные.';
            }
            else if (params['authFailed']) {
                _this.message = 'Сессия истекла. Введите данные заново.';
            }
        });
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ])
        });
    };
    LoginPageComponent.prototype.submit = function () {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        // const user: User = {
        //   email: this.form.value.email,
        //   password: this.form.value.password
        // }
        // this.auth.login(user).subscribe(() => {
        //   this.form.reset;
        //   this.router.navigate(['/admin','dashboard'])
        //   this.submitted = false;
        // }, () => {
        //   this.submitted = false
        // });
        this.form.reset;
        this.router.navigate(['/admin', 'dashboard']);
        this.submitted = false;
    };
    LoginPageComponent = __decorate([
        Component({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.scss']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            ActivatedRoute])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map