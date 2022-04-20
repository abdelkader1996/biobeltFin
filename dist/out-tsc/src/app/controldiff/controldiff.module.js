import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ControldiffPageRoutingModule } from './controldiff-routing.module';
import { ControldiffPage } from './controldiff.page';
let ControldiffPageModule = class ControldiffPageModule {
};
ControldiffPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ControldiffPageRoutingModule
        ],
        declarations: [ControldiffPage]
    })
], ControldiffPageModule);
export { ControldiffPageModule };
//# sourceMappingURL=controldiff.module.js.map