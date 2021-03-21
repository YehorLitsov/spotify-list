import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from './main-app.component';
import {CustomUiLibModule} from '../../../custom-ui-lib/custom-ui-lib.module';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';


@NgModule({
  declarations: [MainAppComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    CustomUiLibModule,
  ],
  exports: [MainAppComponent],
  providers: [SpotifyDataApiService]
})
export class MainAppModule { }
