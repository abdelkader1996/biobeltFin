import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChoosestockPage } from './choosestock.page';
const routes = [
    {
        path: '',
        component: ChoosestockPage
    }
];
let ChoosestockPageRoutingModule = class ChoosestockPageRoutingModule {
};
ChoosestockPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChoosestockPageRoutingModule);
export { ChoosestockPageRoutingModule };
//# sourceMappingURL=choosestock-routing.module.js.map