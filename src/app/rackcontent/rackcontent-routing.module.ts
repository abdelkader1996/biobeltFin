import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RackcontentPage } from './rackcontent.page';

const routes: Routes = [
  {
    path: '',
    component: RackcontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RackcontentPageRoutingModule {}
