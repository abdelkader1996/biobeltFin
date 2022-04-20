import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamepiegePage } from './namepiege.page';

const routes: Routes = [
  {
    path: '',
    component: NamepiegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamepiegePageRoutingModule {}
