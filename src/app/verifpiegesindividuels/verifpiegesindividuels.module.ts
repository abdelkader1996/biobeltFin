import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifpiegesindividuelsPageRoutingModule } from './verifpiegesindividuels-routing.module';

import { VerifpiegesindividuelsPage } from './verifpiegesindividuels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifpiegesindividuelsPageRoutingModule
  ],
  declarations: [VerifpiegesindividuelsPage]
})
export class VerifpiegesindividuelsPageModule {}
