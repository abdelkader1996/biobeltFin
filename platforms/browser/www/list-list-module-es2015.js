(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Visite Technique\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event);\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n\n  </ion-refresher>\n  <ion-list>\n    <ion-item>\n      Prog 1 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program1.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 1 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program1.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 1 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program1.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 1 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program1.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 2 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program2.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 2 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program2.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 2 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program2.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 2 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program2.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 3 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program3.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 3 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program3.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 3 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program3.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 3 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program3.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 4 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program4.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 4 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program4.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 4 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program4.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 4 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program4.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 5 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program5.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 5 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program5.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 5 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program5.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 5 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program5.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 6 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program6.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 6 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program6.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 6 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program6.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 6 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program6.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 7 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program7.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 7 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program7.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 7 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program7.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 7 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program7.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 8 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program8.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 8 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program8.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 8 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program8.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 8 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program8.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 9 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program9.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 9 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program9.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 9 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program9.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 9 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program9.intensity\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 10 Début :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program10.start\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 10 Fin :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program10.end\" ></ion-input>\n\n    </ion-item>\n    <ion-item>\n      Prog 10 DaysCode :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program10.daysCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      Prog 10 Intensité :\n      <ion-input *ngIf=\"upc\" [(ngModel)]=\"upc.diffusions.diffCo2Program10.intensity\"></ion-input>\n\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");






