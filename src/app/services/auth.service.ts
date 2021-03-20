import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // TODO remove
  constructor(private http: HttpClient) { }

  authorization(client_id: string, response_type: string): Observable<any> {
    console.log('client_id', client_id);
    console.log('response_type', response_type);
    return this.http.get(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}`);
  }
}
