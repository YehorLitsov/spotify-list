import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyListRoutingModule } from './spotify-list-routing.module';
import { SpotifyListComponent } from './spotify-list.component';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';
import {MaterialModule} from '../../material/material.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorInterceptor} from '../../../interceptors/http-interceptor.interceptor';


@NgModule({
  declarations: [SpotifyListComponent],
  imports: [
    CommonModule,
    SpotifyListRoutingModule,
    MaterialModule,
  ],
  exports: [SpotifyListComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true},
    SpotifyDataApiService,
  ]
})
export class SpotifyListModule {}
