(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a :\n        {{this.current_ssid}}</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n  <ion-grid style=\"padding-top: 5%\">\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">Diffusion</h4>\n\n    <ion-row class=\"row\">\n      <ion-col size=\"12\">\n        <ion-label>Diffusion : </ion-label>\n        <ion-toggle\n          [checked]=\"upcStatus\"\n          (click)=\"ondiffusionchnage($event)\"\n        ></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">Informations</h4>\n\n    <ion-row class=\"row\">\n      <ion-col size=\"6\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(1);\"\n          [ngClass]=\"{'bgreen' : highlightB1 && upcStatus==0,'clignote':highlightB1 && upcStatus==1}\"\n        >\n          B1\n        </h1>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(2);\"\n          [ngClass]=\"{'bgreen' : highlightB2 && upcStatus==0,'clignote':highlightB2 && upcStatus==1}\"\n        >\n          B2\n        </h1>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-top-right-radius: 80px 80px;\n          border-top-left-radius: 80px 80px;\n        \"\n      >\n      </ion-col>\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; color: black\"\n      >\n        <ion-select\n          style=\"text-align: center\"\n          [(ngModel)]=\"statusB1\"\n          (ngModelChange)=\"changeContentStatus('B1');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; color: black\"\n        [ngClass]=\"{'bgred' : false}\"\n      >\n        <ion-select\n          style=\"text-align: center\"\n          [(ngModel)]=\"statusB2\"\n          (ngModelChange)=\"changeContentStatus('B2');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; text-align: center\"\n      >\n        <ion-label style=\"text-align: center; color: black\">\n          <ion-icon name=\"md-battery-full\"></ion-icon>\n\n          {{contenuB1}} kg\n        </ion-label>\n      </ion-col>\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; text-align: center\"\n      >\n        <ion-label style=\"text-align: center; color: black\">\n          <ion-icon name=\"md-battery-full\"></ion-icon>\n\n          {{contenuB2}} kg\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">\n      Changement de bouteilles\n    </h4>\n\n    <ion-row class=\"row\">\n      <!-- ajout bouteille B1-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB1\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" (click)=\"onAddBottleB1()\">\n              + bouteille B1\n            </button>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" (click)=\"viderB1()\">vider B1</button>\n          </ion-item>\n          <ion-item\n            *ngFor=\"let bottle of bottlesB1;let i =index\"\n            (click)=\"cancelB1(i)\"\n          >\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.type?.brand}} {{bottle.type?.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB1}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <!-- ajout bouteille B2-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB2\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" full (click)=\"onAddBottleB2()\">\n              + bouteille B2\n            </button>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" full (click)=\"viderB2()\">vider B2</button>\n          </ion-item>\n          <ion-item\n            class=\"bouteille-ajoute\"\n            *ngFor=\"let bottle of bottlesB2; let i=index\"\n            (click)=\"cancelB2(i)\"\n          >\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.type?.brand}} {{bottle.type?.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n              style=\"display: block\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB2}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-bottom-left-radius: 80px 80px;\n          margin-top: 15px;\n          text-align: center;\n        \"\n      >\n        <button\n          class=\"button-3\"\n          style=\"margin: auto\"\n          (click)=\"ecrireLesBouteilles()\"\n        >\n          Synchronisation\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr />\n  {{this.aEcrir | json}}\n\n  <hr />\n  upc Status : {{upcStatus}}\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\">\n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button\n    *ngIf=\"global.displayLoading\"\n    style=\"float: left\"\n    fill=\"clear\"\n    color=\"primary\"\n  >\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");




const routes = [
    {
        path: '',
        component: _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__["AddbottleceintPage"]
    }
];
let AddbottleceintPageRoutingModule = class AddbottleceintPageRoutingModule {
};
AddbottleceintPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddbottleceintPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbottleceint-routing.module */ "./src/app/addbottleceint/addbottleceint-routing.module.ts");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");







