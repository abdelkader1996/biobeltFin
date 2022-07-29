(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["namepiege-namepiege-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/namepiege/namepiege.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    \n     <ion-buttons>\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a : {{this.current_ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Paramètres Généraux UPC</h3>\n  <ion-card>\n    <ion-card-content>\n      <ion-row><ion-col size=\"6\">Nom de l'UPC</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"name\" enterkeyhint=\"enter\" placeholder=\"Nom de l'UPC...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeName();\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Nombre de pièges</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"nbpiege\" enterkeyhint=\"enter\" placeholder=\"Nombre de pièges...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangePieges();\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">UUID</ion-col><ion-col size=\"6\">{{uuid}}</ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Fuseau Horaire (h)</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"fusehor\" enterkeyhint=\"enter\" type=\"number\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeFusHor()\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Horloge</ion-col><ion-col size=\"6\">{{horloge}}</ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Firmware</ion-col><ion-col size=\"6\">{{\"v\"+firm}}</ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n\n  <div style=\"text-align: center;\">\n  <ion-button color=\"danger\" (click)=\"onWipe();\">\n    WIPE\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"onReset();\">RESET</ion-button>\n</div>\n</ion-content>\n<ion-footer style=\"display: inline-block\">\n  <ion-button *ngIf=\"!this.isLoading\" style=\"float: left\" fill=\"clear\" (click)=\"this.ionViewWillEnter()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n    hhhh\n  </ion-button>\n  <ion-button *ngIf=\"this.isLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/namepiege/namepiege-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/namepiege/namepiege-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NamepiegePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageRoutingModule", function() { return NamepiegePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");




const routes = [
    {
        path: '',
        component: _namepiege_page__WEBPACK_IMPORTED_MODULE_3__["NamepiegePage"]
    }
];
let NamepiegePageRoutingModule = class NamepiegePageRoutingModule {
};
NamepiegePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NamepiegePageRoutingModule);



/***/ }),

/***/ "./src/app/namepiege/namepiege.module.ts":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.module.ts ***!
  \***********************************************/
/*! exports provided: NamepiegePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageModule", function() { return NamepiegePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namepiege-routing.module */ "./src/app/namepiege/namepiege-routing.module.ts");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");







let NamepiegePageModule = class NamepiegePageModule {
};
NamepiegePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__["NamepiegePageRoutingModule"]
        ],
        declarations: [_namepiege_page__WEBPACK_IMPORTED_MODULE_6__["NamepiegePage"]]
    })
], NamepiegePageModule);



/***/ }),

/***/ "./src/app/namepiege/namepiege.page.scss":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  text-align: center;\n  color: black;\n}\n\nion-col {\n  color: black;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZXBpZWdlL0M6XFxVc2Vyc1xcZGV2ZWxcXE9uZURyaXZlXFxCdXJlYXVcXGItRGV2L3NyY1xcYXBwXFxuYW1lcGllZ2VcXG5hbWVwaWVnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL25hbWVwaWVnZS9uYW1lcGllZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9uYW1lcGllZ2UvbmFtZXBpZWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICB0ZXh0LWFsaWduIDpjZW50ZXI7XG4gICAgY29sb3IgOiBibGFjaztcbiB9XG5pb24tY29sIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yIDogYmxhY2s7XG59Ki9cblxuIiwiaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY29sIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvciA6IGJsYWNrO1xufSovIl19 */"

/***/ }),

/***/ "./src/app/namepiege/namepiege.page.ts":
/*!*********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.ts ***!
  \*********************************************/
