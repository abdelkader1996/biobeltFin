import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbottlemodalPageRoutingModule } from './addbottlemodal-routing.module';

import { AddbottlemodalPage } from './addbottlemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  AddbottlemodalPageRoutingModule
  ],
  declarations: [
    AddbottlemodalPage]
})
export class AddbottlemodalPageModule {}
