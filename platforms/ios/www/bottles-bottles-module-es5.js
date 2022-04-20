(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottles-bottles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bottles/bottles.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottles/bottles.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-title>Installation</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon></ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"text-align: center;\">Ajouter des bouteilles</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\">\n          B2\n        </h1>  \n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB1();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\n          </ion-item>\n          <div *ngFor=\"let b1 of global.B1;let i = index;\">\n          <ion-item  *ngIf=\"global.B1.length > 0\">\n            <ion-label>{{b1.designation === 0 ? b1.marque: b1.marque+\" \"+b1.designation.toFixed()+\" kg\"}}</ion-label>\n            <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b1.marque === 'Air liquide'\" (ionChange)=\"setDesignationB1(i,$event);\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n              \n            </ion-select>\n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB2();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\n          </ion-item>\n          <div *ngFor=\"let b2 of global.B2;let i = index;\">\n            <ion-item  *ngIf=\"global.B2.length > 0\"> \n              <ion-label>{{b2.designation === 0 ? b2.marque: b2.marque+' '+b2.designation.toFixed()+' kg'}}</ion-label>\n              <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b2.marque === 'Air liquide'\" (ionChange)=\"setDesignationB2(i,$event);\">\n                <ion-select-option value=\"10\">10 kg</ion-select-option>\n                <ion-select-option value=\"20\">20 kg</ion-select-option>\n                <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n                <ion-select-option value=\"34\">34 kg</ion-select-option>\n                \n              </ion-select>\n              \n              <!--<ion-badge color=\"primary\">{{'x'+b2.qty}}</ion-badge>-->\n            </ion-item>\n          </div>\n        </ion-list>\n        <ion-button color=\"danger\" (click)=\"deleteB2();\" size=\"block\">\n          Tout Effacer\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n  <ion-button size=\"block\" color=\"primary\" (click)=\"refill();\"> Ajouter des bouteilles</ion-button>\n  <ion-button size=\"block\" color=\"secondary\" (click)=\"onContinue();\">Ne pas Ajouter de bouteilles</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bottles/bottles-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bottles/bottles-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BottlesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPageRoutingModule", function() { return BottlesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bottles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottles.page */ "./src/app/bottles/bottles.page.ts");




var routes = [
    {
        path: '',
        component: _bottles_page__WEBPACK_IMPORTED_MODULE_3__["BottlesPage"]
    }
];
var BottlesPageRoutingModule = /** @class */ (function () {
    function BottlesPageRoutingModule() {
    }
    BottlesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BottlesPageRoutingModule);
    return BottlesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/bottles/bottles.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bottles/bottles.module.ts ***!
  \*******************************************/
/*! exports provided: BottlesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPageModule", function() { return BottlesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottles-routing.module */ "./src/app/bottles/bottles-routing.module.ts");
/* harmony import */ var _bottles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottles.page */ "./src/app/bottles/bottles.page.ts");







var BottlesPageModule = /** @class */ (function () {
    function BottlesPageModule() {
    }
    BottlesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bottles_routing_module__WEBPACK_IMPORTED_MODULE_5__["BottlesPageRoutingModule"]
            ],
            declarations: [_bottles_page__WEBPACK_IMPORTED_MODULE_6__["BottlesPage"]],
        })
    ], BottlesPageModule);
    return BottlesPageModule;
}());



/***/ }),

/***/ "./src/app/bottles/bottles.page.scss":
/*!*******************************************!*\
  !*** ./src/app/bottles/bottles.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verticalLine {\n  width: 1%;\n  height: 50px;\n  background: green;\n  margin-top: 0;\n  position: relative;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90dGxlcy9DOlxcVXNlcnNcXGRldmVsXFxPbmVEcml2ZVxcQnVyZWF1XFxiLURldi9zcmNcXGFwcFxcYm90dGxlc1xcYm90dGxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvdHRsZXMvYm90dGxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JvdHRsZXMvYm90dGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lIHtcbiAgd2lkdGg6MSU7XG4gIGhlaWdodDo1MHB4O1xuICBiYWNrZ3JvdW5kOmdyZWVuO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59IiwiLnZlcnRpY2FsTGluZSB7XG4gIHdpZHRoOiAxJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bottles/bottles.page.ts":
/*!*****************************************!*\
  !*** ./src/app/bottles/bottles.page.ts ***!
  \*****************************************/
