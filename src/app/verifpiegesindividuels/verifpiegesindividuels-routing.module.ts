import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifpiegesindividuelsPage } from './verifpiegesindividuels.page';

const routes: Routes = [
  {
    path: '',
    component: VerifpiegesindividuelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifpiegesindividuelsPageRoutingModule {}
