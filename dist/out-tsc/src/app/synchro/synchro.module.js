import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SynchroPageRoutingModule } from './synchro-routing.module';
import { SynchroPage } from './synchro.page';
let SynchroPageModule = class SynchroPageModule {
};
SynchroPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SynchroPageRoutingModule
        ],
        declarations: [SynchroPage]
    })
], SynchroPageModule);
export { SynchroPageModule };
//# sourceMappingURL=synchro.module.js.map