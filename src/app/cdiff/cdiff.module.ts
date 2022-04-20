import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdiffPageRoutingModule } from './cdiff-routing.module';

import { CdiffPage } from './cdiff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdiffPageRoutingModule
  ],
  declarations: [CdiffPage]
})
export class CdiffPageModule {}
