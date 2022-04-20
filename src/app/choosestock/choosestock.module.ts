import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosestockPageRoutingModule } from './choosestock-routing.module';

import { ChoosestockPage } from './choosestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosestockPageRoutingModule
  ],
  declarations: [ChoosestockPage]
})
export class ChoosestockPageModule {}
