import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnectionPageRoutingModule } from './connection-routing.module';
import { ConnectionPage } from './connection.page';
let ConnectionPageModule = class ConnectionPageModule {
};
ConnectionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ConnectionPageRoutingModule
        ],
        declarations: [ConnectionPage]
    })
], ConnectionPageModule);
export { ConnectionPageModule };
//# sourceMappingURL=connection.module.js.map