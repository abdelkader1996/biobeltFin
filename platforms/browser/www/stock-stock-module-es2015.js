(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{name.name}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <div *ngFor=\"let s of stock; let i = index;\">\n      \n\n      <div *ngIf=\"stock[i+1] != null\">\n\n      \n      <ion-item-divider sticky=\"true\" *ngIf=\"s.rack != stock[i+1].rack\">\n        <ion-label *ngIf=\"s.rack == '' || s.rack == null\">Bouteilles Non associés au rack</ion-label>\n        <ion-label *ngIf=\"s.rack != '' || s.rack != null\">{{s.rack}}</ion-label>\n      </ion-item-divider> \n      </div>\n    <ion-item> \n      <ion-label>{{s.bottleString}}</ion-label>\n      <ion-badge color=\"success\" *ngIf=\"s.state === 'FULL'\">Plein</ion-badge>\n      <ion-badge color=\"secondary\" *ngIf=\"s.state === 'IN_USE'\">Entamée</ion-badge>\n      <ion-badge color=\"danger\" *ngIf=\"s.state === 'EMPTY'\">Vide</ion-badge>\n    </ion-item>\n  </div>\n    \n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button *ngIf=\"addStock\" expand=\"block\" (click)=\"addBottle();\">\n    Réception de Bouteilles\n  </ion-button>\n  <ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retBottles();\">\n    Retour au dépôt\n  </ion-button>\n  <ion-button *ngIf=\"remStock\" color=\"danger\" expand=\"block\" (click)=\"delBottle();\">\n    Enlever une Bouteille\n</ion-button>\n<ion-button *ngIf=\"addStock\" expand=\"block\" (click)=\"addRack();\">\n    Ajouter/Sélectionner un Rack\n</ion-button>\n<ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retRack();\">\n  Sélectionner un Rack\n</ion-button>\n\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/stock/stock-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/stock/stock-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");




const routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
let StockPageRoutingModule = class StockPageRoutingModule {
};
StockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockPageRoutingModule);



/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");








let StockPageModule = class StockPageModule {
};
StockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"],
        ],
        entryComponents: [_addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__["AddbottlemodalPage"],],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"], _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__["AddbottlemodalPage"],]
    })
], StockPageModule);



/***/ }),

/***/ "./src/app/stock/stock.page.scss":
/*!***************************************!*\
  !*** ./src/app/stock/stock.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/stock/stock.page.ts":
/*!*************************************!*\
  !*** ./src/app/stock/stock.page.ts ***!
  \*************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");










let StockPage = class StockPage {
    constructor(storage, barcode, upcv3Service, modalService, global, alertController) {
        this.storage = storage;
        this.barcode = barcode;
        this.upcv3Service = upcv3Service;
        this.modalService = modalService;
        this.global = global;
        this.alertController = alertController;
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
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != '') {
                var text = res.text;
                this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.result.length > 0) {
                        var modal = yield this.modalService.create({
                            component: _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"],
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
            }
        }));
    }
    addRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                var text = res.text;
                this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.result.length == 0) {
                        this.presentAlertRack(text);
                    }
                    else {
                        localStorage.setItem("rack", text);
                        const modal = yield this.modalService.create({
                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
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
        }));
    }
    presentAlertRack(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Nouveau Rack',
                subHeader: '',
                message: 'Vous avez ajouter un nouveau rack ?',
                buttons: [{ text: 'Annuler', handler: () => { } }, { text: 'Confirmer',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            localStorage.setItem("rack", text);
                            const modal = yield this.modalService.create({
                                component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                componentProps: {
                                    barcode: "",
                                    stockRet: this.name,
                                    mode: 1
                                }
                            });
                            modal.present();
                        })
                    }],
            });
            yield alert.present();
        });
    }
    retRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                localStorage.setItem("rack", res.text);
                var modal = yield this.modalService.create({
                    component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (code.text != '') {
                    var modal = yield this.modalService.create({
                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (code.text != '') {
                    localStorage.setItem("rack", null);
                    var modal = yield this.modalService.create({
                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (code.text != '') {
                    localStorage.setItem("rack", null);
                    var modal = yield this.modalService.create({
                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
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
StockPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
StockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: __webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html"),
        styles: [__webpack_require__(/*! ./stock.page.scss */ "./src/app/stock/stock.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], StockPage);



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es2015.js.map