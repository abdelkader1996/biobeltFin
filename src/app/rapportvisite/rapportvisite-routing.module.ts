import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapportvisitePage } from './rapportvisite.page';

const routes: Routes = [
  {
    path: '',
    component: RapportvisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapportvisitePageRoutingModule {}
