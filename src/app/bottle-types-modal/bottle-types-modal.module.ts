import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottleTypesModalPageRoutingModule } from './bottle-types-modal-routing.module';

import { BottleTypesModalPage } from './bottle-types-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottleTypesModalPageRoutingModule
  ],
  declarations: [BottleTypesModalPage]
})
export class BottleTypesModalPageModule {}
