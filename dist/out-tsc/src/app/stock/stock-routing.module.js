import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StockPage } from './stock.page';
const routes = [
    {
        path: '',
        component: StockPage
    }
];
let StockPageRoutingModule = class StockPageRoutingModule {
};
StockPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], StockPageRoutingModule);
export { StockPageRoutingModule };
//# sourceMappingURL=stock-routing.module.js.map