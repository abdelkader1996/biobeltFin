import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbottleceintPageRoutingModule } from './addbottleceint-routing.module';

import { AddbottleceintPage } from './addbottleceint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbottleceintPageRoutingModule
  ],
  declarations: [AddbottleceintPage]
})
export class AddbottleceintPageModule {}
