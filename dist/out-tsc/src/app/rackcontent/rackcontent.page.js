import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Storage } from "@ionic/storage";
import { ModalController } from '@ionic/angular';
import { Code } from '../api/ApiResponse';
import { GlobalService } from '../api/global.service';
let RackcontentPage = class RackcontentPage {
    constructor(upcv3Service, storage, modal, global) {
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.modal = modal;
        this.global = global;
        this.designation = [];
        this.isMesser = [];
    }
    ngOnInit() {
        this.storage.get("token").then(val => {
            this.token = val;
            this.upcv3Service.getBottleFromRack(val, this.rack).subscribe(res => {
                this.rackContent = res.result;
                this.rackContent.forEach(item => {
                    if (item.bottleType.designation == 37.5) {
                        this.isMesser.push(true);
                        this.designation.push("37.5");
                    }
                    else {
                        this.isMesser.push(false);
                        this.designation.push("" + item.bottleType.designation);
                    }
                });
            });
        });
    }
    onClose() {
        this.modal.dismiss();
    }
    onRetourFourn() {
        this.upcv3Service.removeRack(this.rack, this.token).subscribe(res => {
            if (res.code === Code.BOTTLE_DELETED) {
                this.modal.dismiss();
            }
        });
    }
};
RackcontentPage = tslib_1.__decorate([
    Component({
        selector: 'app-rackcontent',
        templateUrl: './rackcontent.page.html',
        styleUrls: ['./rackcontent.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService, Storage, ModalController, GlobalService])
], RackcontentPage);
export { RackcontentPage };
//# sourceMappingURL=rackcontent.page.js.map