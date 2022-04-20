import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Upcv3serviceService } from './upcv3service.service';
let GlobalService = class GlobalService {
    constructor(platform, loadingCTRL, upcv3Service) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.upcv3Service = upcv3Service;
        this.B1 = [];
        this.B2 = [];
        this.designationB1 = [];
        this.designationB2 = [];
        this.ssid = "";
        this.isBBAM = false;
        this.proprietaire = "Bernard Dupont";
        this.objetIntervention = [];
        this.intervenants = [];
    }
    onSynchroB1B2(token) {
        if (localStorage.getItem("bottleB1")) {
            var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
            alert(JSON.stringify(jsonB1));
            jsonB1.endate = new Date().toISOString().substr(0, 16);
            if (this.platform.is("ios")) {
                WifiWizard2.iOSDisconnectNetwork("BBAM").then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Synchronisation avec le Serveur en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.upcv3Service.addBottleBelt(jsonB1, token).subscribe(res => {
                        loading.dismiss();
                    });
                }));
            }
            else {
                WifiWizard2.disconnect("BBAM").then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Synchronisation avec le Serveur en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.upcv3Service.addBottleBelt(jsonB1, token).subscribe(res => {
                        loading.dismiss();
                    });
                }));
            }
        }
        if (localStorage.getItem("bottleB2")) {
            var jsonB2 = JSON.parse(localStorage.getItem("bottleB2"));
            jsonB2.endate = new Date().toISOString().substr(0, 16);
            if (this.platform.is("ios")) {
                WifiWizard2.iOSDisconnectNetwork(("BBAM")).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Synchronisation avec le Serveur en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.upcv3Service.addBottleBelt(jsonB2, token).subscribe(res => {
                        loading.dismiss();
                    });
                }));
            }
            else {
                WifiWizard2.disconnect("BBAM").then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Synchronisation avec le Serveur en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.upcv3Service.addBottleBelt(jsonB2, token).subscribe(res => {
                        loading.dismiss();
                    });
                }));
            }
        }
    }
};
GlobalService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, LoadingController, Upcv3serviceService])
], GlobalService);
export { GlobalService };
//# sourceMappingURL=global.service.js.map