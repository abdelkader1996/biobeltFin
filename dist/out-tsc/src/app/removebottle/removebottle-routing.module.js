import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemovebottlePage } from './removebottle.page';
const routes = [
    {
        path: '',
        component: RemovebottlePage
    }
];
let RemovebottlePageRoutingModule = class RemovebottlePageRoutingModule {
};
RemovebottlePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RemovebottlePageRoutingModule);
export { RemovebottlePageRoutingModule };
//# sourceMappingURL=removebottle-routing.module.js.map