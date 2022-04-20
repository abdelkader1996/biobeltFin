import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChoosestockPageRoutingModule } from './choosestock-routing.module';
import { ChoosestockPage } from './choosestock.page';
let ChoosestockPageModule = class ChoosestockPageModule {
};
ChoosestockPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ChoosestockPageRoutingModule
        ],
        declarations: [ChoosestockPage]
    })
], ChoosestockPageModule);
export { ChoosestockPageModule };
//# sourceMappingURL=choosestock.module.js.map