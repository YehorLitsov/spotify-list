import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyListRoutingModule } from './spotify-list-routing.module';
import { SpotifyListComponent } from './spotify-list.component';


@NgModule({
  declarations: [SpotifyListComponent],
  imports: [
    CommonModule,
    SpotifyListRoutingModule
  ],
  exports: [SpotifyListComponent]
})
export class SpotifyListModule { }