let AddbottleceintPageModule = class AddbottleceintPageModule {
};
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



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS */\n.row {\n  margin-bottom: 30px;\n  padding: 15px;\n  border-color: #a5a5a5;\n  border-width: 2px;\n  border-style: solid;\n}\n.clignote {\n  background-color: green;\n  -webkit-animation: clignote 2s linear infinite;\n          animation: clignote 2s linear infinite;\n}\n@-webkit-keyframes clignote {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes clignote {\n  50% {\n    opacity: 0;\n  }\n}\n.bouteille-ajoute {\n  background-color: rgba(14, 182, 39, 0.3);\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n}\n.button-3 {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #2ea44f;\n  border: 1px solid rgba(27, 31, 35, 0.15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 6px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.button-3:focus:not(:focus-visible):not(.focus-visible) {\n  box-shadow: none;\n  outline: none;\n}\n.button-3:hover {\n  background-color: #2c974b;\n}\n.button-3:focus {\n  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;\n  outline: none;\n}\n.button-3:disabled {\n  background-color: #94d3a2;\n  border-color: rgba(27, 31, 35, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n  cursor: default;\n}\n.button-3:active {\n  background-color: #298e46;\n  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;\n}\n.item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n.bgreen {\n  background-color: green;\n}\n/*.bgred {\n\tbackground-color: red;\n}*/\n.bgblank {\n  background-color: white;\n}\n.contenuegreen {\n  border-bottom-left-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered {\n  border-bottom-left-radius: 80px 80px;\n  background-color: red;\n}\n.contenuegreen2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: red;\n}\n#one {\n  width: 200px;\n}\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n.removed {\n  background-color: yellow !important;\n}\n.added {\n  background-color: yellowgreen !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGFkZGJvdHRsZWNlaW50XFxhZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVBO0VBQ0UsdUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDQ0Y7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURMQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLHdDQUFBO0VBQ0EseUNBQUE7QUNDRjtBRENBO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzSEFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtHQUFBLHFCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UsNENBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSwrQ0FBQTtBQ0NGO0FERUE7RUFDRSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0E7RUFDRSx1QkFBQTtBQ0VGO0FEQUE7O0VBQUE7QUFHQTtFQUNFLHVCQUFBO0FDR0Y7QUREQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNJRjtBREZBO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtBQ0tGO0FESEE7RUFDRSxxQ0FBQTtFQUNBLHVCQUFBO0FDTUY7QURKQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7QUNPRjtBRExBO0VBQ0UsWUFBQTtBQ1FGO0FESkE7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTUY7QURIQTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNLRjtBREZBO0VBQ0UsbUNBQUE7QUNLRjtBREZBO0VBQ0Usd0NBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENTUyAqL1xuXG4ucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWNvbG9yOiAjYTVhNWE1O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5jbGlnbm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBhbmltYXRpb246IGNsaWdub3RlIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgY2xpZ25vdGUge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmJvdXRlaWxsZS1ham91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxODIsIDM5LCAwLjMpO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbn1cbi5idXR0b24tMyB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWE0NGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjEpIDAgMXB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLTM6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKTpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc0Yjtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0NiwgMTY0LCA3OSwgMC40KSAwIDAgMCAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQzYTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idXR0b24tMzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTQ2O1xuICBib3gtc2hhZG93OiByZ2JhKDIwLCA3MCwgMzIsIDAuMikgMCAxcHggMCBpbnNldDtcbn1cblxuLml0ZW0uaXRlbS10cm5zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0qL1xuLmJnYmxhbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW51ZWdyZWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250ZW51ZXJlZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmNvbnRlbnVlZ3JlZW4yIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uY29udGVudWVyZWQyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuI29uZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgLy9iYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4jdHdvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvL2JhY2tncm91bmQ6IGJsdWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbn1cbiIsIi8qIENTUyAqL1xuLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogI2E1YTVhNTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5jbGlnbm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBhbmltYXRpb246IGNsaWdub3RlIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBjbGlnbm90ZSB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmJvdXRlaWxsZS1ham91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxODIsIDM5LCAwLjMpO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbn1cblxuLmJ1dHRvbi0zIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLTM6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKTpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc0Yjtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0NiwgMTY0LCA3OSwgMC40KSAwIDAgMCAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQzYTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idXR0b24tMzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTQ2O1xuICBib3gtc2hhZG93OiByZ2JhKDIwLCA3MCwgMzIsIDAuMikgMCAxcHggMCBpbnNldDtcbn1cblxuLml0ZW0uaXRlbS10cm5zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Ki9cbi5iZ2JsYW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW51ZWdyZWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNvbnRlbnVlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jb250ZW51ZWdyZWVuMiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uY29udGVudWVyZWQyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jb25lIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jdHdvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3RocmVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");













let AddbottleceintPage = class AddbottleceintPage {
    constructor(platform, ngZone, network, scan, modalCtrl, loadingCTRL, cd, upcv3Service, storage, hotspot, global, alertCTRL, router, events, barcode) {
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
        this.barcode = barcode;
        this.upcStatus = null;
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
        // a ecrire dans l UPC
        this.aEcrir = { b1: [], b2: [] };
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.storage.get("bottleTypes").then((res) => {
            this.bottleTypedb = res;
            console.log(this.bottleTypedb);
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
    }
    onAddBottleB1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let barcode = yield this.barcode.scan();
            if (barcode.text.length < 10) {
                console.log("on add bottle B1 :");
                let bottle = { barcode: barcode.text, type: {}, style: 1 };
                this.contenueAAjouterB1 = 0;
                let bt = this.bottleTypedb.find((el) => el.id == this.currentBotlleTypeB1);
                bottle.type = bt;
                bottle.barcode = bottle.barcode + "" + bt.codeUpc;
                this.aEcrir.b1.push(bottle.barcode + "" + bt.codeUpc);
                this.bottlesB1.push(bottle);
                this.bottlesB1.forEach((bottle) => {
                    if (bottle.style == 1)
                        this.contenueAAjouterB1 += bottle.type.contenue;
                });
                console.log("b1");
                console.log(this.bottlesB1);
                console.log(this.contenueAAjouterB1);
            }
            else {
                alert("le codebar doit contenir 9 caracters au maximum ");
            }
        });
    }
    onSynchro() { }
    cancelB1(id) {
        console.log("click rem ", id);
        let bottle = this.bottlesB1[id];
        console.log(bottle);
        if (bottle.style == 1) {
            console.log("style", 1);
            this.bottlesB1.splice(id, 1);
            this.contenueAAjouterB1 -= bottle.type.contenue;
        }
        else if (bottle.style == 0) {
            console.log("style", 0);
            this.bottlesB1[id].style = -1;
        }
        else if (bottle.style == -1) {
            console.log("style", -1);
            this.bottlesB1[id].style = 0;
        }
        console.log(bottle);
    }
    cancelB2(id) {
        console.log("click rem ", id);
        let bottle = this.bottlesB2[id];
        console.log(bottle);
        if (bottle.style == 1) {
            console.log("style", 1);
            this.bottlesB2.splice(id, 1);
            this.contenueAAjouterB2 -= bottle.type.contenue;
        }
        else if (bottle.style == 0) {
            console.log("style", 0);
            this.bottlesB2[id].style = -1;
        }
        else if (bottle.style == -1) {
            console.log("style", -1);
            this.bottlesB2[id].style = 0;
        }
        console.log(bottle);
    }
    onAddBottleB2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let barcode = yield this.barcode.scan();
            if (barcode.text.length < 10) {
                console.log("on add bottle B2 :");
                let bottle = { barcode: barcode.text, type: {}, style: 1 };
                let bt = this.bottleTypedb.find((el) => el.id == this.currentBotlleTypeB2);
                bottle.type = bt;
                bottle.barcode = bottle.barcode + "" + bt.codeUpc;
                this.aEcrir.b2.push(bottle.barcode + "" + bt.codeUpc);
                this.contenueAAjouterB2 = 0;
                this.bottlesB2.push(bottle);
                this.bottlesB2.forEach((bottle) => {
                    if (bottle.style == 1) {
                        this.contenueAAjouterB2 += bottle.type.contenue;
                    }
                });
                console.log("b2");
                console.log(this.bottlesB2);
                console.log(this.contenueAAjouterB2);
            }
            else {
                alert("le codebar doit contenir 9 caracters au maximum ");
            }
        });
    }
    //----vider b1 B2 ;:
    viderB1() {
        let res = [];
        for (let i = 0; i < 45; i++)
            res.push(0);
        this.global.upcmodbus.client.writeMultipleRegisters(41124, res);
    }
    //----vider b1 B2 ;:
    viderB2() {
        let res = [];
        for (let i = 0; i < 45; i++)
            res.push(0);
        this.global.upcmodbus.client.writeMultipleRegisters(41169, res);
    }
    Read() {
        this.do = setInterval(() => {
            console.log("======================== cycle ================================");
            console.log("UPC stat  ====  " + this.global.upcmodbus.state);
            this.checkConnectionWifi();
            // en cas de perte de connexion
            if (this.current_ssid != this.stored_ssid && this.check) {
                console.log("wifi diff >>>> ");
                console.log("reconnexion  >>>> ");
                //connecter au wifi
                this.ConnecterUPC();
            }
            if (this.tryToRead && this.global.upcmodbus.state == 1) {
                console.log("Try to read >");
                this.tryToRead = false;
                // lecture statique :
                this.isLoading = true;
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "addbottleceint")
                    .then((res) => {
                    if (res == true) {
                        this.upcStatus = this.global.upcmodbus.general.upcStatus;
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
        }, 500);
    }
    checkConnectionWifi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let wifi = yield WifiWizard2.getConnectedSSID();
            this.current_ssid = wifi;
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
                        console.log("wifi diffrents :");
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
                            .catch(() => {
                            console.log("connexion impossible a l'UPC");
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
    changeContentStatusB1(reserve) {
        if (reserve == "B1") {
            this.global.onWriteEnable(this.correspondancesRegistres.co2Res1Status, parseInt(this.statusB1));
        }
        else {
            if (reserve == "B2") {
                this.global.onWriteEnable(this.correspondancesRegistres.co2Res2Status, parseInt(this.statusB2));
            }
        }
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
                    .onReadStatique(this.global.upcname, this.global.mode, "addbottleceint")
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
                .setStringArrayInHoldingResgisters(variable.adr, value)
                .then(() => {
                this.subscribeRefresh();
                console.log("accueil ::  ecriture reussie");
                // lecture statique :
                this.global.upcmodbus
                    .onReadStatique(this.global.upcname, this.global.mode, "addbottleceint")
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
    ecrireLesBouteilles() {
        //b1
        let counter1 = 0;
        let res = [];
        this.bottlesB1.forEach((el) => {
            if (el.style == 1 || el.style == 0)
                res = res.concat(this.global.upcmodbus.client.getArray(5, el.barcode));
            counter1++;
        });
        for (let i = res.length; i < 45; i++) {
            res.push(0);
        }
        console.log("bottle B1 register : ");
        console.log(res);
        //b1
        let counter2 = 0;
        let res2 = [];
        this.bottlesB2.forEach((el) => {
            if (el.style == 1 || el.style == 0)
                res2 = res2.concat(this.global.upcmodbus.client.getArray(5, el.barcode));
            counter2++;
        });
        for (let i = res2.length; i < 45; i++) {
            res2.push(0);
        }
        console.log("bottle B1 register : ");
        console.log(res2);
        if (counter1 < 10 && counter2 < 10) {
            this.global.upcmodbus.client
                .writeMultipleRegisters(41169, res2)
                .then(() => {
                this.global.upcmodbus.client
                    .writeMultipleRegisters(41124, res)
                    .then((result) => {
                    //ecriture reussi des codesBars :
                    // ajouter les valeurs dans content :
                    console.log("- contenu a ajouter B1 : ", this.contenueAAjouterB1);
                    console.log("- contenu a ajouter B2 : ", this.contenueAAjouterB2);
                    this.global.upcmodbus.client
                        .setFloatInHoldingRegister(40384, 1000 * (this.contenueAAjouterB1 / 1.97))
                        .then((result) => {
                        this.global.upcmodbus.client
                            .setFloatInHoldingRegister(40386, 1000 * (this.contenueAAjouterB2 / 1.97))
                            .then((result) => {
                            alert("synchronisation reussie !");
                        })
                            .catch((err) => { });
                    })
                        .catch((err) => { });
                    this.tryToRead = true;
                })
                    .catch((err) => { });
            })
                .catch((err) => { });
        }
        else {
            alert("Erreur : le nombre des bouteilles doit etre inferieur ou egale a 9 de chaque coté ");
        }
    }
    changeRes(i) {
        this.ecrir(this.correspondancesRegistres.co2ResActive, i);
    }
    onChangeContenant(reserve) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*
            if(reserve == "B1"){
              await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol,this.contenantB1/0.001974)
              this.subscribeRefresh()
            }
            else{
              if(reserve == "B2"){
                await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol,this.contenantB2/0.001974)
                this.subscribeRefresh()
              }
            }
            */
        });
    }
    changeContentStatus(reserve) {
        if (reserve == "B1") {
            this.ecrir(this.correspondancesRegistres.co2Res1Status, this.statusB1);
        }
        else {
            if (reserve == "B2") {
                this.ecrir(this.correspondancesRegistres.co2Res2Status, this.statusB2);
            }
        }
    }
    ondiffusionchnage() {
        let x = this.upcStatus ? 0 : 1;
        this.global.upcmodbus.client
            .setIntInHoldingRegister(40011, 1, x)
            .then((result) => {
            this.upcStatus = x;
        })
            .catch((err) => {
            alert("Erreur: changement de mode de diffusion echoué ");
        });
    }
    subscribeRefresh() {
        this.events.subscribe("loadParameters", ($event) => {
            this.statusB1 = "" + this.global.upcmodbus.reserves.co2Res1Status;
            this.statusB2 = "" + this.global.upcmodbus.reserves.co2Res2Status;
            this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
            this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;
            this.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
            this.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
            this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
            this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;
            console.log("bottles en  b1");
            console.log(this.global.upcmodbus.reserves.bottlesB1);
            //lire les barcodes en B1 :
            this.bottlesB1 = [];
            this.contenueAAjouterB1 = 0;
            this.global.upcmodbus.reserves.bottlesB1.forEach((barcode) => {
                if (barcode != "\u0000\u0000\u0000") {
                    this.aEcrir.b1.push(barcode);
                    let bottle = {
                        barcode: barcode.replace(/[^\w\s]/gi, ""),
                        type: {},
                        style: 0,
                    };
                    console.log(bottle.barcode.charAt(bottle.barcode.length - 1));
                    let bt = this.bottleTypedb.find((elem) => elem.codeUpc.toString() ==
                        bottle.barcode.charAt(bottle.barcode.length - 1));
                    console.log(bt);
                    bottle.type = bt;
                    this.bottlesB1.push(bottle);
                }
            });
            console.log(this.bottlesB1);
            //lire les barcodes en B2 :
            console.log("bottles en B2");
            console.log(this.global.upcmodbus.reserves.bottlesB2);
            this.bottlesB2 = [];
            this.contenueAAjouterB2 = 0;
            this.global.upcmodbus.reserves.bottlesB2
                .filter((el) => el != "")
                .forEach((barcode) => {
                if (barcode != "\u0000\u0000\u0000") {
                    this.aEcrir.b2.push(barcode);
                    let bottle = {
                        barcode: barcode.replace(/[^\w\s]/gi, ""),
                        type: {},
                        style: 0,
                    };
                    let bt = this.bottleTypedb.find((elem) => elem.codeUpc.toString() ==
                        bottle.barcode.charAt(bottle.barcode.length - 1));
                    bottle.type = bt;
                    this.bottlesB2.push(bottle);
                }
            });
            console.log(this.bottlesB2);
        });
    }
    unsubscribeRefresh() {
        this.events.unsubscribe("loadParameters");
    }
    goToNextPage() {
        clearInterval(this.global.interval);
        this.storage.get("nexturl").then((res) => {
            this.router.navigate([res]);
        });
    }
};
AddbottleceintPage.ctorParameters = () => [
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] }
];
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]])
], AddbottleceintPage);



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es2015.js.map