import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterventionceinturePage } from './interventionceinture.page';

const routes: Routes = [
  {
    path: '',
    component: InterventionceinturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterventionceinturePageRoutingModule {}
