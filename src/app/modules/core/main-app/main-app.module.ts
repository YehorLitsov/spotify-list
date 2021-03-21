import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from './main-app.component';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';
import {MaterialModule} from '../../material/material.module';


@NgModule({
  declarations: [MainAppComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    MaterialModule,
  ],
  exports: [MainAppComponent],
  providers: [SpotifyDataApiService]
})
export class MainAppModule { }
