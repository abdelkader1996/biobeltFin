import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjustmentPageRoutingModule } from './adjustment-routing.module';

import { AdjustmentPage } from './adjustment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjustmentPageRoutingModule
  ],
  declarations: [AdjustmentPage]
})
export class AdjustmentPageModule {}
