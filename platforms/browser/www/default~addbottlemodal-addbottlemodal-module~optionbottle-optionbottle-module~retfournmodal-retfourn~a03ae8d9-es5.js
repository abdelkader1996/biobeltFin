(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addbottlemodal-addbottlemodal-module~optionbottle-optionbottle-module~retfournmodal-retfourn~a03ae8d9"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottlemodal/addbottlemodal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottlemodal/addbottlemodal.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClose();\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"barcode != ''\">{{stockRet.name}}</ion-title>\n    <ion-title *ngIf=\"barcode == ''\">Ajout de bouteille au Rack</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid *ngIf=\"mode == 1000\">\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\">\n          B2\n        </h1>  \n      </ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB1();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\n          </ion-item>\n          <div *ngFor=\"let b1 of B1String;let i = index;\">\n          <ion-item>\n            <ion-label>{{b1}}</ion-label>\n            <ion-select [(ngModel)]=\"B1Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B1IsMesser[i]\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n            </ion-select>\n            \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB2();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\n          </ion-item>\n          <div *ngFor=\"let b2 of B2String;let i = index;\">\n          <ion-item>\n            <ion-label>{{b2}}</ion-label>\n            <ion-select [(ngModel)]=\"B2Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B2IsMesser[i]\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n            </ion-select>\n            \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item *ngIf=\"mode != 1000 && barcode != ''\">\n      <ion-label>{{barcode}}</ion-label>\n      <div *ngIf=\"designation.length > 0\">\n      <ion-select [(ngModel)]=\"designation[0]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[0]\">\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\n      </ion-select>\n    </div>\n    </ion-item>\n    <div *ngIf=\"barcode != ''\">\n    <ion-item *ngFor=\"let b of bottleadded;let i = index;\">\n      <ion-label>{{b}}</ion-label>\n      <ion-select [(ngModel)]=\"designation[i+1]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[i+1]\">\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div *ngIf=\"barcode == ''\">\n    <ion-item *ngFor=\"let rb of listbottlesRack;\">\n      <ion-label>{{rb.bottleString}}</ion-label>\n      <ion-badge color=\"success\" *ngIf=\"rb.state === 'FULL'\">Plein</ion-badge>\n      <ion-badge color=\"secondary\" *ngIf=\"rb.state === 'IN_USE'\">Entamée</ion-badge>\n      <ion-badge color=\"danger\" *ngIf=\"rb.state === 'EMPTY'\">Vide</ion-badge>\n    </ion-item>\n    <ion-item *ngFor=\"let b of bottleadded;let i = index;\">\n      <ion-label>{{b}}</ion-label>\n      <ion-select [(ngModel)]=\"designation[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[i]\">\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n    <ion-item (click)=\"onAddBottle();\" *ngIf=\"mode === 1 || mode === 2\">\n      <ion-icon name=\"add-circle\" color=\"primary\"></ion-icon>\n      &nbsp;&nbsp;&nbsp;&nbsp;Ajouter une bouteille\n    </ion-item>\n    <ion-item (click)=\"onAddBottle();\" *ngIf=\"mode === 0\">\n      <ion-icon name=\"remove-circle\" color=\"danger\"></ion-icon>\n      &nbsp;&nbsp;&nbsp;&nbsp;Enlever une bouteille\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button *ngIf=\"mode != 1000\" (click)=\"onSynchro();\" expand=\"block\" > Synchroniser avec le Serveur</ion-button>\n  <ion-button *ngIf=\"mode == 1000\" (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec l'UPC</ion-button>\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/addbottlemodal/addbottlemodal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verticalLine {\n  width: 1%;\n  height: 50px;\n  background: green;\n  margin-top: 0;\n  position: relative;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm90dGxlbW9kYWwvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGFkZGJvdHRsZW1vZGFsXFxhZGRib3R0bGVtb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGJvdHRsZW1vZGFsL2FkZGJvdHRsZW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkYm90dGxlbW9kYWwvYWRkYm90dGxlbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsTGluZSB7XG4gICAgd2lkdGg6MSU7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgYmFja2dyb3VuZDpncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiIsIi52ZXJ0aWNhbExpbmUge1xuICB3aWR0aDogMSU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addbottlemodal/addbottlemodal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal.page.ts ***!
  \*******************************************************/
/*! exports provided: AddbottlemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottlemodalPage", function() { return AddbottlemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");











var AddbottlemodalPage = /** @class */ (function () {
    function AddbottlemodalPage(scan, modal, upcv3Service, storage, router, platform, network, ngZone, loadingCTRL, global, cd) {
        this.scan = scan;
        this.modal = modal;
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.network = network;
        this.ngZone = ngZone;
        this.loadingCTRL = loadingCTRL;
        this.global = global;
        this.cd = cd;
        this.barcode = "";
        this.barcodes = [];
        this.bottleadded = [];
        this.isMesser = [];
        this.designation = [];
        this.addressage = 41119;
        this.addressage2 = 41169;
        this.B1 = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.i = 0;
        this.y = 0;
        this.rack = "";
        this.isBBAM = false;
        this.listbottlesRack = [];
    }
    AddbottlemodalPage.prototype.ngOnInit = function () {
        var _this = this;
        //alert(this.barcode);
        this.getUpcStateConnexion();
        if (this.mode === 1000) {
            this.isMesser = [];
            this.stockRet = { name: "En cours..." };
            this.platform.ready().then(function () {
                if (_this.platform.is('ios')) {
                    WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(function (res) {
                        _this.isBBAM = true;
                        _this.platform.ready().then(function (readySource) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(readySource == 'cordova')) return [3 /*break*/, 2];
                                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__["UPCModbus"](function (state) {
                                            _this.ngZone.run(function () {
                                                // Force refresh UI
                                                //this.readDiffusionParameters();
                                            });
                                        });
                                        return [4 /*yield*/, this.upc.client.connect()];
                                    case 1:
                                        _a.sent();
                                        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.upc.client.getStringFromHoldingRegister(40001, 10).then(function (res) {
                                                            _this.stockRet = {
                                                                name: res
                                                            };
                                                            _this.cd.detectChanges();
                                                        })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 2000);
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                    }).catch(function (err) {
                        _this.stockRet = { name: "Erreur lors de la connexion UPC" };
                        alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
                    });
                }
            });
        }
        else {
            this.storage.get("token").then(function (val) {
                _this.token = val;
                if (localStorage.getItem("rack")) {
                    _this.rack = localStorage.getItem("rack");
                    _this.upcv3Service.getBottleFromRack(_this.token, _this.rack).subscribe(function (res) {
                        _this.listbottlesRack = res.result;
                    });
                }
                _this.upcv3Service.getAllBottleTypes(val).subscribe(function (res) {
                    if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].BOTTLE_TYPE_RECOVERED) {
                        _this.bottleType = res.result;
                    }
                });
            });
            if (/^\d+$/.test(this.barcode)) {
                this.barcodes.push(this.barcode);
                this.barcode = "Messer (" + this.barcode + ") 37.5 kg";
                this.isMesser.push(true);
                this.designation.push("37.5");
            }
            else if (/^[a-z0-9]+$/i.test(this.barcode)) {
                this.barcodes.push(this.barcode);
                this.barcode = "Air Liquide (" + this.barcode + ")";
                this.designation.push("34");
                this.isMesser.push(false);
            }
        }
    };
    AddbottlemodalPage.prototype.doRefresh = function ($event) {
        this.ngOnInit();
        $event.target.complete();
    };
    AddbottlemodalPage.prototype.onAddBottle = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var isScanned = false;
            _this.barcodes.forEach(function (item) {
                if (item == res.text) {
                    alert("Vous avez déjà scanné cette bouteille");
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != '') {
                    if (/^\d+$/.test(res.text)) {
                        _this.bottleadded.push("Messer (" + res.text + ") 37.5 kg");
                        _this.barcodes.push(res.text);
                        _this.isMesser.push(true);
                        _this.designation.push("37.5");
                    }
                    else {
                        _this.bottleadded.push("Air Liquide (" + res.text + ")");
                        _this.barcodes.push(res.text);
                        _this.isMesser.push(false);
                        _this.designation.push("34");
                    }
                }
            }
        });
    };
    AddbottlemodalPage.prototype.onClose = function () {
        this.modal.dismiss();
    };
    AddbottlemodalPage.prototype.onSynchroB1B2 = function () {
        this.global.onSynchroB1B2(this.token);
    };
    AddbottlemodalPage.prototype.onSynchro = function () {
        var _this = this;
        if (this.mode === 1) {
            var bottleTypes = [];
            /*this.bottleType.forEach(item=>{
              for(var i = 0;i<this.designation.length;i++){
                
                if (item.designation == this.designation[i]){
                  bottleTypes.push(item.id);
                }
              }
              
            })*/
            this.designation.forEach(function (item) {
                for (var i = 0; i < _this.bottleType.length; i++) {
                    if (item == _this.bottleType[i].designation) {
                        bottleTypes.push(_this.bottleType[i].id);
                    }
                }
            });
            var date = new Date();
            var bottle = {
                bottleType: bottleTypes,
                stock: this.stockRet.id,
                //date : date,
                barcodes: this.barcodes,
                rack: this.rack,
                empty: 0
            };
            this.upcv3Service.addToStockMob(bottle, this.token).subscribe(function (res) {
                _this.modal.dismiss();
            });
        }
        else if (this.mode == 0) {
            var bottleDel = {
                barcodes: this.barcodes
            };
            this.upcv3Service.returnFourn(bottleDel, this.token).subscribe(function (res) {
                //alert (JSON.stringify(res));
                _this.modal.dismiss();
            });
        }
        else if (this.mode == 2 || this.mode == 3) {
            //add empty bottle
            var bottleTypes = [];
            /*this.bottleType.forEach(item=>{
              for(var i = 0;i<this.designation.length;i++){
                
                if (item.designation == this.designation[i]){
                  bottleTypes.push(item.id);
                }
              }
              
            })*/
            this.designation.forEach(function (item) {
                for (var i = 0; i < _this.bottleType.length; i++) {
                    if (item == _this.bottleType[i].designation) {
                        bottleTypes.push(_this.bottleType[i].id);
                    }
                }
            });
            var date = new Date();
            var bottle = {
                bottleType: bottleTypes,
                stock: this.stockRet.id,
                //date : date,
                barcodes: this.barcodes,
                rack: this.rack,
                empty: 1
            };
            this.upcv3Service.addToStockMob(bottle, this.token).subscribe(function (res) {
                _this.modal.dismiss();
            });
        }
    };
    AddbottlemodalPage.prototype.onScanBarCodeB2 = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var isScanned = false;
            _this.B1.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            _this.B2.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != "") {
                    if (/^\d+$/.test(res.text)) {
                        _this.B2String.push("Messer (" + res.text + ") 37.5 kg");
                        _this.B2Desig.push("37.5");
                        _this.B2IsMesser.push(true);
                    }
                    else {
                        _this.B2String.push("Air Liquide (" + res.text + ")");
                        _this.B2Desig.push("34");
                        _this.B2IsMesser.push(false);
                    }
                    _this.B2.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    };
    AddbottlemodalPage.prototype.onScanBarCodeB1 = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var isScanned = false;
            _this.B1.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            _this.B2.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != "") {
                    if (/^\d+$/.test(res.text)) {
                        _this.B1String.push("Messer (" + res.text + ") 37.5 kg");
                        _this.B1Desig.push("37.5");
                        _this.B1IsMesser.push(true);
                    }
                    else {
                        _this.B1String.push("Air Liquide (" + res.text + ")");
                        _this.B1Desig.push("34");
                        _this.B1IsMesser.push(false);
                    }
                    _this.B1.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    };
    AddbottlemodalPage.prototype.getUpcStateConnexion = function () {
        var _this = this;
        this.platform.ready().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__["UPCModbus"](function (state) {
                            _this.ngZone.run(function () {
                                // Force refresh UI
                                //this.readDiffusionParameters();
                            });
                        });
                        return [4 /*yield*/, this.upc.client.connect()];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.upc.client.getStringFromHoldingRegister(40045, 10).then(function (res) {
                                //this.global.ssid = res;
                                //this.global.isBBAM = true;
                                _this.cd.detectChanges();
                            });
                        }, 2000);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddbottlemodalPage.prototype.onSynchroCeint = function () {
        var _this = this;
        this.upc.client.setStringInHoldingRegister(this.addressage, this.B1[this.i].substr(0, 8)).then(function (res) {
            //this.booleanB1 = true;
            _this.addressage += 10;
            _this.i++;
            alert("Ecriture sur l'upc en B1, état : " + JSON.stringify(res));
        }).catch(function (error) {
            alert(JSON.stringify(error));
        });
        this.upc.client.setStringInHoldingRegister(this.addressage2, this.B2[this.y].substr(0, 8)).then(function (res) {
            //this.booleanB2 = true;
            _this.addressage2 += 10;
            _this.y++;
            alert("Ecriture sur l'upc en B2, état : " + JSON.stringify(res));
        }).catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    AddbottlemodalPage.ctorParameters = function () { return [
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AddbottlemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbottlemodal',
            template: __webpack_require__(/*! raw-loader!./addbottlemodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottlemodal/addbottlemodal.page.html"),
            styles: [__webpack_require__(/*! ./addbottlemodal.page.scss */ "./src/app/addbottlemodal/addbottlemodal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _api_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AddbottlemodalPage);
    return AddbottlemodalPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~addbottlemodal-addbottlemodal-module~optionbottle-optionbottle-module~retfournmodal-retfourn~a03ae8d9-es5.js.map