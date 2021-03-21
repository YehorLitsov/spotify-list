import { Component, OnInit } from '@angular/core';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';

@Component({
  selector: 'app-spotify-list',
  templateUrl: './spotify-list.component.html',
  styleUrls: ['./spotify-list.component.scss']
})
export class SpotifyListComponent implements OnInit {

  constructor(private spotifyDataApiService: SpotifyDataApiService) { }

  ngOnInit(): void {
    // this.spotifyDataApiService.getNewReleases().subscribe(data => {console.log(data)});
  }
}
