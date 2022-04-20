import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmparamPageRoutingModule } from './alarmparam-routing.module';

import { AlarmparamPage } from './alarmparam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmparamPageRoutingModule
  ],
  declarations: [AlarmparamPage]
})
export class AlarmparamPageModule {}
