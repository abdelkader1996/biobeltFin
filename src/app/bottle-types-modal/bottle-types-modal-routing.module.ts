import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottleTypesModalPage } from './bottle-types-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BottleTypesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottleTypesModalPageRoutingModule {}
