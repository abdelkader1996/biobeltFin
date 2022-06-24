(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{name.name}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item>\r\n    <ion-label>Stock : </ion-label>\r\n      <ion-label >{{this.stockName}}</ion-label>\r\n  </ion-item>\r\n\r\n  \r\n  \r\n      <ion-button *ngIf=\"retfourn\" expand=\"block\"  color=\"secondary\" (click)=\"scanRack();\">\r\n        Scanner un Rack \r\n        <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n\r\n      </ion-button>\r\n\r\n\r\n  <ion-item *ngIf=\"addStock\">\r\n    <ion-label>Rack : </ion-label>\r\n      <ion-label *ngIf=\"selectedRack==='null'\" (click)=\"selectRack();\">Rack non selectioné</ion-label>\r\n      <ion-label *ngIf=\"!(selectedRack==='null')\" (click)=\"selectRack();\" >{{selectedRack}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"addStock\">\r\n    <ion-label>type de bouteille </ion-label>\r\n    <ion-select placeholder=\"Selectionner un type \" [(ngModel)]=\"currentBotlleType\" >\r\n      <ion-select-option  *ngFor=\"let bt of bottleTypedb\" value=\"{{bt.id}}\">{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option>\r\n     </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label color=\"primary\">boutteilles scannées : </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"bottleBarcodes.length==0 \">\r\n    <ion-label>aucune   </ion-label>\r\n  </ion-item>\r\n  \r\n  <div *ngIf=\"!retbouteille\">\r\n    <ion-item *ngFor=\"let barcode of bottleBarcodes; let indexOfelement=index;\" >\r\n      <ion-label>{{barcode}} </ion-label>\r\n      <ion-label>  <ion-icon name=\"trash\" color=\"danger\" (click)=\"removeElementFromBarcodes(indexOfelement)\"></ion-icon>\r\n      </ion-label>\r\n  \r\n    </ion-item>\r\n  </div>\r\n\r\n  \r\n  <div *ngIf=\"retbouteille && botteilleRet\">\r\n     <ion-item>\r\n      <ion-label>bouteille :  </ion-label>\r\n     </ion-item>\r\n     <ion-item (click)=\"showRadio()\">\r\n      <ion-label>codebar : {{botteilleRet.barcode}}</ion-label><ion-label> | {{botteilleRet.state}} |</ion-label>\r\n     </ion-item>\r\n\r\n    <ion-item *ngIf=\"retNotExistBottle\">\r\n      <ion-list>\r\n        <ion-list-header>\r\n          <ion-label>ajouter une bouteille  :</ion-label>\r\n        </ion-list-header>\r\n        <ion-item >\r\n          <ion-label>type de bouteille </ion-label>\r\n          <ion-select placeholder=\"Selectionner un type \" [(ngModel)]=\"botteilleRet.bottleType\" >\r\n            <ion-select-option  *ngFor=\"let bt of bottleTypedb\" value=\"{{bt.id}}\">{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option>\r\n           </ion-select>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-item>\r\n     <ion-item *ngIf=\"showRadioTF\">\r\n      <ion-list>\r\n        <ion-radio-group [value]=\"botteilleRet.state\" (ionChange)=\"radioGroupChange($event)\">\r\n          <ion-list-header>\r\n            <ion-label>etat : </ion-label>\r\n          </ion-list-header>\r\n      \r\n          <ion-item>\r\n            <ion-label>EMPTY</ion-label>\r\n            <ion-radio slot=\"start\" value=\"EMPTY\"></ion-radio>\r\n          </ion-item>\r\n      \r\n          <ion-item>\r\n            <ion-label>IN_USE</ion-label>\r\n            <ion-radio slot=\"start\" value=\"IN_USE\"></ion-radio>\r\n          </ion-item>\r\n      \r\n          <ion-item>\r\n            <ion-label>FULL </ion-label>\r\n            <ion-radio slot=\"start\" value=\"FULL\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>    \r\n     </ion-item>\r\n\r\n     \r\n     \r\n      \r\n  </div>\r\n  \r\n  \r\n  <ion-list>\r\n\r\n    <ion-item *ngFor=\"let s of stock\"> \r\n      <ion-label>{{s.bottleString+\"Rack:\"+s.rack}}</ion-label>\r\n      <ion-badge color=\"success\" *ngIf=\"s.state === 'FULL'\">Plein</ion-badge>\r\n      <ion-badge color=\"secondary\" *ngIf=\"s.state === 'IN_USE'\">Entamée</ion-badge>\r\n      <ion-badge color=\"danger\" *ngIf=\"s.state === 'EMPTY'\">Vide</ion-badge>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n\r\n   \r\n  <ion-list>\r\n    <ion-list-header>Historique :</ion-list-header>\r\n    \r\n    <ion-item *ngFor=\"let log of logs\"> \r\n      <ion-label>{{log}}</ion-label>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button  [attr.disabled]=\"!currentBotlleType && addStock\" *ngIf=\"addStock || retbouteille || retfourn\" expand=\"block\" (click)=\"scanBottle();\" color=\"secondary\" >\r\n    Scanner une bouteille \r\n    <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n\r\n </ion-button>\r\n\r\n  <ion-button  [attr.disabled]=\"bottleBarcodes.length==0 && addStock \" *ngIf=\"addStock\" expand=\"block\" (click)=\"addBottle();\">\r\n    enregistrer \r\n  </ion-button>\r\n  <ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retBottles();\">\r\n    Retour au dépôt\r\n  </ion-button>\r\n\r\n  <ion-button *ngIf=\"retbouteille\" expand=\"block\" (click)=\"retraitdebouteille();\">\r\n    {{retourStock?\"retour au stock\":\"retrait de bouteille\" }}\r\n  </ion-button>\r\n  <ion-button *ngIf=\"retfourn\" color=\"danger\" expand=\"block\" (click)=\"delBottle();\">\r\n    Retour au fournisseur \r\n</ion-button>\r\n<ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retRack();\">\r\n  Sélectionner un Rack\r\n</ion-button>\r\n\r\n</ion-footer>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");




const routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
let StockPageRoutingModule = class StockPageRoutingModule {
};
StockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");







let StockPageModule = class StockPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");











let StockPage = class StockPage {
    constructor(storage, barcode, upcv3Service, modalService, global, alertController) {
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
    ngOnInit() {
        this.storage.get("stockid").then(val => {
            this.stock = JSON.parse(val);
            this.stockName = this.stock.name;
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
        this.storage.get("token").then(val => {
            this.token = val;
            //recuperer les types de bouteilles de la base de données :
            this.upcv3Service.getAllBottleTypes(val).subscribe(res => {
                if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__["Code"].BOTTLE_TYPE_RECOVERED) {
                    this.bottleTypedb = res.result;
                    console.log("bottle types");
                    console.log(this.bottleTypedb);
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
    }
    remRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != '') {
                var text = res.text;
                this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.result.length > 0) {
                        var modal = yield this.modalService.create({
                            component: _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"],
                            componentProps: {
                                rack: text
                            }
                        });
                        modal.present();
                    }
                    else {
                        alert("Aucune bouteille est associée à ce Rack !");
                    }
                }));
            }
        }));
    }
    addRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                var text = res.text;
                this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.result.length == 0) {
                        this.presentAlertRack(text);
                    }
                    else {
                        localStorage.setItem("rack", text);
                        const modal = yield this.modalService.create({
                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                            componentProps: {
                                barcode: "",
                                stockRet: this.name,
                                mode: 1
                            }
                        });
                        modal.present();
                    }
                }));
            }
        }));
    }
    // scanner un rack 
    selectRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                var text = res.text;
                this.selectedRack = text;
                localStorage.setItem("rack", text);
            }
        }));
    }
    //scanner un rack et charger les bouteilles associées 
    scanRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                var text = res.text;
                this.selectedRack = text;
                localStorage.setItem("rack", text);
                this.upcv3Service.getBottleFromRack(this.token, text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    res.result.map(element => this.bottleBarcodes.push(element.barcode));
                }));
            }
        }));
    }
    //scanner une bouteille:
    scanBottle() {
        let barecode = "";
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                var text = res.text;
                this.bottleBarcodes.push(text);
                this.bottleTypeIDs.push(this.currentBotlleType);
                barecode = res.text;
                //si on est en mode retrait de bouteille  :
                if (this.retbouteille) {
                    yield this.upcv3Service.getBottleByBarCode(res.text, this.token).subscribe(res => {
                        if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_9__["Code"].BOTTLE_RECOVERED) {
                            //si la bouteille est presente dans la base de donnée 
                            var bottle = res.result;
                            bottle.bottleType = res.result.bottleType.id;
                            this.botteilleRet = {
                                barcode: barecode,
                                bottleType: res.result.bottleType,
                                state: res.result.state,
                                stock: "hjh",
                                rack: res.result.rack,
                                localisationId: this.retourStock ? this.stock.id : "00000000-0000-0000-0000-000000000000",
                                status: this.retourStock ? "ENTREPOSE" : "TRANSIT",
                                localisationType: this.retourStock ? "STOCK" : "TRANSIT"
                            };
                        }
                        else {
                            // si elle n existe pas , on demande de la creer :
                            alert("la bouteille scannée n existe pas dans la base de donnée  ");
                            this.retNotExistBottle = true;
                            this.botteilleRet = {
                                barcode: barecode,
                                bottleType: "",
                                state: "FULL",
                                stock: "hjh",
                                rack: "null",
                                localisationId: this.retourStock ? this.stock.id : "00000000-0000-0000-0000-000000000000",
                                status: this.retourStock ? "ENTREPOSE" : "TRANSIT",
                                localisationType: this.retourStock ? "STOCK" : "TRANSIT"
                            };
                        }
                    });
                }
            }
        }));
    }
    radioGroupChange(event) {
        console.log("radioGroupChange", event.detail.value);
        this.botteilleRet.state = event.detail.value;
    }
    showRadio() {
        this.showRadioTF = !this.showRadioTF;
    }
    removeElementFromBarcodes(indexOfelement) {
        this.bottleBarcodes.splice(indexOfelement, 1);
    }
    //retrait de boutielle :
    retraitdebouteille() {
        // mettre a jour la bouteille  dans la base de données :
        this.upcv3Service.addBottleMobile(JSON.stringify(this.botteilleRet), this.token).subscribe(res => {
            alert(this.retourStock ? "retour au stock !" : "retrait de bouteille !");
            this.logs.push(this.retourStock ? "( retour au stock  )" : "( retrait de bouteille )" + " - " + this.botteilleRet.barcode + " | " + res.result.bottleType.brand + " " + res.result.bottleType.designation);
            this.showRadioTF = false;
            this.retNotExistBottle = false;
        });
    }
    presentAlertRack(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Nouveau Rack',
                subHeader: '',
                message: 'Vous avez ajouter un nouveau rack ?',
                buttons: [{ text: 'Annuler', handler: () => { } }, { text: 'Confirmer',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            localStorage.setItem("rack", text);
                            const modal = yield this.modalService.create({
                                component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                componentProps: {
                                    barcode: "",
                                    stockRet: this.name,
                                    mode: 1
                                }
                            });
                            modal.present();
                        })
                    }],
            });
            yield alert.present();
        });
    }
    retRack() {
        this.barcode.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != "") {
                localStorage.setItem("rack", res.text);
                var modal = yield this.modalService.create({
                    component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                    componentProps: {
                        barcode: "",
                        stockRet: this.name,
                        mode: 2
                    }
                });
                modal.present();
            }
        }));
    }
    delBottle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var bottleList = {
                barcodes: this.bottleBarcodes,
            };
            console.log(JSON.stringify(bottleList));
            this.upcv3Service.returnFourn(JSON.stringify(bottleList), this.token).subscribe(res => {
                this.bottleBarcodes = [];
            });
        });
    }
    addBottle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*
            var bottleList = {
              bottleType : this.bottleTypeIDs,
              stock : this.stock.id,
              //date : date,
              barcodes : this.bottleBarcodes,
              rack : this.selectedRack,
              empty : 0
            }
        
            this.upcv3Service.addToStockMob(JSON.stringify(bottleList),this.token).subscribe(res=>{
              this.bottleBarcodes=[]
            })
            */
            var bottleToAdd = [...this.bottleBarcodes];
            this.bottleBarcodes = [];
            bottleToAdd.map((item, index) => {
                var bottle = {
                    barcode: item,
                    bottleType: this.bottleTypeIDs[index],
                    state: "FULL",
                    stock: this.stock.id,
                    localisationId: this.stock.id,
                    rack: this.selectedRack,
                    status: "ENTREPOSE",
                    localisationType: "STOCK"
                };
                // mettre a jour la bouteille  dans la base de données :
                this.upcv3Service.addBottleMobile(JSON.stringify(bottle), this.token).subscribe(res => alert("bouteille ajoutée !"));
            });
        });
    }
    retBottles() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.barcode.scan().then((code) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (code.text != '') {
                    localStorage.setItem("rack", null);
                    var modal = yield this.modalService.create({
                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                        componentProps: {
                            barcode: code.text,
                            stockRet: this.name,
                            mode: 2
                        }
                    });
                    modal.present();
                }
            }));
        });
    }
};
StockPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
StockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: __webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html"),
        styles: [__webpack_require__(/*! ./stock.page.scss */ "./src/app/stock/stock.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], StockPage);



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es2015.js.map