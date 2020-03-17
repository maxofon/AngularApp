import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './components/alert/alert.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    HttpClientModule,
    AlertComponent
  ]
})

export class SharedModule {

}
