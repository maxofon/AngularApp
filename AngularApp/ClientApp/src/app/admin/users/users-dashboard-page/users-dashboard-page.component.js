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
import { UserService } from '../../shared/services/user.service';
var UsersDashboardPageComponent = /** @class */ (function () {
    function UsersDashboardPageComponent(alert, userService) {
        this.alert = alert;
        this.userService = userService;
        this.users = [];
    }
    UsersDashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.userService.getAll().subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersDashboardPageComponent.prototype.ngOnDestroy = function () {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    UsersDashboardPageComponent.prototype.remove = function (user) {
        var _this = this;
        this.dSub = this.userService.remove(user.id).subscribe(function () {
            _this.users = _this.users.filter(function (u) { return u.id !== user.id; });
            _this.alert.danger("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C " + user.email + " \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D");
        }, function (error) {
            _this.alert.danger("\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F " + user.email);
        });
    };
    UsersDashboardPageComponent = __decorate([
        Component({
            selector: 'users-dashboard-page',
            templateUrl: './users-dashboard-page.component.html',
            styleUrls: ['./users-dashboard-page.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService,
            UserService])
    ], UsersDashboardPageComponent);
    return UsersDashboardPageComponent;
}());
export { UsersDashboardPageComponent };
//# sourceMappingURL=users-dashboard-page.component.js.map