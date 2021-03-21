import { Component, OnInit } from '@angular/core';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  constructor(private spotifyDataApiService: SpotifyDataApiService) { }

  ngOnInit(): void {
  }

  someEvent(): void {
    this.spotifyDataApiService.getNewReleases().subscribe(data => {console.log(data)});
  }
}
