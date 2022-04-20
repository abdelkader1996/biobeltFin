import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
let CheckPage = class CheckPage {
    constructor(platform, loadingCTRL, global, ngZone, network, hotspot, cd) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.global = global;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.co2PresOutRef = [];
        this.co2PresInp1 = [];
        this.cos2PresInp2 = [];
        this.co2PresOutSet = [];
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            if (this.platform.is("ios")) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then((item) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loadingCTRL = yield this.loadingCTRL.create({
                        message: "Connection à l'UPC en cours...",
                        duration: 10000
                    });
                    loadingCTRL.present();
                    this.global.isBBAM = true;
                    this.platform.ready().then((readySource) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (readySource == 'cordova') {
                            this.upc = new UPCModbus(state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                            this.network.onConnect().subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                if (this.network.type === this.network.Connection.WIFI) {
                                    yield this.upc.client.connect();
                                    setTimeout(() => {
                                        this.ngZone.run(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                            //Read parameters for check 40271 40291
                                            for (var i = 40271; i < 40291; i += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(i).then(res => {
                                                    this.co2PresOutRef.push(res);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            // 40229 - 40249
                                            for (var j = 40229; j < 40249; j += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(j).then(res => {
                                                    this.co2PresInp1.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            for (var k = 40249; k < 40269; k += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(k).then(res => {
                                                    this.cos2PresInp2.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            for (var l = 40356; l < 40376; l += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(l).then(res => {
                                                    this.co2PresOutSet.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                        }));
                                    }, 5000);
                                }
                            }));
                        }
                    }));
                }));
            }
            else if (this.platform.is("android")) {
                this.hotspot.connectToWifi("BBAM", "BioBeltService").then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Connection à l'UPC en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.global.isBBAM = true;
                    this.platform.ready().then((readySource) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (readySource == 'cordova') {
                            this.upc = new UPCModbus(state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                        }
                        yield this.upc.client.connect();
                        setTimeout(() => {
                            //Read parameters for check 40271 40291
                            for (var i = 40271; i < 40291; i += 2) {
                                this.upc.client.getFloatFromHoldingRegister(i).then(res => {
                                    this.co2PresOutRef.push(res);
                                });
                            }
                            this.cd.detectChanges();
                            // 40229 - 40249
                            for (var j = 40229; j < 40249; j += 2) {
                                this.upc.client.getFloatFromHoldingRegister(j).then(res => {
                                    this.co2PresInp1.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                            for (var k = 40249; k < 40269; k += 2) {
                                this.upc.client.getFloatFromHoldingRegister(k).then(res => {
                                    this.cos2PresInp2.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                            for (var l = 40356; l < 40376; l += 2) {
                                this.upc.client.getFloatFromHoldingRegister(l).then(res => {
                                    this.co2PresOutSet.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                        }, 5000);
                    }));
                }));
            }
        });
    }
};
CheckPage = tslib_1.__decorate([
    Component({
        selector: 'app-check',
        templateUrl: './check.page.html',
        styleUrls: ['./check.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        LoadingController,
        GlobalService,
        NgZone,
        Network,
        Hotspot,
        ChangeDetectorRef])
], CheckPage);
export { CheckPage };
//# sourceMappingURL=check.page.js.map