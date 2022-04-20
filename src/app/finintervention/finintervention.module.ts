import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FininterventionPageRoutingModule } from './finintervention-routing.module';

import { FininterventionPage } from './finintervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FininterventionPageRoutingModule
  ],
  declarations: [FininterventionPage]
})
export class FininterventionPageModule {}
