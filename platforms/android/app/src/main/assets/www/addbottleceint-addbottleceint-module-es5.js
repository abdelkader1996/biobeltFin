(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    \n     <ion-buttons>\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a : {{this.current_ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n  <h3 style=\"text-align: center;\">Changement de bouteilles </h3>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n  <ion-grid style=\"padding-top: 5%;\">\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\" (click)=\"changeRes(1);\" [ngClass]=\"{'bgreen' : highlightB1}\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\" (click)=\"changeRes(2);\" [ngClass]=\"{'bgreen' : highlightB2}\">\n          B2\n        </h1>  \n      </ion-col>\n      \n\n\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\n          <div style=\"text-align: center;\">Etat du Contenu</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\">\n        \n        <ion-select *ngIf=\"!true\" [(ngModel)]=\"statusB1\" (ngModelChange)=\"changeContentStatus('B1');\">\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label *ngIf=\"!false\" style=\"text-align: center;\">-</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\" [ngClass]=\"{'bgred' : false}\">\n        \n        <ion-select *ngIf=\"!true\" [(ngModel)]=\"statusB2\" (ngModelChange)=\"changeContentStatus('B2');\">\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label *ngIf=\"true\" style=\"text-align: center;\">-</ion-label>\n      </ion-col>\n\n\n     \n\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n \n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddbottleceintPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPageRoutingModule", function() { return AddbottleceintPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");




var routes = [
    {
        path: '',
        component: _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__["AddbottleceintPage"]
    }
];
var AddbottleceintPageRoutingModule = /** @class */ (function () {
    function AddbottleceintPageRoutingModule() {
    }
    AddbottleceintPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddbottleceintPageRoutingModule);
    return AddbottleceintPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.module.ts ***!
  \*********************************************************/
/*! exports provided: AddbottleceintPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPageModule", function() { return AddbottleceintPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbottleceint-routing.module */ "./src/app/addbottleceint/addbottleceint-routing.module.ts");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");







var AddbottleceintPageModule = /** @class */ (function () {
    function AddbottleceintPageModule() {
    }
    AddbottleceintPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddbottleceintPageRoutingModule"]
            ],
            declarations: [_addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__["AddbottleceintPage"]]
        })
    ], AddbottleceintPageModule);
    return AddbottleceintPageModule;
}());



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n\n.bgreen {\n  background-color: green;\n}\n\n/*.bgred {\n\tbackground-color: red;\n}*/\n\n.bgblank {\n  background-color: white;\n}\n\n.contenuegreen {\n  border-bottom-left-radius: 80px 80px;\n  background-color: green;\n}\n\n.contenuered {\n  border-bottom-left-radius: 80px 80px;\n  background-color: red;\n}\n\n.contenuegreen2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: green;\n}\n\n.contenuered2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: red;\n}\n\n#one {\n  width: 200px;\n}\n\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n\n.removed {\n  background-color: yellow !important;\n}\n\n.added {\n  background-color: yellowgreen !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGFkZGJvdHRsZWNlaW50XFxhZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FEQ0E7RUFDQyx1QkFBQTtBQ0VEOztBREFBOztFQUFBOztBQUdBO0VBQ0MsdUJBQUE7QUNHRDs7QUREQTtFQUNDLG9DQUFBO0VBQ0EsdUJBQUE7QUNJRDs7QURGQTtFQUNDLG9DQUFBO0VBQ0EscUJBQUE7QUNLRDs7QURIQTtFQUNDLHFDQUFBO0VBQ0EsdUJBQUE7QUNNRDs7QURKQTtFQUNDLHFDQUFBO0VBQ0EscUJBQUE7QUNPRDs7QURMQTtFQUNDLFlBQUE7QUNRRDs7QURKQTtFQUNDLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUFjLGFBQUE7QUNPZjs7QURKQTtFQUNDLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUFjLGFBQUE7QUNPZjs7QURKQTtFQUNDLG1DQUFBO0FDT0Q7O0FESEE7RUFDQyx3Q0FBQTtBQ01EIiwiZmlsZSI6InNyYy9hcHAvYWRkYm90dGxlY2VpbnQvYWRkYm90dGxlY2VpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0uaXRlbS10cm5zIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuXHRjb2xvcjogd2hpdGU7IFxufVxuLmJncmVlbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Ki9cbi5iZ2JsYW5rIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29udGVudWVncmVlbiB7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcblx0YmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbn1cbi5jb250ZW51ZXJlZCB7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcblx0YmFja2dyb3VuZC1jb2xvcjpyZWQ7XG59XG4uY29udGVudWVncmVlbjIge1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweCA4MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xufVxuLmNvbnRlbnVlcmVkMiB7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4IDgwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6cmVkO1xufVxuI29uZSB7XG5cdHdpZHRoOiAyMDBweDtcblx0Ly9iYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4jdHdvIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQvL2JhY2tncm91bmQ6IGJsdWU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdC8vYmFja2dyb3VuZDogcmVkO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuXG4uYWRkZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbiAhaW1wb3J0YW50O1xufVxuXG4iLCIuaXRlbS5pdGVtLXRybnMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0qL1xuLmJnYmxhbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnVlZ3JlZW4ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uY29udGVudWVyZWQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNvbnRlbnVlZ3JlZW4yIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5jb250ZW51ZXJlZDIge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbiNvbmUge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiN0d28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucmVtb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uYWRkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.ts ***!
  \*******************************************************/
