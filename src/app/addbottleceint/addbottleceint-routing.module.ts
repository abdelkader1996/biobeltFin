import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbottleceintPage } from './addbottleceint.page';

const routes: Routes = [
  {
    path: '',
    component: AddbottleceintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbottleceintPageRoutingModule {}
