import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdiffPage } from './cdiff.page';
const routes = [
    {
        path: '',
        component: CdiffPage
    }
];
let CdiffPageRoutingModule = class CdiffPageRoutingModule {
};
CdiffPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CdiffPageRoutingModule);
export { CdiffPageRoutingModule };
//# sourceMappingURL=cdiff-routing.module.js.map