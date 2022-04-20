import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamepiegePageRoutingModule } from './namepiege-routing.module';

import { NamepiegePage } from './namepiege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamepiegePageRoutingModule
  ],
  declarations: [NamepiegePage]
})
export class NamepiegePageModule {}
