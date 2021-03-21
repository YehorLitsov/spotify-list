import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizeRoutingModule } from './authorize-routing.module';
import { AuthorizeComponent } from './authorize.component';
import {CustomUiLibModule} from '../../../custom-ui-lib/custom-ui-lib.module';
import {SpotifyAuthApiService} from '../../../services/spotify-auth-api.service';


@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    AuthorizeRoutingModule,
    CustomUiLibModule,
  ],
  exports: [AuthorizeComponent],
  providers: [SpotifyAuthApiService]
})
export class AuthorizeModule { }
