import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizeRoutingModule } from './authorize-routing.module';
import { AuthorizeComponent } from './authorize.component';
import {SpotifyAuthApiService} from '../../../services/spotify-auth-api.service';
import {MaterialModule} from '../../material/material.module';


@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    AuthorizeRoutingModule,
    MaterialModule,
  ],
  exports: [AuthorizeComponent],
  providers: [SpotifyAuthApiService]
})
export class AuthorizeModule { }
