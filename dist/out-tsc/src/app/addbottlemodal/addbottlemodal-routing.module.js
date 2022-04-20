import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddbottlemodalPage } from './addbottlemodal.page';
const routes = [
    {
        path: '',
        component: AddbottlemodalPage
    }
];
let AddbottlemodalPageRoutingModule = class AddbottlemodalPageRoutingModule {
};
AddbottlemodalPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddbottlemodalPageRoutingModule);
export { AddbottlemodalPageRoutingModule };
//# sourceMappingURL=addbottlemodal-routing.module.js.map