import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifnbpiegesPageRoutingModule } from './modifnbpieges-routing.module';

import { ModifnbpiegesPage } from './modifnbpieges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifnbpiegesPageRoutingModule
  ],
  declarations: [ModifnbpiegesPage]
})
export class ModifnbpiegesPageModule {}
