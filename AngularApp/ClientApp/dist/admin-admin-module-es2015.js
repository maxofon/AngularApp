(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/admin-layout/admin-layout.component */ "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/admin/login-page/login-page.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/admin/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-page/create-page.component */ "./src/app/admin/create-page/create-page.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "./src/app/admin/edit-page/edit-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/admin/shared/services/auth.guard.ts");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/search.pipe */ "./src/app/admin/shared/search.pipe.ts");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/alert/alert.component */ "./src/app/admin/shared/components/alert/alert.component.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");
















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '', component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"], children: [
                        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                        { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
                        { path: 'dashboard', component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                        { path: 'create', component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                        { path: 'product/:id/edit', component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                    ]
                }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"],
        _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"],
        _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"],
        _shared_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"],
        _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                    _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"],
                    _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"],
                    _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"],
                    _shared_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"],
                    _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '', component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"], children: [
                                { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                                { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
                                { path: 'dashboard', component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                                { path: 'create', component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                                { path: 'product/:id/edit', component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                            ]
                        }
                    ]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                providers: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/create-page/create-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/create-page/create-page.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function() { return CreatePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");
/* harmony import */ var _shared_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/products.service */ "./src/app/shared/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CreatePageComponent_div_7_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatePageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePageComponent_div_7_small_1_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.form.get("name").errors.required);
} }
function CreatePageComponent_div_12_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatePageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePageComponent_div_12_small_1_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.form.get("company").errors.required);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
class CreatePageComponent {
    constructor(alert, productsService) {
        this.alert = alert;
        this.productsService = productsService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    submit() {
        if (this.form.invalid) {
            return;
        }
        const product = {
            name: this.form.value.name,
            company: this.form.value.company,
            price: this.form.value.price
        };
        this.productsService.create(product).subscribe(() => {
            this.form.reset();
            this.alert.success('Создан новый пост');
        });
        console.log('new product', product);
    }
}
CreatePageComponent.ɵfac = function CreatePageComponent_Factory(t) { return new (t || CreatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
CreatePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePageComponent, selectors: [["app-create-page"]], decls: 15, vars: 10, consts: [[3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "title"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], ["for", "company"], ["id", "company", "type", "text", "formControlName", "company"], ["type", "submit", 1, "btn", "btn-block", "btn-dark", 3, "disabled"], [1, "validation"], [4, "ngIf"]], template: function CreatePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatePageComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreatePageComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0410\u0432\u0442\u043E\u0440 \u043F\u043E\u0441\u0442\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreatePageComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("name").touched && ctx.form.get("name").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").touched && ctx.form.get("name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("company").touched && ctx.form.get("company").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("company").touched && ctx.form.get("company").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcY3JlYXRlLXBhZ2VcXGNyZWF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jcmVhdGUtcGFnZS9jcmVhdGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvY3JlYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-page',
                templateUrl: './create-page.component.html',
                styleUrls: ['./create-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _shared_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/dashboard-page/dashboard-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");
/* harmony import */ var _shared_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/products.service */ "./src/app/shared/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function (a2) { return ["/admin", "product", a2, "edit"]; };
function DashboardPageComponent_div_0_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPageComponent_div_0_tr_15_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const product_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.remove(product_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r26 = ctx.$implicit;
    const idx_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r27 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, product_r26.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, product_r26.id));
} }
function DashboardPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardPageComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.searchStr = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardPageComponent_div_0_tr_15_Template, 15, 10, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "searchPosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.searchStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 2, ctx_r22.products, ctx_r22.searchStr));
} }
function DashboardPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardPageComponent {
    constructor(alert, productsService) {
        this.alert = alert;
        this.productsService = productsService;
        this.products = [];
        this.searchStr = '';
    }
    ngOnInit() {
        this.pSub = this.productsService.getAll().subscribe(products => {
            this.products = products;
            // console.log('Products: ',this.products);
        });
    }
    ngOnDestroy() {
        this.pSub.unsubscribe();
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    }
    remove(id) {
        this.dSub = this.productsService.remove(id).subscribe(() => {
            this.products = this.products.filter(product => product.id !== id);
            this.alert.danger('Продукт был удален');
        });
    }
}
DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) { return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardPageComponent, selectors: [["app-dashboard-page"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "form-control"], ["type", "text", "placeholder", "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442...", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-link", "open", 3, "routerLink"], [3, "click"], [1, "text-center"]], template: function DashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardPageComponent_div_0_Template, 17, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length)("ngIfElse", _r23);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".open[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcZGFzaGJvYXJkLXBhZ2VcXGRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm9wZW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-page',
                templateUrl: './dashboard-page.component.html',
                styleUrls: ['./dashboard-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }, { type: _shared_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/edit-page/edit-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/edit-page/edit-page.component.ts ***!
  \********************************************************/
/*! exports provided: EditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponent", function() { return EditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/products.service */ "./src/app/shared/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EditPageComponent_div_0_div_6_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPageComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPageComponent_div_0_div_6_small_1_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.form.get("name").errors.required);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function EditPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPageComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditPageComponent_div_0_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r36.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r36.form.get("name").touched && ctx_r36.form.get("name").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.form.get("name").touched && ctx_r36.form.get("name").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r36.form.invalid || ctx_r36.submitted);
} }
function EditPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditPageComponent {
    constructor(alert, route, productsService) {
        this.alert = alert;
        this.route = route;
        this.productsService = productsService;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.productsService.getById(params['id']);
        }))
            .subscribe((product) => {
            this.product = product;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](product.company, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        });
    }
    submit() {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.uSub = this.productsService.update(Object.assign(Object.assign({}, this.product), { name: this.form.value.name, company: this.form.value.company })).subscribe(() => {
            this.submitted = false;
            this.alert.success('Продукт был обновлен');
        });
    }
    ngOnDestroy() {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    }
}
EditPageComponent.ɵfac = function EditPageComponent_Factory(t) { return new (t || EditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"])); };
EditPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPageComponent, selectors: [["app-edit-page"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "validation"], [4, "ngIf"], [1, "text-center"]], template: function EditPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPageComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form)("ngIfElse", _r37);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-page',
                templateUrl: './edit-page.component.html',
                styleUrls: ['./edit-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/admin/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r17, " ");
} }
function LoginPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.message, " ");
} }
function LoginPageComponent_div_10_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_10_small_1_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_10_small_2_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.form.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.form.get("email").errors.email);
} }
function LoginPageComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ", ctx_r21.form.get("password").errors.minlength.requiredLength, ". \u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043E ", ctx_r21.form.get("password").errors.minlength.actualLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
} }
function LoginPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_15_small_1_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_15_small_2_Template, 2, 2, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.form.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.form.get("password").errors.minlength);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params['loginAgain']) {
                this.message = 'Пожалуйста, введите данные.';
            }
            else if (params['authFailed']) {
                this.message = 'Сессия истекла. Введите данные заново.';
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
            ])
        });
    }
    submit() {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        const user = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.auth.login(user).subscribe(() => {
            this.form.reset;
            this.router.navigate(['/admin', 'dashboard']);
            this.submitted = false;
        }, () => {
            this.submitted = false;
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 18, vars: 14, consts: [[1, "card", 3, "formGroup"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-control", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["class", "validation", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "validation"], [4, "ngIf"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginPageComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginPageComponent_div_10_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginPageComponent_div_15_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.auth.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && ctx.form.get("password").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9DOlxcVXNlcnNcXE1heGltIFJlem5pa292XFxzb3VyY2VcXHJlcG9zXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxDbGllbnRBcHAvc3JjXFxhcHBcXGFkbWluXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/admin-layout/admin-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/admin/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/admin/shared/components/alert/alert.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["/admin", "dashboard"]; };
const _c1 = function () { return ["/admin", "create"]; };
function AdminLayoutComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_ul_5_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
class AdminLayoutComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    logout($event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/admin', 'login']);
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 8, vars: 1, consts: [[1, "navbar", "bg-primary"], ["routerLink", "/"], [4, "ngIf"], ["routerLinkActive", "active"], [3, "routerLink"], ["href", "#", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_ul_5_Template, 10, 4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
    } }, directives: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.component.html',
                styleUrls: ['./admin-layout.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1, a2) { return { "alert-success": a0, "alert-warning": a1, "alert-danger": a2 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r43.type === "success", ctx_r43.type === "warning", ctx_r43.type === "danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.text);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.delay = 5000;
        this.type = 'success';
    }
    ngOnInit() {
        this.aSub = this.alertService.alert$.subscribe((alert) => {
            this.text = alert.text;
            this.type = alert.type;
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.text = '';
            }, this.delay);
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { delay: "delay" }, decls: 1, vars: 1, consts: [["class", "alert-wrap", 4, "ngIf"], [1, "alert-wrap"], [1, "alert", 3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".alert-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  right: 40px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXdyYXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4iLCIuYWxlcnQtd3JhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, { delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/shared/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/shared/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchPipe {
    transform(products, search = '') {
        if (!search.trim()) {
            return products;
        }
        return products.filter(product => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchProducts", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchProducts'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/shared/services/alert.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/shared/services/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AlertService {
    constructor() {
        this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    success(text) {
        console.log(text);
        this.alert$.next({ type: 'success', text });
    }
    warning(text) {
        this.alert$.next({ type: 'warning', text });
    }
    danger(text) {
        this.alert$.next({ type: 'danger', text });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/shared/services/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/shared/services/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/admin/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.auth.logout();
            this.router.navigate(['/admin', 'login'], {
                queryParams: {
                    loginAgain: true
                }
            });
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/shared/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/shared/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthService {
    constructor(http) {
        this.http = http;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get token() {
        //const expDate = new Date(localStorage.getItem('fb-token-exp'));
        //if (new Date > expDate) {
        //  this.logout();
        //  return null;
        //}
        //return localStorage.getItem('fb-token')
        return 'test';
    }
    login(user) {
        user.returnSecureToken = true;
        //return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        //  .pipe(
        //    tap(this.setToken),
        //    catchError(this.handleError.bind(this))
        //  )
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    handleError(error) {
        const { message } = error.error.error;
        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('Неверный email');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Неверный пароль');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Такого email нет');
                break;
        }
        console.log(this.error$);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    setToken(response) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        }
        else {
            localStorage.clear();
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map