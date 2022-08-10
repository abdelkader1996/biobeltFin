(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cdiff-cdiff-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cdiff/cdiff.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a :\n        {{this.current_ssid}}</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 style=\"text-align: center\">Débits et pression CO2</h3>\n  <h4>{{upcStatus}}</h4>\n  <ion-grid style=\"padding-top: 5%\">\n    <ion-row style=\"text-align: center\">\n      <ion-col size=\"12\"\n        ><ion-button\n          shape=\"round\"\n          expand=\"block\"\n          [color]=\"diffcolor\"\n          disabled=\"true\"\n          >{{typediff}}</ion-button\n        ></ion-col\n      >\n    </ion-row>\n    <ion-row style=\"text-align: center\">\n      <ion-col size=\"3\"\n        ><ion-button shape=\"round\" size=\"small\" (click)=\"onDisableDiff();\"\n          >OFF</ion-button\n        ></ion-col\n      >\n      <ion-col size=\"3\"\n        ><ion-button shape=\"round\" size=\"small\" (click)=\"onEnableDiff();\"\n          >{{textplaydiff}}</ion-button\n        ></ion-col\n      >\n      <ion-col size=\"3\"\n        ><ion-button shape=\"round\" size=\"small\" (click)=\"startstop();\"\n          >{{textdiff}}</ion-button\n        ></ion-col\n      >\n\n      <ion-col size=\"3\"\n        ><ion-button shape=\"round\" size=\"small\" (click)=\"onCheck();\"\n          >CHECK</ion-button\n        ></ion-col\n      >\n    </ion-row>\n  </ion-grid>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center\">Paramètre</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col> Débit Max </ion-col>\n          <ion-col>\n            <input\n              *ngIf=\"!redBackground\"\n              type=\"number\"\n              class=\"form-control form-control-sm\"\n              step=\"0.1\"\n              (click)=\"unsubscribeRefresh()\"\n              (change)=\"changeFluxMax()\"\n              [(ngModel)]=\"fluxmax\"\n            />\n            <ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col>Intensité</ion-col>\n          <ion-col>\n            <input\n              *ngIf=\"!redBackground\"\n              type=\"number\"\n              class=\"form-control form-control-sm\"\n              (click)=\"unsubscribeRefresh()\"\n              (change)=\"changeIntensity();\"\n              [(ngModel)]=\"intensity\"\n            /><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col>Bouteille active</ion-col>\n          <ion-col>\n            <select\n              *ngIf=\"!redBackground\"\n              class=\"custom-select custom-select-sm\"\n              (ngModelChange)=\"changeResAct($event);\"\n              [(ngModel)]=\"resActive\"\n            >\n              <option value=\"0\">B0</option>\n              <option value=\"1\">B1</option>\n              <option value=\"2\">B2</option>\n            </select>\n            <ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{\"Intensité : \"+ intensity}}</ion-label\n            >\n            <ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label\n            >\n            <ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"\n            ><ion-label color=\"dark\" style=\"font-weight: bolder\">\n              Réf</ion-label\n            ></ion-col\n          >\n          <ion-col size=\"3\"\n            ><ion-label color=\"dark\" style=\"font-weight: bolder\"\n              >Mesure</ion-label\n            ></ion-col\n          >\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"\n            ><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col\n          >\n          <ion-col size=\"3\"\n            ><ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{debiRef.toFixed(3)}}</ion-label\n            ><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n          <ion-col\n            size=\"3\"\n            [ngClass]=\"{'bgsuccess':backgroundeb,'bgdanger':!backgroundeb, 'bgwarning':backgrounddangerdeb}\"\n            ><ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{debiMes.toFixed(3)}}</ion-label\n            ><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"\n            ><ion-label color=\"dark\">PE (Bars):</ion-label></ion-col\n          >\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"\n            ><ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{peMes.toFixed(3)}}</ion-label\n            ><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"\n            ><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col\n          >\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"\n            ><ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{psMes.toFixed(3)}}</ion-label\n            ><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"\n            ><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col\n          >\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"\n            ><ion-label *ngIf=\"!redBackground\" color=\"dark\"\n              >{{psCompMes.toFixed(3)}}</ion-label\n            ><ion-label *ngIf=\"redBackground\">-</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-title style=\"text-align: center\">Offsets</ion-card-title>\n        <ion-card-content>\n          <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-col size=\"6\">PE (bar)</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                type=\"tel\"\n                [(ngModel)]=\"offsetPE\"\n                (focusout)=\"changeoffsetPE();\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">PS (bar)</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                [(ngModel)]=\"offsetPS\"\n                type=\"tel\"\n                (focusout)=\"changeoffsetPS();\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">Debit (nl/min)</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                [(ngModel)]=\"offsetdeb\"\n                type=\"tel\"\n                (focusout)=\"changeoffsetdeb();\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-title style=\"text-align: center\">PID</ion-card-title>\n        <ion-card-content>\n          <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-col size=\"6\">Prop</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                [(ngModel)]=\"pidprog\"\n                type=\"tel\"\n                (focusout)=\"changePID();\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">INT</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                [(ngModel)]=\"pidint\"\n                type=\"tel\"\n                (focusout)=\"changeINT();\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">DER</ion-col>\n            <ion-col size=\"6\"\n              ><ion-input\n                *ngIf=\"!redBackground\"\n                [(ngModel)]=\"pider\"\n                type=\"tel\"\n                (focusout)=\"changeDIR()\"\n              ></ion-input\n              ><ion-label *ngIf=\"redBackground\">-</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-button\n    *ngIf=\"!global.displayLoading\"\n    style=\"float: left\"\n    fill=\"clear\"\n    (click)=\"global.onReadStatiqueEnable()\"\n  >\n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button\n    *ngIf=\"global.displayLoading\"\n    style=\"float: left\"\n    fill=\"clear\"\n    color=\"primary\"\n  >\n    <ion-spinner></ion-spinner>\n  </ion-button>\n  <ion-button\n    *ngIf=\"display\"\n    style=\"float: right\"\n    fill=\"clear\"\n    (click)=\"goToNextPage()\"\n    >Suivant<ion-icon name=\"arrow-forward\"></ion-icon\n  ></ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/cdiff/cdiff-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cdiff/cdiff-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CdiffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageRoutingModule", function() { return CdiffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");




const routes = [
    {
        path: '',
        component: _cdiff_page__WEBPACK_IMPORTED_MODULE_3__["CdiffPage"]
    }
];
let CdiffPageRoutingModule = class CdiffPageRoutingModule {
};
CdiffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CdiffPageRoutingModule);



/***/ }),

/***/ "./src/app/cdiff/cdiff.module.ts":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.module.ts ***!
  \***************************************/
/*! exports provided: CdiffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageModule", function() { return CdiffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdiff-routing.module */ "./src/app/cdiff/cdiff-routing.module.ts");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");







let CdiffPageModule = class CdiffPageModule {
};
CdiffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__["CdiffPageRoutingModule"]
        ],
        declarations: [_cdiff_page__WEBPACK_IMPORTED_MODULE_6__["CdiffPage"]]
    })
], CdiffPageModule);



/***/ }),

/***/ "./src/app/cdiff/cdiff.page.scss":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n\nion-input {\n  border: solid 1px;\n  text-align: center;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2RpZmYvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGNkaWZmXFxjZGlmZi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NkaWZmL2NkaWZmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7QUNFSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQzs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9jZGlmZi9jZGlmZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdkYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uYmd3YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cblxuaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qL1xuXG4iLCIuYmdkYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJnd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/cdiff/cdiff.page.ts":
/*!*************************************!*\
  !*** ./src/app/cdiff/cdiff.page.ts ***!
  \*************************************/
/*! exports provided: CdiffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPage", function() { return CdiffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");









let CdiffPage = class CdiffPage {
    //diffusion à l'arrêt start reload front detectchange
    constructor(global, platform, loadingCTRL, ngZone, hotspot, network, cd, router, storage, events) {
        this.global = global;
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.hotspot = hotspot;
        this.network = network;
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
        this.upcStatus = 0;
        this.textdiff = "ADJUST";
        this.colordif = "light";
        this.textplaydiff = "DIFF";
        this.colorplayfiff = "light";
        this.colordis = "light";
        this.colorcheck = "light";
        this.offsetPE = 0;
        this.offsetPS = 0;
        this.offsetdeb = 0;
        this.pidprog = 0;
        this.pidint = 0;
        this.pider = 0;
        this.fluxmax = 0;
        this.intensity = 0;
        this.resActive = 0;
        this.temp = 0;
        this.debiRef = 0;
        this.peRef = 0;
        this.psRef = 0;
        this.debiMes = 0;
        this.peMes = 0;
        this.psMes = 0;
        this.psComp = 0;
        this.psCompMes = 0;
        this.backgroundeb = false;
        this.backgrounddangerdeb = false;
        this.diffcolor = "light";
        this.typediff = "Mode de diffusion";
        this.redBackground = false;
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() { }
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
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_8__["CorrespondancesRegistres"]();
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
            if (this.tryToRead && this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                // lecture statique :
                this.isLoading = true;
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
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
            if (this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                // lecture statique :
                this.isLoading = true;
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "cdiff-cyclique")
                    .then((res) => {
                    if (res == true) {
                        //this.tryToRead = false;
                        this.isLoading = false;
                        console.log(">  lecture reussi ");
                        this.subscribeRefreshCyclique();
                        this.events.publish("loadParameters");
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                        // this.tryToRead = false;
                    }
                    else {
                        console.log(">  lecture echouée  ");
                        this.isLoading = false;
                        // this.tryToRead = true;
                        this.global.statutConnexion = "Aucune";
                        this.global.lectureStatiqueEnCours = false;
                        this.global.displayLoading = false;
                    }
                })
                    .catch((err) => {
                    // this.tryToRead = true;
                    this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            }
        }), 500);
    }
    ecrir(variable, value) {
        console.log(" 1-apres ecriture this alarme  basse global  avant e criture:" +
            this.global.upcmodbus.alarm.alrResLowEn);
        if (variable.type == "int") {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setIntInHoldingRegister(variable.adr, variable.dim, value)
                .then(() => {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
                    .then((res) => {
                    if (res == true) {
                        this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        this.subscribeRefresh();
                        this.events.publish("loadParameters");
                        console.log(" 2 -apres ecriture this alarme  basse global :" +
                            this.global.upcmodbus.alarm.alrResLowEn);
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
        else if (variable.type == "float") {
            console.log(":::::::::::::::::ecrir un flottant :::::::::::::");
            this.isLoading = true;
            this.global.upcmodbus.client
                .setFloatInHoldingRegister(variable.adr, value)
                .then(() => {
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
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
            })
                .catch(() => {
                alert("écriture impossible");
                this.isLoading = false;
            });
        }
        else {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setStringArrayInHoldingResgisters(variable.adr, value)
                .then(() => {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
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
    startstop() {
        this.onChangeDiff();
    }
    doRefresh(event) {
        this.unsubscribeRefresh();
        this.global.onReadStatiqueEnable().then(() => {
            this.subscribeRefresh();
        });
    }
    onChangeDiff() {
        this.ecrir(this.correspondancesRegistres.upcMode, 2);
    }
    onDisableDiff() {
        this.ecrir(this.correspondancesRegistres.upcMode, 0);
    }
    onEnableDiff() {
        this.ecrir(this.correspondancesRegistres.upcMode, 1);
    }
    onCheck() {
        this.ecrir(this.correspondancesRegistres.upcMode, 3);
    }
    changeIntensity() {
        this.ecrir(this.correspondancesRegistres.upcDiffLvlAdj, this.intensity);
    }
    changeFluxMax() {
        console.log("flux max : ", this.fluxmax);
        this.ecrir(this.correspondancesRegistres.co2FlowRefAdj, this.fluxmax);
    }
    changeResAct() {
        this.resActive = this.resActive == 1 ? 2 : 1;
        this.ecrir(this.correspondancesRegistres.co2ResActAdj, this.resActive);
    }
    changePID() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change PID");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidProp, this.pidprog);
    }
    changeINT() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change INT");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidInteg, this.pidint);
    }
    changeDIR() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change DIR");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidDiff, this.pider);
    }
    changeoffsetPE() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPE");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressInpOffs, this.offsetPE);
    }
    changeoffsetPS() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPS");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressoutOffs, this.offsetPS);
    }
    changeoffsetdeb() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetdeb");
        this.global.onWriteEnable(this.correspondancesRegistres.co2FlowOffs, this.offsetdeb);
    }
    goToNextPage() {
        this.storage.get("nexturl").then((res) => {
            this.router.navigate([res]);
        });
    }
    ionViewWillLeave() {
        console.log("quitter la page  :");
        clearInterval(this.do);
    }
    subscribeRefresh() {
        this.events.subscribe("loadParameters", ($event) => {
            var status = this.global.upcmodbus.general.upcStatus;
            this.upcStatus = this.global.upcmodbus.general.upcStatus;
            if (status == 0) {
                this.colordis = "danger";
                this.colorcheck = "light";
                this.colorplayfiff = "light";
                this.colordif = "light";
                this.typediff = "Diffusion OFF";
                this.diffcolor = "danger";
            }
            else if (status == 3) {
                this.colorcheck = "primary";
                this.colordis = "light";
                this.colorplayfiff = "light";
                this.colordif = "light";
                this.typediff = "Mode CHECK Pressions";
                this.diffcolor = "warning";
            }
            else if (status == 2) {
                this.colordif = "primary";
                this.colorplayfiff = "light";
                this.colordis = "light";
                this.colorcheck = "light";
                this.diffcolor = "tertiary";
                this.typediff = "Mode ADJUST";
            }
            else {
                this.colorplayfiff = "primary";
                this.colordif = "light";
                this.colorcheck = "light";
                this.colordis = "light";
                this.typediff = "Diff. programmée ACTIF";
                this.diffcolor = "primary";
            }
            this.offsetPE = this.global.upcmodbus.diffusions.co2PressInpOffs;
            this.offsetPS = this.global.upcmodbus.diffusions.co2PressOutOffs;
            this.offsetdeb = this.global.upcmodbus.diffusions.co2FlowOffs;
            this.pidprog = this.global.upcmodbus.general.upcCo2PidProp;
            this.pidint = this.global.upcmodbus.general.upcCo2PidInteg;
            this.pider = this.global.upcmodbus.general.upcCo2PidDiff;
            //40018
            this.fluxmax = this.global.upcmodbus.general.co2FlowRefAdj;
            //40065
            this.intensity = this.global.upcmodbus.diffusions.upcDiffLvlAdj;
            //40150
            this.resActive = this.global.upcmodbus.reserves.co2ResActAdj;
            this.debiRef = (this.fluxmax * this.intensity) / 10;
            //this.global.interval = setInterval(async ()=>{
            //40416
            //this.intensity = this.upc.client.registerToUint32(res[0]);
            //40435
            this.peMes = this.global.upcmodbus.diffusions.co2PresInpAvg;
            //40437
            this.psMes = this.global.upcmodbus.diffusions.co2PresOutAvg;
            //40439
            this.debiMes = this.global.upcmodbus.diffusions.co2FlowAvg;
            if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 5) {
                this.backgroundeb = true;
                this.backgrounddangerdeb = false;
            }
            else if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 10) {
                this.backgrounddangerdeb = true;
            }
            else {
                this.backgroundeb = false;
                this.backgrounddangerdeb = false;
            }
            //40451
            this.temp = this.global.upcmodbus.diffusions.co2TempAvg;
            //40463
            this.psCompMes = this.global.upcmodbus.diffusions.co2PressOutComp;
        });
    }
    subscribeRefreshCyclique() {
        this.events.subscribe("loadParameters", ($event) => {
            console.log("subscribe refresh cyclique");
            //this.intensity = this.upc.client.registerToUint32(res[0]);
            //40435
            this.peMes = this.global.upcmodbus.diffusions.co2PresInpAvg;
            //40437
            this.psMes = this.global.upcmodbus.diffusions.co2PresOutAvg;
            //40439
            this.debiMes = this.global.upcmodbus.diffusions.co2FlowAvg;
            if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 5) {
                this.backgroundeb = true;
                this.backgrounddangerdeb = false;
            }
            else if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 10) {
                this.backgrounddangerdeb = true;
            }
            else {
                this.backgroundeb = false;
                this.backgrounddangerdeb = false;
            }
            //40451
            this.temp = this.global.upcmodbus.diffusions.co2TempAvg;
            //40463
            this.psCompMes = this.global.upcmodbus.diffusions.co2PressOutComp;
        });
    }
    unsubscribeRefresh() {
        this.events.unsubscribe("loadParameters");
    }
};
CdiffPage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
];
CdiffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cdiff",
        template: __webpack_require__(/*! raw-loader!./cdiff.page.html */ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html"),
        styles: [__webpack_require__(/*! ./cdiff.page.scss */ "./src/app/cdiff/cdiff.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
], CdiffPage);



/***/ })

}]);
//# sourceMappingURL=cdiff-cdiff-module-es2015.js.map