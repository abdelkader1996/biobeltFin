import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CdiffPageRoutingModule } from './cdiff-routing.module';
import { CdiffPage } from './cdiff.page';
let CdiffPageModule = class CdiffPageModule {
};
CdiffPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CdiffPageRoutingModule
        ],
        declarations: [CdiffPage]
    })
], CdiffPageModule);
export { CdiffPageModule };
//# sourceMappingURL=cdiff.module.js.map