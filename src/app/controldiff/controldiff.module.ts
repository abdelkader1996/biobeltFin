import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControldiffPageRoutingModule } from './controldiff-routing.module';

import { ControldiffPage } from './controldiff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControldiffPageRoutingModule
  ],
  declarations: [ControldiffPage]
})
export class ControldiffPageModule {}
