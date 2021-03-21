import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SpotifyDataApiService {

  constructor(private http: HttpClient) { }

  getRandomSearch(): string {
    // A list of all characters that can be chosen.
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));

    return randomCharacter;
  }

  getRandomTracks(limit = 10, offset = 0): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/search?type=track&q=${this.getRandomSearch()}&limit=${limit}&offset=${offset}`);
  }
}
