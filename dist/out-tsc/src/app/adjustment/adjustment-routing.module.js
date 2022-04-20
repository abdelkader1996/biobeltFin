import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdjustmentPage } from './adjustment.page';
const routes = [
    {
        path: '',
        component: AdjustmentPage
    }
];
let AdjustmentPageRoutingModule = class AdjustmentPageRoutingModule {
};
AdjustmentPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AdjustmentPageRoutingModule);
export { AdjustmentPageRoutingModule };
//# sourceMappingURL=adjustment-routing.module.js.map