import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SynchroPage } from './synchro.page';
const routes = [
    {
        path: '',
        component: SynchroPage
    }
];
let SynchroPageRoutingModule = class SynchroPageRoutingModule {
};
SynchroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SynchroPageRoutingModule);
export { SynchroPageRoutingModule };
//# sourceMappingURL=synchro-routing.module.js.map