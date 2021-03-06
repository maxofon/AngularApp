var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchNamePipe } from './shared/search-name.pipe';
import { AuthAdminGuard } from './shared/services/auth-admin.guard';
import { OrdersDashboardPageComponent } from './orders/orders-dashboard-page/orders-dashboard-page.component';
import { UsersDashboardPageComponent } from './users/users-dashboard-page/users-dashboard-page.component';
import { OrderItemsDashboardPageComponent } from './order-items/order-items-dashboard-page/order-items-dashboard-page.component';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        NgModule({
            declarations: [
                AdminLayoutComponent,
                LoginPageComponent,
                DashboardPageComponent,
                CreatePageComponent,
                EditPageComponent,
                OrdersDashboardPageComponent,
                OrderItemsDashboardPageComponent,
                UsersDashboardPageComponent,
                SearchNamePipe
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                RouterModule.forChild([
                    {
                        path: 'admin', component: AdminLayoutComponent, children: [
                            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                            { path: 'login', component: LoginPageComponent },
                            { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthAdminGuard] },
                            { path: 'create', component: CreatePageComponent, canActivate: [AuthAdminGuard] },
                            { path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthAdminGuard] },
                            { path: 'orders/:userName', component: OrdersDashboardPageComponent, canActivate: [AuthAdminGuard] },
                            { path: 'order-items/dashboard/:orderId', component: OrderItemsDashboardPageComponent, canActivate: [AuthAdminGuard] },
                            { path: 'users/dashboard', component: UsersDashboardPageComponent, canActivate: [AuthAdminGuard] },
                        ]
                    }
                ]),
                FormsModule
            ],
            exports: [RouterModule],
            providers: [AuthAdminGuard]
        })
    ], AdminModule);
    return AdminModule;
}());
export { AdminModule };
//# sourceMappingURL=admin.module.js.map