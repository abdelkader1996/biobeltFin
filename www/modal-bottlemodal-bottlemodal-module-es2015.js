(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-bottlemodal-bottlemodal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/bottlemodal/bottlemodal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/bottlemodal/bottlemodal.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-title>Bouteilles</ion-title>\n    <ion-buttons slot=\"end\"><ion-button fill=\"clear\" size=\"default\" (click)=\"onDismiss();\"><ion-label>Finis</ion-label></ion-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item *ngFor=\"let bottle of listBottles;let i=index;\"><ion-label>{{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}</ion-label><ion-label color=\"danger\" [innerHtml]=\"onChange(i)\"></ion-label><ion-input slot=\"end\" type=\"tel\" placeholder=\"Quantité\" [(ngModel)]=\"bouteilles[i].qty\"></ion-input><ion-button color=\"primary\" fill=\"clear\" size=\"default\" slot=\"end\" (click)=\"onBottleScan(i);\"><ion-icon name=\"barcode\"></ion-icon></ion-button></ion-item>\n  </ion-list>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/modal/bottlemodal/bottlemodal-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modal/bottlemodal/bottlemodal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BottlemodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlemodalPageRoutingModule", function() { return BottlemodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bottlemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottlemodal.page */ "./src/app/modal/bottlemodal/bottlemodal.page.ts");




const routes = [
    {
        path: '',
        component: _bottlemodal_page__WEBPACK_IMPORTED_MODULE_3__["BottlemodalPage"]
    }
];
let BottlemodalPageRoutingModule = class BottlemodalPageRoutingModule {
};
BottlemodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BottlemodalPageRoutingModule);



/***/ }),

/***/ "./src/app/modal/bottlemodal/bottlemodal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal/bottlemodal/bottlemodal.module.ts ***!
  \*********************************************************/
/*! exports provided: BottlemodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlemodalPageModule", function() { return BottlemodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottlemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottlemodal-routing.module */ "./src/app/modal/bottlemodal/bottlemodal-routing.module.ts");






let BottlemodalPageModule = class BottlemodalPageModule {
};
BottlemodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bottlemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["BottlemodalPageRoutingModule"]
        ],
        declarations: []
    })
], BottlemodalPageModule);



/***/ }),

/***/ "./src/app/modal/bottlemodal/bottlemodal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal/bottlemodal/bottlemodal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL2JvdHRsZW1vZGFsL2JvdHRsZW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modal/bottlemodal/bottlemodal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal/bottlemodal/bottlemodal.page.ts ***!
  \*******************************************************/
/*! exports provided: BottlemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlemodalPage", function() { return BottlemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/global.service */ "./src/app/api/global.service.ts");







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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.compareIfNotNull(this.global.B1) && this.res === 'B1') {
                this.bouteilles = this.global.B1;
            }
            if (this.compareIfNotNull(this.global.B2) && this.res === 'B2') {
                this.bouteilles = this.global.B2;
            }
            yield this.storage.get('token').then(val => this.token = val);
            yield this.upc3service.getAllBottleTypes(this.token).subscribe(res => {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcodeScanner.scan().then(res => {
                this.bouteilles[i].designation.push(res["text"]);
                this.bouteilles[i].cpt++;
            }).catch(err => {
                alert(JSON.stringify(err));
            });
        });
    }
    onDismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
BottlemodalPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_3__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }
];
BottlemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottlemodal',
        template: __webpack_require__(/*! raw-loader!./bottlemodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/modal/bottlemodal/bottlemodal.page.html"),
        styles: [__webpack_require__(/*! ./bottlemodal.page.scss */ "./src/app/modal/bottlemodal/bottlemodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
        _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_3__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
], BottlemodalPage);



/***/ })

}]);
//# sourceMappingURL=modal-bottlemodal-bottlemodal-module-es2015.js.map