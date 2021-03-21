import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SpotifyDataApiService {

  constructor(private http: HttpClient) { }

  getTracks(): Observable<any> {
    const limit = 10;
    return this.http.get(`?limit=${limit}`);
  }

  getNewReleases(limit = 10, offset = 0): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}&offset=${offset}`);
  }

  // getNewReleases(limit = 10, offset = 0): Observable<any> {
  //   const accessToken = localStorage.getItem('access_token');
  //   const headers = new HttpHeaders({
  //     'Authorization' : 'Bearer ' + accessToken
  //   })
  //   return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}&offset=${offset}`, {headers});
  // }
}
