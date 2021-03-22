import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyTracksResponseInterface} from '../interfaces/spotify-tracks-response.interface';

@Injectable()
export class SpotifyDataApiService {

  constructor(private http: HttpClient) { }

  getRandomSearch(): string {
    // A list of all characters that can be chosen.
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    // Gets a random character from the characters string.
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }

  getRandomTracks(limit = 10, offset = 0): Observable<SpotifyTracksResponseInterface> {
    return this.http
      .get<SpotifyTracksResponseInterface>(`https://api.spotify.com/v1/search?type=track&q=${this.getRandomSearch()}&limit=${limit}&offset=${offset}`);
  }
}
