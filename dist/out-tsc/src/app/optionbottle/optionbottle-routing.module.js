import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptionbottlePage } from './optionbottle.page';
const routes = [
    {
        path: '',
        component: OptionbottlePage
    }
];
let OptionbottlePageRoutingModule = class OptionbottlePageRoutingModule {
};
OptionbottlePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OptionbottlePageRoutingModule);
export { OptionbottlePageRoutingModule };
//# sourceMappingURL=optionbottle-routing.module.js.map