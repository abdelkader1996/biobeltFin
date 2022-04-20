import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RackcontentPageRoutingModule } from './rackcontent-routing.module';
import { RackcontentPage } from './rackcontent.page';
let RackcontentPageModule = class RackcontentPageModule {
};
RackcontentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RackcontentPageRoutingModule
        ],
        declarations: [RackcontentPage]
    })
], RackcontentPageModule);
export { RackcontentPageModule };
//# sourceMappingURL=rackcontent.module.js.map