(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-check-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/check/check.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/check/check.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>check</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Mesure des pressions de sortie </h3>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid style=\"padding-top: 5%;\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n      <ion-col>Intensité</ion-col>\n      <ion-col>PE-B1</ion-col>\n      <ion-col>PE-B2</ion-col>\n      <ion-col>PS</ion-col>\n      <ion-col>PS-Ref</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let p of pres\" [ngClass]=\"{'bgred' : redBackground}\">\n      <ion-col *ngIf=\"!redBackground\">{{p.id}}</ion-col><ion-col *ngIf=\"redBackground\">-</ion-col>\n      <ion-col *ngIf=\"!redBackground\">{{p.peb1.toFixed(2)}}</ion-col><ion-col *ngIf=\"redBackground\">-</ion-col>\n      <ion-col *ngIf=\"!redBackground\">{{p.peb2.toFixed(2)}}</ion-col><ion-col *ngIf=\"redBackground\">-</ion-col>\n      <ion-col *ngIf=\"!redBackground\" >{{p.ps.toFixed(2)}}</ion-col><ion-col *ngIf=\"redBackground\">-</ion-col>\n      <ion-col *ngIf=\"!redBackground\">{{p.psref.toFixed(2)}}</ion-col><ion-col *ngIf=\"redBackground\">-</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/check/check-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/check/check-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CheckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageRoutingModule", function() { return CheckPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ "./src/app/check/check.module.ts":
/*!***************************************!*\
  !*** ./src/app/check/check.module.ts ***!
  \***************************************/
/*! exports provided: CheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-routing.module */ "./src/app/check/check-routing.module.ts");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");







let CheckPageModule = class CheckPageModule {
};
CheckPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _check_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckPageRoutingModule"]
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]]
    })
], CheckPageModule);



/***/ }),

/***/ "./src/app/check/check.page.scss":
/*!***************************************!*\
  !*** ./src/app/check/check.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrL2NoZWNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/check/check.page.ts":
/*!*************************************!*\
  !*** ./src/app/check/check.page.ts ***!
  \*************************************/
