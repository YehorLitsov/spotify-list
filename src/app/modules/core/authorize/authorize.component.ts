import { Component } from '@angular/core';
import {SpotifyAuthApiService} from '../../../services/spotify-auth-api.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent {

  constructor(private spotifyAuthApiService: SpotifyAuthApiService, private router: Router) { }

  authorize(): void {
    this.spotifyAuthApiService.refreshAccessToken().subscribe(() => {
      this.router.navigate(['main']);
    });
  }
}
