import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottlesPage } from './bottles.page';
const routes = [
    {
        path: '',
        component: BottlesPage
    }
];
let BottlesPageRoutingModule = class BottlesPageRoutingModule {
};
BottlesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BottlesPageRoutingModule);
export { BottlesPageRoutingModule };
//# sourceMappingURL=bottles-routing.module.js.map