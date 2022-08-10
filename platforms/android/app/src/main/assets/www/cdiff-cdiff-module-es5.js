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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");




var routes = [
    {
        path: '',
        component: _cdiff_page__WEBPACK_IMPORTED_MODULE_3__["CdiffPage"]
    }
];
var CdiffPageRoutingModule = /** @class */ (function () {
    function CdiffPageRoutingModule() {
    }
    CdiffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CdiffPageRoutingModule);
    return CdiffPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdiff-routing.module */ "./src/app/cdiff/cdiff-routing.module.ts");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");







var CdiffPageModule = /** @class */ (function () {
    function CdiffPageModule() {
    }
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
    return CdiffPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");









var CdiffPage = /** @class */ (function () {
    //diffusion à l'arrêt start reload front detectchange
    function CdiffPage(global, platform, loadingCTRL, ngZone, hotspot, network, cd, router, storage, events) {
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
        this.offsetPE = "0";
        this.offsetPS = "0";
        this.offsetdeb = "0";
        this.pidprog = "0";
        this.pidint = "0";
        this.pider = "0";
        this.fluxmax = 0;
        this.intensity = 0;
        this.resActive = 0;
        this.temp = 0;
        this.debiRef = 0;
        this.peRef = 0;
        this.psRef = 0;
        this.debiMes = "0";
        this.peMes = "0";
        this.psMes = "0";
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
    CdiffPage.prototype.ngOnInit = function () { };
    CdiffPage.prototype.ionViewWillEnter = function () {
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
    };
    CdiffPage.prototype.ConnecterUPC = function () {
        var _this = this;
        //connection a l 'UPC :
        console.log("> try  connecter a l upc ");
        if (this.global.mode != "modeTest") {
            this.isLoading = true;
            this.storage.get("ssid_upc").then(function (stored_ssid) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.storage.get("password").then(function (password) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var wifi;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.stored_ssid = stored_ssid;
                                    this.password_ssid = password;
                                    //recuperer l ssid  +password
                                    console.log("acceuil , stored password" + password);
                                    console.log("acceuil , stored ssid" + stored_ssid);
                                    return [4 /*yield*/, WifiWizard2.getConnectedSSID()];
                                case 1:
                                    wifi = _a.sent();
                                    console.log("connected ssid: " + wifi);
                                    if (wifi != stored_ssid) {
                                        console.log("wifi diffrents :>>>>>>>>>");
                                        console.log("connecte wifi ");
                                        WifiWizard2.connect(stored_ssid, password)
                                            .then(function () {
                                            //connexion reussi a l UPC  :
                                            console.log("connexion wifi up reussie :");
                                            _this.check = true;
                                            _this.global.statutConnexion = "UPC";
                                            _this.global
                                                .onConnectModbus()
                                                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    console.log("accueil , connexion modbus reussie >> ");
                                                    this.connection_modbus = true;
                                                    this.isLoading = false;
                                                    //on peut lire
                                                    this.tryToRead = true;
                                                    return [2 /*return*/];
                                                });
                                            }); })
                                                .catch(function (err) {
                                                console.log("accueil + connexion modbus échouée  ");
                                                _this.isLoading = false;
                                                _this.connection_modbus = false;
                                            });
                                        })
                                            .catch(function (err) {
                                            console.log("connexion impossible a l'UPC wifi");
                                            console.log(err);
                                        });
                                    }
                                    else {
                                        this.global
                                            .onConnectModbus()
                                            .then(function () {
                                            //on tente une connexion modbus pour déterminer si c'est un upc
                                            //connexion modbus réussie : c'est un upc
                                            console.log("accueil + connexion modbus reussie ");
                                            _this.connection_modbus = true;
                                            _this.isLoading = false;
                                        })
                                            .catch(function (err) {
                                            console.log("accueil + connexion modbus échouée  ");
                                            _this.isLoading = false;
                                            _this.connection_modbus = false;
                                        });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        }
    };
    CdiffPage.prototype.checkConnectionWifi = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var wifi;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("check wifi conx");
                        return [4 /*yield*/, WifiWizard2.getConnectedSSID()];
                    case 1:
                        wifi = _a.sent();
                        console.log(wifi);
                        this.current_ssid = wifi;
                        return [2 /*return*/];
                }
            });
        });
    };
    CdiffPage.prototype.Read = function () {
        var _this = this;
        this.do = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("======================== cycle ================================");
                        this.checkConnectionWifi();
                        if (!(this.current_ssid != this.stored_ssid)) return [3 /*break*/, 2];
                        console.log("wifi diff >>>> ");
                        console.log("disconnect ");
                        return [4 /*yield*/, WifiWizard2.disconnect(this.current_ssid)
                                .then(function (result) {
                                console.log("connect ");
                                _this.ConnecterUPC();
                            })
                                .catch(function (err) { })];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        //connecter au wifi
                        console.log("reconnexion  >>>> ");
                        _a.label = 2;
                    case 2:
                        if (this.global.upcmodbus.state == 1) {
                            console.log("Try to read >");
                            // lecture statique :
                            this.isLoading = true;
                            this.global.upcmodbus
                                .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
                                .then(function (res) {
                                if (res == true) {
                                    _this.tryToRead = false;
                                    _this.isLoading = false;
                                    console.log(">  lecture reussi ");
                                    _this.subscribeRefresh();
                                    _this.events.publish("loadParameters");
                                    _this.global.lectureStatiqueEnCours = false;
                                    _this.global.displayLoading = false;
                                    _this.tryToRead = false;
                                }
                                else {
                                    console.log(">  lecture echouée  ");
                                    _this.isLoading = false;
                                    _this.tryToRead = true;
                                    _this.global.statutConnexion = "Aucune";
                                    _this.global.lectureStatiqueEnCours = false;
                                    _this.global.displayLoading = false;
                                }
                            })
                                .catch(function (err) {
                                _this.tryToRead = true;
                                _this.isLoading = false;
                                console.log("acceuil::erreur lecture");
                                console.log(err);
                            });
                            //fin de lecture statique :
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    };
    CdiffPage.prototype.ecrir = function (variable, value) {
        var _this = this;
        console.log(" 1-apres ecriture this alarme  basse global  avant e criture:" +
            this.global.upcmodbus.alarm.alrResLowEn);
        if (variable.type == "int") {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setIntInHoldingRegister(variable.adr, variable.dim, value)
                .then(function () {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "cdiff")
                    .then(function (res) {
                    if (res == true) {
                        _this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        _this.subscribeRefresh();
                        _this.events.publish("loadParameters");
                        console.log(" 2 -apres ecriture this alarme  basse global :" +
                            _this.global.upcmodbus.alarm.alrResLowEn);
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                        _this.tryToRead = false;
                    }
                    else {
                        _this.isLoading = false;
                        _this.global.statutConnexion = "Aucune";
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                    }
                })
                    .catch(function (err) {
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            })
                .catch(function () {
                _this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
        else if (variable.type == "float") {
            console.log(":::::::::::::::::ecrir un flottant :::::::::::::");
            this.isLoading = true;
            this.global.upcmodbus.client
                .setFloatInHoldingRegister(variable.adr, value)
                .then(function () {
                // lecture statique :
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "cdiff")
                    .then(function (res) {
                    if (res == true) {
                        _this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        _this.subscribeRefresh();
                        _this.events.publish("loadParameters");
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                        _this.tryToRead = false;
                    }
                    else {
                        _this.isLoading = false;
                        _this.global.statutConnexion = "Aucune";
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                    }
                })
                    .catch(function (err) {
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
            })
                .catch(function () {
                alert("écriture impossible");
                _this.isLoading = false;
            });
        }
        else {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setStringArrayInHoldingResgisters(variable.adr, value)
                .then(function () {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "cdiff")
                    .then(function (res) {
                    if (res == true) {
                        _this.isLoading = false;
                        console.log("accueil:  lecture reussi ");
                        _this.subscribeRefresh();
                        _this.events.publish("loadParameters");
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                        _this.tryToRead = false;
                    }
                    else {
                        _this.isLoading = false;
                        _this.global.statutConnexion = "Aucune";
                        _this.global.lectureStatiqueEnCours = false;
                        _this.global.displayLoading = false;
                    }
                })
                    .catch(function (err) {
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            })
                .catch(function () {
                _this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
    };
    CdiffPage.prototype.startstop = function () {
        this.onChangeDiff();
    };
    CdiffPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.unsubscribeRefresh();
        this.global.onReadStatiqueEnable().then(function () {
            _this.subscribeRefresh();
        });
    };
    CdiffPage.prototype.onChangeDiff = function () {
        this.ecrir(this.correspondancesRegistres.upcMode, 2);
    };
    CdiffPage.prototype.onDisableDiff = function () {
        this.ecrir(this.correspondancesRegistres.upcMode, 0);
    };
    CdiffPage.prototype.onEnableDiff = function () {
        this.ecrir(this.correspondancesRegistres.upcMode, 1);
    };
    CdiffPage.prototype.onCheck = function () {
        this.ecrir(this.correspondancesRegistres.upcMode, 3);
    };
    CdiffPage.prototype.changeIntensity = function () {
        this.ecrir(this.correspondancesRegistres.upcDiffLvlAdj, this.intensity);
    };
    CdiffPage.prototype.changeFluxMax = function () {
        console.log("flux max : ", this.fluxmax);
        this.ecrir(this.correspondancesRegistres.co2FlowRefAdj, this.fluxmax);
    };
    CdiffPage.prototype.changeResAct = function () {
        this.resActive = this.resActive == 1 ? 2 : 1;
        this.ecrir(this.correspondancesRegistres.co2ResActAdj, this.resActive);
    };
    CdiffPage.prototype.changePID = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change PID");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidProp, this.pidprog);
    };
    CdiffPage.prototype.changeINT = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change INT");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidInteg, this.pidint);
    };
    CdiffPage.prototype.changeDIR = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change DIR");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidDiff, this.pider);
    };
    CdiffPage.prototype.changeoffsetPE = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPE");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressInpOffs, this.offsetPE);
    };
    CdiffPage.prototype.changeoffsetPS = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPS");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressoutOffs, this.offsetPS);
    };
    CdiffPage.prototype.changeoffsetdeb = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetdeb");
        this.global.onWriteEnable(this.correspondancesRegistres.co2FlowOffs, this.offsetdeb);
    };
    CdiffPage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    CdiffPage.prototype.subscribeRefresh = function () {
        var _this = this;
        this.events.subscribe("loadParameters", function ($event) {
            var status = _this.global.upcmodbus.general.upcStatus;
            _this.upcStatus = _this.global.upcmodbus.general.upcStatus;
            if (status == 0) {
                _this.colordis = "danger";
                _this.colorcheck = "light";
                _this.colorplayfiff = "light";
                _this.colordif = "light";
                _this.typediff = "Diffusion OFF";
                _this.diffcolor = "danger";
            }
            else if (status == 3) {
                _this.colorcheck = "primary";
                _this.colordis = "light";
                _this.colorplayfiff = "light";
                _this.colordif = "light";
                _this.typediff = "Mode CHECK Pressions";
                _this.diffcolor = "warning";
            }
            else if (status == 2) {
                _this.colordif = "primary";
                _this.colorplayfiff = "light";
                _this.colordis = "light";
                _this.colorcheck = "light";
                _this.diffcolor = "tertiary";
                _this.typediff = "Mode ADJUST";
            }
            else {
                _this.colorplayfiff = "primary";
                _this.colordif = "light";
                _this.colorcheck = "light";
                _this.colordis = "light";
                _this.typediff = "Diff. programmée ACTIF";
                _this.diffcolor = "primary";
            }
            _this.offsetPE =
                _this.global.upcmodbus.diffusions.co2PressInpOffs.toFixed(2);
            _this.offsetPS =
                _this.global.upcmodbus.diffusions.co2PressOutOffs.toFixed(2);
            _this.offsetdeb = _this.global.upcmodbus.diffusions.co2FlowOffs.toFixed(2);
            _this.pidprog = _this.global.upcmodbus.general.upcCo2PidProp.toFixed(2);
            _this.pidint = _this.global.upcmodbus.general.upcCo2PidInteg.toFixed(2);
            _this.pider = _this.global.upcmodbus.general.upcCo2PidDiff.toFixed(2);
            //40018
            _this.fluxmax = _this.global.upcmodbus.general.co2FlowRefAdj;
            //40065
            _this.intensity = _this.global.upcmodbus.diffusions.upcDiffLvlAdj;
            //40150
            _this.resActive = _this.global.upcmodbus.reserves.co2ResActAdj;
            _this.debiRef = (_this.fluxmax * _this.intensity) / 10;
            //this.global.interval = setInterval(async ()=>{
            //40416
            //this.intensity = this.upc.client.registerToUint32(res[0]);
            //40435
            _this.peMes = _this.global.upcmodbus.diffusions.co2PresInpAvg.toFixed(2);
            //40437
            _this.psMes = _this.global.upcmodbus.diffusions.co2PresOutAvg.toFixed(2);
            //40439
            _this.debiMes = _this.global.upcmodbus.diffusions.co2FlowAvg.toFixed(2);
            if (Math.abs(((_this.global.upcmodbus.diffusions.co2FlowAvg - _this.debiRef) /
                _this.debiRef) *
                100) < 5) {
                _this.backgroundeb = true;
                _this.backgrounddangerdeb = false;
            }
            else if (Math.abs(((_this.global.upcmodbus.diffusions.co2FlowAvg - _this.debiRef) /
                _this.debiRef) *
                100) < 10) {
                _this.backgrounddangerdeb = true;
            }
            else {
                _this.backgroundeb = false;
                _this.backgrounddangerdeb = false;
            }
            //40451
            _this.temp = _this.global.upcmodbus.diffusions.co2TempAvg;
            //40463
            _this.psCompMes = _this.global.upcmodbus.diffusions.co2PressOutComp;
        });
    };
    CdiffPage.prototype.unsubscribeRefresh = function () {
        this.events.unsubscribe("loadParameters");
    };
    CdiffPage.ctorParameters = function () { return [
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
    ]; };
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
    return CdiffPage;
}());



/***/ })

}]);
//# sourceMappingURL=cdiff-cdiff-module-es5.js.map