(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a :\n        {{this.current_ssid}}</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 style=\"text-align: center\">Changement de bouteilles</h3>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n  <ion-grid style=\"padding-top: 5%\">\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(1);\"\n          [ngClass]=\"{'bgreen' : highlightB1}\"\n        >\n          B1\n        </h1>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(2);\"\n          [ngClass]=\"{'bgreen' : highlightB2}\"\n        >\n          B2\n        </h1>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-top-right-radius: 80px 80px;\n          border-top-left-radius: 80px 80px;\n        \"\n      >\n        <div style=\"text-align: center\">Etat du Contenu</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-select\n          [(ngModel)]=\"statusB1\"\n          (ngModelChange)=\"changeContentStatus('B1');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label style=\"text-align: center\">-</ion-label>\n      </ion-col>\n\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px\"\n        [ngClass]=\"{'bgred' : false}\"\n      >\n        <ion-select\n          [(ngModel)]=\"statusB2\"\n          (ngModelChange)=\"changeContentStatus('B2');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label style=\"text-align: center\">-</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-top-right-radius: 80px 80px;\n          border-top-left-radius: 80px 80px;\n        \"\n      >\n        <div style=\"text-align: center\">Contenu :</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-label style=\"text-align: center\">{{contenuB1}} kg </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-label style=\"text-align: center\">{{contenuB2}} kg </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-top-right-radius: 80px 80px;\n          border-top-left-radius: 80px 80px;\n        \"\n      >\n        <div style=\"text-align: center\">ajouter une bouteille :</div>\n      </ion-col>\n      <!-- ajout bouteille B1-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item *ngFor=\"let bottle of bottlesB1\">\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':''}\"\n            >\n              {{bottle.type.brand}} {{bottle.type.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':''}\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB1\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB1}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" (click)=\"onAddBottleB1()\">\n              + bouteille B1\n            </button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <!-- ajout bouteille B2-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item class=\"bouteille-ajoute\" *ngFor=\"let bottle of bottlesB2\">\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':''}\"\n            >\n              {{bottle.type.brand}} {{bottle.type.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':''}\"\n              style=\"display: block\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB2\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB2}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" (click)=\"onAddBottleB2()\">\n              + bouteille B2\n            </button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-bottom-left-radius: 80px 80px;\n          margin-top: 15px;\n          text-align: center;\n        \"\n      >\n        <button class=\"button-3\" style=\"margin: auto\" (click)=\"onSynchro()\">\n          Synchronisation\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\">\n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button\n    *ngIf=\"global.displayLoading\"\n    style=\"float: left\"\n    fill=\"clear\"\n    color=\"primary\"\n  >\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

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

module.exports = "/* CSS */\n.bouteille-ajoute {\n  background-color: rgba(14, 182, 39, 0.3);\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n}\n.button-3 {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #2ea44f;\n  border: 1px solid rgba(27, 31, 35, 0.15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 6px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.button-3:focus:not(:focus-visible):not(.focus-visible) {\n  box-shadow: none;\n  outline: none;\n}\n.button-3:hover {\n  background-color: #2c974b;\n}\n.button-3:focus {\n  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;\n  outline: none;\n}\n.button-3:disabled {\n  background-color: #94d3a2;\n  border-color: rgba(27, 31, 35, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n  cursor: default;\n}\n.button-3:active {\n  background-color: #298e46;\n  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;\n}\n.item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n.bgreen {\n  background-color: green;\n}\n/*.bgred {\n\tbackground-color: red;\n}*/\n.bgblank {\n  background-color: white;\n}\n.contenuegreen {\n  border-bottom-left-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered {\n  border-bottom-left-radius: 80px 80px;\n  background-color: red;\n}\n.contenuegreen2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: red;\n}\n#one {\n  width: 200px;\n}\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n.removed {\n  background-color: yellow !important;\n}\n.added {\n  background-color: yellowgreen !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGFkZGJvdHRsZWNlaW50XFxhZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFBO0FBRUE7RUFDRSx3Q0FBQTtFQUNBLHlDQUFBO0FDQUY7QURFQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0hBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7QURHQTtFQUNFLHlCQUFBO0FDQUY7QURHQTtFQUNFLDRDQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLHlCQUFBO0VBQ0EsK0NBQUE7QUNBRjtBREdBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUNBRjtBREVBO0VBQ0UsdUJBQUE7QUNDRjtBRENBOztFQUFBO0FBR0E7RUFDRSx1QkFBQTtBQ0VGO0FEQUE7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FDR0Y7QUREQTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7QUNJRjtBREZBO0VBQ0UscUNBQUE7RUFDQSx1QkFBQTtBQ0tGO0FESEE7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0FDTUY7QURKQTtFQUNFLFlBQUE7QUNPRjtBREhBO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0tGO0FERkE7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSUY7QUREQTtFQUNFLG1DQUFBO0FDSUY7QUREQTtFQUNFLHdDQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9hZGRib3R0bGVjZWludC9hZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgKi9cblxuLmJvdXRlaWxsZS1ham91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxODIsIDM5LCAwLjMpO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbn1cbi5idXR0b24tMyB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWE0NGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjEpIDAgMXB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLTM6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKTpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc0Yjtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0NiwgMTY0LCA3OSwgMC40KSAwIDAgMCAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQzYTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idXR0b24tMzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTQ2O1xuICBib3gtc2hhZG93OiByZ2JhKDIwLCA3MCwgMzIsIDAuMikgMCAxcHggMCBpbnNldDtcbn1cblxuLml0ZW0uaXRlbS10cm5zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0qL1xuLmJnYmxhbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW51ZWdyZWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250ZW51ZXJlZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmNvbnRlbnVlZ3JlZW4yIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uY29udGVudWVyZWQyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuI29uZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgLy9iYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4jdHdvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvL2JhY2tncm91bmQ6IGJsdWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbn1cbiIsIi8qIENTUyAqL1xuLmJvdXRlaWxsZS1ham91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxODIsIDM5LCAwLjMpO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbn1cblxuLmJ1dHRvbi0zIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLTM6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKTpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc0Yjtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0NiwgMTY0LCA3OSwgMC40KSAwIDAgMCAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQzYTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idXR0b24tMzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTQ2O1xuICBib3gtc2hhZG93OiByZ2JhKDIwLCA3MCwgMzIsIDAuMikgMCAxcHggMCBpbnNldDtcbn1cblxuLml0ZW0uaXRlbS10cm5zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Ki9cbi5iZ2JsYW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW51ZWdyZWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNvbnRlbnVlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jb250ZW51ZWdyZWVuMiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uY29udGVudWVyZWQyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jb25lIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jdHdvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3RocmVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbn0iXX0= */"

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
        this.bottleTypedb = [];
        this.bottlesB1 = [];
        this.contenueAAjouterB1 = 0;
        this.bottlesB2 = [];
        this.contenueAAjouterB2 = 0;
        //bouteilles :
        this.bottlesInTransit = [];
        this.global.checkMode();
    }
    AddbottleceintPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("bottleTypes").then(function (res) {
            _this.bottleTypedb = res;
            console.log(_this.bottleTypedb);
        });
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
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__["CorrespondancesRegistres"]();
    };
    AddbottleceintPage.prototype.onAddBottleB1 = function () {
        var _this = this;
        console.log("on add bottle B1 :");
        var bottle = { barcode: "inconnu", type: {}, style: 1 };
        this.contenueAAjouterB1 = 0;
        var bt = this.bottleTypedb.find(function (el) { return el.id == _this.currentBotlleTypeB1; });
        bottle.type = bt;
        this.bottlesB1.push(bottle);
        this.bottlesB1.forEach(function (bottle) { return (_this.contenueAAjouterB1 += bottle.contenue); });
        console.log("b1");
        console.log(this.bottlesB1);
        console.log(this.contenueAAjouterB1);
    };
    AddbottleceintPage.prototype.onSynchro = function () { };
    AddbottleceintPage.prototype.onAddBottleB2 = function () {
        var _this = this;
        console.log("on add botlle B2");
        var bottle = { barcode: "inconnu", type: {}, style: 1 };
        var bt = this.bottleTypedb.find(function (el) { return el.id == _this.currentBotlleTypeB2; });
        bottle.type = bt;
        this.contenueAAjouterB2 = 0;
        this.bottlesB2.push(bottle);
        this.bottlesB2.forEach(function (bottle) { return (_this.contenueAAjouterB2 += bottle.type.contenue); });
        console.log("b2");
        console.log(this.bottlesB2);
        console.log(this.contenueAAjouterB2);
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
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint")
                    .then(function (res) {
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
                })
                    .catch(function (err) {
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
                                            .catch(function () {
                                            console.log("connexion impossible a l'UPC");
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
            this.global.upcmodbus.client
                .setIntInHoldingRegister(variable.adr, variable.dim, value)
                .then(function () {
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint")
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
        else {
            this.isLoading = true;
            this.global.upcmodbus.client
                .setStringArrayInHoldingResgisters(variable.adr, value)
                .then(function () {
                _this.subscribeRefresh();
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                _this.global.upcmodbus
                    .onReadStatique(_this.global.upcname, _this.global.mode, "addbottleceint")
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
        if (reserve == "B1") {
            this.ecrir(this.correspondancesRegistres.co2Res1Status, this.statusB1);
        }
        else {
            if (reserve == "B2") {
                this.ecrir(this.correspondancesRegistres.co2Res2Status, this.statusB2);
            }
        }
    };
    AddbottleceintPage.prototype.subscribeRefresh = function () {
        var _this = this;
        this.events.subscribe("loadParameters", function ($event) {
            _this.statusB1 = "" + _this.global.upcmodbus.reserves.co2Res1Status;
            _this.statusB2 = "" + _this.global.upcmodbus.reserves.co2Res2Status;
            _this.highlightB1 = _this.global.upcmodbus.reserves.co2ResActive == 1;
            _this.highlightB2 = _this.global.upcmodbus.reserves.co2ResActive == 2;
            _this.contenuB1 = _this.global.upcmodbus.reserves.co2Res1ActVol;
            _this.contenuB2 = _this.global.upcmodbus.reserves.co2Res2ActVol;
            _this.global.contenantB1 = _this.global.upcmodbus.reserves.co2Res1StartVol;
            _this.global.contenantB2 = _this.global.upcmodbus.reserves.co2Res2StartVol;
            //lire les barcodes en B1 :
            _this.global.upcmodbus.reserves.bottlesB1.forEach(function (barcode) {
                var bottle = { barcode: barcode, type: {}, style: 0 };
                _this.bottlesB1.push(bottle);
            });
            //lire les barcodes en B1 :
            _this.global.upcmodbus.reserves.bottlesB2.forEach(function (barcode) {
                var bottle = { barcode: barcode, type: {}, style: 0 };
                _this.bottlesB2.push(bottle);
            });
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
            selector: "app-addbottleceint",
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