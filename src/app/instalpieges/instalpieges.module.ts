import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstalpiegesPageRoutingModule } from './instalpieges-routing.module';

import { InstalpiegesPage } from './instalpieges.page';
import {CADCanvasComponent} from '../canvas/canvas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstalpiegesPageRoutingModule
  ],
  declarations: [InstalpiegesPage,CADCanvasComponent]
})
export class InstalpiegesPageModule {}
