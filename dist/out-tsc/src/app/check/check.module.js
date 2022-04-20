import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckPageRoutingModule } from './check-routing.module';
import { CheckPage } from './check.page';
let CheckPageModule = class CheckPageModule {
};
CheckPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CheckPageRoutingModule
        ],
        declarations: [CheckPage]
    })
], CheckPageModule);
export { CheckPageModule };
//# sourceMappingURL=check.module.js.map