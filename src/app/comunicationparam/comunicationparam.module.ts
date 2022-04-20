import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicationparamPageRoutingModule } from './comunicationparam-routing.module';

import { ComunicationparamPage } from './comunicationparam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicationparamPageRoutingModule
  ],
  declarations: [ComunicationparamPage]
})
export class ComunicationparamPageModule {}
