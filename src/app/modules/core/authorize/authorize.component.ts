import { Component, OnInit } from '@angular/core';
import {SpotifyAuthApiService} from '../../../services/spotify-auth-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(private spotifyAuthApiService: SpotifyAuthApiService, private router: Router) { }

  ngOnInit(): void {
  }

  authorize(): void {
    this.spotifyAuthApiService.refreshAccessToken().subscribe(() => {
      this.router.navigate(['main']);
    });
  }
}
