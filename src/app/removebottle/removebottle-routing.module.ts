import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemovebottlePage } from './removebottle.page';

const routes: Routes = [
  {
    path: '',
    component: RemovebottlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemovebottlePageRoutingModule {}
