import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottlemodalPageRoutingModule } from './bottlemodal-routing.module';
import { BottlemodalPage } from './bottlemodal.page';
let BottlemodalPageModule = class BottlemodalPageModule {
};
BottlemodalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BottlemodalPageRoutingModule
        ],
        declarations: [BottlemodalPage]
    })
], BottlemodalPageModule);
export { BottlemodalPageModule };
//# sourceMappingURL=bottlemodal.module.js.map