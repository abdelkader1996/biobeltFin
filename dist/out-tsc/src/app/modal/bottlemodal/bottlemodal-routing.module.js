import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottlemodalPage } from './bottlemodal.page';
const routes = [
    {
        path: '',
        component: BottlemodalPage
    }
];
let BottlemodalPageRoutingModule = class BottlemodalPageRoutingModule {
};
BottlemodalPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BottlemodalPageRoutingModule);
export { BottlemodalPageRoutingModule };
//# sourceMappingURL=bottlemodal-routing.module.js.map