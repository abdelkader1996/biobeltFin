import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterventionceinturePage } from './interventionceinture.page';
const routes = [
    {
        path: '',
        component: InterventionceinturePage
    }
];
let InterventionceinturePageRoutingModule = class InterventionceinturePageRoutingModule {
};
InterventionceinturePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InterventionceinturePageRoutingModule);
export { InterventionceinturePageRoutingModule };
//# sourceMappingURL=interventionceinture-routing.module.js.map