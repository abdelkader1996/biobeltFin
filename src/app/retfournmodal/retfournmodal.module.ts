import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetfournmodalPageRoutingModule } from './retfournmodal-routing.module';

import { RetfournmodalPage } from './retfournmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetfournmodalPageRoutingModule
  ],
  declarations: [RetfournmodalPage]
})
export class RetfournmodalPageModule {}
