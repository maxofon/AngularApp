import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'order', component: OrderPageComponent}
    ]
  },
  // {
  //  // path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  //  path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
