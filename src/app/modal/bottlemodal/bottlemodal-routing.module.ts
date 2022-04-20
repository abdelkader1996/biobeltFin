import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlemodalPage } from './bottlemodal.page';

const routes: Routes = [
  {
    path: '',
    component: BottlemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottlemodalPageRoutingModule {}
