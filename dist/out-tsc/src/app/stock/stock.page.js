import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { ModalController } from '@ionic/angular';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { GlobalService } from '../api/global.service';
let StockPage = class StockPage {
    constructor(storage, barcode, upcv3Service, modalService, global) {
        this.storage = storage;
        this.barcode = barcode;
        this.upcv3Service = upcv3Service;
        this.modalService = modalService;
        this.global = global;
        this.addStock = false;
        this.remStock = false;
        this.retStock = false;
        this.name = { name: "", id: 0 };
        this.header = [];
    }
    ngOnInit() {
        if (localStorage.getItem("adds") == "0") {
            this.addStock = true;
        } // 30 € livraison LS MCB 2,5 € 120 unité MCB triphasé 6 A MCCB
        else if (localStorage.getItem("adds") == "1") {
            this.remStock = true;
        }
        else if (localStorage.getItem("adds") == "2") {
            this.retStock = true;
        }
        this.storage.get("token").then(val => {
            this.token = val;
            this.storage.get("stockid").then(val => {
                this.name = JSON.parse(val);
                this.upcv3Service.getBottlesByStockId(this.name.id, this.token).subscribe(res => {
                    this.stock = res.result;
                    this.stock.sort((a, b) => {
                        if (a.rack < b.rack)
                            return -1;
                        if (a.rack > b.rack)
                            return 1;
                        return 0;
                    });
                    this.stock.forEach(item => {
                        if (!this.header.includes(item.rack)) {
                            this.header.push(item.rack);
                        }
                    });
                });
            });
        });
    }
    remRack() {
        this.barcode.scan().then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (res.text != '') {
                var text = res.text;
                this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (res.result.length > 0) {
                        var modal = yield this.modalService.create({
                            component: RackcontentPage,
                            componentProps: {
                                rack: text
                            }
                        });
                        modal.present();
                    }
                    else {
                        alert("Aucune bouteille est associée à ce Rack !");
                    }
                }));
                /*this.upcv3Service.removeRack(res.text,this.token).subscribe(res=>{
        
                })*/
            }
        }));
    }
    addRack() {
        this.barcode.scan().then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (res.text != "") {
                localStorage.setItem("rack", res.text);
                const modal = yield this.modalService.create({
                    component: AddbottlemodalPage,
                    componentProps: {
                        barcode: "",
                        stockRet: this.name,
                        mode: 1
                    }
                });
                modal.present();
            }
        }));
    }
    retRack() {
        this.barcode.scan().then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (res.text != "") {
                localStorage.setItem("rack", res.text);
                var modal = yield this.modalService.create({
                    component: AddbottlemodalPage,
                    componentProps: {
                        barcode: "",
                        stockRet: this.name,
                        mode: 2
                    }
                });
                modal.present();
            }
        }));
    }
    delBottle() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (code.text != '') {
                    var modal = yield this.modalService.create({
                        component: AddbottlemodalPage,
                        componentProps: {
                            barcode: code.text,
                            stockRet: this.name,
                            mode: 0
                        }
                    });
                    return yield modal.present();
                }
            }));
        });
    }
    addBottle() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (code.text != '') {
                    localStorage.setItem("rack", null);
                    var modal = yield this.modalService.create({
                        component: AddbottlemodalPage,
                        componentProps: {
                            barcode: code.text,
                            stockRet: this.name,
                            mode: 1
                        }
                    });
                    return yield modal.present();
                }
            }));
        });
    }
    retBottles() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (code.text != '') {
                    localStorage.setItem("rack", null);
                    var modal = yield this.modalService.create({
                        component: AddbottlemodalPage,
                        componentProps: {
                            barcode: code.text,
                            stockRet: this.name,
                            mode: 2
                        }
                    });
                    modal.present();
                }
            }));
        });
    }
};
StockPage = tslib_1.__decorate([
    Component({
        selector: 'app-stock',
        templateUrl: './stock.page.html',
        styleUrls: ['./stock.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, BarcodeScanner, Upcv3serviceService, ModalController, GlobalService])
], StockPage);
export { StockPage };
//# sourceMappingURL=stock.page.js.map