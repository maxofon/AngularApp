var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../shared/services/auth.service";
var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
            console.log('You are admin');
            return true;
        }
        else {
            // this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
                queryParams: {
                    loginAgain: true
                }
            });
        }
    };
    AuthAdminGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AuthService,
            Router])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());
export { AuthAdminGuard };
//# sourceMappingURL=auth-admin.guard.js.map