import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbottlemodalPage } from './addbottlemodal.page';

const routes: Routes = [
  {
    path: '',
    component: AddbottlemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbottlemodalPageRoutingModule {}
