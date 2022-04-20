import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InstalpiegesPageRoutingModule } from './instalpieges-routing.module';
import { InstalpiegesPage } from './instalpieges.page';
import { CADCanvasComponent } from '../canvas/canvas.page';
let InstalpiegesPageModule = class InstalpiegesPageModule {
};
InstalpiegesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InstalpiegesPageRoutingModule
        ],
        declarations: [InstalpiegesPage, CADCanvasComponent]
    })
], InstalpiegesPageModule);
export { InstalpiegesPageModule };
//# sourceMappingURL=instalpieges.module.js.map