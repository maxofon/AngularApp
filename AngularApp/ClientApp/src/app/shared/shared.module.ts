import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './components/alert/alert.component';
import {CommonModule} from '@angular/common';
import {AlertService} from './services/alert.service';


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
  ],
  providers:[AlertService]
})

export class SharedModule {

}