/*! exports provided: CheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPage", function() { return CheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CheckPage = class CheckPage {
    constructor(platform, loadingCTRL, global, ngZone, network, hotspot, cd, router, storage) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.global = global;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.router = router;
        this.storage = storage;
        this.co2PresOutRef = [];
        this.co2PresInp1 = [];
        this.cos2PresInp2 = [];
        this.co2PresOutSet = [];
        this.textdiff = "Start";
        this.colordif = "primary";
        this.redBackground = false;
        this.pres = [{
                id: 1, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 2, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 3, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 4, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 5, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 6, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 7, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 8, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 9, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }, {
                id: 10, peb1: 0, peb2: 0, ps: 0, psref: 0,
            }];
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
        this.platform.ready().then(() => {
            //this.global.onConnectWiFi().then(res=>{
            this.global.upcmodbus.client.readHoldingRegisters(40271, 20).then(res => {
                for (var i = 0; i < this.pres.length; i++) {
                    this.pres[i].psref = this.global.upcmodbus.client.registerToFloat([res[i], res[i + 1]]);
                    this.redBackground = false;
                    this.colordif = "primary";
                    this.cd.detectChanges();
                }
            }).catch(err => {
                this.redBackground = true;
                this.colordif = "danger";
                this.cd.detectChanges();
            });
            this.global.upcmodbus.client.readHoldingRegisters(40229, 20).then(res => {
                this.pres[0].peb1 = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                this.pres[1].peb1 = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                this.pres[2].peb1 = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                this.pres[3].peb1 = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                this.pres[4].peb1 = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                this.pres[5].peb1 = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                this.pres[6].peb1 = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                this.pres[7].peb1 = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                this.pres[8].peb1 = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                this.pres[9].peb1 = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                this.cd.detectChanges();
            });
            this.global.upcmodbus.client.readHoldingRegisters(40249, 20).then(res => {
                this.pres[0].peb2 = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                this.pres[1].peb2 = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                this.pres[2].peb2 = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                this.pres[3].peb2 = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                this.pres[4].peb2 = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                this.pres[5].peb2 = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                this.pres[6].peb2 = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                this.pres[7].peb2 = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                this.pres[8].peb2 = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                this.pres[9].peb2 = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                this.cd.detectChanges();
            });
            this.global.upcmodbus.client.readHoldingRegisters(40356, 20).then(res => {
                this.pres[0].ps = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                this.pres[1].ps = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                this.pres[2].ps = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                this.pres[3].ps = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                this.pres[4].ps = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                this.pres[5].ps = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                this.pres[6].ps = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                this.pres[7].ps = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                this.pres[8].ps = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                this.pres[9].ps = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                this.cd.detectChanges();
            });
            this.global.interval = setInterval(() => {
                this.global.upcmodbus.client.getIntFromHoldingRegister(40168, 1).then(res => {
                    this.redBackground = false;
                    this.cd.detectChanges();
                }).catch(err => {
                    this.redBackground = true;
                    this.colordif = "danger";
                    this.cd.detectChanges();
                });
                if (this.redBackground) {
                    clearInterval(this.global.interval);
                    this.ngOnInit();
                }
            }, 500);
            //})
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        event.target.complete();
    }
    startstop() {
        var interval;
        if (this.textdiff == "Start") {
            this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 3).then(res => {
                this.textdiff = "Stop";
                this.colordif = "danger";
                interval = setInterval(() => {
                    this.global.upcmodbus.client.readHoldingRegisters(40229, 20).then(res => {
                        this.pres[0].peb1 = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                        this.pres[1].peb1 = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                        this.pres[2].peb1 = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                        this.pres[3].peb1 = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                        this.pres[4].peb1 = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                        this.pres[5].peb1 = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                        this.pres[6].peb1 = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                        this.pres[7].peb1 = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                        this.pres[8].peb1 = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                        this.pres[9].peb1 = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                        this.cd.detectChanges();
                    });
                    this.global.upcmodbus.client.readHoldingRegisters(40249, 20).then(res => {
                        this.pres[0].peb2 = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                        this.pres[1].peb2 = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                        this.pres[2].peb2 = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                        this.pres[3].peb2 = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                        this.pres[4].peb2 = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                        this.pres[5].peb2 = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                        this.pres[6].peb2 = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                        this.pres[7].peb2 = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                        this.pres[8].peb2 = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                        this.pres[9].peb2 = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                        this.cd.detectChanges();
                    });
                    this.global.upcmodbus.client.readHoldingRegisters(40356, 20).then(res => {
                        this.pres[0].ps = this.global.upcmodbus.client.registerToFloat([res[0], res[1]]);
                        this.pres[1].ps = this.global.upcmodbus.client.registerToFloat([res[2], res[3]]);
                        this.pres[2].ps = this.global.upcmodbus.client.registerToFloat([res[4], res[5]]);
                        this.pres[3].ps = this.global.upcmodbus.client.registerToFloat([res[6], res[7]]);
                        this.pres[4].ps = this.global.upcmodbus.client.registerToFloat([res[8], res[9]]);
                        this.pres[5].ps = this.global.upcmodbus.client.registerToFloat([res[10], res[11]]);
                        this.pres[6].ps = this.global.upcmodbus.client.registerToFloat([res[12], res[13]]);
                        this.pres[7].ps = this.global.upcmodbus.client.registerToFloat([res[14], res[15]]);
                        this.pres[8].ps = this.global.upcmodbus.client.registerToFloat([res[16], res[17]]);
                        this.pres[9].ps = this.global.upcmodbus.client.registerToFloat([res[18], res[19]]);
                        this.cd.detectChanges();
                    });
                }, 500);
            });
        }
        else {
            this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 0).then(res => {
                this.textdiff = "Start";
                this.colordif = "primary";
                clearInterval(interval);
            });
        }
    }
    goToNextPage() {
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
CheckPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
CheckPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check',
        template: __webpack_require__(/*! raw-loader!./check.page.html */ "./node_modules/raw-loader/index.js!./src/app/check/check.page.html"),
        styles: [__webpack_require__(/*! ./check.page.scss */ "./src/app/check/check.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], CheckPage);



/***/ })

}]);
//# sourceMappingURL=check-check-module-es2015.js.map