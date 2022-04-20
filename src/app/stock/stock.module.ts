import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';




@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule,
    
  ],
  entryComponents : [
    //AddbottlemodalPage,
  ],
  declarations: [StockPage,
   // AddbottlemodalPage,
  ]
})
export class StockPageModule {}
