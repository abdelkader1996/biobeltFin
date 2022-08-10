(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connection-connection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/connection/connection.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a :\n        {{this.current_ssid}}</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center\">Etat de la connexion au réseau</h3>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center\"\n        >Etat Instantané</ion-card-title\n      >\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"8\">Mode</ion-col>\n          <ion-col size=\"4\" *ngIf=\"!redBackground\">{{mode}}</ion-col>\n          <ion-col size=\"4\" *ngIf=\"redBackground\">-</ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Niv.</ion-col>\n          <ion-col size=\"6\"\n            ><ion-range\n              style=\"pointer-events: none\"\n              color=\"danger\"\n              [value]=\"level\"\n              max=\"100\"\n            ></ion-range\n          ></ion-col>\n          <ion-col size=\"4\" *ngIf=\"level < 500 && !redBackground\"\n            >{{level}}</ion-col\n          ><ion-col *ngIf=\"redBackground\" size=\"4\">-</ion-col>\n          <ion-col size=\"4\" *ngIf=\"level >= 500 && !redBackground\"\n            >Non Connecté</ion-col\n          ><ion-col *ngIf=\"redBackground\" size=\"4\">-</ion-col>\n        </ion-row>\n        <!--<ion-row>\n          <ion-col size=\"10\">BER</ion-col>\n          <ion-col size=\"2\">{{ber}}</ion-col>\n        </ion-row> -->\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center\"\n        >Statistiques dernière 24 h</ion-card-title\n      >\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Mode</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\">2G</ion-col>\n          <ion-col size=\"2\">3G</ion-col>\n          <ion-col size=\"2\">4G</ion-col>\n        </ion-row>\n\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Durée</ion-col>\n          <ion-col size=\"2\">{{xComMdmRatioTimeOffline+\" %\"}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmRatioTimeIn2G+\" %\"}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmRatioTimeIn3G+\" %\"}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmRatioTimeIn4G+\" %\"}}</ion-col>\n        </ion-row>\n\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">Niveau</ion-col>\n          <ion-col size=\"2\">{{xComMdmQualMoyen2GGPRS}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmQualMoyen2GEDGE}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmQualMoyen3G}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmQualMoyen4G}}</ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"2\">BER</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\">{{xComMdmRssiMoyen2G}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmRssiMoyen3G}}</ion-col>\n          <ion-col size=\"2\">{{xComMdmRssiMoyen4G}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-button\n    *ngIf=\"display\"\n    style=\"float: right\"\n    fill=\"clear\"\n    (click)=\"goToNextPage()\"\n    >Suivant<ion-icon name=\"arrow-forward\"></ion-icon\n  ></ion-button>\n</ion-footer>\n"

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
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");








let ConnectionPage = class ConnectionPage {
    constructor(platform, global, loadingCTRL, hotspot, ngZone, cd, router, storage, events) {
        this.platform = platform;
        this.global = global;
        this.loadingCTRL = loadingCTRL;
        this.hotspot = hotspot;
        this.ngZone = ngZone;
        this.cd = cd;
        this.router = router;
        this.storage = storage;
        this.events = events;
        this.check = false;
        this.current_ssid = "NO WIFI";
        this.stored_ssid = "NO WIFI";
        this.password_ssid = "";
        this.connection_modbus = false;
        this.isLoading = false;
        this.tryToRead = false;
        this.mode = "";
        this.level = 0;
        this.ber = 0;
        this.bertab = [];
        this.fw = 0;
        this.levelTab = [];
        this.dureTab = [];
        this.redBackground = false;
        this.display = false;
        this.xComMdmRssiMoyen2G = 0;
        this.xComMdmRssiMoyen3G = 0;
        this.xComMdmRssiMoyen4G = 0;
        this.xComMdmQualMoyen2GGPRS = 0;
        this.xComMdmQualMoyen2GEDGE = 0;
        this.xComMdmQualMoyen3G = 0;
        this.xComMdmQualMoyen4G = 0;
        this.xComMdmRatioTimeIn2G = 0;
        this.xComMdmRatioTimeIn3G = 0;
        this.xComMdmRatioTimeIn4G = 0;
        this.xComMdmRatioTimeOffline = 0;
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.tryToRead = true;
        this.global.connexionRequise = "UPC";
        console.log(" - Connexion requise :" + this.global.connexionRequise);
        console.log(" - Connexion  actuel  (avant on read statique) :" +
            this.global.statutConnexion);
        this.ConnecterUPC();
        this.Read();
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_7__["CorrespondancesRegistres"]();
    }
    checkConnectionWifi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("check wifi conx");
            let wifi = yield WifiWizard2.getConnectedSSID();
            console.log(wifi);
            this.current_ssid = wifi;
        });
    }
    Read() {
        this.do = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("======================== cycle ================================");
            this.checkConnectionWifi();
            // en cas de perte de connexion
            if (this.current_ssid != this.stored_ssid) {
                console.log("wifi diff >>>> ");
                console.log("disconnect ");
                let res = yield WifiWizard2.disconnect(this.current_ssid)
                    .then((result) => {
                    console.log("connect ");
                    this.ConnecterUPC();
                })
                    .catch((err) => { });
                console.log(res);
                //connecter au wifi
                console.log("reconnexion  >>>> ");
            }
            else if (this.global.upcmodbus.state != 1) {
                this.ConnecterUPC();
            }
            if (this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                // lecture statique :
                this.isLoading = true;
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "connection")
                    .then((res) => {
                    if (res == true) {
                        this.tryToRead = false;
                        this.isLoading = false;
                        console.log(">  lecture reussi ");
                        this.subscribeRefresh();
                        this.events.publish("loadParameters");
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                        // this.tryToRead = false;
                    }
                    else {
                        console.log(">  lecture echouée  ");
                        this.isLoading = false;
                        this.tryToRead = true;
                        this.global.statutConnexion = "Aucune";
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                    }
                })
                    .catch((err) => {
                    this.tryToRead = true;
                    this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            }
        }), 500);
    }
    subscribeRefresh() {
        var d = new Date();
        this.events.subscribe("loadParameters", ($event) => {
            this.level = this.global.upcmodbus.connectionLevel;
            this.mode = this.getMode(this.global.upcmodbus.connectionMode);
            this.xComMdmRssiMoyen2G = this.global.upcmodbus.xComMdmRssiMoyen2G;
            this.xComMdmRssiMoyen3G = this.global.upcmodbus.xComMdmRssiMoyen3G;
            this.xComMdmRssiMoyen4G = this.global.upcmodbus.xComMdmRssiMoyen4G;
            this.xComMdmQualMoyen2GGPRS =
                this.global.upcmodbus.xComMdmQualMoyen2GGPRS;
            this.xComMdmQualMoyen2GEDGE =
                this.global.upcmodbus.xComMdmQualMoyen2GEDGE;
            this.xComMdmQualMoyen3G = this.global.upcmodbus.xComMdmQualMoyen3G;
            this.xComMdmQualMoyen4G = this.global.upcmodbus.xComMdmQualMoyen4G;
            this.xComMdmRatioTimeIn2G = this.global.upcmodbus.xComMdmRatioTimeIn2G;
            this.xComMdmRatioTimeIn3G = this.global.upcmodbus.xComMdmRatioTimeIn3G;
            this.xComMdmRatioTimeIn4G = this.global.upcmodbus.xComMdmRatioTimeIn4G;
            this.xComMdmRatioTimeOffline =
                this.global.upcmodbus.xComMdmRatioTimeOffline;
        });
    }
    ConnecterUPC() {
        //connection a l 'UPC :
        console.log("> try  connecter a l upc ");
        if (this.global.mode != "modeTest") {
            this.isLoading = true;
            this.storage.get("ssid_upc").then((stored_ssid) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.storage.get("password").then((password) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.stored_ssid = stored_ssid;
                    this.password_ssid = password;
                    //recuperer l ssid  +password
                    console.log("acceuil , stored password" + password);
                    console.log("acceuil , stored ssid" + stored_ssid);
                    //si on est deja connecté a l upc :
                    let wifi = yield WifiWizard2.getConnectedSSID();
                    console.log("connected ssid: " + wifi);
                    if (wifi != stored_ssid) {
                        console.log("wifi diffrents :>>>>>>>>>");
                        console.log("connecte wifi ");
                        WifiWizard2.connect(stored_ssid, password)
                            .then(() => {
                            //connexion reussi a l UPC  :
                            console.log("connexion wifi up reussie :");
                            this.check = true;
                            this.global.statutConnexion = "UPC";
                            this.global
                                .onConnectModbus()
                                .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log("accueil , connexion modbus reussie >> ");
                                this.connection_modbus = true;
                                this.isLoading = false;
                                //on peut lire
                                this.tryToRead = true;
                            }))
                                .catch((err) => {
                                console.log("accueil + connexion modbus échouée  ");
                                this.isLoading = false;
                                this.connection_modbus = false;
                            });
                        })
                            .catch((err) => {
                            console.log("connexion impossible a l'UPC wifi");
                            console.log(err);
                        });
                    }
                    else {
                        this.global
                            .onConnectModbus()
                            .then(() => {
                            //on tente une connexion modbus pour déterminer si c'est un upc
                            //connexion modbus réussie : c'est un upc
                            console.log("accueil + connexion modbus reussie ");
                            this.connection_modbus = true;
                            this.isLoading = false;
                        })
                            .catch((err) => {
                            console.log("accueil + connexion modbus échouée  ");
                            this.isLoading = false;
                            this.connection_modbus = false;
                        });
                    }
                }));
            }));
        }
    }
    getMode(mode) {
        switch (mode) {
            case 0:
                return "Non enregistré";
                break;
            case 1:
                return "2G GPRS";
                break;
            case 2:
                return "2G EDGE";
                break;
            case 3:
                return "3G WCDMA";
                break;
            case 4:
                return "3G HSDPA";
                break;
            case 5:
                return "3G HSUPA";
                break;
            case 6:
                return "3G HSDPA/HSUPA";
                break;
            case 7:
                return "4G";
                break;
            default:
                break;
        }
    }
    doRefresh(event) {
        this.ionViewWillEnter();
        event.target.complete();
    }
    goToNextPage() {
        clearInterval(this.global.interval);
        this.storage.get("nexturl").then((res) => {
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
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-connection",
        template: __webpack_require__(/*! raw-loader!./connection.page.html */ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html"),
        styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__["Hotspot"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], ConnectionPage);



/***/ })

}]);
//# sourceMappingURL=connection-connection-module-es2015.js.map