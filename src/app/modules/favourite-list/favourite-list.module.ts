import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteListRoutingModule } from './favourite-list-routing.module';
import { FavouriteListComponent } from './favourite-list.component';


@NgModule({
  declarations: [FavouriteListComponent],
  imports: [
    CommonModule,
    FavouriteListRoutingModule
  ],
  exports: [FavouriteListComponent]
})
export class FavouriteListModule { }
