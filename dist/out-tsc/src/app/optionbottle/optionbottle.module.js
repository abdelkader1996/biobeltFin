import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OptionbottlePageRoutingModule } from './optionbottle-routing.module';
import { OptionbottlePage } from './optionbottle.page';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
let OptionbottlePageModule = class OptionbottlePageModule {
};
OptionbottlePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OptionbottlePageRoutingModule,
        ],
        declarations: [OptionbottlePage, RackcontentPage],
        entryComponents: [RackcontentPage]
    })
], OptionbottlePageModule);
export { OptionbottlePageModule };
//# sourceMappingURL=optionbottle.module.js.map