import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RackcontentPage } from './rackcontent.page';
const routes = [
    {
        path: '',
        component: RackcontentPage
    }
];
let RackcontentPageRoutingModule = class RackcontentPageRoutingModule {
};
RackcontentPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RackcontentPageRoutingModule);
export { RackcontentPageRoutingModule };
//# sourceMappingURL=rackcontent-routing.module.js.map