import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainAppModule} from './modules/core/main-app/main-app.module';
import {HttpInterceptorInterceptor} from './interceptors/http-interceptor.interceptor';
import {SpotifyAuthApiService} from './services/spotify-auth-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainAppModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true},
    SpotifyAuthApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
