import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmparamPage } from './alarmparam.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmparamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmparamPageRoutingModule {}
