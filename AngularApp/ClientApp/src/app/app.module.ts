import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import ruLocale from '@angular/common/locales/ru';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './shared/components/product/product.component';
import {AdminModule} from './admin/admin.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {registerLocaleData} from '@angular/common';

registerLocaleData(ruLocale,'ru')

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        AdminModule,
        ReactiveFormsModule
    ],      
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        ProductPageComponent,
        ProductComponent,
        CartPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        OrderPageComponent
    ],
    bootstrap: [AppComponent],
    providers: [AuthGuard]
})
export class AppModule { }
