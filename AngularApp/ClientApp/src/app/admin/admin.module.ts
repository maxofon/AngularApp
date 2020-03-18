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
import {AuthGuard} from "./shared/services/auth.guard";
import {SearchPipe} from './shared/search.pipe';
import {AuthAdminGuard} from './shared/services/auth-admin.guard';


@NgModule({
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
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthAdminGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthAdminGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthAdminGuard]},
        ]
      }
    ]),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard,AuthAdminGuard]
})

export class AdminModule { }