/*! exports provided: BottlesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPage", function() { return BottlesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");












var BottlesPage = /** @class */ (function () {
    function BottlesPage(upc3service, storage, global, barcode, router, platform, hospot, ngZone, network) {
        var _this = this;
        this.upc3service = upc3service;
        this.storage = storage;
        this.global = global;
        this.barcode = barcode;
        this.router = router;
        this.platform = platform;
        this.hospot = hospot;
        this.ngZone = ngZone;
        this.network = network;
        this.i = 0;
        this.y = 0;
        this.booleanB1 = false;
        this.booleanB2 = false;
        this.isNotScanned = true;
        this.addressage = 41119;
        this.addressage2 = 41169;
        this.bottle = {
            name: '',
            designation: [],
            brand: [],
            barcodes: [],
            bottleType: [],
            stock: '',
            date: new Date().toISOString().substring(0, 10)
        };
        if (this.platform.is("android")) {
            this.hospot.connectToWifi("BBAM", "BioBeltService").then(function (res) {
                _this.platform.ready().then(function (readySource) {
                    if (readySource == 'cordova') {
                        _this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__["UPCModbus"](function (state) {
                            _this.ngZone.run(function () {
                                // Force refresh UI
                            });
                        });
                        alert("On Connection UPC");
                        _this.network.onConnect().subscribe(function () {
                            if (_this.network.type === _this.network.Connection.WIFI) {
                                _this.upc.reconnect();
                                _this.upc.client.getStringFromHoldingRegister(40001, 20).then(function (res) {
                                    alert(JSON.stringify(res));
                                }).catch(function (error) {
                                    alert(JSON.stringify(error));
                                });
                            }
                        });
                    }
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        }
        else {
            this.platform.ready().then(function (readySource) {
                if (readySource == 'cordova') {
                    _this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__["UPCModbus"](function (state) {
                        _this.ngZone.run(function () {
                            // Force refresh UI
                        });
                    });
                    _this.network.onConnect().subscribe(function () {
                        if (_this.network.type === _this.network.Connection.WIFI) {
                            _this.upc.reconnect();
                        }
                    });
                }
            });
        }
    }
    BottlesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('token').then(function (val) { return _this.token = val; })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.upc3service.getAllBottleTypes(this.token).subscribe(function (res) {
                                _this.listBottles = res.result;
                                alert(JSON.stringify(_this.listBottles));
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.upc3service.getSites(this.token).subscribe(function (res) {
                                switch (res.code) {
                                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].SITE_RECOVERED:
                                        res.result.forEach(function (json) {
                                            if (json.name === _this.global.upc3.upcNameId) {
                                                _this.sites = json;
                                                alert(JSON.stringify(json));
                                                _this.bottle.name = json.name;
                                                if (json.stockClient !== null) {
                                                    _this.bottle.stock = json.stockClient;
                                                    alert(json.stockClient);
                                                }
                                            }
                                        });
                                        break;
                                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].UNAUTHORIZED:
                                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                                        break;
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BottlesPage.prototype.refill = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //alert(this.upc.client.floatToRegister(this.refillRealAdded/0.001974));
                //const loading = await this.loadingctrl.create({ message: 'Remplissage en cours' });
                //await loading.present();
                /*if (this.refillTotalAdded > 0){
                  this.upc.client.setFloatInHoldingRegister(40157,this.refillRealAdded/0.001974);
                  //alert("Remplissage sur B1 effectué !")
                }
                if(this.refillTotalAdded2 > 0){
                  this.upc.client.setFloatInHoldingRegister(40165,this.refillRealAdded2/0.001974);
                  //alert("Remplissage sur B2 effectué !");
                }*/
                alert(this.global.B1[this.i]['barcode']);
                alert(this.global.B2[this.y]['barcode']);
                //for( var i =0 ; i<this.global.B1.length;i++){
                setTimeout(function () {
                    _this.upc.client.connect();
                }, 500);
                setTimeout(function () {
                    _this.upc.client.setStringInHoldingRegister(_this.addressage, _this.global.B1[_this.i]['barcode'].substr(0, 8)).then(function (res) {
                        _this.booleanB1 = true;
                        _this.addressage += 10;
                        _this.i++;
                        alert("Ecriture sur l'upc en B1, état : " + JSON.stringify(res));
                    }).catch(function (error) {
                        alert(JSON.stringify(error));
                    });
                    _this.upc.client.setStringInHoldingRegister(_this.addressage2, _this.global.B2[_this.y]['barcode'].substr(0, 8)).then(function (res) {
                        _this.booleanB2 = true;
                        _this.addressage2 += 10;
                        _this.y++;
                        alert("Ecriture sur l'upc en B2, état : " + JSON.stringify(res));
                    }).catch(function (error) {
                        alert(JSON.stringify(error));
                    });
                }, 1000);
                //}
                /*for( var i =0 ; i<this.global.B2.length;i++){
                  if(this.global.B2['barcode'].length === 7){
                    this.global.B2['barcode'] += "   ";
                  }
                  this.upc.client.setStringInHoldingRegister(addressage,this.global.B2['barcode']).then(
                    res=>{
                      this.booleanB2 = true;
                    }
                  );
                  addressage += 10;
                }*/
                setInterval(function () {
                    if (_this.booleanB1) {
                        //loading.dismiss();
                    }
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    BottlesPage.prototype.onScanBarCodeB1 = function () {
        var _this = this;
        this.barcode.scan().then(function (res) {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (_this.global.B1.length > 0) {
                _this.global.B1.forEach(function (item) {
                    if (item['barcode'] === res['text']) {
                        _this.isNotScanned = false;
                    }
                });
            }
            if (_this.global.B2.length > 0) {
                _this.global.B2.forEach(function (item) {
                    if (item['barcode'] === res["text"]) {
                        _this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && _this.isNotScanned) {
                if (designationMesser === 37.5) {
                    _this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    _this.global.designationB1.push(designationMesser);
                }
                else {
                    _this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    _this.global.designationB1.push(0);
                }
            }
            else if (!_this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            _this.isNotScanned = true;
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    BottlesPage.prototype.onScanBarCodeB2 = function () {
        var _this = this;
        this.barcode.scan().then(function (res) {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (_this.global.B1.length > 0) {
                _this.global.B1.forEach(function (item) {
                    if (item['barcode'] === res['text']) {
                        _this.isNotScanned = false;
                    }
                });
            }
            if (_this.global.B2.length > 0) {
                _this.global.B2.forEach(function (item) {
                    if (item['barcode'] === res["text"]) {
                        _this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && _this.isNotScanned) {
                if (designationMesser === 37.5) {
                    _this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    _this.global.designationB2.push(designationMesser);
                }
                else {
                    _this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    _this.global.designationB2.push(0);
                }
            }
            else if (!_this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            _this.isNotScanned = true;
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    BottlesPage.prototype.setDesignationB1 = function (i, $event) {
        this.global.designationB1[i] = $event.target.value;
        //this.global.B1[i].designation = this.global.B1[i].designation;
    };
    BottlesPage.prototype.setDesignationB2 = function (i, $event) {
        this.global.designationB2[i] = $event.target.value;
        //this.global.B2[i].designation = this.global.B2[i].designation;
    };
    BottlesPage.prototype.deleteB1 = function () {
        this.global.B1 = [];
        this.global.designationB1 = [];
    };
    BottlesPage.prototype.deleteB2 = function () {
        this.global.B2 = [];
        this.global.designationB2 = [];
    };
    BottlesPage.prototype.addBottleId = function () {
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
    };
    BottlesPage.prototype.addToBelt = function () {
        var _this = this;
        this.global.B1.forEach(function (item) {
            _this.bottle.brand.push(item.marque);
            _this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB1.forEach(function (item) {
            _this.bottle.designation.push(item);
        });
        this.global.B2.forEach(function (item) {
            _this.bottle.brand.push(item.marque);
            _this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB2.forEach(function (item) {
            _this.bottle.designation.push(item);
        });
        this.addBottleId();
        this.upc3service.addToStock(this.bottle, this.token).subscribe(function (res) {
            if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].BOTTLE_CREATED) {
                alert('Bouteille ajouté à la ceinture !');
                _this.global.B1 = [];
                _this.global.B2 = [];
                _this.global.designationB1 = [];
                _this.global.designationB2 = [];
                _this.router.navigate(["removebottle"]);
            }
            else {
                alert('Erreur lors du rajout de la bouteille !');
            }
        });
    };
    BottlesPage.prototype.onContinue = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.upc.client.connect;
                }, 5000);
                setTimeout(function () {
                    _this.upc.client.getStringFromHoldingRegister(41119, 10).then(function (data) {
                        alert(JSON.stringify(data));
                    }).catch(function (error) { alert(JSON.stringify(error)); });
                }, 10000);
                return [2 /*return*/];
            });
        });
    };
    BottlesPage.ctorParameters = function () { return [
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] }
    ]; };
    BottlesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottles',
            template: __webpack_require__(/*! raw-loader!./bottles.page.html */ "./node_modules/raw-loader/index.js!./src/app/bottles/bottles.page.html"),
            styles: [__webpack_require__(/*! ./bottles.page.scss */ "./src/app/bottles/bottles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]])
    ], BottlesPage);
    return BottlesPage;
}());



/***/ })

}]);
//# sourceMappingURL=bottles-bottles-module-es5.js.map