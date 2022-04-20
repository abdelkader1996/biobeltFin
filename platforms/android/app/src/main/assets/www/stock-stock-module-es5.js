(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{name.name}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>Stock : </ion-label>\n      <ion-label >{{this.stockName}}</ion-label>\n  </ion-item>\n\n  \n  \n      <ion-button *ngIf=\"retfourn\" expand=\"block\"  color=\"secondary\" (click)=\"scanRack();\">\n        Scanner un Rack \n        <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\n\n      </ion-button>\n\n\n  <ion-item *ngIf=\"addStock\">\n    <ion-label>Rack : </ion-label>\n      <ion-label *ngIf=\"selectedRack==='null'\" (click)=\"selectRack();\">Rack non selectioné</ion-label>\n      <ion-label *ngIf=\"!(selectedRack==='null')\" (click)=\"selectRack();\" >{{selectedRack}}</ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"addStock\">\n    <ion-label>type de bouteille </ion-label>\n    <ion-select placeholder=\"Selectionner un type \" [(ngModel)]=\"currentBotlleType\" >\n      <ion-select-option  *ngFor=\"let bt of bottleTypedb\" value=\"{{bt.id}}\">{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option>\n     </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\">boutteilles scannées : </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"bottleBarcodes.length==0 \">\n    <ion-label>aucune   </ion-label>\n  </ion-item>\n  \n  <div *ngIf=\"!retbouteille\">\n    <ion-item *ngFor=\"let barcode of bottleBarcodes; let indexOfelement=index;\" >\n      <ion-label>{{barcode}} </ion-label>\n      <ion-label>  <ion-icon name=\"trash\" color=\"danger\" (click)=\"removeElementFromBarcodes(indexOfelement)\"></ion-icon>\n      </ion-label>\n  \n    </ion-item>\n  </div>\n\n  \n  <div *ngIf=\"retbouteille && botteilleRet\">\n     <ion-item>\n      <ion-label>bouteille :  </ion-label>\n     </ion-item>\n     <ion-item (click)=\"showRadio()\">\n      <ion-label>codebar : {{botteilleRet.barcode}}</ion-label><ion-label> | {{botteilleRet.state}} |</ion-label>\n     </ion-item>\n\n    <ion-item *ngIf=\"retNotExistBottle\">\n      <ion-list>\n        <ion-list-header>\n          <ion-label>ajouter une bouteille  :</ion-label>\n        </ion-list-header>\n        <ion-item >\n          <ion-label>type de bouteille </ion-label>\n          <ion-select placeholder=\"Selectionner un type \" [(ngModel)]=\"botteilleRet.bottleType\" >\n            <ion-select-option  *ngFor=\"let bt of bottleTypedb\" value=\"{{bt.id}}\">{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option>\n           </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-item>\n     <ion-item *ngIf=\"showRadioTF\">\n      <ion-list>\n        <ion-radio-group [value]=\"botteilleRet.state\" (ionChange)=\"radioGroupChange($event)\">\n          <ion-list-header>\n            <ion-label>etat : </ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>EMPTY</ion-label>\n            <ion-radio slot=\"start\" value=\"EMPTY\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>IN_USE</ion-label>\n            <ion-radio slot=\"start\" value=\"IN_USE\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>FULL </ion-label>\n            <ion-radio slot=\"start\" value=\"FULL\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>    \n     </ion-item>\n\n     \n     \n      \n  </div>\n  \n  \n  <ion-list>\n\n    <ion-item *ngFor=\"let s of stock\"> \n      <ion-label>{{s.bottleString+\"Rack:\"+s.rack}}</ion-label>\n      <ion-badge color=\"success\" *ngIf=\"s.state === 'FULL'\">Plein</ion-badge>\n      <ion-badge color=\"secondary\" *ngIf=\"s.state === 'IN_USE'\">Entamée</ion-badge>\n      <ion-badge color=\"danger\" *ngIf=\"s.state === 'EMPTY'\">Vide</ion-badge>\n    </ion-item>\n    \n  </ion-list>\n\n\n   \n  <ion-list>\n    <ion-list-header>Historique :</ion-list-header>\n    \n    <ion-item *ngFor=\"let log of logs\"> \n      <ion-label>{{log}}</ion-label>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button  [attr.disabled]=\"!currentBotlleType && addStock\" *ngIf=\"addStock || retbouteille || retfourn\" expand=\"block\" (click)=\"scanBottle();\" color=\"secondary\" >\n    Scanner une bouteille \n    <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\n\n </ion-button>\n\n  <ion-button  [attr.disabled]=\"bottleBarcodes.length==0 && addStock \" *ngIf=\"addStock\" expand=\"block\" (click)=\"addBottle();\">\n    enregistrer \n  </ion-button>\n  <ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retBottles();\">\n    Retour au dépôt\n  </ion-button>\n\n  <ion-button *ngIf=\"retbouteille\" expand=\"block\" (click)=\"retraitdebouteille();\">\n    {{retourStock?\"retour au stock\":\"retrait de bouteille\" }}\n  </ion-button>\n  <ion-button *ngIf=\"retfourn\" color=\"danger\" expand=\"block\" (click)=\"delBottle();\">\n    Retour au fournisseur \n</ion-button>\n<ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retRack();\">\n  Sélectionner un Rack\n</ion-button>\n\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/stock/stock-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/stock/stock-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");




var routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
var StockPageRoutingModule = /** @class */ (function () {
    function StockPageRoutingModule() {
    }
    StockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StockPageRoutingModule);
    return StockPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");







var StockPageModule = /** @class */ (function () {
    function StockPageModule() {
    }
    StockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"],
            ],
            entryComponents: [
            //AddbottlemodalPage,
            ],
            declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"],
            ]
        })
    ], StockPageModule);
    return StockPageModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.page.scss":
/*!***************************************!*\
  !*** ./src/app/stock/stock.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXHN0b2NrXFxzdG9jay5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59IiwiaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock/stock.page.ts":
/*!*************************************!*\
  !*** ./src/app/stock/stock.page.ts ***!
  \*************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");











var StockPage = /** @class */ (function () {
    function StockPage(storage, barcode, upcv3Service, modalService, global, alertController) {
        this.storage = storage;
        this.barcode = barcode;
        this.upcv3Service = upcv3Service;
        this.modalService = modalService;
        this.global = global;
        this.alertController = alertController;
        this.logs = [];
        this.stockName = "";
        this.addStock = false;
        this.remStock = false;
        this.retStock = false;
        this.retfourn = false;
        this.retbouteille = false;
        this.showRadioTF = false;
        this.retNotExistBottle = false;
        this.name = { name: "", id: 0 };
        this.header = [];
        //rack selectionnée pour ajouter des bouteilles 
        this.selectedRack = "null";
        //botteles types  from  database :
        this.bottleTypedb = [];
        //botlles barcode :
        this.bottleBarcodes = [];
        this.bottleTypeIDs = [];
        this.bottlesTypeName = [];
        this.currentBotlleType = null;
        //bouteille a retirer 
        this.botteilleRet = undefined;
        this.retourStock = false;
    }
    StockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("stockid").then(function (val) {
            _this.stock = JSON.parse(val);
            _this.stockName = _this.stock.name;
        });
        if (localStorage.getItem("adds") == "0") {
            this.addStock = true;
        } // 30 € livraison LS MCB 2,5 € 120 unité MCB triphasé 6 A MCCB
        else if (localStorage.getItem("adds") == "1") {
            this.retbouteille = true;
        }
        else if (localStorage.getItem("adds") == "2") {
            this.retStock = true;
        }
        else if (localStorage.getItem("adds") == "3") {
            this.retfourn = true;
        }
        else if (localStorage.getItem("adds") == "4") {
            this.retbouteille = true;
            this.retourStock = true;
        }
        this.storage.get("token").then(function (val) {
            _this.token = val;
            //recuperer les types de bouteilles de la base de données :
            _this.upcv3Service.getAllBottleTypes(val).subscribe(function (res) {
                if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__["Code"].BOTTLE_TYPE_RECOVERED) {
                    _this.bottleTypedb = res.result;
                    console.log("bottle types");
                    console.log(_this.bottleTypedb);
                }
            });
            /*  this.storage.get("stockid").then(val=>{
                this.name = JSON.parse(val);
                
                this.upcv3Service.getBottlesByStockId(this.name.id,this.token).subscribe(res=>{
                  this.stock = res.result;
        
                  this.stock.sort((a,b)=>{
                    if (a.rack < b.rack) return -1;
                    if (a.rack > b.rack) return 1;
                    return 0;
                  });
                  
                  this.stock.forEach(item=>{
                    if(!this.header.includes(item.rack)){
                      this.header.push(item.rack);
                    }
                  })
        
                })
               
            })*/
        });
        console.log("debug ::::::");
        console.log(this.retourStock);
    };
    StockPage.prototype.remRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != '') {
                    text = res.text;
                    this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var modal;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(res.result.length > 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.modalService.create({
                                            component: _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"],
                                            componentProps: {
                                                rack: text
                                            }
                                        })];
                                case 1:
                                    modal = _a.sent();
                                    modal.present();
                                    return [3 /*break*/, 3];
                                case 2:
                                    alert("Aucune bouteille est associée à ce Rack !");
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    StockPage.prototype.addRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != "") {
                    text = res.text;
                    this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var modal;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(res.result.length == 0)) return [3 /*break*/, 1];
                                    this.presentAlertRack(text);
                                    return [3 /*break*/, 3];
                                case 1:
                                    localStorage.setItem("rack", text);
                                    return [4 /*yield*/, this.modalService.create({
                                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                            componentProps: {
                                                barcode: "",
                                                stockRet: this.name,
                                                mode: 1
                                            }
                                        })];
                                case 2:
                                    modal = _a.sent();
                                    modal.present();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    // scanner un rack 
    StockPage.prototype.selectRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != "") {
                    text = res.text;
                    this.selectedRack = text;
                    localStorage.setItem("rack", text);
                }
                return [2 /*return*/];
            });
        }); });
    };
    //scanner un rack et charger les bouteilles associées 
    StockPage.prototype.scanRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != "") {
                    text = res.text;
                    this.selectedRack = text;
                    localStorage.setItem("rack", text);
                    this.upcv3Service.getBottleFromRack(this.token, text).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            res.result.map(function (element) { return _this.bottleBarcodes.push(element.barcode); });
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    //scanner une bouteille:
    StockPage.prototype.scanBottle = function () {
        var _this = this;
        var barecode = "";
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.text != "")) return [3 /*break*/, 2];
                        text = res.text;
                        this.bottleBarcodes.push(text);
                        this.bottleTypeIDs.push(this.currentBotlleType);
                        barecode = res.text;
                        if (!this.retbouteille) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.upcv3Service.getBottleByBarCode(res.text, this.token).subscribe(function (res) {
                                if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__["Code"].BOTTLE_RECOVERED) {
                                    //si la bouteille est presente dans la base de donnée 
                                    var bottle = res.result;
                                    bottle.bottleType = res.result.bottleType.id;
                                    _this.botteilleRet = {
                                        barcode: barecode,
                                        bottleType: res.result.bottleType,
                                        state: res.result.state,
                                        stock: "hjh",
                                        rack: res.result.rack,
                                        localisationId: _this.retourStock ? _this.stock.id : "00000000-0000-0000-0000-000000000000",
                                        status: _this.retourStock ? "ENTREPOSE" : "TRANSIT",
                                        localisationType: _this.retourStock ? "STOCK" : "TRANSIT"
                                    };
                                }
                                else {
                                    // si elle n existe pas , on demande de la creer :
                                    alert("la bouteille scannée n existe pas dans la base de donnée  ");
                                    _this.retNotExistBottle = true;
                                    _this.botteilleRet = {
                                        barcode: barecode,
                                        bottleType: "",
                                        state: "FULL",
                                        stock: "hjh",
                                        rack: "null",
                                        localisationId: _this.retourStock ? _this.stock.id : "00000000-0000-0000-0000-000000000000",
                                        status: _this.retourStock ? "ENTREPOSE" : "TRANSIT",
                                        localisationType: _this.retourStock ? "STOCK" : "TRANSIT"
                                    };
                                }
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    StockPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail.value);
        this.botteilleRet.state = event.detail.value;
    };
    StockPage.prototype.showRadio = function () {
        this.showRadioTF = !this.showRadioTF;
    };
    StockPage.prototype.removeElementFromBarcodes = function (indexOfelement) {
        this.bottleBarcodes.splice(indexOfelement, 1);
    };
    //retrait de boutielle :
    StockPage.prototype.retraitdebouteille = function () {
        var _this = this;
        // mettre a jour la bouteille  dans la base de données :
        this.upcv3Service.addBottleMobile(JSON.stringify(this.botteilleRet), this.token).subscribe(function (res) {
            alert(_this.retourStock ? "retour au stock !" : "retrait de bouteille !");
            _this.logs.push(_this.retourStock ? "( retour au stock  )" : "( retrait de bouteille )" + " - " + _this.botteilleRet.barcode + " | " + res.result.bottleType.brand + " " + res.result.bottleType.designation);
            _this.showRadioTF = false;
            _this.retNotExistBottle = false;
        });
    };
    StockPage.prototype.presentAlertRack = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Nouveau Rack',
                            subHeader: '',
                            message: 'Vous avez ajouter un nouveau rack ?',
                            buttons: [{ text: 'Annuler', handler: function () { } }, { text: 'Confirmer',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var modal;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    localStorage.setItem("rack", text);
                                                    return [4 /*yield*/, this.modalService.create({
                                                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                                            componentProps: {
                                                                barcode: "",
                                                                stockRet: this.name,
                                                                mode: 1
                                                            }
                                                        })];
                                                case 1:
                                                    modal = _a.sent();
                                                    modal.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockPage.prototype.retRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.text != "")) return [3 /*break*/, 2];
                        localStorage.setItem("rack", res.text);
                        return [4 /*yield*/, this.modalService.create({
                                component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                componentProps: {
                                    barcode: "",
                                    stockRet: this.name,
                                    mode: 2
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    StockPage.prototype.delBottle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bottleList;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                bottleList = {
                    barcodes: this.bottleBarcodes,
                };
                console.log(JSON.stringify(bottleList));
                this.upcv3Service.returnFourn(JSON.stringify(bottleList), this.token).subscribe(function (res) {
                    _this.bottleBarcodes = [];
                });
                return [2 /*return*/];
            });
        });
    };
    StockPage.prototype.addBottle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bottleToAdd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                bottleToAdd = this.bottleBarcodes.slice();
                this.bottleBarcodes = [];
                bottleToAdd.map(function (item, index) {
                    var bottle = {
                        barcode: item,
                        bottleType: _this.bottleTypeIDs[index],
                        state: "FULL",
                        stock: _this.stock.id,
                        localisationId: _this.stock.id,
                        rack: _this.selectedRack,
                        status: "ENTREPOSE",
                        localisationType: "STOCK"
                    };
                    // mettre a jour la bouteille  dans la base de données :
                    _this.upcv3Service.addBottleMobile(JSON.stringify(bottle), _this.token).subscribe(function (res) { return alert("bouteille ajoutée !"); });
                });
                return [2 /*return*/];
            });
        });
    };
    StockPage.prototype.retBottles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.barcode.scan().then(function (code) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(code.text != '')) return [3 /*break*/, 2];
                                localStorage.setItem("rack", null);
                                return [4 /*yield*/, this.modalService.create({
                                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                        componentProps: {
                                            barcode: code.text,
                                            stockRet: this.name,
                                            mode: 2
                                        }
                                    })];
                            case 1:
                                modal = _a.sent();
                                modal.present();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StockPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    StockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html"),
            styles: [__webpack_require__(/*! ./stock.page.scss */ "./src/app/stock/stock.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], StockPage);
    return StockPage;
}());



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es5.js.map