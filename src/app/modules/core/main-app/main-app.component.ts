import { Component, OnInit } from '@angular/core';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';
import { MdcTabActivatedEvent } from '@angular-mdc/web';
import {RouterUrls} from '../../../router-urls/router-urls';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  buttons = [
    { label: 'List', link: RouterUrls.spotifyList },
    { label: 'Favorites', link: RouterUrls.favourites }
  ];

  logTab(event: MdcTabActivatedEvent): void {
    console.log(event.index);
  }

  constructor(private spotifyDataApiService: SpotifyDataApiService) { }

  ngOnInit(): void {
    this.getSomeTracks();
  }

  getSomeTracks(): void {
    this.spotifyDataApiService.getNewReleases().subscribe(data => {console.log(data)});
  }
}
