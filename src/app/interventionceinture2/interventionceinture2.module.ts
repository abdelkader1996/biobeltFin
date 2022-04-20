import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Interventionceinture2PageRoutingModule } from './interventionceinture2-routing.module';

import { Interventionceinture2Page } from './interventionceinture2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Interventionceinture2PageRoutingModule
  ],
  declarations: [Interventionceinture2Page]
})
export class Interventionceinture2PageModule {}
