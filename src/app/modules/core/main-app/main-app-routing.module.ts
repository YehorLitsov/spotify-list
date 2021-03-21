import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainAppComponent} from './main-app.component';

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
        path: 'spotify-list',
        loadChildren: () => import('src/app/modules/core/spotify-list/spotify-list.module').then(m => m.SpotifyListModule)
      },
      {
        path: 'favourite-list',
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
