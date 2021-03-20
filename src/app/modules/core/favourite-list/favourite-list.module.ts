import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteListRoutingModule } from './favourite-list-routing.module';
import { FavouriteListComponent } from './favourite-list.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorInterceptor} from '../../../interceptors/http-interceptor.interceptor';


@NgModule({
  declarations: [FavouriteListComponent],
  imports: [
    CommonModule,
    FavouriteListRoutingModule
  ],
  exports: [FavouriteListComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true}
  ]
})
export class FavouriteListModule { }
