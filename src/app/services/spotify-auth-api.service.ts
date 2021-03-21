import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {TokenResponseInterface} from '../interfaces/token-response.interface';
import {first, tap} from 'rxjs/operators';

@Injectable()
export class SpotifyAuthApiService {

  constructor(private http: HttpClient) {}

  // public authorizeAccessToken(): void {
  //   const accessToken = localStorage.getItem('access_token');
  //   const tokenType = localStorage.getItem('token_type');
  //   console.log('accessToken', accessToken);
  //   console.log('tokenType', tokenType);
  //   if (!accessToken || !tokenType) {
  //     this.refreshAccessToken();
  //   }
  // }

  public refreshAccessToken(): Observable<any> {
    return this.getToken().pipe(first()).pipe(
      tap((tokenData: TokenResponseInterface) => {
        this.setLocalStorageTokenData(tokenData);
      })
    );
  }

  private setLocalStorageTokenData(tokenData: TokenResponseInterface): void {
    localStorage.setItem('access_token', tokenData.access_token);
  }

  private getToken(): Observable<TokenResponseInterface> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
    });
    console.log('environment.client_id', environment.client_id);
    console.log('environment.client_secret', environment.client_secret);
    const options = { headers };
    const body = 'grant_type=client_credentials';
    return this.http.post('https://accounts.spotify.com/api/token', body, options) as Observable<TokenResponseInterface>;
  }
}
