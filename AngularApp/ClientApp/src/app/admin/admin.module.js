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
import { SearchPipe } from './shared/search.pipe';
import { AuthAdminGuard } from './shared/services/auth-admin.guard';
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
                SearchPipe
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