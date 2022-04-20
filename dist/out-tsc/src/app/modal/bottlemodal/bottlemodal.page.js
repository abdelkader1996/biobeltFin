import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Upcv3serviceService } from '../../api/upcv3service.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { GlobalService } from '../../api/global.service';
let BottlemodalPage = class BottlemodalPage {
    constructor(barcodeScanner, upc3service, storage, modal, global) {
        this.barcodeScanner = barcodeScanner;
        this.upc3service = upc3service;
        this.storage = storage;
        this.modal = modal;
        this.global = global;
        this.cpt = 0;
        this.bouteilles = [{
                'nom': 'Air liquide 22.68 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Air liquide 10.00 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Messer 37.50 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Air liquide 180.00 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Air liquide 20.00 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Air liquide 100.00 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            },
            {
                'nom': 'Air liquide 34.00 kg',
                'designation': [],
                'qty': '',
                'text': '',
                'cpt': 0
            }];
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.compareIfNotNull(this.global.B1) && this.res === 'B1') {
                this.bouteilles = this.global.B1;
            }
            if (this.compareIfNotNull(this.global.B2) && this.res === 'B2') {
                this.bouteilles = this.global.B2;
            }
            yield this.storage.get('token').then(val => this.token = val);
            yield this.upc3service.getAllBottles(this.token).subscribe(res => {
                this.listBottles = res.result;
            });
        });
    }
    compareIfNotNull(tab) {
        for (var i = 0; i < tab.length; i++) {
            if (tab[i].qty !== '') {
                return true;
            }
        }
        return false;
    }
    onChange(i) {
        if (this.bouteilles[i].qty === '' || parseInt(this.bouteilles[i].qty) - this.bouteilles[i].cpt === 0) {
            this.bouteilles[i].qty = '';
            return '';
        }
        else {
            return this.bouteilles[i].text = "(" + (parseInt(this.bouteilles[i].qty) - this.bouteilles[i].cpt) + " à scanner)";
        }
    }
    onBottleScan(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.barcodeScanner.scan().then(res => {
                this.bouteilles[i].designation.push(res["text"]);
                this.bouteilles[i].cpt++;
            }).catch(err => {
                alert(JSON.stringify(err));
            });
        });
    }
    onDismiss() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.res === 'B1') {
                this.global.B1 = this.bouteilles;
            }
            if (this.res === 'B2') {
                this.global.B2 = this.bouteilles;
            }
            yield this.modal.dismiss();
        });
    }
};
BottlemodalPage = tslib_1.__decorate([
    Component({
        selector: 'app-bottlemodal',
        templateUrl: './bottlemodal.page.html',
        styleUrls: ['./bottlemodal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [BarcodeScanner,
        Upcv3serviceService,
        Storage,
        ModalController,
        GlobalService])
], BottlemodalPage);
export { BottlemodalPage };
//# sourceMappingURL=bottlemodal.page.js.map