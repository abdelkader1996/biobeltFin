(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["optionbottle-optionbottle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/optionbottle/optionbottle.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/optionbottle/optionbottle.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Bouteilles</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item (click)=\"onChooseStock(0);\">\n    <ion-icon name=\"albums\" color=\"primary\"></ion-icon>\n    <ion-label>Réception de Bouteilles</ion-label>\n  </ion-item>\n  <ion-item (click)=\"onChooseStock(1);\">\n    <ion-icon name=\"remove\" color=\"primary\"></ion-icon>\n    <ion-label>Retrait de Bouteilles</ion-label>\n  </ion-item>\n  \n  <ion-item (click)=\"onChooseStock(2);\">\n    <ion-icon name=\"exit\" color=\"primary\"></ion-icon>\n    Retour au dépôt\n  </ion-item>\n  <ion-item (click)=\"remRack();\">\n    <ion-icon name=\"train\" color=\"primary\"></ion-icon>\n    Retour au fournisseur\n  </ion-item>\n  \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/optionbottle/optionbottle-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/optionbottle/optionbottle-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OptionbottlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePageRoutingModule", function() { return OptionbottlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _optionbottle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optionbottle.page */ "./src/app/optionbottle/optionbottle.page.ts");




const routes = [
    {
        path: '',
        component: _optionbottle_page__WEBPACK_IMPORTED_MODULE_3__["OptionbottlePage"]
    }
];
let OptionbottlePageRoutingModule = class OptionbottlePageRoutingModule {
};
OptionbottlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OptionbottlePageRoutingModule);



/***/ }),

/***/ "./src/app/optionbottle/optionbottle.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.module.ts ***!
  \*****************************************************/
/*! exports provided: OptionbottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePageModule", function() { return OptionbottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _optionbottle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionbottle-routing.module */ "./src/app/optionbottle/optionbottle-routing.module.ts");
/* harmony import */ var _optionbottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./optionbottle.page */ "./src/app/optionbottle/optionbottle.page.ts");
/* harmony import */ var _retfournmodal_retfournmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../retfournmodal/retfournmodal.page */ "./src/app/retfournmodal/retfournmodal.page.ts");








let OptionbottlePageModule = class OptionbottlePageModule {
};
OptionbottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _optionbottle_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionbottlePageRoutingModule"],
        ],
        declarations: [_optionbottle_page__WEBPACK_IMPORTED_MODULE_6__["OptionbottlePage"], _retfournmodal_retfournmodal_page__WEBPACK_IMPORTED_MODULE_7__["RetfournmodalPage"]],
        entryComponents: [_retfournmodal_retfournmodal_page__WEBPACK_IMPORTED_MODULE_7__["RetfournmodalPage"]]
    })
], OptionbottlePageModule);



/***/ }),

/***/ "./src/app/optionbottle/optionbottle.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbmJvdHRsZS9vcHRpb25ib3R0bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/optionbottle/optionbottle.page.ts":
/*!***************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.page.ts ***!
  \***************************************************/
/*! exports provided: OptionbottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePage", function() { return OptionbottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _retfournmodal_retfournmodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../retfournmodal/retfournmodal.page */ "./src/app/retfournmodal/retfournmodal.page.ts");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");










let OptionbottlePage = class OptionbottlePage {
    constructor(upc3Service, storage, router, platform, modal, global, scan, ngZone, cd) {
        this.upc3Service = upc3Service;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.modal = modal;
        this.global = global;
        this.scan = scan;
        this.ngZone = ngZone;
        this.cd = cd;
        this.name = "arrow-dropright";
        this.isStock = false;
        this.global.checkMode();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    ionViewWillEnter() {
        this.storage.get("token").then(val => {
            this.token = val;
        });
    }
    onSynchro() {
        this.global.onSynchroB1B2(this.token);
    }
    onAddBottleCeint() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(['addbottleceint']);
        });
    }
    onChooseStock(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.setItem("adds", i);
            this.router.navigate(['choosestock']);
        });
    }
    remRack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var modal = yield this.modal.create({
                component: _retfournmodal_retfournmodal_page__WEBPACK_IMPORTED_MODULE_8__["RetfournmodalPage"],
            });
            modal.present();
        });
    }
    goStock() {
        if (!this.isStock) {
            this.name = "arrow-dropdown";
            this.isStock = true;
            this.upc3Service.getAllStock(localStorage.getItem("token")).subscribe(res => {
                this.stock = res.result;
            }, err => {
                alert("Erreur de Connexion");
            });
        }
        else {
            this.name = "arrow-dropright";
            this.isStock = false;
        }
    }
    getUpcStateConnexion() {
        this.platform.ready().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_9__["UPCModbus"](state => {
                this.ngZone.run(() => {
                    // Force refresh UI
                });
            });
            yield this.upc.client.connect();
        }));
    }
};
OptionbottlePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
OptionbottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-optionbottle',
        template: __webpack_require__(/*! raw-loader!./optionbottle.page.html */ "./node_modules/raw-loader/index.js!./src/app/optionbottle/optionbottle.page.html"),
        styles: [__webpack_require__(/*! ./optionbottle.page.scss */ "./src/app/optionbottle/optionbottle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], OptionbottlePage);



/***/ })

}]);
//# sourceMappingURL=optionbottle-optionbottle-module-es2015.js.map