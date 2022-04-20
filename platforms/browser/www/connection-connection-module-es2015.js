(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connection-connection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/connection/connection.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Etat de la connexion au réseau</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Etat de la connexion au réseau </h3>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Etat Instantané</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"8\">Mode</ion-col>\n          <ion-col size=\"4\" *ngIf=\"!redBackground\">{{mode}}</ion-col>\n          <ion-col size=\"4\" *ngIf=\"redBackground\">-</ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Niv.</ion-col>\n          <ion-col size=\"6\"><ion-range style=\"pointer-events: none;\" color=\"danger\" [value]=\"level\" max=\"100\"></ion-range></ion-col>\n          <ion-col size=\"4\" *ngIf=\"level < 500 && !redBackground\">{{level}}</ion-col><ion-col *ngIf=\"redBackground\" size=\"4\" >-</ion-col>\n          <ion-col size=\"4\" *ngIf=\"level >= 500 && !redBackground\">Non Connecté</ion-col><ion-col *ngIf=\"redBackground\" size=\"4\">-</ion-col>\n        </ion-row>\n        <!--<ion-row>\n          <ion-col size=\"10\">BER</ion-col>\n          <ion-col size=\"2\">{{ber}}</ion-col>\n        </ion-row> -->\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Statistiques dernière 24 h</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Mode</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\">2G</ion-col>\n          <ion-col size=\"2\">3G</ion-col>\n          <ion-col size=\"2\">4G</ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Durée</ion-col>\n          <ion-col *ngIf=\"!redBackground\" size=\"2\">{{dureTab[3]+\" %\"}}</ion-col><ion-col size=\"2\" *ngIf=\"redBackground\">-</ion-col>\n          <ion-col *ngIf=\"!redBackground\" size=\"2\">{{dureTab[0]+\" %\"}}</ion-col><ion-col size=\"2\" *ngIf=\"redBackground\">-</ion-col>\n          <ion-col *ngIf=\"!redBackground\" size=\"2\">{{dureTab[1]+\" %\"}}</ion-col><ion-col size=\"2\" *ngIf=\"redBackground\">-</ion-col>\n          <ion-col *ngIf=\"!redBackground\" size=\"2\">{{dureTab[2]+\" %\"}}</ion-col><ion-col size=\"2\" *ngIf=\"redBackground\">-</ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Niveau</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\" *ngFor=\"let l of levelTab\"><ion-label *ngIf=\"!redBackground\">{{l}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">BER</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\" *ngFor=\"let b of bertab\"><ion-label *ngIf=\"!redBackground\">{{b == 0 ? '-' : b}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col>\n\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/connection/connection-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/connection/connection-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConnectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageRoutingModule", function() { return ConnectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.page */ "./src/app/connection/connection.page.ts");




const routes = [
    {
        path: '',
        component: _connection_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionPage"]
    }
];
let ConnectionPageRoutingModule = class ConnectionPageRoutingModule {
};
ConnectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnectionPageRoutingModule);



/***/ }),

/***/ "./src/app/connection/connection.module.ts":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.module.ts ***!
  \*************************************************/
/*! exports provided: ConnectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function() { return ConnectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _connection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-routing.module */ "./src/app/connection/connection-routing.module.ts");
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection.page */ "./src/app/connection/connection.page.ts");







let ConnectionPageModule = class ConnectionPageModule {
};
ConnectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connection_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectionPageRoutingModule"]
        ],
        declarations: [_connection_page__WEBPACK_IMPORTED_MODULE_6__["ConnectionPage"]]
    })
], ConnectionPageModule);



/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/connection/connection.page.ts":
/*!***********************************************!*\
  !*** ./src/app/connection/connection.page.ts ***!
  \***********************************************/
