import { Component } from '@angular/core';
import {RouterUrls} from '../../../router-urls/router-urls';

@Component({
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent {

  buttons = [
    { label: 'List', link: RouterUrls.spotifyList },
    { label: 'Favorites', link: RouterUrls.favourites }
  ];
}
