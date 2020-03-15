var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alert$ = new Subject();
    }
    AlertService.prototype.success = function (text) {
        console.log(text);
        this.alert$.next({ type: 'success', text: text });
    };
    AlertService.prototype.warning = function (text) {
        this.alert$.next({ type: 'warning', text: text });
    };
    AlertService.prototype.danger = function (text) {
        this.alert$.next({ type: 'danger', text: text });
    };
    AlertService = __decorate([
        Injectable()
    ], AlertService);
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map