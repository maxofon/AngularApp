var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { AlertService } from "../../services/alert.service";
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.delay = 3000;
        this.type = 'success';
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aSub = this.alertService.alert$.subscribe(function (alert) {
            _this.text = alert.text;
            _this.type = alert.type;
            var timeout = setTimeout(function () {
                clearTimeout(timeout);
                _this.text = '';
            }, _this.delay);
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "delay", void 0);
    AlertComponent = __decorate([
        Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
        }),
        __metadata("design:paramtypes", [AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map