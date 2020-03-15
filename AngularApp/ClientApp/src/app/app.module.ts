import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './shared/components/product/product.component';
import {AdminModule} from './admin/admin.module';;
import { CartPageComponent } from './cart-page/cart-page.component'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        AdminModule
    ],      
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        ProductPageComponent,
        ProductComponent,
        CartPageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
