(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjustment-adjustment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adjustment/adjustment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Réglage Des Détendeurs</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 style=\"text-align: center;\">Réglages des détendeurs </h3>\n    <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <ion-grid style=\"padding-top: 5%;\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB1\" (click)=\"changeResAct(1)\">B1<ion-icon *ngIf=\"successB1\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB2\" (click)=\"changeResAct(2)\">B2<ion-icon *ngIf=\"successB2\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Intensité : \"+ intensityFlux}}</ion-label>\n            <ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label>\n          </ion-col>\n          <ion-col size=\"6\" [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\n            <ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label>\n\n        </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{fluxref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundDeb,'bgdanger':!backgroundDeb, 'bgwarning':bgdebwarning}\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{flux.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgsuccess':backgroundPE,'bgdanger':!backgroundPE}\" >\n          <ion-col size=\"6\"><ion-label color=\"dark\" style=\"font-weight : bolder;\">PE (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\" style=\"font-weight: bolder;\">{{inputref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\" style=\"font-weight: bolder;\">-</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\" style=\"font-weight: bolder;\" >{{input.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\" style=\"font-weight: bolder;\" >-</ion-label></ion-col>\n\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" *ngIf=\"!redBackground\">{{output.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{outputref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundPS,'bgdanger':!backgroundPS,'bgwarning':bgpswarning}\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{outputcomp.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>  \n  \n  <!--<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\n    <ion-fab-button>\n      {{PE}}\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button [color]=\"colorB1\" (click)=\"changeResAct(1);\">\n        B1\n      </ion-fab-button>\n      <ion-fab-button [color]=\"colorB2\" (click)=\"changeResAct(2);\">\n       B2\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\n    <ion-fab-button>\n      Config.\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button (click)=\"minInt();\" [color]=\"colorMin\">\n        Mini.\n      </ion-fab-button>\n      <ion-fab-button (click)=\"maxInt();\" [color]=\"colorMax\">\n        Maxi.\n      </ion-fab-button>\n      <ion-fab-button (click)=\"testMinB1();\">\n        Auto.\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button [color]=\"colordif\">\n      Diff.\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button [color]=\"colorAct\" (click)=\"onChangeDiff();\">\n        Act.\n      </ion-fab-button>\n      <ion-fab-button [color]=\"colorDes\" (click)=\"onDisableDiff();\"> \n        Des.\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <div class=\"card card-body border-top-0\">\n    <div class=\"row\">-->\n   <!-- Adjustments -->\n   <!--<div class=\"col-md-4\">\n    <div class=\"card bg-light mb-2\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Ajustements</h5>\n        <dl class=\"row mb-0\">-->\n\n          <!-- co2ResActAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Réserve active</dd>\n          <dt class=\"col-md-6 mb-2 text-md-right\">\n            <select class=\"custom-select custom-select-sm\"\n                    \n                    (ngModelChange)=\"changeResAct(resActive);\"\n                    [(ngModel)]=\"resActive\">\n              <option value=\"0\">B0</option>\n              <option value=\"1\">B1</option>\n              <option value=\"2\">B2</option>\n            </select>\n          </dt>-->\n\n          <!-- upcDiffLvlAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Intensité du flux</dd>\n          <ion-grid>\n            <ion-row>\n          \n          <ion-col size=\"4\"><dt class=\"col-md-6 mb-2 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\"\n                    \n                    (ngModelChange)=\"changeInt();\"\n                    [(ngModel)]=\"intensity\">\n          </dt></ion-col>\n          \n        </ion-row>  \n        </ion-grid>-->\n\n          <!-- co2FlowRefAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Flux maximal [nl/min]</dd>\n          <dt class=\"col-md-6 mb-0 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\n                    \n                    (ngModelChange)=\"changeFluxMax();\"\n                    [(ngModel)]=\"fluxmax\">\n          </dt>\n\n        </dl>\n      </div>\n    </div>\n  </div>-->\n<!-- Flows -->\n<!--<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Flux</h5>\n      <dl class=\"row mb-0\">-->\n\n        <!-- upcCo2DiffLvl -->\n        <!--<dd class=\"col-lg-7 mb-0\">Intensité du flux actuel</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ intensityFlux }}</dt>-->\n\n        <!-- calcRefFlowRate -->\n        <!--<dd class=\"col-lg-7 mb-0\">Flux de référence</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ fluxref.toFixed(3) }} nl/min</dt>-->\n\n        <!-- co2FlowAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Flux</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ flux.toFixed(3) }} nl/min</dt>-->\n\n        <!-- co2TempAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Température du flux</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ temp.toFixed(3) }} °C</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>-->\n<!-- Pressures -->\n<!--<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Pressions</h5>\n      <dl class=\"row mb-0\">-->\n\n        <!-- co2PresInpAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression d'entrée</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ input.toFixed(3) }} bar</dt>-->\n\n        <!-- co2PresOutAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ output.toFixed(3) }} bar</dt>-->\n\n        <!-- co2PressOutComp -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie compensée</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ outputcomp.toFixed(3) }} bar</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Tableau de mesure</h5>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"4\" style=\"font-weight :bolder;\">\n            B1\n          </ion-col>\n          <ion-col size=\"6\" style=\"font-weight :bolder;\">\n            B2\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-top: solid;\">\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Min</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB1Int1 == 0 ? '-': ''+PEB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB2Int1 == 0 ? '-': ''+PEB2Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB1Int1 == 0 ? '-':''+DebB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB2Int1 == 0 ? '-' : ''+DebB2Int1.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB1Int1 == 0 ? '-': ''+PSB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB2Int1 == 0 ? '-': ''+PSB2Int1.toFixed(2)}}</ion-col>\n        </ion-row>\n        \n        <ion-row style=\"border-top: solid;\">\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Maxi</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB1Int10 == 0 ? '-': ''+PEB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB2Int10 == 0 ? '-': ''+PEB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB1Int10 == 0 ? '-':''+DebB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB2Int10 == 0 ? '-' : ''+DebB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB1Int10 == 0 ? '-': ''+PSB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB2Int10 == 0 ? '-': ''+PSB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</div>\n</div>\n</div>-->\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n<!--<ion-footer>\n  <ion-button size=\"block\" [color]=\"colordif\" (click)=\"onChangeDiff();\">{{textdiff}}</ion-button>\n  <ion-button size=\"block\" color=\"danger\" (click)=\"onDisableDiff()\" *ngIf=\"modediff == 2\">Désactiver Diffusion</ion-button>\n</ion-footer>-->\n\n"

/***/ }),

/***/ "./src/app/adjustment/adjustment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adjustment/adjustment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdjustmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPageRoutingModule", function() { return AdjustmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");




const routes = [
    {
        path: '',
        component: _adjustment_page__WEBPACK_IMPORTED_MODULE_3__["AdjustmentPage"]
    }
];
let AdjustmentPageRoutingModule = class AdjustmentPageRoutingModule {
};
AdjustmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdjustmentPageRoutingModule);



/***/ }),

/***/ "./src/app/adjustment/adjustment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/adjustment/adjustment.module.ts ***!
  \*************************************************/
/*! exports provided: AdjustmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPageModule", function() { return AdjustmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adjustment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjustment-routing.module */ "./src/app/adjustment/adjustment-routing.module.ts");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");







let AdjustmentPageModule = class AdjustmentPageModule {
};
AdjustmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adjustment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdjustmentPageRoutingModule"]
        ],
        declarations: [_adjustment_page__WEBPACK_IMPORTED_MODULE_6__["AdjustmentPage"]]
    })
], AdjustmentPageModule);



/***/ }),

/***/ "./src/app/adjustment/adjustment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/adjustment/adjustment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n\n/*.bgred {\n    background-color: red;\n  }*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRqdXN0bWVudC9DOlxcVXNlcnNcXGRldmVsXFxPbmVEcml2ZVxcQnVyZWF1XFxiLURldi9zcmNcXGFwcFxcYWRqdXN0bWVudFxcYWRqdXN0bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQ0E7O0lBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGp1c3RtZW50L2FkanVzdG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmJnd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKi5iZ3JlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9Ki9cbiIsIi5iZ2RhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYmd3YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKi5iZ3JlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9Ki8iXX0= */"

/***/ }),

/***/ "./src/app/adjustment/adjustment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/adjustment/adjustment.page.ts ***!
  \***********************************************/
