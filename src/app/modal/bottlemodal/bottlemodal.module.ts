import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottlemodalPageRoutingModule } from './bottlemodal-routing.module';

import { BottlemodalPage } from './bottlemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottlemodalPageRoutingModule
  ],
  declarations: []
})
export class BottlemodalPageModule {}
