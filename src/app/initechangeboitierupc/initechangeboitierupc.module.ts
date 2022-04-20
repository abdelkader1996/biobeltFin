import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitechangeboitierupcPageRoutingModule } from './initechangeboitierupc-routing.module';

import { InitechangeboitierupcPage } from './initechangeboitierupc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitechangeboitierupcPageRoutingModule
  ],
  declarations: [InitechangeboitierupcPage]
})
export class InitechangeboitierupcPageModule {}
