import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottlesPageRoutingModule } from './bottles-routing.module';

import { BottlesPage } from './bottles.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottlesPageRoutingModule
  ],
  declarations: [BottlesPage],
  
})
export class BottlesPageModule {}
