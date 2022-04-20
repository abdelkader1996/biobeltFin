import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddbottleceintPage } from './addbottleceint.page';
const routes = [
    {
        path: '',
        component: AddbottleceintPage
    }
];
let AddbottleceintPageRoutingModule = class AddbottleceintPageRoutingModule {
};
AddbottleceintPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddbottleceintPageRoutingModule);
export { AddbottleceintPageRoutingModule };
//# sourceMappingURL=addbottleceint-routing.module.js.map