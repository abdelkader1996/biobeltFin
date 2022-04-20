import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CADCanvasComponent } from './canvas.page';
const routes = [
    {
        path: '',
        component: CADCanvasComponent
    }
];
let CanvasPageRoutingModule = class CanvasPageRoutingModule {
};
CanvasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CanvasPageRoutingModule);
export { CanvasPageRoutingModule };
//# sourceMappingURL=canvas-routing.module.js.map