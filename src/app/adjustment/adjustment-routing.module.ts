import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjustmentPage } from './adjustment.page';

const routes: Routes = [
  {
    path: '',
    component: AdjustmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjustmentPageRoutingModule {}
