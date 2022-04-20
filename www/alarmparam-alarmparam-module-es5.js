(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alarmparam-alarmparam-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/alarmparam/alarmparam.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alarmparam/alarmparam.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Alarme</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Alarmes </h3>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Réserve active basse</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Notification au serveur</ion-col><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alresbasse\" (click)=\"changerAlrmResbasse();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Seuil de contenu (%)</ion-col><ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"seuilresbasse\" enterkeyhint=\"enter\" (change)=\"changeSeuilResBasse();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Réserve active vide</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Notification au serveur</ion-col><ion-col size=\"6\"><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alresvide\" (click)=\"changeAlrmResVide();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Seuil de flux</ion-col><ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"seuilfluxvide\" enterkeyhint=\"enter\" (change)=\"changeSeuilFluxVide();\" type=\"tel\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Périodicité du test de réserve vide (min)</ion-col><ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"periodtestvide\" enterkeyhint=\"enter\" (change)=\"changePeriodVide()\" type=\"tel\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Pression d'entrée</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Notification au serveur</ion-col><ion-col size=\"6\"><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alpresentre\" (click)=\"changeAlrmPresentree();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Seuil de contenu (%)</ion-col><ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"seuilpresentre\" enterkeyhint=\"enter\" (change)=\"changeSeuilPresentree();\" type=\"tel\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Pression de sortie</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Notification au serveur</ion-col><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alpresortie\" (click)=\"changeAlrmResSortie();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Seuil de contenu (%)</ion-col><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"seuilpresortie\" enterkeyhint=\"enter\" (change)=\"changeSeuilPresSortie();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align : center;\">Débit CO2</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Notification au serveur</ion-col><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"aldebco2\" (click)=\"changeAlrmDebCo2();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Seuil de contenu (%)</ion-col><ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"seuildebco2\" enterkeyhint=\"enter\" (change)=\"changeSeuilDebCo2();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title style=\"text-align: center;\">Alimentation</ion-card-title>\n    <ion-card-content>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Rétablie</ion-col><ion-col size=\"6\"><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alimret\" (click)=\"changeAlimRet();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-col></ion-row>\n      <ion-row [ngClass]=\"{'bgred' : redBackground}\"><ion-col size=\"6\">Coupée</ion-col><ion-toggle *ngIf=\"!redBackground\" [(ngModel)]=\"alimcoup\" (click)=\"changeAlimCoup();\"></ion-toggle><ion-label *ngIf=\"redBackground\">-</ion-label></ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/alarmparam/alarmparam-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/alarmparam/alarmparam-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AlarmparamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmparamPageRoutingModule", function() { return AlarmparamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alarmparam_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarmparam.page */ "./src/app/alarmparam/alarmparam.page.ts");




var routes = [
    {
        path: '',
        component: _alarmparam_page__WEBPACK_IMPORTED_MODULE_3__["AlarmparamPage"]
    }
];
var AlarmparamPageRoutingModule = /** @class */ (function () {
    function AlarmparamPageRoutingModule() {
    }
    AlarmparamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AlarmparamPageRoutingModule);
    return AlarmparamPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/alarmparam/alarmparam.module.ts":
/*!*************************************************!*\
  !*** ./src/app/alarmparam/alarmparam.module.ts ***!
  \*************************************************/
/*! exports provided: AlarmparamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmparamPageModule", function() { return AlarmparamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alarmparam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alarmparam-routing.module */ "./src/app/alarmparam/alarmparam-routing.module.ts");
/* harmony import */ var _alarmparam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alarmparam.page */ "./src/app/alarmparam/alarmparam.page.ts");







var AlarmparamPageModule = /** @class */ (function () {
    function AlarmparamPageModule() {
    }
    AlarmparamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _alarmparam_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmparamPageRoutingModule"]
            ],
            declarations: [_alarmparam_page__WEBPACK_IMPORTED_MODULE_6__["AlarmparamPage"]]
        })
    ], AlarmparamPageModule);
    return AlarmparamPageModule;
}());



/***/ }),

/***/ "./src/app/alarmparam/alarmparam.page.scss":
/*!*************************************************!*\
  !*** ./src/app/alarmparam/alarmparam.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  text-align: center;\n  color: black;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n\nion-row {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxhcm1wYXJhbS9DOlxcVXNlcnNcXGRldmVsXFxPbmVEcml2ZVxcQnVyZWF1XFxiLURldi9zcmNcXGFwcFxcYWxhcm1wYXJhbVxcYWxhcm1wYXJhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FsYXJtcGFyYW0vYWxhcm1wYXJhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENDOzs7RUFBQTs7QUFJRDtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FsYXJtcGFyYW0vYWxhcm1wYXJhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yIDogYmxhY2s7XG4gfVxuIC8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yIDogYmxhY2s7XG59Ki9cbmlvbi1yb3cge1xuICAgIGNvbG9yIDogYmxhY2s7XG59XG4iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yIDogYmxhY2s7XG59Ki9cbmlvbi1yb3cge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/alarmparam/alarmparam.page.ts":
/*!***********************************************!*\
  !*** ./src/app/alarmparam/alarmparam.page.ts ***!
  \***********************************************/
