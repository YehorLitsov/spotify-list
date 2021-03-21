import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizeComponent} from './authorize.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizeRoutingModule { }
