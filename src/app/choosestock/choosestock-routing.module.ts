import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosestockPage } from './choosestock.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosestockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosestockPageRoutingModule {}
