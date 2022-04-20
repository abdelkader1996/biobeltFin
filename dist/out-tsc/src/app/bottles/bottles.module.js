import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BottlesPageRoutingModule } from './bottles-routing.module';
import { BottlesPage } from './bottles.page';
let BottlesPageModule = class BottlesPageModule {
};
BottlesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BottlesPageRoutingModule
        ],
        declarations: [BottlesPage],
    })
], BottlesPageModule);
export { BottlesPageModule };
//# sourceMappingURL=bottles.module.js.map