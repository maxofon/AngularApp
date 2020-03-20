function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/admin-layout/admin-layout.component */
    "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/admin/login-page/login-page.component.ts");
    /* harmony import */


    var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-page/dashboard-page.component */
    "./src/app/admin/dashboard-page/dashboard-page.component.ts");
    /* harmony import */


    var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-page/create-page.component */
    "./src/app/admin/create-page/create-page.component.ts");
    /* harmony import */


    var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-page/edit-page.component */
    "./src/app/admin/edit-page/edit-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/search.pipe */
    "./src/app/admin/shared/search.pipe.ts");
    /* harmony import */


    var _shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/services/auth-admin.guard */
    "./src/app/admin/shared/services/auth-admin.guard.ts");
    /* harmony import */


    var _orders_orders_dashboard_page_orders_dashboard_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./orders/orders-dashboard-page/orders-dashboard-page.component */
    "./src/app/admin/orders/orders-dashboard-page/orders-dashboard-page.component.ts");
    /* harmony import */


    var _users_users_dashboard_page_users_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users/users-dashboard-page/users-dashboard-page.component */
    "./src/app/admin/users/users-dashboard-page/users-dashboard-page.component.ts");
    /* harmony import */


    var _order_items_order_items_dashboard_page_order_items_dashboard_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./order-items/order-items-dashboard-page/order-items-dashboard-page.component */
    "./src/app/admin/order-items/order-items-dashboard-page/order-items-dashboard-page.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      providers: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'admin',
        component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [{
          path: '',
          redirectTo: '/admin/login',
          pathMatch: 'full'
        }, {
          path: 'login',
          component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
        }, {
          path: 'dashboard',
          component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"],
          canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }, {
          path: 'create',
          component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"],
          canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }, {
          path: 'product/:id/edit',
          component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"],
          canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }, {
          path: 'orders/:userName',
          component: _orders_orders_dashboard_page_orders_dashboard_page_component__WEBPACK_IMPORTED_MODULE_12__["OrdersDashboardPageComponent"],
          canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }, // {path: 'order-items/dashboard/:id', component: OrderItemsDashboardPageComponent, canActivate: [AuthAdminGuard]},
        {
          path: 'users/dashboard',
          component: _users_users_dashboard_page_users_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__["UsersDashboardPageComponent"],
          canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"], _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"], _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"], _orders_orders_dashboard_page_orders_dashboard_page_component__WEBPACK_IMPORTED_MODULE_12__["OrdersDashboardPageComponent"], _order_items_order_items_dashboard_page_order_items_dashboard_page_component__WEBPACK_IMPORTED_MODULE_14__["OrderItemsDashboardPageComponent"], _users_users_dashboard_page_users_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__["UsersDashboardPageComponent"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"], _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"], _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"], _orders_orders_dashboard_page_orders_dashboard_page_component__WEBPACK_IMPORTED_MODULE_12__["OrdersDashboardPageComponent"], _order_items_order_items_dashboard_page_order_items_dashboard_page_component__WEBPACK_IMPORTED_MODULE_14__["OrderItemsDashboardPageComponent"], _users_users_dashboard_page_users_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__["UsersDashboardPageComponent"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'admin',
            component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
            children: [{
              path: '',
              redirectTo: '/admin/login',
              pathMatch: 'full'
            }, {
              path: 'login',
              component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
            }, {
              path: 'dashboard',
              component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"],
              canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
            }, {
              path: 'create',
              component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatePageComponent"],
              canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
            }, {
              path: 'product/:id/edit',
              component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_7__["EditPageComponent"],
              canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
            }, {
              path: 'orders/:userName',
              component: _orders_orders_dashboard_page_orders_dashboard_page_component__WEBPACK_IMPORTED_MODULE_12__["OrdersDashboardPageComponent"],
              canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
            }, // {path: 'order-items/dashboard/:id', component: OrderItemsDashboardPageComponent, canActivate: [AuthAdminGuard]},
            {
              path: 'users/dashboard',
              component: _users_users_dashboard_page_users_dashboard_page_component__WEBPACK_IMPORTED_MODULE_13__["UsersDashboardPageComponent"],
              canActivate: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
            }]
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          providers: [_shared_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/create-page/create-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/create-page/create-page.component.ts ***!
    \************************************************************/

  /*! exports provided: CreatePageComponent */

  /***/
  function srcAppAdminCreatePageCreatePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function () {
      return CreatePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CreatePageComponent_div_7_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePageComponent_div_7_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.form.get("name").errors.required);
      }
    }

    function CreatePageComponent_div_12_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePageComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePageComponent_div_12_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.form.get("company").errors.required);
      }
    }

    function CreatePageComponent_div_17_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePageComponent_div_17_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.form.get("price").errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    var CreatePageComponent =
    /*#__PURE__*/
    function () {
      function CreatePageComponent(alert, productsService) {
        _classCallCheck(this, CreatePageComponent);

        this.alert = alert;
        this.productsService = productsService;
      }

      _createClass(CreatePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "submit",
        value: function submit() {
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
        }
      }]);

      return CreatePageComponent;
    }();

    CreatePageComponent.ɵfac = function CreatePageComponent_Factory(t) {
      return new (t || CreatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]));
    };

    CreatePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreatePageComponent,
      selectors: [["app-create-page"]],
      decls: 20,
      vars: 14,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], ["for", "company"], ["id", "company", "type", "text", "formControlName", "company"], ["for", "price"], ["id", "price", "type", "number", "formControlName", "price"], ["type", "submit", 1, "btn", "btn-block", "btn-dark", 3, "disabled"], [1, "validation"], [4, "ngIf"]],
      template: function CreatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatePageComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreatePageComponent_div_12_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0426\u0435\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreatePageComponent_div_17_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("name").touched && ctx.form.get("name").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").touched && ctx.form.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.form.get("company").touched && ctx.form.get("company").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("company").touched && ctx.form.get("company").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.form.get("price").touched && ctx.form.get("price").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("price").touched && ctx.form.get("price").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcY3JlYXRlLXBhZ2VcXGNyZWF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jcmVhdGUtcGFnZS9jcmVhdGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvY3JlYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-page',
          templateUrl: './create-page.component.html',
          styleUrls: ['./create-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/dashboard-page/dashboard-page.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/dashboard-page/dashboard-page.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardPageComponent */

  /***/
  function srcAppAdminDashboardPageDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
      return DashboardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/search.pipe */
    "./src/app/admin/shared/search.pipe.ts");

    var _c0 = function _c0(a2) {
      return ["/admin", "product", a2, "edit"];
    };

    function DashboardPageComponent_div_0_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPageComponent_div_0_tr_17_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var product_r87 = ctx.$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r89.remove(product_r87.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r87 = ctx.$implicit;
        var idx_r88 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r88 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r87.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r87.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, product_r87.price, "USD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, product_r87.id));
      }
    }

    function DashboardPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardPageComponent_div_0_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.searchStr = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardPageComponent_div_0_tr_17_Template, 15, 10, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "searchProducts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r83.searchStr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 2, ctx_r83.products, ctx_r83.searchStr));
      }
    }

    function DashboardPageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardPageComponent =
    /*#__PURE__*/
    function () {
      function DashboardPageComponent(alert, productsService) {
        _classCallCheck(this, DashboardPageComponent);

        this.alert = alert;
        this.productsService = productsService;
        this.products = [];
        this.searchStr = '';
      }

      _createClass(DashboardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.pSub = this.productsService.getAll().subscribe(function (products) {
            _this2.products = products; // console.log('Products: ',this.products);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pSub.unsubscribe();

          if (this.dSub) {
            this.dSub.unsubscribe();
          }
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this3 = this;

          this.dSub = this.productsService.remove(id).subscribe(function () {
            _this3.products = _this3.products.filter(function (product) {
              return product.id !== id;
            });

            _this3.alert.danger('Продукт был удален');
          });
        }
      }]);

      return DashboardPageComponent;
    }();

    DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) {
      return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardPageComponent,
      selectors: [["app-dashboard-page"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "form-control"], ["type", "text", "placeholder", "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E...", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-link", "open", 3, "routerLink"], [3, "click"], [1, "text-center"]],
      template: function DashboardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardPageComponent_div_0_Template, 19, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length)("ngIfElse", _r84);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      pipes: [_shared_search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".open[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcZGFzaGJvYXJkLXBhZ2VcXGRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm9wZW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard-page',
          templateUrl: './dashboard-page.component.html',
          styleUrls: ['./dashboard-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/edit-page/edit-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/edit-page/edit-page.component.ts ***!
    \********************************************************/

  /*! exports provided: EditPageComponent */

  /***/
  function srcAppAdminEditPageEditPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageComponent", function () {
      return EditPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPageComponent_div_0_div_6_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPageComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPageComponent_div_0_div_6_small_1_Template, 2, 0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.form.get("name").errors.required);
      }
    }

    function EditPageComponent_div_0_div_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPageComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPageComponent_div_0_div_15_small_1_Template, 2, 0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.form.get("price").errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    function EditPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPageComponent_div_0_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditPageComponent_div_0_div_6_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0426\u0435\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditPageComponent_div_0_div_15_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r99.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r99.form.get("name").touched && ctx_r99.form.get("name").invalid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.form.get("name").touched && ctx_r99.form.get("name").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r99.form.get("price").touched && ctx_r99.form.get("price").invalid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.form.get("price").touched && ctx_r99.form.get("price").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r99.form.invalid || ctx_r99.submitted);
      }
    }

    function EditPageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EditPageComponent =
    /*#__PURE__*/
    function () {
      function EditPageComponent(alert, route, productsService) {
        _classCallCheck(this, EditPageComponent);

        this.alert = alert;
        this.route = route;
        this.productsService = productsService;
        this.submitted = false;
      }

      _createClass(EditPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this4.productsService.getById(params['id']);
          })).subscribe(function (product) {
            _this4.product = product;
            _this4.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: product.company,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](product.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this5 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          this.uSub = this.productsService.update(Object.assign(Object.assign({}, this.product), {
            name: this.form.value.name,
            price: this.form.value.price
          })).subscribe(function () {
            _this5.submitted = false;

            _this5.alert.success("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(_this5.product.name, " \u0431\u044B\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D"));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.uSub) {
            this.uSub.unsubscribe();
          }
        }
      }]);

      return EditPageComponent;
    }();

    EditPageComponent.ɵfac = function EditPageComponent_Factory(t) {
      return new (t || EditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]));
    };

    EditPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPageComponent,
      selectors: [["app-edit-page"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], [1, "form-control"], ["for", "company"], ["id", "company", "type", "text", "formControlName", "company"], ["for", "price"], ["id", "price", "type", "number", "formControlName", "price"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "validation"], [4, "ngIf"], [1, "text-center"]],
      template: function EditPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPageComponent_div_0_Template, 18, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form)("ngIfElse", _r100);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-page',
          templateUrl: './edit-page.component.html',
          styleUrls: ['./edit-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/login-page/login-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/login-page/login-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppAdminLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginPageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r78 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r78, " ");
      }
    }

    function LoginPageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r75.message, " ");
      }
    }

    function LoginPageComponent_div_10_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_10_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_10_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_10_small_2_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.form.get("email").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.form.get("email").errors.email);
      }
    }

    function LoginPageComponent_div_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_15_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ", ctx_r82.form.get("password").errors.minlength.requiredLength, ". \u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043E ", ctx_r82.form.get("password").errors.minlength.actualLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
      }
    }

    function LoginPageComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_15_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_15_small_2_Template, 2, 2, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.form.get("password").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.form.get("password").errors.minlength);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(auth, router, route) {
        _classCallCheck(this, LoginPageComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
        this.submitted = false;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
            this.router.navigate(['/admin', 'dashboard']);
          }

          this.route.queryParams.subscribe(function (params) {
            if (params['loginAgain']) {
              _this6.message = 'Пожалуйста, введите данные.';
            } else if (params['authFailed']) {
              _this6.message = 'Сессия истекла. Введите данные заново.';
            }
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var user = {
            email: this.form.value.email,
            password: this.form.value.password
          };
          this.auth.loginAsAdmin(user).subscribe(function () {
            _this7.form.reset;

            _this7.router.navigate(['/admin', 'dashboard']);

            _this7.submitted = false;
          }, function () {
            _this7.submitted = false;
          }); // this.form.reset;
          // this.router.navigate(['/admin','dashboard'])
          // this.submitted = false;
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 18,
      vars: 14,
      consts: [[1, "card", 3, "formGroup"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-control", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["class", "validation", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "validation"], [4, "ngIf"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_16_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9DOlxcVXNlcnNcXE1heGltIFJlem5pa292XFxzb3VyY2VcXHJlcG9zXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxDbGllbnRBcHAvc3JjXFxhcHBcXGFkbWluXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/order-items/order-items-dashboard-page/order-items-dashboard-page.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/admin/order-items/order-items-dashboard-page/order-items-dashboard-page.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: OrderItemsDashboardPageComponent */

  /***/
  function srcAppAdminOrderItemsOrderItemsDashboardPageOrderItemsDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItemsDashboardPageComponent", function () {
      return OrderItemsDashboardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderItemsDashboardPageComponent =
    /*#__PURE__*/
    function () {
      function OrderItemsDashboardPageComponent() {
        _classCallCheck(this, OrderItemsDashboardPageComponent);
      }

      _createClass(OrderItemsDashboardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderItemsDashboardPageComponent;
    }();

    OrderItemsDashboardPageComponent.ɵfac = function OrderItemsDashboardPageComponent_Factory(t) {
      return new (t || OrderItemsDashboardPageComponent)();
    };

    OrderItemsDashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderItemsDashboardPageComponent,
      selectors: [["order-items-dashboard-page"]],
      decls: 2,
      vars: 0,
      template: function OrderItemsDashboardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "order-items-dashboard-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVyLWl0ZW1zL29yZGVyLWl0ZW1zLWRhc2hib2FyZC1wYWdlL29yZGVyLWl0ZW1zLWRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderItemsDashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'order-items-dashboard-page',
          templateUrl: './order-items-dashboard-page.component.html',
          styleUrls: ['./order-items-dashboard-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/orders/orders-dashboard-page/orders-dashboard-page.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/orders/orders-dashboard-page/orders-dashboard-page.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: OrdersDashboardPageComponent */

  /***/
  function srcAppAdminOrdersOrdersDashboardPageOrdersDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersDashboardPageComponent", function () {
      return OrdersDashboardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/order.service */
    "./src/app/shared/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a3) {
      return ["/admin", "order-items", "dashboard", a3];
    };

    function OrdersDashboardPageComponent_div_0_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersDashboardPageComponent_div_0_tr_23_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

          var order_r112 = ctx.$implicit;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r114.remove(order_r112.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r112 = ctx.$implicit;
        var idx_r113 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r113 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.surname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r112.orderTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, order_r112.id));
      }
    }

    function OrdersDashboardPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0410\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OrdersDashboardPageComponent_div_0_tr_23_Template, 22, 11, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r108.orders);
      }
    }

    function OrdersDashboardPageComponent_ng_template_1_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u043D\u0435\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersDashboardPageComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersDashboardPageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersDashboardPageComponent_ng_template_1_div_0_Template, 3, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersDashboardPageComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.loaded)("ngIfElse", _r117);
      }
    }

    var OrdersDashboardPageComponent =
    /*#__PURE__*/
    function () {
      function OrdersDashboardPageComponent(alert, orderService, route) {
        _classCallCheck(this, OrdersDashboardPageComponent);

        this.alert = alert;
        this.orderService = orderService;
        this.route = route;
        this.orders = [];
        this.loaded = false;
      }

      _createClass(OrdersDashboardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.pSub = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this8.orderService.getByUsername(params['userName']);
          })).subscribe(function (orders) {
            _this8.orders = orders;
            _this8.loaded = true;
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this9 = this;

          this.dSub = this.orderService.remove(id).subscribe(function () {
            _this9.orders = _this9.orders.filter(function (product) {
              return product.id !== id;
            });

            _this9.alert.danger('Заказ был удален');
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pSub.unsubscribe();

          if (this.dSub) {
            this.dSub.unsubscribe();
          }
        }
      }]);

      return OrdersDashboardPageComponent;
    }();

    OrdersDashboardPageComponent.ɵfac = function OrdersDashboardPageComponent_Factory(t) {
      return new (t || OrdersDashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    OrdersDashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersDashboardPageComponent,
      selectors: [["orders-dashboard-page"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngFor", "ngForOf"], [1, "btn", "btn-link", "open", 3, "routerLink"], [3, "click"], ["class", "btn btn-block", 4, "ngIf", "ngIfElse"], ["inProcess", ""], [1, "btn", "btn-block"], [1, "text-center"]],
      template: function OrdersDashboardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersDashboardPageComponent_div_0_Template, 24, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersDashboardPageComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length)("ngIfElse", _r109);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".open[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzL29yZGVycy1kYXNoYm9hcmQtcGFnZS9DOlxcVXNlcnNcXE1heGltIFJlem5pa292XFxzb3VyY2VcXHJlcG9zXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxDbGllbnRBcHAvc3JjXFxhcHBcXGFkbWluXFxvcmRlcnNcXG9yZGVycy1kYXNoYm9hcmQtcGFnZVxcb3JkZXJzLWRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9vcmRlcnMvb3JkZXJzLWRhc2hib2FyZC1wYWdlL29yZGVycy1kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9vcmRlcnMvb3JkZXJzLWRhc2hib2FyZC1wYWdlL29yZGVycy1kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm9wZW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersDashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'orders-dashboard-page',
          templateUrl: './orders-dashboard-page.component.html',
          styleUrls: ['./orders-dashboard-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/shared/components/admin-layout/admin-layout.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppAdminSharedComponentsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/alert/alert.component */
    "./src/app/shared/components/alert/alert.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/admin", "dashboard"];
    };

    var _c1 = function _c1() {
      return ["/admin", "users", "dashboard"];
    };

    var _c2 = function _c2() {
      return ["/admin", "create"];
    };

    function AdminLayoutComponent_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0430\u0434\u043C\u0438\u043D\u043A\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_ul_5_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.logout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412\u044B\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    }

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent(auth, router) {
        _classCallCheck(this, AdminLayoutComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout($event) {
          event.preventDefault();
          this.auth.logout();
          this.router.navigate(['/admin', 'login']);
        }
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 8,
      vars: 2,
      consts: [[3, "delay"], [1, "navbar", "bg-primary"], ["routerLink", "/"], [4, "ngIf"], ["routerLinkActive", "active"], [3, "routerLink"], ["href", "#", 3, "click"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_ul_5_Template, 13, 6, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("delay", 3000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
        }
      },
      directives: [_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-layout',
          templateUrl: './admin-layout.component.html',
          styleUrls: ['./admin-layout.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/shared/search.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/admin/shared/search.pipe.ts ***!
    \*********************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppAdminSharedSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(products) {
          var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!search.trim()) {
            return products;
          }

          return products.filter(function (product) {
            return product.name.toLowerCase().includes(search.toLowerCase());
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.ɵfac = function SearchPipe_Factory(t) {
      return new (t || SearchPipe)();
    };

    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "searchProducts",
      type: SearchPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'searchProducts'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/shared/services/auth-admin.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/shared/services/auth-admin.guard.ts ***!
    \***********************************************************/

  /*! exports provided: AuthAdminGuard */

  /***/
  function srcAppAdminSharedServicesAuthAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function () {
      return AuthAdminGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthAdminGuard =
    /*#__PURE__*/
    function () {
      function AuthAdminGuard(auth, router) {
        _classCallCheck(this, AuthAdminGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthAdminGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
            console.log('You are admin');
            return true;
          } else {
            // this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                loginAgain: true
              }
            });
          }
        }
      }]);

      return AuthAdminGuard;
    }();

    AuthAdminGuard.ɵfac = function AuthAdminGuard_Factory(t) {
      return new (t || AuthAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthAdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthAdminGuard,
      factory: AuthAdminGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthAdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/shared/services/user.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/shared/services/user.service.ts ***!
    \*******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppAdminSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/users';
      }

      _createClass(UserService, [{
        key: "create",
        value: function create(user) {
          return this.http.post("".concat(this.apiUrl), user);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.apiUrl));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "update",
        value: function update(user) {
          return this.http.put("".concat(this.apiUrl, "/").concat(user.id), user);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/users/users-dashboard-page/users-dashboard-page.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/users/users-dashboard-page/users-dashboard-page.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UsersDashboardPageComponent */

  /***/
  function srcAppAdminUsersUsersDashboardPageUsersDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersDashboardPageComponent", function () {
      return UsersDashboardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/admin/shared/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a2) {
      return ["/admin", "orders", a2];
    };

    function UsersDashboardPageComponent_div_0_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersDashboardPageComponent_div_0_tr_13_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var user_r123 = ctx.$implicit;

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r125.remove(user_r123);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r123 = ctx.$implicit;
        var idx_r124 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r124 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r123.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r123.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, user_r123.name));
      }
    }

    function UsersDashboardPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UsersDashboardPageComponent_div_0_tr_13_Template, 12, 6, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r119.users);
      }
    }

    function UsersDashboardPageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UsersDashboardPageComponent =
    /*#__PURE__*/
    function () {
      function UsersDashboardPageComponent(alert, userService) {
        _classCallCheck(this, UsersDashboardPageComponent);

        this.alert = alert;
        this.userService = userService;
        this.users = [];
      }

      _createClass(UsersDashboardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.pSub = this.userService.getAll().subscribe(function (users) {
            _this10.users = users;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pSub.unsubscribe();

          if (this.dSub) {
            this.dSub.unsubscribe();
          }
        }
      }, {
        key: "remove",
        value: function remove(user) {
          var _this11 = this;

          this.dSub = this.userService.remove(user.id).subscribe(function () {
            _this11.users = _this11.users.filter(function (u) {
              return u.id !== user.id;
            });

            _this11.alert.danger("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.email, " \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D"));
          }, function (error) {
            _this11.alert.danger("\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ".concat(user.email));
          });
        }
      }]);

      return UsersDashboardPageComponent;
    }();

    UsersDashboardPageComponent.ɵfac = function UsersDashboardPageComponent_Factory(t) {
      return new (t || UsersDashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UsersDashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersDashboardPageComponent,
      selectors: [["users-dashboard-page"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "open", 3, "routerLink"], [3, "click"], [1, "text-center"]],
      template: function UsersDashboardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersDashboardPageComponent_div_0_Template, 14, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersDashboardPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length)("ngIfElse", _r120);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".open[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMtZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhZG1pblxcdXNlcnNcXHVzZXJzLWRhc2hib2FyZC1wYWdlXFx1c2Vycy1kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMtZGFzaGJvYXJkLXBhZ2UvdXNlcnMtZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMtZGFzaGJvYXJkLXBhZ2UvdXNlcnMtZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiIsIi5vcGVuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersDashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'users-dashboard-page',
          templateUrl: './users-dashboard-page.component.html',
          styleUrls: ['./users-dashboard-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-page/product-page.component */
    "./src/app/product-page/product-page.component.ts");
    /* harmony import */


    var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-page/cart-page.component */
    "./src/app/cart-page/cart-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/register-page/register-page.component.ts");
    /* harmony import */


    var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./order-page/order-page.component */
    "./src/app/order-page/order-page.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");

    var routes = [{
      path: '',
      component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"],
      children: [{
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }, {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
      }, {
        path: 'product/:id',
        component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductPageComponent"]
      }, {
        path: 'cart',
        component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_5__["CartPageComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"]
      }, {
        path: 'register',
        component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"]
      }, {
        path: 'order',
        component: _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__["OrderPageComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-page/product-page.component */
    "./src/app/product-page/product-page.component.ts");
    /* harmony import */


    var _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/components/product/product.component */
    "./src/app/shared/components/product/product.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cart-page/cart-page.component */
    "./src/app/cart-page/cart-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/register-page/register-page.component.ts");
    /* harmony import */


    var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./order-page/order-page.component */
    "./src/app/order-page/order-page.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductPageComponent"], _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__["CartPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPageComponent"], _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_14__["OrderPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_8__["ProductPageComponent"], _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__["CartPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPageComponent"], _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_14__["OrderPageComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          providers: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart-page/cart-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/cart-page/cart-page.component.ts ***!
    \**************************************************/

  /*! exports provided: CartPageComponent */

  /***/
  function srcAppCartPageCartPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageComponent", function () {
      return CartPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CartPageComponent_div_0_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartPageComponent_div_0_tr_18_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var cart_r26 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.remove(cart_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cart_r26 = ctx.$implicit;
        var idx_r27 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r27 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r26.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r26.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, cart_r26.price, "USD"));
      }
    }

    var _c0 = function _c0() {
      return ["/order"];
    };

    function CartPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0426\u0435\u043D\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartPageComponent_div_0_tr_18_Template, 13, 7, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.carts);
      }
    }

    function CartPageComponent_ng_template_1_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartPageComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartPageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartPageComponent_ng_template_1_div_0_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartPageComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.loaded)("ngIfElse", _r31);
      }
    }

    var CartPageComponent =
    /*#__PURE__*/
    function () {
      function CartPageComponent(alert, cartService) {
        _classCallCheck(this, CartPageComponent);

        this.alert = alert;
        this.cartService = cartService;
        this.carts = [];
      }

      _createClass(CartPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.pSub = this.cartService.getAll().subscribe(function (carts) {
            _this12.carts = carts;
            _this12.loaded = true;
          });
        }
      }, {
        key: "remove",
        value: function remove(cart) {
          var _this13 = this;

          var amount = cart.price * cart.quantity;
          this.dSub = this.cartService.remove(cart.id).subscribe(function () {
            _this13.carts = _this13.carts.filter(function (c) {
              return c.id !== cart.id;
            });

            _this13.cartService.updateTotal();

            _this13.loaded = true;

            _this13.alert.danger("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ".concat(amount, " \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B"));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pSub.unsubscribe();

          if (this.dSub) {
            this.dSub.unsubscribe();
          }
        }
      }]);

      return CartPageComponent;
    }();

    CartPageComponent.ɵfac = function CartPageComponent_Factory(t) {
      return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartPageComponent,
      selectors: [["app-cart-page"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "btn", "btn-sm"], [3, "routerLink"], [4, "ngFor", "ngForOf"], [3, "click"], ["inProcess", ""], [1, "text-center"]],
      template: function CartPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartPageComponent_div_0_Template, 19, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartPageComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carts.length)("ngIfElse", _r23);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart-page',
          templateUrl: './cart-page.component.html',
          styleUrls: ['./cart-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }, {
          type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/product/product.component */
    "./src/app/shared/components/product/product.component.ts");

    function HomePageComponent_div_0_app_product_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product", 4);
      }

      if (rf & 2) {
        var product_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r13)("showAddCart", ctx_r12.auth.isAuthenticated());
      }
    }

    function HomePageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_div_0_app_product_1_Template, 1, 2, "app-product", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var products_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", products_r11);
      }
    }

    function HomePageComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      //products: Product[]
      function HomePageComponent(productsService, auth) {
        _classCallCheck(this, HomePageComponent);

        this.productsService = productsService;
        this.auth = auth;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.products = [];
          this.products$ = this.productsService.getAll();
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 4,
      vars: 4,
      consts: [["class", "products", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "products"], [3, "product", "showAddCart", 4, "ngFor", "ngForOf"], [3, "product", "showAddCart"], [1, "text-center"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomePageComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.products$))("ngIfElse", _r9);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".products[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcTWF4aW0gUmV6bmlrb3ZcXHNvdXJjZVxccmVwb3NcXEFuZ3VsYXJBcHBcXEFuZ3VsYXJBcHBcXEFuZ3VsYXJBcHBcXENsaWVudEFwcC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiLnByb2R1Y3RzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-page/login-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-page/login-page.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginPageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r37 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r37, " ");
      }
    }

    function LoginPageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r34.message, " ");
      }
    }

    function LoginPageComponent_div_10_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_10_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_10_small_1_Template, 2, 0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_10_small_2_Template, 2, 0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.form.get("email").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.form.get("email").errors.email);
      }
    }

    function LoginPageComponent_div_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_15_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ", ctx_r41.form.get("password").errors.minlength.requiredLength, ". \u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043E ", ctx_r41.form.get("password").errors.minlength.actualLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
      }
    }

    function LoginPageComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_15_small_1_Template, 2, 0, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_15_small_2_Template, 2, 2, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.form.get("password").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.form.get("password").errors.minlength);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    var _c1 = function _c1() {
      return ["/register"];
    };

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(auth, router, route, cartService) {
        _classCallCheck(this, LoginPageComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.submitted = false;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.route.queryParams.subscribe((params: Params) => {
          //   if (params['loginAgain']) {
          //     this.message = 'Пожалуйста, введите данные.';
          //   } else if (params['authFailed']) {
          //     this.message = 'Сессия истекла. Введите данные заново.';
          //   }
          // })
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this14 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var user = {
            email: this.form.value.email,
            password: this.form.value.password
          };
          this.auth.login(user).subscribe(function () {
            _this14.form.reset;

            _this14.router.navigate(['/']);

            _this14.submitted = false;

            _this14.cartService.updateTotal();
          }, function () {
            _this14.submitted = false;
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["login-page"]],
      decls: 20,
      vars: 16,
      consts: [[1, "card", 3, "formGroup"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-control", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["class", "validation", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "routerLink"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "validation"], [4, "ngIf"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u043E\u0439\u0442\u0438");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_16_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.auth.error$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && ctx.form.get("password").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXE1heGltIFJlem5pa292XFxzb3VyY2VcXHJlcG9zXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxDbGllbnRBcHAvc3JjXFxhcHBcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iLCJmb3JtIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order-page/order-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/order-page/order-page.component.ts ***!
    \****************************************************/

  /*! exports provided: OrderPageComponent */

  /***/
  function srcAppOrderPageOrderPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPageComponent", function () {
      return OrderPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/order.service */
    "./src/app/shared/services/order.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrderPageComponent_div_8_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderPageComponent_div_8_small_1_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.form.get("name").errors.required);
      }
    }

    function OrderPageComponent_div_13_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderPageComponent_div_13_small_1_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.form.get("surname").errors.required);
      }
    }

    function OrderPageComponent_div_18_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_18_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderPageComponent_div_18_small_1_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderPageComponent_div_18_small_2_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.form.get("email").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.form.get("email").errors.email);
      }
    }

    function OrderPageComponent_div_23_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0430\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderPageComponent_div_23_small_1_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.form.get("address").errors.required);
      }
    }

    function OrderPageComponent_div_28_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderPageComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderPageComponent_div_28_small_1_Template, 2, 0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.form.get("phone").errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    var OrderPageComponent =
    /*#__PURE__*/
    function () {
      function OrderPageComponent(auth, alert, router, route, orderService, cartService) {
        _classCallCheck(this, OrderPageComponent);

        this.auth = auth;
        this.alert = alert;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.cartService = cartService;
        this.submitted = false;
      }

      _createClass(OrderPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this15 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var order = {
            name: this.form.value.name,
            surname: this.form.value.surname,
            email: this.form.value.email,
            address: this.form.value.address,
            phone: this.form.value.phone
          };
          this.orderService.create(order).subscribe(function () {
            _this15.form.reset;

            _this15.router.navigate(['/']);

            _this15.submitted = false;

            _this15.cartService.updateTotal();

            _this15.alert.success('Заказ успешно оформлен.');
          }, function () {
            _this15.submitted = false;
          });
        }
      }]);

      return OrderPageComponent;
    }();

    OrderPageComponent.ɵfac = function OrderPageComponent_Factory(t) {
      return new (t || OrderPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]));
    };

    OrderPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderPageComponent,
      selectors: [["order-page"]],
      decls: 31,
      vars: 22,
      consts: [[1, "card", 3, "formGroup"], [1, "btn", "btn-block"], [1, "form-control", 3, "ngClass"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], ["for", "surname"], ["id", "surname", "type", "text", "formControlName", "surname"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "address"], ["id", "address", "type", "text", "formControlName", "address"], ["for", "phone"], ["id", "phone", "type", "text", "formControlName", "phone"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "validation"], [4, "ngIf"]],
      template: function OrderPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderPageComponent_div_8_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u0430\u0448\u0430 \u0444\u0430\u043C\u0438\u043B\u0438\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderPageComponent_div_13_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0412\u0430\u0448 Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderPageComponent_div_18_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OrderPageComponent_div_23_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrderPageComponent_div_28_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderPageComponent_Template_button_click_29_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.form.get("name").touched && ctx.form.get("name").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").touched && ctx.form.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.form.get("surname").touched && ctx.form.get("surname").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("surname").touched && ctx.form.get("surname").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.form.get("address").touched && ctx.form.get("address").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("address").touched && ctx.form.get("address").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.form.get("phone").touched && ctx.form.get("phone").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("phone").touched && ctx.form.get("phone").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXBhZ2Uvb3JkZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'order-page',
          templateUrl: './order-page.component.html',
          styleUrls: ['./order-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-page/product-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductPageComponent */

  /***/
  function srcAppProductPageProductPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function () {
      return ProductPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductPageComponent_div_0_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductPageComponent_div_0_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var product_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.addToCart(product_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductPageComponent_div_0_button_13_Template, 2, 0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r17 = ctx.ngIf;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r17.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r17.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, product_r17.price, "USD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.auth.isAuthenticated());
      }
    }

    function ProductPageComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductPageComponent =
    /*#__PURE__*/
    function () {
      function ProductPageComponent(auth, route, productsService, cartService, alert) {
        _classCallCheck(this, ProductPageComponent);

        this.auth = auth;
        this.route = route;
        this.productsService = productsService;
        this.cartService = cartService;
        this.alert = alert;
      }

      _createClass(ProductPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          console.log('init ProductPageComponent');
          this.product$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this16.productsService.getById(params['id']);
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addToCart(product.id);
          this.alert.success("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product.name, " \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"));
        }
      }]);

      return ProductPageComponent;
    }();

    ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) {
      return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]));
    };

    ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductPageComponent,
      selectors: [["app-product-page"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "product"], [1, "header"], ["routerLink", "/", 1, "btn", "btn-link"], [1, "info"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "text-center"]],
      template: function ProductPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 14, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductPageComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.product$))("ngIfElse", _r15);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
      styles: [".product[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1wYWdlL0M6XFxVc2Vyc1xcTWF4aW0gUmV6bmlrb3ZcXHNvdXJjZVxccmVwb3NcXEFuZ3VsYXJBcHBcXEFuZ3VsYXJBcHBcXEFuZ3VsYXJBcHBcXENsaWVudEFwcC9zcmNcXGFwcFxccHJvZHVjdC1wYWdlXFxwcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FES0k7RUFDRSxrQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9kdWN0IC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdCBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5wcm9kdWN0IC5pbmZvIHN0cm9uZyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-page',
          templateUrl: './product-page.component.html',
          styleUrls: ['./product-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register-page/register-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register-page/register-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_my_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/my.validators */
    "./src/app/shared/my.validators.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterPageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r49 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r49, " ");
      }
    }

    function RegisterPageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r43.message, " ");
      }
    }

    function RegisterPageComponent_div_10_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_10_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.form.get("name").errors.required);
      }
    }

    function RegisterPageComponent_div_15_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_div_15_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_15_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_15_small_2_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.form.get("email").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.form.get("email").errors.email);
      }
    }

    function RegisterPageComponent_div_20_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_div_20_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ", ctx_r54.form.get("password").errors.minlength.requiredLength, ". \u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043E ", ctx_r54.form.get("password").errors.minlength.actualLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
      }
    }

    function RegisterPageComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_20_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_20_small_2_Template, 2, 2, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.form.get("password").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.form.get("password").errors.minlength);
      }
    }

    function RegisterPageComponent_div_25_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0443\u0436\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_25_small_1_Template, 2, 0, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.form.get("confirmPassword").errors.required);
      }
    }

    function RegisterPageComponent_small_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        invalid: a0
      };
    };

    var _c1 = function _c1() {
      return ["/login"];
    };

    var RegisterPageComponent =
    /*#__PURE__*/
    function () {
      function RegisterPageComponent(auth, router, route, cartService) {
        _classCallCheck(this, RegisterPageComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.submitted = false;
      }

      _createClass(RegisterPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.route.queryParams.subscribe((params: Params) => {
          //   if (params['loginAgain']) {
          //     this.message = 'Пожалуйста, введите данные.';
          //   } else if (params['authFailed']) {
          //     this.message = 'Сессия истекла. Введите данные заново.';
          //   }
          // })
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          }, [_shared_my_validators__WEBPACK_IMPORTED_MODULE_2__["MyValidators"].confirmPassword]);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this17 = this;

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
            _this17.form.reset;

            _this17.router.navigate(['/']);

            _this17.submitted = false;

            _this17.cartService.updateTotal();
          }, function () {
            _this17.submitted = false;
          });
        }
      }]);

      return RegisterPageComponent;
    }();

    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]));
    };

    RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["register-page"]],
      decls: 31,
      vars: 25,
      consts: [[1, "card", 3, "formGroup"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-control", 3, "ngClass"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["class", "validation", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "routerLink"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "validation"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterPageComponent_div_3_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterPageComponent_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterPageComponent_div_10_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterPageComponent_div_15_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterPageComponent_div_20_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterPageComponent_div_25_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterPageComponent_small_26_Template, 2, 0, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_27_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx.auth.error$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.form.get("name").touched && ctx.form.get("name").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").touched && ctx.form.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && ctx.form.get("password").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.form.get("confirmPassword").touched && ctx.form.get("confirmPassword").invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confirmPassword").touched && ctx.form.get("confirmPassword").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confirmPassword").touched && ctx.form.errors && ctx.form.errors.notEqual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'register-page',
          templateUrl: './register-page.component.html',
          styleUrls: ['./register-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/alert/alert.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/alert/alert.component.ts ***!
    \************************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "alert-success": a0,
        "alert-warning": a1,
        "alert-danger": a2
      };
    };

    function AlertComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r67.type === "success", ctx_r67.type === "warning", ctx_r67.type === "danger"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.text);
      }
    }

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
        this.delay = 3000;
        this.type = 'success';
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.aSub = this.alertService.alert$.subscribe(function (alert) {
            _this18.text = alert.text;
            _this18.type = alert.type;
            var timeout = setTimeout(function () {
              clearTimeout(timeout);
              _this18.text = '';
            }, _this18.delay);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        delay: "delay"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "alert-wrap", 4, "ngIf"], [1, "alert-wrap"], [1, "alert", 3, "ngClass"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".alert-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  right: 40px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvQzpcXFVzZXJzXFxNYXhpbSBSZXpuaWtvdlxcc291cmNlXFxyZXBvc1xcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQW5ndWxhckFwcFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtd3JhcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTBweDtcclxuICByaWdodDogNDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcbiIsIi5hbGVydC13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.scss']
        }]
      }], function () {
        return [{
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      }, {
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/main-layout/main-layout.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
    \************************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppSharedComponentsMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../alert/alert.component */
    "./src/app/shared/components/alert/alert.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/cart"];
    };

    function MainLayoutComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r0.totalAmount, "USD"), ")");
      }
    }

    function MainLayoutComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_li_7_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.logout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u044B\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/login"];
    };

    function MainLayoutComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u043E\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function MainLayoutComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userName_r7 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0440\u0438\u0432\u0435\u0442, ", userName_r7, "");
      }
    }

    var _c2 = function _c2() {
      return {
        exact: true
      };
    };

    var _c3 = function _c3() {
      return ["/"];
    };

    var _c4 = function _c4() {
      return ["/admin"];
    };

    var MainLayoutComponent =
    /*#__PURE__*/
    function () {
      function MainLayoutComponent(auth, cartService, router) {
        _classCallCheck(this, MainLayoutComponent);

        this.auth = auth;
        this.cartService = cartService;
        this.router = router;
      }

      _createClass(MainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.cartSub = this.cartService.totalAmount$.subscribe(function (value) {
            _this19.totalAmount = value;
          });
          this.cartService.updateTotal();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.cartSub) {
            this.cartSub.unsubscribe();
          }
        }
      }, {
        key: "logout",
        value: function logout($event) {
          event.preventDefault();
          this.auth.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      decls: 16,
      vars: 11,
      consts: [[3, "delay"], [1, "navbar", "bg-primary"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions"], [3, "routerLink"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 4, "ngIf", "ngIfElse"], ["signIn", ""], [4, "ngIf"], [1, "container"], ["routerLinkActive", "active"], ["href", "#", 3, "click"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainLayoutComponent_li_6_Template, 4, 6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainLayoutComponent_li_7_Template, 3, 0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainLayoutComponent_ng_template_8_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainLayoutComponent_div_10_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0410\u0434\u043C\u0438\u043D\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("delay", 1000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated())("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        }
      },
      directives: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-layout',
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/product/product.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/product/product.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppSharedComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/shared/services/alert.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.addToCart(ctx_r69.product);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/product", a1];
    };

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(alert, cartService) {
        _classCallCheck(this, ProductComponent);

        this.alert = alert;
        this.cartService = cartService;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addToCart(product.id);
          this.alert.success("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product.name, " \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"));
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        product: "product",
        showAddCart: "showAddCart"
      },
      decls: 13,
      vars: 10,
      consts: [[1, "card"], [1, "cart-header"], [1, "btn", "btn-dark", 3, "routerLink"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductComponent_button_12_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx.product.price, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.product.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddCart);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [{
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showAddCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAuthenticated()) {
            console.log('ping');
            return true;
          } else {
            // this.auth.logout()
            this.router.navigate(['/login']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/my.validators.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/my.validators.ts ***!
    \*****************************************/

  /*! exports provided: MyValidators */

  /***/
  function srcAppSharedMyValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyValidators", function () {
      return MyValidators;
    });

    var MyValidators =
    /*#__PURE__*/
    function () {
      function MyValidators() {
        _classCallCheck(this, MyValidators);
      }

      _createClass(MyValidators, null, [{
        key: "confirmPassword",
        value: function confirmPassword(group) {
          var pass = group.get('password').value;
          var confirmPass = group.get('confirmPassword').value;
          return pass === confirmPass ? null : {
            notEqual: true
          };
        }
      }]);

      return MyValidators;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/alert.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/alert.service.ts ***!
    \**************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppSharedServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AlertService, [{
        key: "success",
        value: function success(text) {
          console.log(text); // console.log(this.alert$);

          this.alert$.next({
            type: 'success',
            text: text
          });
        }
      }, {
        key: "warning",
        value: function warning(text) {
          this.alert$.next({
            type: 'warning',
            text: text
          });
        }
      }, {
        key: "danger",
        value: function danger(text) {
          this.alert$.next({
            type: 'danger',
            text: text
          });
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)();
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.apiUrl = 'api/account';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          // user.returnSecureToken = true;
          return this.http.post("".concat(this.apiUrl, "/login"), user).pipe( // tap(this.setToken),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "loginAsAdmin",
        value: function loginAsAdmin(user) {
          // user.returnSecureToken = true;
          return this.http.post("".concat(this.apiUrl, "/loginAdmin"), user).pipe( // tap(this.setToken),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.http.get("".concat(this.apiUrl, "/logout"));
          this.setUser(null);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.user; // return true;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return !!localStorage.getItem('admin'); // return true;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error);
          this.error$.next(error.error); // console.log('this.error$',this.error$)

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
      }, {
        key: "setUser",
        value: function setUser(response) {
          // console.log(response);
          if (response) {
            var expDate = new Date(new Date().getTime() + 60000); //1 мин

            localStorage.setItem('expires', expDate.toString());
            localStorage.setItem('user-name', response.name);
            localStorage.setItem('user-email', response.email);

            if (response.role.name == 'admin') {
              localStorage.setItem('admin', 'true');
            }
          } else {
            localStorage.clear();
          }
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(this.apiUrl, "/register"), user).pipe( // tap(this.setToken),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "user",
        get: function get() {
          var expDate = new Date(localStorage.getItem('expires'));

          if (new Date() > expDate) {
            this.logout();
            return null;
          }

          return localStorage.getItem('user-name');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/cart.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/cart.service.ts ***!
    \*************************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppSharedServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.totalAmount$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.apiUrl = 'https://localhost:44344/api/cart';
      }

      _createClass(CartService, [{
        key: "create",
        value: function create(productId) {
          return this.http.post("".concat(this.apiUrl, "/").concat(productId), null);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.apiUrl));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "update",
        value: function update(cart) {
          return this.http.put("".concat(this.apiUrl, "/").concat(cart.id), cart);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "updateTotal",
        value: function updateTotal() {
          var _this20 = this;

          this.http.get("".concat(this.apiUrl, "/getTotal")).subscribe(function (response) {
            _this20.totalAmount$.next(response.toString());
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(id) {
          var _this21 = this;

          this.create(id).subscribe(function () {
            _this21.updateTotal();
          });
        }
      }, {
        key: "isCartNotEmpty",
        value: function isCartNotEmpty() {
          this.http.get("".concat(this.apiUrl)).subscribe(function (carts) {
            console.log(carts.length);
            return carts.length > 0;
          });
          console.log('asdf');
          return false;
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/order.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/order.service.ts ***!
    \**************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppSharedServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/orders';
      }

      _createClass(OrderService, [{
        key: "create",
        value: function create(order) {
          return this.http.post("".concat(this.apiUrl), order);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.apiUrl));
        }
      }, {
        key: "getByUsername",
        value: function getByUsername(username) {
          return this.http.get("".concat(this.apiUrl, "/").concat(username));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "update",
        value: function update(order) {
          return this.http.put("".concat(this.apiUrl, "/").concat(order.id), order);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/products.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/products.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppSharedServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(http) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.apiUrl = 'https://localhost:44344/api/products';
      }

      _createClass(ProductsService, [{
        key: "create",
        value: function create(product) {
          return this.http.post("".concat(this.apiUrl), product);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.apiUrl));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "update",
        value: function update(product) {
          return this.http.put("".concat(this.apiUrl, "/").concat(product.id), product);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/alert/alert.component */
    "./src/app/shared/components/alert/alert.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/shared/services/alert.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          providers: [_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
    platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Maxim Reznikov\source\repos\AngularApp\AngularApp\AngularApp\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map