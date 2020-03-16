import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from '../admin/shared/components/alert/alert.component';

@NgModule({
  imports: [
    HttpClientModule
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
