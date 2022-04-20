import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckPage } from './check.page';
const routes = [
    {
        path: '',
        component: CheckPage
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CheckPageRoutingModule);
export { CheckPageRoutingModule };
//# sourceMappingURL=check-routing.module.js.map