/*! exports provided: AddbottleceintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPage", function() { return AddbottleceintPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");













var AddbottleceintPage = /** @class */ (function () {
    function AddbottleceintPage(platform, ngZone, network, scan, modalCtrl, loadingCTRL, cd, upcv3Service, storage, hotspot, global, alertCTRL, router, events) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.network = network;
        this.scan = scan;
        this.modalCtrl = modalCtrl;
        this.loadingCTRL = loadingCTRL;
        this.cd = cd;
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.hotspot = hotspot;
        this.global = global;
        this.alertCTRL = alertCTRL;
        this.router = router;
        this.events = events;
        this.check = false;
        this.current_ssid = "NO WIFI";
        this.stored_ssid = "NO WIFI";
        this.password_ssid = "";
        this.connection_modbus = false;
        this.isLoading = false;
        this.tryToRead = false;
        this.highlightB1 = false;
        this.highlightB2 = false;
        this.global.checkMode();
    }
    AddbottleceintPage.prototype.ionViewWillEnter = function () {
        this.tryToRead = true;
        console.log("=========================================================================");
        console.log("========================== page  accueil :===============================");
        console.log("=========================================================================");
        this.global.connexionRequise = "UPC";
        console.log(" - Connexion requise :" + this.global.connexionRequise);
        console.log(" - Connexion  actuel  (avant on read statique) :" + this.global.statutConnexion);
        this.ConnecterUPC();
        this.Read();
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__["CorrespondancesRegistres"]();
    };
    AddbottleceintPage.prototype.Read = function () {
        var _this = this;
        this.do = setInterval(function () {
            console.log("======================== cycle ================================");
            console.log("UPC stat  ====  " + _this.global.upcmodbus.state);
            _this.checkConnectionWifi();
            // en cas de perte de connexion 
            if (_this.current_ssid != _this.stored_ssid && _this.check) {
                console.log("wifi diff >>>> ");
                console.log("reconnexion  >>>> ");
                //connecter au wifi 
                _this.ConnecterUPC();
            }
            if (_this.tryToRead && _this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                _this.tryToRead = false;
                // lecture statique :
                _this.isLoading = true;
                _this.global.upcmodbus.onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint").then(function (res) {
                    if (res == true) {
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
                }).catch(function (err) {
                    _this.tryToRead = true;
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            }
        }, 500);
    };
    AddbottleceintPage.prototype.checkConnectionWifi = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var wifi;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WifiWizard2.getConnectedSSID()];
                    case 1:
                        wifi = _a.sent();
                        this.current_ssid = wifi;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbottleceintPage.prototype.ConnecterUPC = function () {
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
                                        console.log("wifi diffrents :");
                                        WifiWizard2.connect(stored_ssid, password).then(function () {
                                            //connexion reussi a l UPC  :
                                            console.log("connexion wifi up reussie :");
                                            _this.check = true;
                                            _this.global.statutConnexion = "UPC";
                                            _this.global.onConnectModbus().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    console.log("accueil , connexion modbus reussie >> ");
                                                    this.connection_modbus = true;
                                                    this.isLoading = false;
                                                    //on peut lire 
                                                    this.tryToRead = true;
                                                    return [2 /*return*/];
                                                });
                                            }); }).catch(function (err) {
                                                console.log("accueil + connexion modbus échouée  ");
                                                _this.isLoading = false;
                                                _this.connection_modbus = false;
                                            });
                                        }).catch(function () {
                                            console.log("connexion impossible a l'UPC");
                                        });
                                    }
                                    else {
                                        this.global.onConnectModbus().then(function () {
                                            //connexion modbus réussie : c'est un upc
                                            console.log("accueil + connexion modbus reussie ");
                                            _this.connection_modbus = true;
                                            _this.isLoading = false;
                                        }).catch(function (err) {
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
    AddbottleceintPage.prototype.changeContentStatusB1 = function (reserve) {
        if (reserve == "B1") {
            this.global.onWriteEnable(this.correspondancesRegistres.co2Res1Status, parseInt(this.statusB1));
        }
        else {
            if (reserve == "B2") {
                this.global.onWriteEnable(this.correspondancesRegistres.co2Res2Status, parseInt(this.statusB2));
            }
        }
    };
    AddbottleceintPage.prototype.ecrir = function (variable, value) {
        var _this = this;
        if (variable.type == "int") {
            this.isLoading = true;
            this.global.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim, value).then(function () {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus.onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint").then(function (res) {
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
                }).catch(function (err) {
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            }).catch(function () {
                _this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
        else {
            this.isLoading = true;
            this.global.upcmodbus.client.setStringArrayInHoldingResgisters(variable.adr, value).then(function () {
                _this.subscribeRefresh();
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus.onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint").then(function (res) {
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
                }).catch(function (err) {
                    _this.isLoading = false;
                    console.log("acceuil::erreur lecture");
                    console.log(err);
                });
                //fin de lecture statique :
            }).catch(function () {
                _this.isLoading = false;
                console.log("num piege ::écriture impossible");
            });
        }
    };
    AddbottleceintPage.prototype.changeRes = function (i) {
        this.ecrir(this.correspondancesRegistres.co2ResActive, i);
    };
    AddbottleceintPage.prototype.onChangeContenant = function (reserve) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AddbottleceintPage.prototype.changeContentStatus = function (reserve) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(reserve == "B1")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1Status, this.statusB1)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(reserve == "B2")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2Status, this.statusB2)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddbottleceintPage.prototype.subscribeRefresh = function () {
        var _this = this;
        this.events.subscribe("loadParameters", function ($event) {
            _this.statusB1 = "" + _this.global.upcmodbus.reserves.co2Res1Status;
            _this.statusB2 = "" + _this.global.upcmodbus.reserves.co2Res2Status;
            _this.highlightB1 = _this.global.upcmodbus.reserves.co2ResActive == 1;
            _this.highlightB2 = _this.global.upcmodbus.reserves.co2ResActive == 2;
            _this.global.contenuB1 = _this.global.upcmodbus.reserves.co2Res1ActVol;
            _this.global.contenuB2 = _this.global.upcmodbus.reserves.co2Res2ActVol;
            _this.global.contenantB1 = _this.global.upcmodbus.reserves.co2Res1StartVol;
            _this.global.contenantB2 = _this.global.upcmodbus.reserves.co2Res2StartVol;
        });
    };
    AddbottleceintPage.prototype.unsubscribeRefresh = function () {
        this.events.unsubscribe("loadParameters");
    };
    AddbottleceintPage.prototype.goToNextPage = function () {
        var _this = this;
        clearInterval(this.global.interval);
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    AddbottleceintPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__["Hotspot"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    AddbottleceintPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbottleceint',
            template: __webpack_require__(/*! raw-loader!./addbottleceint.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./addbottleceint.page.scss */ "./src/app/addbottleceint/addbottleceint.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__["Hotspot"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AddbottleceintPage);
    return AddbottleceintPage;
}());



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es5.js.map