/*! exports provided: ConnectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPage", function() { return ConnectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let ConnectionPage = class ConnectionPage {
    constructor(platform, global, loadingCTRL, hotspot, ngZone, cd, router, storage) {
        this.platform = platform;
        this.global = global;
        this.loadingCTRL = loadingCTRL;
        this.hotspot = hotspot;
        this.ngZone = ngZone;
        this.cd = cd;
        this.router = router;
        this.storage = storage;
        this.mode = "";
        this.level = 0;
        this.ber = 0;
        this.bertab = [];
        this.fw = 0;
        this.levelTab = [];
        this.dureTab = [];
        this.redBackground = false;
        this.display = false;
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.storage.set("connexionRequise", "UPC");
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
        this.levelTab = [];
        this.bertab = [];
        this.dureTab = [];
        this.platform.ready().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.global.onConnectWiFi().then(async res=>{
            this.readConnectionParams();
            //})
        }));
    }
    doRefresh(event) {
        this.ionViewWillEnter();
        event.target.complete();
    }
    readConnectionParams() {
        //40414 40415 
        //41225 41239
        localStorage.setItem("currentssid", this.global.upcmodbus.communicationParameters.comGsmName);
        /*this.global.upcmodbus.client.getStringFromHoldingRegister(40045,10).then(res=>{
          this.redBackground = false;
          localStorage.setItem("currentssid",res);
          this.cd.detectChanges();
        }).catch(err=>{
          //localStorage.removeItem("isConnected");
          this.redBackground = true;
          this.cd.detectChanges();
        
          //this.ngOnInit();
        })*/
        this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen2G.toFixed(2));
        this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen3G.toFixed(2));
        this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen4G.toFixed(2));
        this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen2GGPRS.toFixed(2));
        this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen2GEDGE.toFixed(2));
        this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen3G.toFixed(2));
        this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen4G.toFixed(2));
        this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn2G.toFixed(2));
        this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn3G.toFixed(2));
        this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn4G.toFixed(2));
        this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeOffline.toFixed(2));
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 0) {
            this.mode = 'Non enregistré';
            this.ber = 0;
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 1) {
            this.mode = '2G GPRS';
            this.ber = this.bertab[0];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 2) {
            this.mode = '2G EDGE';
            this.ber = this.bertab[1];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 3) {
            this.mode = '3G WCDMA';
            this.ber = this.bertab[2];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 4) {
            this.mode = '3G HSDPA';
            this.ber = this.bertab[2];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 5) {
            this.mode = '3G HSUPA';
            this.ber = this.bertab[2];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 6) {
            this.mode = '3G HSDPA/HSUPA';
            this.ber = this.bertab[2];
        }
        if (this.global.upcmodbus.communicationParameters.comMdmMode == 7) {
            this.mode = '4G';
            this.ber = this.bertab[3];
        }
        this.level = this.global.upcmodbus.communicationParameters.comGsmLevel;
        /*this.global.interval =
        setInterval(()=>{
         
            this.global.upcmodbus.client.readHoldingRegisters(40414,10).then(res=>{
              var connect = res[0];
              
              if(connect == 0){
                this.mode = 'Non enregistré';this.ber = 0;
              } if(connect == 1) {
                this.mode =  '2G GPRS'; this.ber = this.bertab[0];
              } if(connect == 2){
                this.mode =  '2G EDGE'; this.ber = this.bertab[1];
              } if(connect == 3){
                this.mode =  '3G WCDMA';this.ber = this.bertab[2];
              } if(connect == 4) {
                this.mode =  '3G HSDPA';this.ber = this.bertab[2];
              } if(connect == 5) {
                this.mode =  '3G HSUPA';this.ber = this.bertab[2];
              } if(connect == 6) {
                this.mode =  '3G HSDPA/HSUPA';this.ber = this.bertab[2];
              } if(connect == 7) {
                this.mode =  '4G';this.ber = this.bertab[3];
              }
              
              
              this.level = this.global.upcmodbus.client.registerToUint32([res[1]]);
              if(this.level > 500) {
                this.level = 0;
              }
              this.redBackground = false;
              this.cd.detectChanges();
              
            }).catch(err=>{
              this.redBackground = true;
              this.cd.detectChanges();
              //clearInterval(intervalconnect);
            })
            if(this.redBackground) {
              clearInterval(this.global.interval);
              this.ionViewWillEnter()
            }
        
        
          
        },500)*/
    }
    goToNextPage() {
        clearInterval(this.global.interval);
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
ConnectionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connection',
        template: __webpack_require__(/*! raw-loader!./connection.page.html */ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html"),
        styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], ConnectionPage);



/***/ })

}]);
//# sourceMappingURL=connection-connection-module-es2015.js.map