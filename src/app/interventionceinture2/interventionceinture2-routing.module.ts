import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Interventionceinture2Page } from './interventionceinture2.page';

const routes: Routes = [
  {
    path: '',
    component: Interventionceinture2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Interventionceinture2PageRoutingModule {}
