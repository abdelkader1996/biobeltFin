import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdiffPage } from './cdiff.page';

const routes: Routes = [
  {
    path: '',
    component: CdiffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdiffPageRoutingModule {}
