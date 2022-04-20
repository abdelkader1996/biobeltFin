import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifnbpiegesPage } from './modifnbpieges.page';

const routes: Routes = [
  {
    path: '',
    component: ModifnbpiegesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifnbpiegesPageRoutingModule {}
