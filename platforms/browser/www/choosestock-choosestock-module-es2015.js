(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choosestock-choosestock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/choosestock/choosestock.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choosestock/choosestock.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-title>Choisir un dépôt</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let s of stock\" (click)=\"goToStock(s);\">\n        {{s.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/choosestock/choosestock-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/choosestock/choosestock-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChoosestockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPageRoutingModule", function() { return ChoosestockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choosestock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choosestock.page */ "./src/app/choosestock/choosestock.page.ts");




const routes = [
    {
        path: '',
        component: _choosestock_page__WEBPACK_IMPORTED_MODULE_3__["ChoosestockPage"]
    }
];
let ChoosestockPageRoutingModule = class ChoosestockPageRoutingModule {
};
ChoosestockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoosestockPageRoutingModule);



/***/ }),

/***/ "./src/app/choosestock/choosestock.module.ts":
/*!***************************************************!*\
  !*** ./src/app/choosestock/choosestock.module.ts ***!
  \***************************************************/
/*! exports provided: ChoosestockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPageModule", function() { return ChoosestockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choosestock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choosestock-routing.module */ "./src/app/choosestock/choosestock-routing.module.ts");
/* harmony import */ var _choosestock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choosestock.page */ "./src/app/choosestock/choosestock.page.ts");







let ChoosestockPageModule = class ChoosestockPageModule {
};
ChoosestockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choosestock_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoosestockPageRoutingModule"]
        ],
        declarations: [_choosestock_page__WEBPACK_IMPORTED_MODULE_6__["ChoosestockPage"]]
    })
], ChoosestockPageModule);



/***/ }),

/***/ "./src/app/choosestock/choosestock.page.scss":
/*!***************************************************!*\
  !*** ./src/app/choosestock/choosestock.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZXN0b2NrL2Nob29zZXN0b2NrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/choosestock/choosestock.page.ts":
/*!*************************************************!*\
  !*** ./src/app/choosestock/choosestock.page.ts ***!
  \*************************************************/
/*! exports provided: ChoosestockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPage", function() { return ChoosestockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");









let ChoosestockPage = class ChoosestockPage {
    constructor(upc3Service, storage, geolocation, router, global, platform, ngZone, cd) {
        this.upc3Service = upc3Service;
        this.storage = storage;
        this.geolocation = geolocation;
        this.router = router;
        this.global = global;
        this.platform = platform;
        this.ngZone = ngZone;
        this.cd = cd;
        this.stock = [];
        this.lonlat = [{ lat: 43.6667, lon: 7.15 }, { lat: 42.0396, lon: 9.01289 }, { lat: 43.6107, lon: 3.8767 }];
    }
    ngOnInit() {
        this.getUpcStateConnexion();
        this.storage.get("token").then(val => {
            this.upc3Service.getAllStock(val).subscribe(res => {
                var stock = res.result;
                this.geolocation.getCurrentPosition().then(pos => {
                    this.lonlat.forEach((item, index) => {
                        if (this.getDistanceFromLatLonInKm(pos.coords.latitude, pos.coords.longitude, item.lat, item.lon) < 20) {
                            this.stock.push(stock[index]);
                        }
                    });
                });
            });
        });
    }
    goToStock(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.set("stockid", JSON.stringify(id));
            this.router.navigate(['stock']);
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    getUpcStateConnexion() {
        this.platform.ready().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__["UPCModbus"](state => {
                this.ngZone.run(() => {
                    // Force refresh UI
                });
            });
            yield this.upc.client.connect();
        }));
    }
};
ChoosestockPage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ChoosestockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choosestock',
        template: __webpack_require__(/*! raw-loader!./choosestock.page.html */ "./node_modules/raw-loader/index.js!./src/app/choosestock/choosestock.page.html"),
        styles: [__webpack_require__(/*! ./choosestock.page.scss */ "./src/app/choosestock/choosestock.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ChoosestockPage);



/***/ })

}]);
//# sourceMappingURL=choosestock-choosestock-module-es2015.js.map