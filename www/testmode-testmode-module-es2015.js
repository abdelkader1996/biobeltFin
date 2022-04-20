(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testmode-testmode-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/testmode/testmode.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testmode/testmode.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list *ngFor=\"let w of wifinfo\">\n    <ion-item (click)=\"onConnect(w);\" button>\n      <ion-icon name=\"wifi\"></ion-icon><ion-label>{{w}}</ion-label>\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/testmode/testmode-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/testmode/testmode-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TestmodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmodePageRoutingModule", function() { return TestmodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _testmode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testmode.page */ "./src/app/testmode/testmode.page.ts");




const routes = [
    {
        path: '',
        component: _testmode_page__WEBPACK_IMPORTED_MODULE_3__["TestmodePage"]
    }
];
let TestmodePageRoutingModule = class TestmodePageRoutingModule {
};
TestmodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestmodePageRoutingModule);



/***/ }),

/***/ "./src/app/testmode/testmode.module.ts":
/*!*********************************************!*\
  !*** ./src/app/testmode/testmode.module.ts ***!
  \*********************************************/
/*! exports provided: TestmodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmodePageModule", function() { return TestmodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _testmode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testmode-routing.module */ "./src/app/testmode/testmode-routing.module.ts");
/* harmony import */ var _testmode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testmode.page */ "./src/app/testmode/testmode.page.ts");







let TestmodePageModule = class TestmodePageModule {
};
TestmodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _testmode_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestmodePageRoutingModule"]
        ],
        declarations: [_testmode_page__WEBPACK_IMPORTED_MODULE_6__["TestmodePage"]]
    })
], TestmodePageModule);



/***/ }),

/***/ "./src/app/testmode/testmode.page.scss":
/*!*********************************************!*\
  !*** ./src/app/testmode/testmode.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rtb2RlL3Rlc3Rtb2RlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/testmode/testmode.page.ts":
/*!*******************************************!*\
  !*** ./src/app/testmode/testmode.page.ts ***!
  \*******************************************/
/*! exports provided: TestmodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmodePage", function() { return TestmodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");




let TestmodePage = class TestmodePage {
    constructor(global, platform, alrtContr, toastCtrl) {
        this.global = global;
        this.platform = platform;
        this.alrtContr = alrtContr;
        this.toastCtrl = toastCtrl;
        this.wifinfo = [];
        this.global.checkMode();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.wifinfo.push(localStorage.getItem("ssid"));
            if (this.platform.is("android")) {
                WifiWizard2.scan().then(res => {
                    //alert(JSON.stringify(res));
                    res.forEach((item) => {
                        if (item.SSID.includes("BBAM")) {
                            this.wifinfo.push(item.SSID);
                        }
                    });
                });
            }
            else if (this.platform.is("ios")) {
                //this.wifinfo = ["BBAM","BBAM2","BBAM3","BBAM4","BBAM5","BBAM6","BBAM7","BBAM8","BBAM9"];
                WifiWizard2.getConnectedSSID().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (!res.includes("BBAM")) {
                        localStorage.removeItem("isConnected");
                        this.presentAlert();
                    }
                    else {
                        let toast = yield this.toastCtrl.create({
                            message: "Vous êtes déjà connecté à l'UPC",
                            duration: 3000,
                            position: "middle"
                        });
                        toast.present();
                    }
                }));
            }
        });
    }
    onConnect(ssid) {
        localStorage.setItem("ssid", ssid);
        localStorage.removeItem("isConnected");
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alrt = yield this.alrtContr.create({
                cssClass: 'my-custom-class',
                header: 'Connexion',
                message: "Veuillez  vous connecter à l'UPC via le WIFi",
                buttons: [{ text: 'OK', handler: () => {
                            this.global.upcmodbus.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                localStorage.setItem("upcname", res);
                                alert("UPC: " + res);
                            }).catch(err => {
                                this.representAlert();
                            });
                        } }]
            });
            yield alrt.present();
            const { role } = yield alrt.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    representAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alrt = yield this.alrtContr.create({
                cssClass: 'my-custom-class',
                header: 'Connexion',
                message: "Veuillez  vous connecter à l'UPC via le WIFi",
                buttons: [{ text: 'OK', handler: () => {
                            this.global.upcmodbus.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                localStorage.setItem("upcname", res);
                            }).catch(err => {
                                this.representAlert();
                            });
                        } }, { text: "Annuler" }]
            });
            yield alrt.present();
            const { role } = yield alrt.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
TestmodePage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
TestmodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testmode',
        template: __webpack_require__(/*! raw-loader!./testmode.page.html */ "./node_modules/raw-loader/index.js!./src/app/testmode/testmode.page.html"),
        styles: [__webpack_require__(/*! ./testmode.page.scss */ "./src/app/testmode/testmode.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], TestmodePage);



/***/ })

}]);
//# sourceMappingURL=testmode-testmode-module-es2015.js.map