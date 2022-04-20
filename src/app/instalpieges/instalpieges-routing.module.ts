import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalpiegesPage } from './instalpieges.page';

const routes: Routes = [
  {
    path: '',
    component: InstalpiegesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalpiegesPageRoutingModule {}
