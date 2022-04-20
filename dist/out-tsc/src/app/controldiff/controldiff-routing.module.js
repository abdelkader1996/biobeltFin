import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControldiffPage } from './controldiff.page';
const routes = [
    {
        path: '',
        component: ControldiffPage
    }
];
let ControldiffPageRoutingModule = class ControldiffPageRoutingModule {
};
ControldiffPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ControldiffPageRoutingModule);
export { ControldiffPageRoutingModule };
//# sourceMappingURL=controldiff-routing.module.js.map