import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainAppComponent} from './main-app.component';
import {RouterUrls} from '../../../router-urls/router-urls';

const routes: Routes = [
  {
    path: 'main',
    component: MainAppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'spotify-list'
      },
      {
        path: RouterUrls.spotifyList,
        loadChildren: () => import('src/app/modules/core/spotify-list/spotify-list.module').then(m => m.SpotifyListModule)
      },
      {
        path: RouterUrls.favourites,
        loadChildren: () => import('src/app/modules/core/favourite-list/favourite-list.module').then(m => m.FavouriteListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
