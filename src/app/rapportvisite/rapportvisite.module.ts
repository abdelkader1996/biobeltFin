import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapportvisitePageRoutingModule } from './rapportvisite-routing.module';

import { RapportvisitePage } from './rapportvisite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapportvisitePageRoutingModule
  ],
  declarations: [RapportvisitePage]
})
export class RapportvisitePageModule {}
