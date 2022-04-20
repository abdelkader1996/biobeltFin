import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstalpiegesPage } from './instalpieges.page';
const routes = [
    {
        path: '',
        component: InstalpiegesPage
    }
];
let InstalpiegesPageRoutingModule = class InstalpiegesPageRoutingModule {
};
InstalpiegesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InstalpiegesPageRoutingModule);
export { InstalpiegesPageRoutingModule };
//# sourceMappingURL=instalpieges-routing.module.js.map