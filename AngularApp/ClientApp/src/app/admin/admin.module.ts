import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {SearchNamePipe} from './shared/search-name.pipe';
import {AuthAdminGuard} from './shared/services/auth-admin.guard';
import {OrdersDashboardPageComponent} from './orders/orders-dashboard-page/orders-dashboard-page.component';
import {UsersDashboardPageComponent} from './users/users-dashboard-page/users-dashboard-page.component';
import {OrderItemsDashboardPageComponent} from './order-items/order-items-dashboard-page/order-items-dashboard-page.component';


@NgModule({
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
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthAdminGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthAdminGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthAdminGuard]},
          {path: 'orders/:userName', component: OrdersDashboardPageComponent, canActivate: [AuthAdminGuard]},
          {path: 'order-items/dashboard/:orderId', component: OrderItemsDashboardPageComponent, canActivate: [AuthAdminGuard]},
          {path: 'users/dashboard', component: UsersDashboardPageComponent, canActivate: [AuthAdminGuard]},
        ]
      }
    ]),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AuthAdminGuard]
})

export class AdminModule { }