/*! exports provided: AlarmparamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmparamPage", function() { return AlarmparamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");





var AlarmparamPage = /** @class */ (function () {
    function AlarmparamPage(global, ngZone, platform, cd, events) {
        this.global = global;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cd = cd;
        this.events = events;
        this.name = "";
        this.redBackground = false;
        this.global.checkMode();
    }
    AlarmparamPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.global.connexionRequise = "UPC";
        this.platform.ready().then(function (cordova) {
            _this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__["CorrespondancesRegistres"]();
            _this.global.onReadStatiqueEnable().then(function () {
                _this.subscribeRefresh();
            });
        });
    };
    AlarmparamPage.prototype.subscribeRefresh = function () {
        var _this = this;
        this.events.subscribe("loadParameters", function ($event) {
            _this.alresbasse = _this.global.upcmodbus.alarm.alrResLowEn;
            _this.alresvide = _this.global.upcmodbus.alarm.alrResEmptyEn;
            _this.alpresentre = _this.global.upcmodbus.alarm.alrPresInpEn;
            _this.alpresortie = _this.global.upcmodbus.alarm.alrPresOutEn;
            _this.aldebco2 = _this.global.upcmodbus.alarm.alrFlowAvgEn;
            _this.alimcoup = _this.global.upcmodbus.alarm.alrPowDownEn;
            _this.alimret = _this.global.upcmodbus.alarm.alrPowBackEn;
            _this.seuilresbasse = _this.global.upcmodbus.alarm.alrResLowLevel;
            _this.seuilfluxvide = _this.global.upcmodbus.alarm.alrResEmptyFlow;
            _this.seuilpresentre = _this.global.upcmodbus.alarm.alrPresInpTol;
            _this.seuilpresortie = _this.global.upcmodbus.alarm.alrPresOutTol;
            _this.seuildebco2 = _this.global.upcmodbus.alarm.alrFlowSetTol;
            _this.periodtestvide = _this.global.upcmodbus.alarm.alrResEmptyTest;
            _this.global.ssid = _this.global.upcmodbus.communicationParameters.comGsmName;
        });
    };
    AlarmparamPage.prototype.changerAlrmResbasse = function () {
        var _this = this;
        var alrm = !(this.alresbasse == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrResLowEn, alrm).then(function (res) {
            _this.global.upcmodbus.alarm.alrResLowEn = alrm;
        });
    };
    AlarmparamPage.prototype.changeSeuilResBasse = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrResLowLevel, this.seuilresbasse);
    };
    AlarmparamPage.prototype.changeAlrmResVide = function () {
        var alrm = !(this.alresvide == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyEn, alrm);
    };
    AlarmparamPage.prototype.changeSeuilFluxVide = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyFlow, this.seuilfluxvide);
    };
    AlarmparamPage.prototype.changePeriodVide = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyTest, this.periodtestvide);
    };
    AlarmparamPage.prototype.changeAlrmPresentree = function () {
        var alrm = !(this.alpresentre == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrPressInpEn, alrm);
    };
    AlarmparamPage.prototype.changeSeuilPresentree = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrPressInpTol, this.seuilpresentre);
    };
    AlarmparamPage.prototype.changeAlrmResSortie = function () {
        var alrm = !(this.alpresortie == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrPressOutEn, alrm);
    };
    AlarmparamPage.prototype.changeSeuilPresSortie = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrPressOutTol, this.seuilpresortie);
    };
    AlarmparamPage.prototype.changeAlrmDebCo2 = function () {
        var alrm = !(this.aldebco2 == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrFlowAvgEn, alrm);
    };
    AlarmparamPage.prototype.changeSeuilDebCo2 = function () {
        this.global.onWriteEnable(this.correspondancesRegistres.alrFlowSetTol, this.seuildebco2);
    };
    AlarmparamPage.prototype.changeAlimRet = function () {
        var alrm = !(this.alimret == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrPowBackEn, alrm);
    };
    AlarmparamPage.prototype.changeAlimCoup = function () {
        var alrm = !(this.alimcoup == true ? 1 : 0);
        this.global.onWriteEnable(this.correspondancesRegistres.alrPowDownEn, alrm);
    };
    AlarmparamPage.ctorParameters = function () { return [
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    AlarmparamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alarmparam',
            template: __webpack_require__(/*! raw-loader!./alarmparam.page.html */ "./node_modules/raw-loader/index.js!./src/app/alarmparam/alarmparam.page.html"),
            styles: [__webpack_require__(/*! ./alarmparam.page.scss */ "./src/app/alarmparam/alarmparam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AlarmparamPage);
    return AlarmparamPage;
}());



/***/ })

}]);
//# sourceMappingURL=alarmparam-alarmparam-module-es5.js.map