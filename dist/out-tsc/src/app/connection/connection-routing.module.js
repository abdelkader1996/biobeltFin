import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectionPage } from './connection.page';
const routes = [
    {
        path: '',
        component: ConnectionPage
    }
];
let ConnectionPageRoutingModule = class ConnectionPageRoutingModule {
};
ConnectionPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ConnectionPageRoutingModule);
export { ConnectionPageRoutingModule };
//# sourceMappingURL=connection-routing.module.js.map