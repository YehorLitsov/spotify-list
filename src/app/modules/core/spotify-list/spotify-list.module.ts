import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyListRoutingModule } from './spotify-list-routing.module';
import { SpotifyListComponent } from './spotify-list.component';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';


@NgModule({
  declarations: [SpotifyListComponent],
  imports: [
    CommonModule,
    SpotifyListRoutingModule,
  ],
  exports: [SpotifyListComponent],
  providers: [
    SpotifyDataApiService,
  ]
})
export class SpotifyListModule {}