/*! exports provided: AdjustmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPage", function() { return AdjustmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let AdjustmentPage = class AdjustmentPage {
    constructor(platform, loadingCTRL, ngZone, network, hotspot, cd, global, router, storage) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.global = global;
        this.router = router;
        this.storage = storage;
        this.input = 0;
        this.inputref = 0; // 2+0.8*(nbpieges-10)/90
        this.outputcomp = 0;
        this.output = 0;
        this.outputref = 0.325;
        this.resActive = 0;
        this.intensity = 0;
        this.fluxmax = 0;
        this.intensityFlux = 0;
        this.flux = 0;
        this.temp = 0;
        this.fluxref = 0;
        this.modediff = 0;
        this.backgroundPE = false;
        this.backgroundPS = false;
        this.backgroundDeb = false;
        this.bgdebwarning = false;
        this.bgpswarning = false;
        this.successB1 = "";
        this.successB2 = "";
        this.colordif = "primary";
        this.textdiff = "Start/Stop";
        this.colorAct = "light";
        this.colorDes = "light";
        this.colorB1 = "light";
        this.colorB2 = "light";
        this.colorMin = "light";
        this.colorMax = "light";
        this.colorAuto = "light";
        this.PEB1Int1 = 0;
        this.PEB2Int1 = 0;
        this.PSB1Int1 = 0;
        this.PSB2Int1 = 0;
        this.DebB1Int1 = 0;
        this.DebB1Int10 = 0;
        this.DebB2Int1 = 0;
        this.DebB2Int10 = 0;
        this.PEB1Int10 = 0;
        this.PEB2Int10 = 0;
        this.PSB1Int10 = 0;
        this.PSB2Int10 = 0;
        this.PE = "PE";
        this.redBackground = false;
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    ionViewWillEnter() {
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
        this.platform.ready().then(res => {
            if (res == "cordova") {
                this.global.upcmodbus.client.getStringFromHoldingRegister(40001, 10).then(res => {
                    localStorage.setItem("upcname", res);
                }).catch(err => {
                    //localStorage.removeItem("isConnected");
                    this.redBackground = true;
                    localStorage.removeItem("isConnected");
                    this.colorB1 = "light";
                    this.colorB2 = "light";
                    this.colordif = "light";
                    this.cd.detectChanges();
                    //this.ngOnInit();
                });
                this.global.upcmodbus.client.getIntFromHoldingRegister(40015, 1).then(res => {
                    this.inputref = 2 + 0.8 * (res - 10) / 90;
                });
                this.global.upcmodbus.client.getFloatFromHoldingRegister(40018).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.fluxref = res * 5 / 10;
                    yield this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 5).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.intensityFlux = 5;
                        yield this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 0).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.colordif = "primary";
                            this.textdiff = "Start";
                            this.colorAct = "light";
                            this.colorDes = "primary";
                            this.modediff = 0;
                            yield this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 0).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                this.resActive = 0;
                                this.colorB1 = "light";
                                this.colorB2 = "light";
                                this.global.interval = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    yield this.global.upcmodbus.client.readHoldingRegisters(40416, 100).then(res => {
                                        //40435
                                        var iFlux = [res[19], res[20]];
                                        this.input = this.global.upcmodbus.client.registerToFloat(iFlux);
                                        //40437
                                        var out = [res[21], res[22]];
                                        this.output = this.global.upcmodbus.client.registerToFloat(out);
                                        //40439
                                        var f = [res[23], res[24]];
                                        this.flux = this.global.upcmodbus.client.registerToFloat(f);
                                        //40451
                                        var tmp = [res[35], res[36]];
                                        this.temp = this.global.upcmodbus.client.registerToFloat(tmp);
                                        //40463
                                        var outcomp = [res[47], res[48]];
                                        this.outputcomp = this.global.upcmodbus.client.registerToFloat(outcomp);
                                        this.redBackground = false;
                                        this.cd.detectChanges();
                                    }).catch(err => {
                                        this.redBackground = true;
                                        this.colorB1 = "danger";
                                        this.colorB2 = "danger";
                                        this.colordif = "danger";
                                        this.cd.detectChanges();
                                    });
                                    if (this.redBackground) {
                                        clearInterval(this.global.interval);
                                        this.ngOnInit();
                                    }
                                }), 500);
                            }));
                        }));
                    }));
                }));
            }
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        event.target.complete();
    }
    changeResAct(i) {
        if (this.resActive != null) {
            setTimeout(() => {
                this.global.upcmodbus.client.setIntInHoldingRegister(40151, 1, i).then(res => {
                    this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, i).then(res => {
                        this.resActive = i;
                        if (this.resActive == 1) {
                            this.colorB1 = "primary";
                            this.colorB2 = "light";
                            this.PE = "B1";
                        }
                        if (this.resActive == 2) {
                            this.colorB2 = "primary";
                            this.colorB1 = "light";
                            this.PE = "B2";
                        } // lire plusieurs variables modbus 
                        this.cd.detectChanges();
                    }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        var loading = yield this.loadingCTRL.create({
                            message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                            duration: 10000
                        });
                        loading.present();
                        this.ngOnInit();
                    }));
                });
            }, 1000);
        }
    }
    changeInt() {
        if (this.intensity != null) {
            clearInterval(this.global.interval);
            setTimeout(() => {
                this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, this.intensity).then(res => {
                    if (this.intensity == 1) {
                        this.colorMin = "primary";
                        this.colorMax = "light";
                    }
                    if (this.intensity == 10) {
                        this.colorMax = "primary";
                        this.colorMin = "light";
                    }
                    this.global.interval = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.input = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40463).then(res => {
                            this.outputcomp = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.output = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            this.flux = res;
                            this.cd.detectChanges();
                        });
                        yield this.global.upcmodbus.client.getIntFromHoldingRegister(40416, 1).then(res => {
                            this.intensityFlux = res;
                            this.cd.detectChanges();
                        });
                        this.fluxref = this.intensityFlux * this.fluxmax / 10;
                    }), 500);
                }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.ngOnInit();
                }));
            }, 1000);
        }
    }
    minInt() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
            this.intensity = 1;
            this.colorMin = "primary";
            this.colorMax = "light";
        }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                duration: 10000
            });
            loading.present();
            this.ngOnInit();
        }));
    }
    maxInt() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
            this.intensity = 10;
            this.colorMax = "primary";
            this.colorMin = "light";
        }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                duration: 10000
            });
            loading.present();
            this.ngOnInit();
        }));
    }
    testMinB2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                    var cpt = 0;
                    var intervalB2I1 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB2I1);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMaxB2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                this.intensity = 10;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalB2I10 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB2I10);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMaxB1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                this.intensity = 10;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalB1I10 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB1I10);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMinB1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalva = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalva);
                            loading.dismiss();
                        }
                    }, 500);
                }).catch(err => {
                    alert("Erreur lors de l'écriture ModBus !");
                    loading.dismiss();
                });
            }).catch(err => {
                alert("Erreur lors de l'écriture ModBus !");
                loading.dismiss();
            });
        });
    }
    auto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions en cours...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var interval = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(this.DebB2Int1 - res) > 0.01) {
                                //alert("Seuil Atteind !"); Fichier Excel dispo par URL
                            }
                            this.DebB1Int1 = res;
                        });
                    }, 500);
                    setTimeout(() => {
                        clearInterval(interval);
                        this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                            var interval2 = setInterval(() => {
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                    this.PEB2Int1 = res;
                                });
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                    this.PSB2Int1 = res;
                                });
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                    if (Math.abs(this.DebB2Int1 - res) > 0.1) {
                                        clearInterval(interval2);
                                    }
                                    this.DebB2Int1 = res;
                                });
                            }, 500);
                            setTimeout(() => {
                                clearInterval(interval2);
                                this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                                    this.intensity = 10;
                                    var interval3 = setInterval(() => {
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                            this.PEB2Int10 = res;
                                        });
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                            this.PSB2Int10 = res;
                                        });
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                            this.DebB2Int10 = res;
                                        });
                                    }, 500);
                                    setTimeout(() => {
                                        clearInterval(interval3);
                                        this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                                            var interval4 = setInterval(() => {
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                                    this.PEB1Int10 = res;
                                                });
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                                    this.PSB1Int10 = res;
                                                });
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                                    this.DebB1Int10 = res;
                                                });
                                            }, 500);
                                            setTimeout(() => {
                                                clearInterval(interval4);
                                                alert("Test Auto Réalisé !");
                                                loading.dismiss();
                                            }, 40000);
                                        });
                                    }, 30000);
                                });
                            }, 20000);
                        });
                    }, 10000);
                });
            });
        });
    }
    startstop() {
        if (this.colordif == "primary") {
            this.onChangeDiff();
        }
        else {
            this.onDisableDiff();
        }
    }
    onChangeDiff() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 2).then(res => {
            this.textdiff = "Stop";
            this.colordif = "danger";
            this.colorAct = "primary";
            this.colorDes = "light";
            this.modediff = 2;
            this.cd.detectChanges();
        });
    }
    onDisableDiff() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 0).then(res => {
            this.textdiff = "Start";
            this.colordif = "primary";
            this.colorAct = "light";
            this.colorDes = "primary";
            this.modediff = 0;
            this.cd.detectChanges();
        });
    }
    changeFluxMax() {
        if (this.fluxmax != null) {
            this.global.upcmodbus.client.setFloatInHoldingRegister(40018, this.fluxmax).then(res => {
                alert(this.fluxmax);
            }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var loading = yield this.loadingCTRL.create({
                    message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                    duration: 10000
                });
                loading.present();
                this.ngOnInit();
            }));
        }
    }
    goToNextPage() {
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
AdjustmentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
AdjustmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adjustment',
        template: __webpack_require__(/*! raw-loader!./adjustment.page.html */ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html"),
        styles: [__webpack_require__(/*! ./adjustment.page.scss */ "./src/app/adjustment/adjustment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], AdjustmentPage);



/***/ })

}]);
//# sourceMappingURL=adjustment-adjustment-module-es2015.js.map