import { Component, OnInit } from '@angular/core';
import {SpotifyApiService} from '../../../services/spotify-api.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  constructor(private spotifyApiService: SpotifyApiService) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    this.spotifyApiService.authorizeAccessToken();
  }
}
