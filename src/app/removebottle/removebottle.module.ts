import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemovebottlePageRoutingModule } from './removebottle-routing.module';

import { RemovebottlePage } from './removebottle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemovebottlePageRoutingModule
  ],
  declarations: [RemovebottlePage]
})
export class RemovebottlePageModule {}
