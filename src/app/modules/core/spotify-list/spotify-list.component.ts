import { Component, OnInit } from '@angular/core';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';

@Component({
  templateUrl: './spotify-list.component.html',
  styleUrls: ['./spotify-list.component.scss']
})
export class SpotifyListComponent implements OnInit {
  desserts = [
    {checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty'},
    {checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more'},
    {checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor'}
  ];

  constructor(private spotifyDataApiService: SpotifyDataApiService) { }

  ngOnInit(): void {
    this.getSomeTracks();
  }

  getSomeTracks(): void {
    this.spotifyDataApiService.getRandomTracks().subscribe(data => {console.log(data)});
  }
}
