(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comunicationparam-comunicationparam-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/comunicationparam/comunicationparam.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comunicationparam/comunicationparam.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!--<ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Paramètres de Communication</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.currentssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>-->\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Paramètres de Communication </h3>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Serveur</ion-card-title>\n    <ion-card-content>\n      <ion-row ><ion-col size=\"6\">URL</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"url\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeURL();\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">IP</ion-col><ion-col size=\"6\">{{adIp}}</ion-col></ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Modem</ion-card-title>\n    <ion-card-content>\n      <ion-row ><ion-col size=\"6\">Identifiant</ion-col> <ion-col size=\"6\"><ion-input  [(ngModel)]=\"modemGSM\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeMDMGSM();\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">MdP</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"modemGSMpass\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeMDMGSMPass();\"></ion-input></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">WiFi</ion-card-title>\n    <ion-card-content>\n      <ion-row ><ion-col size=\"6\">SSID</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"ssid\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeSSID();\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">MdP</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"password\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeMDP();\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">Canal RF</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"channel\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeChannel();\"></ion-input></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">APN</ion-card-title>\n    <ion-card-content>\n      <ion-row ><ion-col size=\"6\">Identifiant</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"apn\" enterkeyhint=\"enter\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">Utilisateur</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"apnuser\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeAPNUS()\"></ion-input></ion-col></ion-row>\n      <ion-row ><ion-col size=\"6\">MdP</ion-col><ion-col size=\"6\"><ion-input  [(ngModel)]=\"apnpass\" enterkeyhint=\"enter\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeAPNPass();\"></ion-input></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer style=\"display: inline-block\">\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\" (click)=\"global.onReadStatiqueEnable()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button> \n  \n\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/comunicationparam/comunicationparam-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comunicationparam/comunicationparam-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ComunicationparamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicationparamPageRoutingModule", function() { return ComunicationparamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _comunicationparam_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comunicationparam.page */ "./src/app/comunicationparam/comunicationparam.page.ts");




const routes = [
    {
        path: '',
        component: _comunicationparam_page__WEBPACK_IMPORTED_MODULE_3__["ComunicationparamPage"]
    }
];
let ComunicationparamPageRoutingModule = class ComunicationparamPageRoutingModule {
};
ComunicationparamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComunicationparamPageRoutingModule);



/***/ }),

/***/ "./src/app/comunicationparam/comunicationparam.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/comunicationparam/comunicationparam.module.ts ***!
  \***************************************************************/
/*! exports provided: ComunicationparamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicationparamPageModule", function() { return ComunicationparamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comunicationparam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comunicationparam-routing.module */ "./src/app/comunicationparam/comunicationparam-routing.module.ts");
/* harmony import */ var _comunicationparam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comunicationparam.page */ "./src/app/comunicationparam/comunicationparam.page.ts");







let ComunicationparamPageModule = class ComunicationparamPageModule {
};
ComunicationparamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comunicationparam_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComunicationparamPageRoutingModule"]
        ],
        declarations: [_comunicationparam_page__WEBPACK_IMPORTED_MODULE_6__["ComunicationparamPage"]]
    })
], ComunicationparamPageModule);



/***/ }),

/***/ "./src/app/comunicationparam/comunicationparam.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/comunicationparam/comunicationparam.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  text-align: center;\n  color: black;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n\nion-col {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tdW5pY2F0aW9ucGFyYW0vQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGNvbXVuaWNhdGlvbnBhcmFtXFxjb211bmljYXRpb25wYXJhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXVuaWNhdGlvbnBhcmFtL2NvbXVuaWNhdGlvbnBhcmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUM7OztFQUFBOztBQUlEO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tdW5pY2F0aW9ucGFyYW0vY29tdW5pY2F0aW9ucGFyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gfVxuXG4gLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qL1xuaW9uLWNvbCB7XG4gICAgY29sb3IgOiBibGFjaztcbn1cbiIsImlvbi1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qL1xuaW9uLWNvbCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comunicationparam/comunicationparam.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/comunicationparam/comunicationparam.page.ts ***!
  \*************************************************************/
/*! exports provided: ComunicationparamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicationparamPage", function() { return ComunicationparamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");





let ComunicationparamPage = class ComunicationparamPage {
    constructor(global, platform, ngZone, cd, events) {
        this.global = global;
        this.platform = platform;
        this.ngZone = ngZone;
        this.cd = cd;
        this.events = events;
        this.redBackground = false;
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.global.connexionRequise = "UPC";
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__["CorrespondancesRegistres"]();
        this.global.onReadStatiqueEnable().then(() => {
            this.subscribeRefresh();
        });
    }
    doRefresh(event) {
        this.unsubscribeRefresh();
        this.global.onReadStatiqueEnable().then(() => {
            this.subscribeRefresh();
        });
    }
    int2ip(ipInt) {
        return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
    }
    onChangeMDMGSM() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change mdm id");
        this.global.onWriteEnable(this.correspondancesRegistres.comMdmName, this.modemGSM);
    }
    onChangeMDMGSMPass() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change mdm pass");
        this.global.onWriteEnable(this.correspondancesRegistres.comMdmPass, this.modemGSMpass);
    }
    onChangeSSID() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change wifi ssid");
        this.global.onWriteEnable(this.correspondancesRegistres.comWifiSsid, this.ssid);
    }
    onChangeMDP() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change wifi pass");
        this.global.onWriteEnable(this.correspondancesRegistres.comWifiPassW, this.password);
    }
    onChangeChannel() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change channel");
        this.global.onWriteEnable(this.correspondancesRegistres.comWifiApCh, this.channel);
    }
    onChangeURL() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change url");
        this.global.onWriteEnable(this.correspondancesRegistres.comWebSrvUrl, this.url);
    }
    onChangeAPNUS() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change apnusr");
        this.global.onWriteEnable(this.correspondancesRegistres.comMdmApnUser, this.apnuser);
    }
    onChangeAPNPass() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change apnpass");
        this.global.onWriteEnable(this.correspondancesRegistres.comMdmApnPass, this.apnpass);
    }
    unsubscribeRefresh() {
        this.events.unsubscribe("loadParameters");
    }
    subscribeRefresh() {
        this.events.subscribe("loadParameters", ($event) => {
            this.modemGSM = this.global.upcmodbus.communicationParameters.comMdmName;
            this.modemGSMpass = this.global.upcmodbus.communicationParameters.comGsmPass;
            this.ssid = this.global.upcmodbus.communicationParameters.comGsmName;
            this.password = this.global.upcmodbus.communicationParameters.comWiFiPass;
            this.channel = this.global.upcmodbus.communicationParameters.comWifiApCh;
            this.url = this.global.upcmodbus.communicationParameters.comWebSrvUrl;
            this.apn = this.global.upcmodbus.communicationParameters.comMdmApnId2;
            this.apnuser = this.global.upcmodbus.communicationParameters.comMdmApnUser;
            this.apnpass = this.global.upcmodbus.communicationParameters.comMdmApnPass;
            this.adIp = this.global.upcmodbus.communicationParameters.comGsmIpAdr;
        });
    }
};
ComunicationparamPage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
ComunicationparamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comunicationparam',
        template: __webpack_require__(/*! raw-loader!./comunicationparam.page.html */ "./node_modules/raw-loader/index.js!./src/app/comunicationparam/comunicationparam.page.html"),
        styles: [__webpack_require__(/*! ./comunicationparam.page.scss */ "./src/app/comunicationparam/comunicationparam.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], ComunicationparamPage);



/***/ })

}]);
//# sourceMappingURL=comunicationparam-comunicationparam-module-es2015.js.map