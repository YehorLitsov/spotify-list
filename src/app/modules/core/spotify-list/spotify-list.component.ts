import { Component, OnInit } from '@angular/core';
import {SpotifyDataApiService} from '../../../services/spotify-data-api.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {pluck, startWith, switchMap, tap} from 'rxjs/operators';
import {SpotifyTracksResponseInterface} from '../../../interfaces/spotify-tracks-response.interface';
import {SpotifyTrackInterface} from '../../../interfaces/spotify-track.interface';

@Component({
  templateUrl: './spotify-list.component.html',
  styleUrls: ['./spotify-list.component.scss']
})
export class SpotifyListComponent implements OnInit {
  updateTracks$ = new Subject();
  tracks$: Observable<SpotifyTrackInterface[]> = this.updateTracks$.pipe(
    startWith(() => null),
    switchMap(() => this.spotifyDataApiService.getRandomTracks().pipe(pluck('tracks', 'items'))),
  );

  constructor(private spotifyDataApiService: SpotifyDataApiService) { }

  ngOnInit(): void {
    this.updateTracks$.next();
  }

  addToFavourites(item: SpotifyTrackInterface): void {
    let storedTracks = [];
    storedTracks = JSON.parse(localStorage.getItem('liked_tracks')) || [];
    storedTracks.push(item);
    localStorage.setItem('liked_tracks', JSON.stringify(storedTracks));
  }
}
