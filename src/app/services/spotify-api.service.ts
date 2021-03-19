import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor(private http: HttpClient) { }

  getSpotifyNewReleases(): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases');
  }
}
