import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionbottlePage } from './optionbottle.page';

const routes: Routes = [
  {
    path: '',
    component: OptionbottlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionbottlePageRoutingModule {}
