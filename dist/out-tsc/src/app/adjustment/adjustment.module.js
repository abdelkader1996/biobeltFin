import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdjustmentPageRoutingModule } from './adjustment-routing.module';
import { AdjustmentPage } from './adjustment.page';
let AdjustmentPageModule = class AdjustmentPageModule {
};
AdjustmentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AdjustmentPageRoutingModule
        ],
        declarations: [AdjustmentPage]
    })
], AdjustmentPageModule);
export { AdjustmentPageModule };
//# sourceMappingURL=adjustment.module.js.map