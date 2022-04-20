(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instalpieges-instalpieges-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/instalpieges/instalpieges.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/instalpieges/instalpieges.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Installation</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <h1 style=\"text-align: center;\"> {{\"Vous avez \"+nbpiege+\" Pièges dans la ceinture \"+upc3.upcNameId}} </h1>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h2>Souhaitez vous modifier le nombre de pièges ?</h2>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input [(ngModel)]=\"nbpiege\" placeholder=\"Si oui combien ?\" type=\"tel\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <cad-canvas></cad-canvas>\n  <ion-button (click)=\"onEdit();\" size=\"block\"> Modifier</ion-button>\n  <ion-button (click)=\"onContinue();\" size=\"block\" color=\"secondary\">Continuer</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/instalpieges/instalpieges-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/instalpieges/instalpieges-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InstalpiegesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalpiegesPageRoutingModule", function() { return InstalpiegesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _instalpieges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instalpieges.page */ "./src/app/instalpieges/instalpieges.page.ts");




const routes = [
    {
        path: '',
        component: _instalpieges_page__WEBPACK_IMPORTED_MODULE_3__["InstalpiegesPage"]
    }
];
let InstalpiegesPageRoutingModule = class InstalpiegesPageRoutingModule {
};
InstalpiegesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InstalpiegesPageRoutingModule);



/***/ }),

/***/ "./src/app/instalpieges/instalpieges.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/instalpieges/instalpieges.module.ts ***!
  \*****************************************************/
/*! exports provided: InstalpiegesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalpiegesPageModule", function() { return InstalpiegesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _instalpieges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instalpieges-routing.module */ "./src/app/instalpieges/instalpieges-routing.module.ts");
/* harmony import */ var _instalpieges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instalpieges.page */ "./src/app/instalpieges/instalpieges.page.ts");
/* harmony import */ var _canvas_canvas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas/canvas.page */ "./src/app/canvas/canvas.page.ts");








let InstalpiegesPageModule = class InstalpiegesPageModule {
};
InstalpiegesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _instalpieges_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstalpiegesPageRoutingModule"]
        ],
        declarations: [_instalpieges_page__WEBPACK_IMPORTED_MODULE_6__["InstalpiegesPage"], _canvas_canvas_page__WEBPACK_IMPORTED_MODULE_7__["CADCanvasComponent"]]
    })
], InstalpiegesPageModule);



/***/ }),

/***/ "./src/app/instalpieges/instalpieges.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/instalpieges/instalpieges.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbHBpZWdlcy9pbnN0YWxwaWVnZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/instalpieges/instalpieges.page.ts":
/*!***************************************************!*\
  !*** ./src/app/instalpieges/instalpieges.page.ts ***!
  \***************************************************/
