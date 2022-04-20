import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FininterventionPage } from './finintervention.page';

const routes: Routes = [
  {
    path: '',
    component: FininterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FininterventionPageRoutingModule {}
