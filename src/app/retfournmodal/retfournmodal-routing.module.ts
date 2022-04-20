import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetfournmodalPage } from './retfournmodal.page';

const routes: Routes = [
  {
    path: '',
    component: RetfournmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetfournmodalPageRoutingModule {}
