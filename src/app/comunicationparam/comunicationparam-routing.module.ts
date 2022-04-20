import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicationparamPage } from './comunicationparam.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicationparamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicationparamPageRoutingModule {}
