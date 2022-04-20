(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["removebottle-removebottle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/removebottle/removebottle.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/removebottle/removebottle.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-title>Installation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"text-align: center;\">Enlever des bouteilles</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        \n      <h1 style=\"text-align: center;\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\">\n          B2\n        </h1>  \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB1();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Enlever une Bouteille à B1\n          </ion-item>\n          <div *ngFor=\"let b1 of global.B1;let i = index;\">\n          <ion-item  *ngIf=\"global.B1.length > 0\">\n            <ion-label>{{b1.designation === 0 ? b1.marque: b1.marque+\" \"+b1.designation.toFixed()+\" kg\"}}</ion-label>\n            <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b1.marque === 'Air liquide'\" (ionChange)=\"setDesignationB1(i,$event);\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n              \n            </ion-select>\n            \n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB2();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Enlever une Bouteille à B2\n          </ion-item>\n          <div *ngFor=\"let b2 of global.B2;let i = index;\">\n            <ion-item  *ngIf=\"global.B2.length > 0\"> \n              <ion-label>{{b2.designation === 0 ? b2.marque: b2.marque+' '+b2.designation.toFixed()+' kg'}}</ion-label>\n              <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b2.marque === 'Air liquide'\" (ionChange)=\"setDesignationB2(i,$event);\">\n                <ion-select-option value=\"10\">10 kg</ion-select-option>\n                <ion-select-option value=\"20\">20 kg</ion-select-option>\n                <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n                <ion-select-option value=\"34\">34 kg</ion-select-option>\n                \n              </ion-select>\n              \n            </ion-item>\n          </div>\n        </ion-list>\n        <ion-button color=\"danger\" (click)=\"deleteB2();\" size=\"block\">\n          Tout Effacer\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button size=\"block\" color=\"primary\" (click)=\"addToBelt();\"> Continuer</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/removebottle/removebottle-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/removebottle/removebottle-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RemovebottlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovebottlePageRoutingModule", function() { return RemovebottlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _removebottle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removebottle.page */ "./src/app/removebottle/removebottle.page.ts");




const routes = [
    {
        path: '',
        component: _removebottle_page__WEBPACK_IMPORTED_MODULE_3__["RemovebottlePage"]
    }
];
let RemovebottlePageRoutingModule = class RemovebottlePageRoutingModule {
};
RemovebottlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RemovebottlePageRoutingModule);



/***/ }),

/***/ "./src/app/removebottle/removebottle.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/removebottle/removebottle.module.ts ***!
  \*****************************************************/
/*! exports provided: RemovebottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovebottlePageModule", function() { return RemovebottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _removebottle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removebottle-routing.module */ "./src/app/removebottle/removebottle-routing.module.ts");
/* harmony import */ var _removebottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removebottle.page */ "./src/app/removebottle/removebottle.page.ts");







let RemovebottlePageModule = class RemovebottlePageModule {
};
RemovebottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _removebottle_routing_module__WEBPACK_IMPORTED_MODULE_5__["RemovebottlePageRoutingModule"]
        ],
        declarations: [_removebottle_page__WEBPACK_IMPORTED_MODULE_6__["RemovebottlePage"]]
    })
], RemovebottlePageModule);



/***/ }),

/***/ "./src/app/removebottle/removebottle.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/removebottle/removebottle.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZWJvdHRsZS9yZW1vdmVib3R0bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/removebottle/removebottle.page.ts":
/*!***************************************************!*\
  !*** ./src/app/removebottle/removebottle.page.ts ***!
  \***************************************************/
/*! exports provided: RemovebottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovebottlePage", function() { return RemovebottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let RemovebottlePage = class RemovebottlePage {
    constructor(upc3service, storage, global, barcode) {
        this.upc3service = upc3service;
        this.storage = storage;
        this.global = global;
        this.barcode = barcode;
        this.isNotScanned = true;
        this.bottle = {
            name: '',
            designation: [],
            brand: [],
            barcodes: [],
            bottleType: [],
            stock: '',
            date: new Date().toISOString().substring(0, 10)
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => this.token = val);
            yield this.upc3service.getAllBottleTypes(this.token).subscribe(res => {
                this.listBottles = res.result;
                alert(JSON.stringify(this.listBottles));
            });
            yield this.upc3service.getSites(this.token).subscribe(res => {
                switch (res.code) {
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_4__["Code"].SITE_RECOVERED:
                        res.result.forEach(json => {
                            if (json.name === this.global.upc3.upcNameId) {
                                this.sites = json;
                                this.bottle.name = json.name;
                                if (json.stock !== null) {
                                    this.bottle.stock = json.stock.id;
                                }
                            }
                        });
                        break;
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_4__["Code"].UNAUTHORIZED:
                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                        break;
                }
            });
        });
    }
    onScanBarCodeB1() {
        this.barcode.scan().then(res => {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (this.global.B1.length > 0) {
                this.global.B1.forEach(item => {
                    if (item['barcode'] === res['text']) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (this.global.B2.length > 0) {
                this.global.B2.forEach(item => {
                    if (item['barcode'] === res["text"]) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && this.isNotScanned) {
                if (designationMesser === 37.5) {
                    this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    this.global.designationB1.push(designationMesser);
                }
                else {
                    this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    this.global.designationB1.push(0);
                }
            }
            else if (!this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            this.isNotScanned = true;
        })
            .catch(err => {
            alert(JSON.stringify(err));
        });
    }
    onScanBarCodeB2() {
        this.barcode.scan().then(res => {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (this.global.B1.length > 0) {
                this.global.B1.forEach(item => {
                    if (item['barcode'] === res['text']) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (this.global.B2.length > 0) {
                this.global.B2.forEach(item => {
                    if (item['barcode'] === res["text"]) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && this.isNotScanned) {
                if (designationMesser === 37.5) {
                    this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    this.global.designationB2.push(designationMesser);
                }
                else {
                    this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    this.global.designationB2.push(0);
                }
            }
            else if (!this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            this.isNotScanned = true;
        })
            .catch(err => {
            alert(JSON.stringify(err));
        });
    }
    setDesignationB1(i, $event) {
        this.global.designationB1[i] = $event.target.value;
    }
    setDesignationB2(i, $event) {
        this.global.designationB2[i] = $event.target.value;
    }
    deleteB1() {
        this.global.B1 = [];
        this.global.designationB1 = [];
    }
    deleteB2() {
        this.global.B2 = [];
        this.global.designationB2 = [];
    }
    addBottleId() {
        for (var i = 0; i < Object.keys(this.global.B1).length; i++) {
            for (var j = 0; j < Object.keys(this.listBottles).length; j++) {
                if (this.listBottles[j].brand === this.global.B1[i].marque && this.listBottles[j].designation == this.global.designationB1[i]) {
                    this.bottle.bottleType.push(this.listBottles[j].id);
                    break;
                }
            }
        }
        for (var i = 0; i < Object.keys(this.global.B2).length; i++) {
            for (var j = 0; j < Object.keys(this.listBottles).length; j++) {
                if (this.listBottles[j].brand === this.global.B2[i].marque && this.listBottles[j].designation == this.global.designationB2[i]) {
                    this.bottle.bottleType.push(this.listBottles[j].id);
                    break;
                }
            }
        }
    }
    addToBelt() {
        this.global.B1.forEach(item => {
            this.bottle.brand.push(item.marque);
            this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB1.forEach(item => {
            this.bottle.designation.push(item);
        });
        this.global.B2.forEach(item => {
            this.bottle.brand.push(item.marque);
            this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB2.forEach(item => {
            this.bottle.designation.push(item);
        });
        this.addBottleId();
        this.upc3service.addToDeStock(this.bottle, this.token).subscribe(res => {
            if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_4__["Code"].BOTTLE_CREATED) {
                alert('Bouteille ajouté au stock !');
            }
            else {
                alert('Erreur lors du rajout de la bouteille au stock !');
            }
        });
    }
};
RemovebottlePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] }
];
RemovebottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-removebottle',
        template: __webpack_require__(/*! raw-loader!./removebottle.page.html */ "./node_modules/raw-loader/index.js!./src/app/removebottle/removebottle.page.html"),
        styles: [__webpack_require__(/*! ./removebottle.page.scss */ "./src/app/removebottle/removebottle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]])
], RemovebottlePage);



/***/ })

}]);
//# sourceMappingURL=removebottle-removebottle-module-es2015.js.map