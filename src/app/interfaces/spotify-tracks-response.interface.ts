import {SpotifyTrackInterface} from './spotify-track.interface';

export interface SpotifyTracksResponseInterface {
  tracks: {
    href: string;
    items: SpotifyTrackInterface[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
  };
}
