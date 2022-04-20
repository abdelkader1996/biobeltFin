import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitechangeboitierupcPage } from './initechangeboitierupc.page';

const routes: Routes = [
  {
    path: '',
    component: InitechangeboitierupcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitechangeboitierupcPageRoutingModule {}
