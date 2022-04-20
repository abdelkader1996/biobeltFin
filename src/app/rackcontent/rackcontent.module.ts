import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RackcontentPageRoutingModule } from './rackcontent-routing.module';

import { RackcontentPage } from './rackcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RackcontentPageRoutingModule
  ],
  declarations: [RackcontentPage]
})
export class RackcontentPageModule {}