/*! exports provided: NamepiegePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePage", function() { return NamepiegePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");






let NamepiegePage = class NamepiegePage {
    // Pièges sauvegardes plan
    constructor(global, storage, alertCTRL, events) {
        this.global = global;
        this.storage = storage;
        this.alertCTRL = alertCTRL;
        this.events = events;
        this.check = false;
        this.current_ssid = "NO WIFI";
        this.stored_ssid = "NO WIFI";
        this.password_ssid = "";
        this.connection_modbus = false;
        this.isLoading = false;
        this.tryToRead = false;
        this.name = "";
        this.nbpiege = 0;
        this.uuid = "";
        this.firm = "";
        this.redBackground = false;
        this.length = 0;
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.tryToRead = true;
        console.log("=========================================================================");
        console.log("========================== page  accueil :===============================");
        console.log("=========================================================================");
        this.global.connexionRequise = "UPC";
        console.log(" - Connexion requise :" + this.global.connexionRequise);
        console.log(" - Connexion  actuel  (avant on read statique) :" +
            this.global.statutConnexion);
        this.ConnecterUPC();
        this.Read();
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_5__["CorrespondancesRegistres"]();
        this.horloge = this.global.upcmodbus.general.upcClock;
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
            if (this.tryToRead && this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                // lecture statique :
                this.isLoading = true;
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "namepiege")
                    .then((res) => {
                    if (res == true) {
                        this.tryToRead = false;
                        this.isLoading = false;
                        console.log(">  lecture reussi ");
                        this.subscribeRefresh();
                        this.events.publish("loadParameters");
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                        this.tryToRead = false;
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
    ngOnInit() { }
    checkConnectionWifi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("check wifi conx");
            let wifi = yield WifiWizard2.getConnectedSSID();
            console.log(wifi);
            this.current_ssid = wifi;
        });
    }
    doRefresh(event) {
        this.ionViewWillEnter();
        event.target.complete();
    }
    toZero4(d) {
        return ("0000" + (+d).toString(16)).substr(-4);
    }
    onChangeName() {
        console.log(" Accueil :: ecrir : nome upc  ");
        this.ecrir(this.correspondancesRegistres.upcNameId, this.name);
    }
    onChangePieges() {
        console.log(" Accueil :: ecrir : num piege ");
        this.ecrir(this.correspondancesRegistres.upcTrapNum, this.nbpiege);
    }
    ecrir(variable, value) {
        if (variable.type == "int") {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setIntInHoldingRegister(variable.adr, variable.dim, value)
                .then(() => {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "namepiege")
                    .then((res) => {
                    if (res == true) {
                        this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        this.subscribeRefresh();
                        this.events.publish("loadParameters");
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                        this.tryToRead = false;
                    }
                    else {
                        this.isLoading = false;
                        this.global.statutConnexion = "Aucune";
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                    }
                })
                    .catch((err) => {
                    this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            })
                .catch(() => {
                this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
        else {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setStringArrayInHoldingResgisters(variable, value)
                .then(() => {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "namepiege")
                    .then((res) => {
                    if (res == true) {
                        this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        this.subscribeRefresh();
                        this.events.publish("loadParameters");
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                        this.tryToRead = false;
                    }
                    else {
                        this.isLoading = false;
                        this.global.statutConnexion = "Aucune";
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                    }
                })
                    .catch((err) => {
                    this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            })
                .catch(() => {
                this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
    }
    onWipe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCTRL.create({
                message: "Êtes vous sûr d'effectuer un Wipe ?",
                buttons: [
                    { text: "Non" },
                    {
                        text: "Oui",
                        handler: () => {
                            // ecrire la commande  EEEE dans 40011 pour faire un wipe
                            this.global.upcmodbus.client
                                .setIntInHoldingRegister(40011, 1, 61166)
                                .then((res) => {
                                var d = new Date();
                                this.global.logs.push(this.global.msToTime(d.getTime()) + " - écriture réussie");
                                this.subscribeRefresh();
                                this.global.ecritureEnCours = false;
                            })
                                .catch((err) => {
                                var d = new Date();
                                this.global.logs.push(this.global.msToTime(d.getTime()) + " - écriture échouée");
                                this.subscribeRefresh();
                                this.global.ecritureEnCours = false;
                            });
                        },
                    },
                ],
            });
            alert.present();
        });
    }
    onReset() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCTRL.create({
                message: "Êtes vous sûr d'effectuer un Reset ?",
                buttons: [
                    { text: "Non" },
                    {
                        text: "Oui",
                        handler: () => {
                            // ecrire la commande  EEEE dans 40011 pour faire un wipe
                            this.global.upcmodbus.client
                                .setIntInHoldingRegister(40011, 1, 65535)
                                .then((res) => {
                                var d = new Date();
                                this.global.logs.push(this.global.msToTime(d.getTime()) + " - écriture réussie");
                                this.subscribeRefresh();
                                this.global.ecritureEnCours = false;
                            })
                                .catch((err) => {
                                var d = new Date();
                                this.global.logs.push(this.global.msToTime(d.getTime()) + " - écriture échouée");
                                this.subscribeRefresh();
                                this.global.ecritureEnCours = false;
                            });
                        },
                    },
                ],
            });
            alert.present();
        });
    }
    /*
    async onReset() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Reset ?",
                                               buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
                                                this.global.onWriteModbusVariables().then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                  this.global.ecritureEnCours = true;
                                                  this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,65535).then(res=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  }).catch(err=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  })
                                                })
                                                  
                                                
                                               }}]
      })
      alert.present();
      
    }*/
    onChangeFusHor() {
        this.ecrir(this.correspondancesRegistres.upcTimeZone, this.fusehor);
    }
    unsubscribeRefresh() {
        this.events.unsubscribe("loadParameters");
    }
    subscribeRefresh() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - subscribe");
        this.events.subscribe("loadParameters", ($event) => {
            this.name = this.global.upcmodbus.nameId;
            this.length = this.name.length;
            this.nbpiege = this.global.upcmodbus.general.upcTrapNum;
            this.uuid = this.global.upcmodbus.general.upcMcuUid;
            this.fusehor = this.global.upcmodbus.general.upcTimeZone;
            this.firm = "" + this.global.upcmodbus.general.upcFwVer;
            this.horloge = this.global.upcmodbus.general.upcClock;
        });
    }
    ionViewWillLeave() {
        console.log("quitter la page  :");
        clearInterval(this.do);
    }
};
NamepiegePage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
NamepiegePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-namepiege",
        template: __webpack_require__(/*! raw-loader!./namepiege.page.html */ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html"),
        styles: [__webpack_require__(/*! ./namepiege.page.scss */ "./src/app/namepiege/namepiege.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], NamepiegePage);



/***/ })

}]);
//# sourceMappingURL=namepiege-namepiege-module-es2015.js.map