/*! exports provided: InstalpiegesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalpiegesPage", function() { return InstalpiegesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");










let InstalpiegesPage = class InstalpiegesPage {
    constructor(storage, global, upcv3service, router, platform, ngZone, network, hospot) {
        this.storage = storage;
        this.global = global;
        this.upcv3service = upcv3service;
        this.router = router;
        this.platform = platform;
        this.ngZone = ngZone;
        this.network = network;
        this.hospot = hospot;
        this.isBBAM = false;
        // Init UPC
        if (this.platform.is("android")) {
            this.hospot.connectToWifi("BBAM", "BioBeltService").then(res => {
                this.isBBAM = true;
                this.platform.ready().then(readySource => {
                    if (readySource == 'cordova') {
                        alert("Yes");
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_7__["UPCModbus"](state => {
                            this.ngZone.run(() => {
                                // Force refresh UI
                            });
                        });
                        this.network.onConnect().subscribe(() => {
                            alert(this.network.type);
                            if (this.network.type === this.network.Connection.WIFI) {
                                this.upc.reconnect();
                            }
                        });
                    }
                });
            }).catch(error => {
                alert(JSON.stringify(error));
            });
        }
        else {
            this.platform.ready().then(readySource => {
                if (readySource == 'cordova') {
                    alert("Yes");
                    this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_7__["UPCModbus"](state => {
                        this.ngZone.run(() => {
                            // Force refresh UI
                        });
                    });
                    setTimeout(() => {
                        this.upc.client.connect();
                    }, 5000);
                    setTimeout(() => {
                        this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                            this.upc3.upcNameId = res;
                            alert(res);
                        }).catch(error => {
                            alert(JSON.stringify(error));
                        });
                    }, 10000);
                    setTimeout(() => {
                        this.upc.client.getStringFromHoldingRegister(40015, 1).then(res => {
                            this.nbpiege = res;
                            alert(res);
                        }).catch(error => {
                            alert(JSON.stringify(error));
                        });
                    }, 10000);
                    this.network.onConnect().subscribe(() => {
                        if (this.network.type === this.network.Connection.WIFI) {
                            this.upc.reconnect();
                        }
                    });
                }
            });
        }
    }
    ngOnInit() {
        this.upc3 = this.global.upc3;
        this.nbpiege = this.global.upc3.generalParameters.upcTrapNum;
        this.storage.get("token").then(val => {
            this.token = val;
        });
    }
    onEdit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.upc.editTrap();
            if (this.platform.is("android")) {
                var value = Math.round(this.nbpiege * this.upc3.generalParameters.co2FlowRefTrap * 10.0) / 10.0;
                alert(JSON.stringify(this.upc));
                yield this.upc.client.setIntInHoldingRegister(40015, 1, this.nbpiege).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
                yield this.upc.client.setFloatInHoldingRegister(40018, value).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
                ;
                yield this.upc.client.setFloatInHoldingRegister(40020, value).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
                this.router.navigate(['bottles']);
            } /*else {
              var value = Math.round(this.nbpiege*this.upc3.generalParameters.co2FlowRefTrap*10.0)/10.0;
              alert(JSON.stringify(this.upc));
              await this.upc.client.setIntInHoldingRegister(40015,1,this.nbpiege).then(data=>{
                alert(JSON.stringify(data));
              }).catch(err=>{
                alert(JSON.stringify(err));
              });
              await this.upc.client.setFloatInHoldingRegister(40018,value).then(data=>{
                alert(JSON.stringify(data));
              }).catch(err=>{
                alert(JSON.stringify(err));
              });;
              await this.upc.client.setFloatInHoldingRegister(40020,value).then(data=>{
                alert(JSON.stringify(data));
              }).catch(err=>{
                alert(JSON.stringify(err));
              });
              /*this.upcv3service.editTrap(this.upc3.id,this.nbpiege,this.token).subscribe(res=>{
                this.router.navigate(['bottles']);
              })*/
            /*}*/
            setTimeout((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.upc.client.connect();
            }), 5000);
            var value = Math.round(this.nbpiege * this.upc3.generalParameters.co2FlowRefTrap * 10.0) / 10.0;
            setTimeout((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.upc.getAllVars();
                this.upc.readGeneralParameters();
                alert(JSON.stringify(this.upc.trapNum));
                yield this.upc.client.setIntInHoldingRegister(40015, 1, this.nbpiege).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
            }), 10000);
            setTimeout((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.upc.client.connect();
            }), 5000);
            setTimeout((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.upc.client.setFloatInHoldingRegister(40018, value).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
            }), 10000);
            setTimeout((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.upc.client.connect();
            }), 5000);
            setTimeout((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.upc.client.setFloatInHoldingRegister(40020, value).then(data => {
                    alert(JSON.stringify(data));
                }).catch(err => {
                    alert(JSON.stringify(err));
                });
            }), 10000);
            /*this.upcv3service.editTrap(this.upc3.id,this.nbpiege,this.token).subscribe(res=>{
              this.router.navigate(['bottles']);
            })*/
        });
    }
    onContinue() {
        this.router.navigate(['bottles']);
    }
};
InstalpiegesPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"] }
];
InstalpiegesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instalpieges',
        template: __webpack_require__(/*! raw-loader!./instalpieges.page.html */ "./node_modules/raw-loader/index.js!./src/app/instalpieges/instalpieges.page.html"),
        styles: [__webpack_require__(/*! ./instalpieges.page.scss */ "./src/app/instalpieges/instalpieges.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"]])
], InstalpiegesPage);



/***/ })

}]);
//# sourceMappingURL=instalpieges-instalpieges-module-es2015.js.map