let ListPage = class ListPage {
    constructor(platform, ngZone, network, global) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.network = network;
        this.global = global;
        this.pieges = 0;
        this.uuid = "";
        this.name = "";
        this.upcMode = "";
        this.upcStatus = "";
        this.date = new Date();
        this.isBBAM = false;
        this.items = [];
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(res => {
                    this.isBBAM = true;
                    this.platform.ready().then(readySource => {
                        if (readySource == 'cordova') {
                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__["UPCModbus"](state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                            this.network.onConnect().subscribe(() => {
                                if (this.network.type === this.network.Connection.WIFI) {
                                    this.upc.reconnect();
                                }
                            });
                        }
                    });
                }).catch(err => {
                    alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
                });
            }
        });
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
    ngOnInit() {
        this.interval = setInterval(() => {
            this.upc.client.connect();
            this.readDiffusionParameters();
        }, 5000);
    }
    doRefresh($event) {
        this.interval = setInterval(() => {
            this.upc.client.connect();
            this.readDiffusionParameters();
            $event.target.complete();
        }, 5000);
    }
    readDiffusionParameters() {
        this.upc.client.getIntFromHoldingRegister(40072, 2).then(res => {
            this.upc.diffusions.diffCo2Program1.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40074, 2).then(res => {
            this.upc.diffusions.diffCo2Program1.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40076, 1).then(res => {
            this.upc.diffusions.diffCo2Program1.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40077, 1).then(res => {
            this.upc.diffusions.diffCo2Program1.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40078, 2).then(res => {
            this.upc.diffusions.diffCo2Program2.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40080, 2).then(res => {
            this.upc.diffusions.diffCo2Program2.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40082, 1).then(res => {
            this.upc.diffusions.diffCo2Program2.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40083, 1).then(res => {
            this.upc.diffusions.diffCo2Program2.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40084, 2).then(res => {
            this.upc.diffusions.diffCo2Program3.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40086, 2).then(res => {
            this.upc.diffusions.diffCo2Program3.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40088, 1).then(res => {
            this.upc.diffusions.diffCo2Program3.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40089, 1).then(res => {
            this.upc.diffusions.diffCo2Program3.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40090, 2).then(res => {
            this.upc.diffusions.diffCo2Program4.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40092, 2).then(res => {
            this.upc.diffusions.diffCo2Program4.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40094, 1).then(res => {
            this.upc.diffusions.diffCo2Program4.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40095, 1).then(res => {
            this.upc.diffusions.diffCo2Program4.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40096, 2).then(res => {
            this.upc.diffusions.diffCo2Program5.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40098, 2).then(res => {
            this.upc.diffusions.diffCo2Program5.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40100, 1).then(res => {
            this.upc.diffusions.diffCo2Program5.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40101, 1).then(res => {
            this.upc.diffusions.diffCo2Program5.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40102, 2).then(res => {
            this.upc.diffusions.diffCo2Program6.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40104, 2).then(res => {
            this.upc.diffusions.diffCo2Program6.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40106, 1).then(res => {
            this.upc.diffusions.diffCo2Program6.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40107, 1).then(res => {
            this.upc.diffusions.diffCo2Program6.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40108, 2).then(res => {
            this.upc.diffusions.diffCo2Program7.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40110, 2).then(res => {
            this.upc.diffusions.diffCo2Program7.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40112, 1).then(res => {
            this.upc.diffusions.diffCo2Program7.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40113, 1).then(res => {
            this.upc.diffusions.diffCo2Program7.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40114, 2).then(res => {
            this.upc.diffusions.diffCo2Program8.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40116, 2).then(res => {
            this.upc.diffusions.diffCo2Program8.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40118, 1).then(res => {
            this.upc.diffusions.diffCo2Program8.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40119, 1).then(res => {
            this.upc.diffusions.diffCo2Program8.intensity = res;
        });
        this.upc.client.getIntFromHoldingRegister(40120, 2).then(res => {
            this.upc.diffusions.diffCo2Program9.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40122, 2).then(res => {
            this.upc.diffusions.diffCo2Program9.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40124, 1).then(res => {
            this.upc.diffusions.diffCo2Program9.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40125, 1).then(res => {
            this.upc.diffusions.diffCo2Program9.intensity;
        });
        this.upc.client.getIntFromHoldingRegister(40126, 2).then(res => {
            this.upc.diffusions.diffCo2Program10.start = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40128, 2).then(res => {
            this.upc.diffusions.diffCo2Program10.end = this.secondToTimeString(res);
        });
        this.upc.client.getIntFromHoldingRegister(40130, 1).then(res => {
            this.upc.diffusions.diffCo2Program10.daysCode = res;
        });
        this.upc.client.getIntFromHoldingRegister(40131, 1).then(res => {
            this.upc.diffusions.diffCo2Program10.intensity = res;
        });
    }
    secondToTimeString(seconds) {
        var date = new Date(0);
        date.setSeconds(seconds); // specify value for SECONDS here
        var timeString = date.toISOString().substr(11, 8);
        return timeString;
    }
    readGeneralParameters() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                this.name = res.replace(/[^a-zA-Z0-9]+/g, "");
            });
            this.upc.client.getIntFromHoldingRegister(40015, 1).then(res => {
                this.upc.general.upcTrapNum = res;
                this.pieges = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40016).then(res => {
                //alert(res);
                this.upc.general.co2FlowRefTrap = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40020).then(res => {
                //alert(res)
                this.upc.general.co2FlowRefNom = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40271).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef1 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40273).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef2 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40275).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef3 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40277).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef4 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40279).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef5 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40281).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef6 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40283).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef7 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40285).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef8 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40287).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef9 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40289).then(res => {
                //alert(res);
                this.upc.general.co2PresOutRef10 = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40461).then(res => {
                //alert(res);
                this.upc.general.co2PressOutTemp = res;
            });
            this.upc.client.getIntFromHoldingRegister(40401, 2).then(res => {
                //alert(res);
                this.upc.general.upcTimeZone = res;
            });
            //this.upc.client.connect();
            this.upc.client.getIntFromHoldingRegister(40376, 1).then(res => {
                //alert(res);
                this.upc.general.upcStatus = res;
                if (res === 0) {
                    this.upcStatus = "Diff. Des.";
                }
                if (res === 1) {
                    this.upcStatus = "Diff. Act.";
                }
                if (res === 2) {
                    this.upcStatus = "Diff. Adj.";
                }
                if (res === 3) {
                    this.upcStatus = "Diff. Check.";
                }
                if (res === 4) {
                    this.upcStatus = "Offset auto cal.";
                }
                if (res === 5) {
                    this.upcStatus = "Diff. Check B1 Vide";
                }
                if (res === 6) {
                    this.upcStatus = "Diff. Check B2 Vide";
                }
                if (res === 7) {
                    this.upcStatus = "Diff. Test Réserve Vide";
                }
                if (res === 100) {
                    this.upcStatus = "B1 et B2 vide";
                }
            });
            this.upc.client.getIntFromHoldingRegister(40011, 1).then(res => {
                this.upc.general.upcMode = res;
                if (res === 4369) {
                    this.upcMode = "STATE_CLEAR";
                }
                if (res === 0) {
                    this.upcMode = "DISABLED";
                }
                if (res === 1) {
                    this.upcMode = "ENABLED";
                }
                if (res === 2) {
                    this.upcMode = "ADJUST";
                }
                if (res === 3) {
                    this.upcMode = "CHECK";
                }
                if (res === 4) {
                    this.upcMode = "AUTO-CAL";
                }
                if (res === 61166) {
                    this.upcMode = "MEM_WIPE";
                }
                if (res === 65535) {
                    this.upcMode = "UPC_RESET";
                }
            });
            this.upc.client.getIntFromHoldingRegister(40168, 1).then(res => {
                //alert(res);
                this.upc.general.upcFwVer = res;
            });
            this.upc.client.getIntFromHoldingRegister(40012, 2).then(res => {
                this.date = (new Date(res * 1000));
                this.upc.general.upcClock = res;
            });
            this.upc.client.getFloatFromHoldingRegister(40018).then(res => {
                //alert(res);
                this.upc.general.co2FlowRefAdj = res;
            });
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map