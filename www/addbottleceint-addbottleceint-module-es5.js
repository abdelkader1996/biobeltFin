(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon> connecté a :\n        {{this.current_ssid}}</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>  \n  </ion-refresher>-->\n\n  <ion-grid style=\"padding-top: 5%\">\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">Diffusion</h4>\n\n    <ion-row class=\"row\">\n      <ion-col size=\"12\">\n        <ion-label>Diffusion : </ion-label>\n        <ion-toggle\n          [checked]=\"upcStatus\"\n          (click)=\"ondiffusionchnage($event)\"\n        ></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">Informations</h4>\n\n    <ion-row class=\"row\">\n      <ion-col size=\"6\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(1);\"\n          [ngClass]=\"{'bgreen' : highlightB1 && upcStatus==0,'clignote':highlightB1 && upcStatus==1}\"\n        >\n          B1\n        </h1>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <h1\n          style=\"text-align: center\"\n          (click)=\"changeRes(2);\"\n          [ngClass]=\"{'bgreen' : highlightB2 && upcStatus==0,'clignote':highlightB2 && upcStatus==1}\"\n        >\n          B2\n        </h1>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-top-right-radius: 80px 80px;\n          border-top-left-radius: 80px 80px;\n        \"\n      >\n      </ion-col>\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; color: black\"\n      >\n        <ion-select\n          style=\"text-align: center\"\n          [(ngModel)]=\"statusB1\"\n          (ngModelChange)=\"changeContentStatus('B1');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; color: black\"\n        [ngClass]=\"{'bgred' : false}\"\n      >\n        <ion-select\n          style=\"text-align: center\"\n          [(ngModel)]=\"statusB2\"\n          (ngModelChange)=\"changeContentStatus('B2');\"\n        >\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; text-align: center\"\n      >\n        <ion-label style=\"text-align: center; color: black\">\n          <ion-icon name=\"md-battery-full\"></ion-icon>\n\n          {{contenuB1}} kg\n        </ion-label>\n      </ion-col>\n      <ion-col\n        size=\"6\"\n        style=\"border-bottom-left-radius: 80px 80px; text-align: center\"\n      >\n        <ion-label style=\"text-align: center; color: black\">\n          <ion-icon name=\"md-battery-full\"></ion-icon>\n\n          {{contenuB2}} kg\n        </ion-label>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        style=\"border-bottom-left-radius: 80px 80px; color: black\"\n      >\n        <ion-select\n          style=\"\n            text-align: center;\n            box-shadow: inset 0 0 1em rgb(141, 223, 164);\n          \"\n          [(ngModel)]=\"reserveType\"\n          (ngModelChange)=\"changeReserveType();\"\n        >\n          <ion-select-option value=\"0\">\n            reserve principal : Symetrique</ion-select-option\n          >\n          <ion-select-option value=\"1\"\n            >reserve principal : R1</ion-select-option\n          >\n          <ion-select-option value=\"2\">\n            reserve principal : R2</ion-select-option\n          >\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <h4 style=\"text-align: center; color: rgb(151, 150, 150)\">\n      Changement de bouteilles\n    </h4>\n\n    <ion-row class=\"row\">\n      <!-- ajout bouteille B1-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB1\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" (click)=\"onAddBottleB1()\">\n              + bouteille B1\n            </button>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-red\" (click)=\"viderB1()\">\n              - bouteille B1\n            </button>\n          </ion-item>\n          <ion-item\n            *ngFor=\"let bottle of bottlesB1;let i =index\"\n            (click)=\"cancelB1(i)\"\n          >\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.type?.brand}} {{bottle.type?.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB1}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <!-- ajout bouteille B2-->\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px\">\n        <ion-list>\n          <ion-item>\n            <ion-label>type de bouteille </ion-label>\n            <ion-select\n              placeholder=\"Selectionner un type \"\n              [(ngModel)]=\"currentBotlleTypeB2\"\n            >\n              <ion-select-option\n                *ngFor=\"let bt of bottleTypedb\"\n                value=\"{{bt.id}}\"\n                >{{bt.brand+\"-\"+bt.designation+\" kg\"}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-3\" full (click)=\"onAddBottleB2()\">\n              + bouteille B2\n            </button>\n          </ion-item>\n          <ion-item>\n            <button class=\"button-red\" full (click)=\"viderB2()\">\n              - Bouteille B2\n            </button>\n          </ion-item>\n          <ion-item\n            class=\"bouteille-ajoute\"\n            *ngFor=\"let bottle of bottlesB2; let i=index\"\n            (click)=\"cancelB2(i)\"\n          >\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n            >\n              {{bottle.type?.brand}} {{bottle.type?.designation}}\n            </ion-label>\n            <ion-label\n              [ngStyle]=\"{'background-color':bottle.style==1?'green':bottle.style==-1?'red':''}\"\n              style=\"display: block\"\n            >\n              {{bottle.barcode}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Total : {{contenueAAjouterB2}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n\n      <ion-col\n        size=\"12\"\n        style=\"\n          border-bottom-left-radius: 80px 80px;\n          margin-top: 15px;\n          text-align: center;\n        \"\n      >\n        <button\n          class=\"button-3\"\n          style=\"margin: auto\"\n          (click)=\"ecrireLesBouteilles()\"\n        >\n          Synchronisation\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr />\n  {{this.aEcrir | json}}\n\n  <hr />\n  upc Status : {{upcStatus}}\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\">\n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button\n    *ngIf=\"global.displayLoading\"\n    style=\"float: left\"\n    fill=\"clear\"\n    color=\"primary\"\n  >\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

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

module.exports = "/* CSS */\n.row {\n  margin-bottom: 30px;\n  padding: 15px;\n  border-color: #a5a5a5;\n  border-width: 2px;\n  border-style: solid;\n}\n.clignote {\n  background-color: green;\n  -webkit-animation: clignote 2s linear infinite;\n          animation: clignote 2s linear infinite;\n}\n@-webkit-keyframes clignote {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes clignote {\n  50% {\n    opacity: 0;\n  }\n}\n.bouteille-ajoute {\n  background-color: rgba(14, 182, 39, 0.3);\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n}\n.button-3 {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #2ea44f;\n  border: 1px solid rgba(27, 31, 35, 0.15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 6px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.button-red {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #ae2020;\n  border: 1px solid rgba(27, 31, 35, 0.15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 6px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.button-3:focus:not(:focus-visible):not(.focus-visible) {\n  box-shadow: none;\n  outline: none;\n}\n.button-3:hover {\n  background-color: #2c974b;\n}\n.button-3:focus {\n  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;\n  outline: none;\n}\n.button-3:disabled {\n  background-color: #94d3a2;\n  border-color: rgba(27, 31, 35, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n  cursor: default;\n}\n.button-3:active {\n  background-color: #298e46;\n  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;\n}\n.item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n.bgreen {\n  background-color: green;\n}\n/*.bgred {\n\tbackground-color: red;\n}*/\n.bgblank {\n  background-color: white;\n}\n.contenuegreen {\n  border-bottom-left-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered {\n  border-bottom-left-radius: 80px 80px;\n  background-color: red;\n}\n.contenuegreen2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: green;\n}\n.contenuered2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: red;\n}\n#one {\n  width: 200px;\n}\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n.removed {\n  background-color: yellow !important;\n}\n.added {\n  background-color: yellowgreen !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGFkZGJvdHRsZWNlaW50XFxhZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVBO0VBQ0UsdUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDQ0Y7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURMQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLHdDQUFBO0VBQ0EseUNBQUE7QUNDRjtBRENBO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzSEFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtHQUFBLHFCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0E7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNIQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSw0Q0FBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLCtDQUFBO0FDQ0Y7QURFQTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDQTtFQUNFLHVCQUFBO0FDRUY7QURBQTs7RUFBQTtBQUdBO0VBQ0UsdUJBQUE7QUNHRjtBRERBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ0lGO0FERkE7RUFDRSxvQ0FBQTtFQUNBLHFCQUFBO0FDS0Y7QURIQTtFQUNFLHFDQUFBO0VBQ0EsdUJBQUE7QUNNRjtBREpBO0VBQ0UscUNBQUE7RUFDQSxxQkFBQTtBQ09GO0FETEE7RUFDRSxZQUFBO0FDUUY7QURKQTtFQUNFLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNNRjtBREhBO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0tGO0FERkE7RUFDRSxtQ0FBQTtBQ0tGO0FERkE7RUFDRSx3Q0FBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvYWRkYm90dGxlY2VpbnQvYWRkYm90dGxlY2VpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ1NTICovXG5cbi5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItY29sb3I6ICNhNWE1YTU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmNsaWdub3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGFuaW1hdGlvbjogY2xpZ25vdGUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBjbGlnbm90ZSB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uYm91dGVpbGxlLWFqb3V0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE4MiwgMzksIDAuMyk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgMC4xKSAwIDFweCAwO1xufVxuLmJ1dHRvbi0zIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsXG4gICAgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZTIwMjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjEpIDAgMXB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLTM6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKTpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOTc0Yjtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogcmdiYSg0NiwgMTY0LCA3OSwgMC40KSAwIDAgMCAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQzYTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idXR0b24tMzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTQ2O1xuICBib3gtc2hhZG93OiByZ2JhKDIwLCA3MCwgMzIsIDAuMikgMCAxcHggMCBpbnNldDtcbn1cblxuLml0ZW0uaXRlbS10cm5zIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0qL1xuLmJnYmxhbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW51ZWdyZWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250ZW51ZXJlZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmNvbnRlbnVlZ3JlZW4yIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uY29udGVudWVyZWQyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuI29uZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgLy9iYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4jdHdvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvL2JhY2tncm91bmQ6IGJsdWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJlbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbn1cbiIsIi8qIENTUyAqL1xuLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogI2E1YTVhNTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5jbGlnbm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBhbmltYXRpb246IGNsaWdub3RlIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBjbGlnbm90ZSB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmJvdXRlaWxsZS1ham91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxODIsIDM5LCAwLjMpO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbn1cblxuLmJ1dHRvbi0zIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYTQ0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMCAxcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZTIwMjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjEpIDAgMXB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ1dHRvbi0zOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSk6bm90KC5mb2N1cy12aXNpYmxlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b24tMzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzk3NGI7XG59XG5cbi5idXR0b24tMzpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNDYsIDE2NCwgNzksIDAuNCkgMCAwIDAgM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnV0dG9uLTM6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkM2EyO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4xKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uYnV0dG9uLTM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5OGU0NjtcbiAgYm94LXNoYWRvdzogcmdiYSgyMCwgNzAsIDMyLCAwLjIpIDAgMXB4IDAgaW5zZXQ7XG59XG5cbi5pdGVtLml0ZW0tdHJucyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSovXG4uYmdibGFuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudWVncmVlbiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5jb250ZW51ZXJlZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY29udGVudWVncmVlbjIge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNvbnRlbnVlcmVkMiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI29uZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI3R3byB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbiN0aHJlZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5yZW1vdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuICFpbXBvcnRhbnQ7XG59Il19 */"

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
    function AddbottleceintPage(platform, ngZone, network, scan, modalCtrl, loadingCTRL, cd, upcv3Service, storage, hotspot, global, alertCTRL, router, events, barcode) {
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
        this.reserveType = "0";
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var barcode, bottle, bt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan()];
                    case 1:
                        barcode = _a.sent();
                        if (barcode.text.length < 10) {
                            console.log("on add bottle B1 :");
                            bottle = { barcode: barcode.text, type: {}, style: 1 };
                            this.contenueAAjouterB1 = 0;
                            bt = this.bottleTypedb.find(function (el) { return el.id == _this.currentBotlleTypeB1; });
                            bottle.type = bt;
                            bottle.barcode = bottle.barcode + "" + bt.codeUpc;
                            this.aEcrir.b1.push(bottle.barcode + "" + bt.codeUpc);
                            this.bottlesB1.push(bottle);
                            this.bottlesB1.forEach(function (bottle) {
                                if (bottle.style == 1)
                                    _this.contenueAAjouterB1 += bottle.type.contenue;
                            });
                            console.log("b1");
                            console.log(this.bottlesB1);
                            console.log(this.contenueAAjouterB1);
                        }
                        else {
                            alert("le codebar doit contenir 9 caracters au maximum ");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbottleceintPage.prototype.onSynchro = function () { };
    AddbottleceintPage.prototype.cancelB1 = function (id) {
        console.log("click rem ", id);
        var bottle = this.bottlesB1[id];
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
    };
    AddbottleceintPage.prototype.cancelB2 = function (id) {
        console.log("click rem ", id);
        var bottle = this.bottlesB2[id];
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
    };
    AddbottleceintPage.prototype.onAddBottleB2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var barcode, bottle, bt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan()];
                    case 1:
                        barcode = _a.sent();
                        if (barcode.text.length < 10) {
                            console.log("on add bottle B2 :");
                            bottle = { barcode: barcode.text, type: {}, style: 1 };
                            bt = this.bottleTypedb.find(function (el) { return el.id == _this.currentBotlleTypeB2; });
                            bottle.type = bt;
                            bottle.barcode = bottle.barcode + "" + bt.codeUpc;
                            this.aEcrir.b2.push(bottle.barcode + "" + bt.codeUpc);
                            this.contenueAAjouterB2 = 0;
                            this.bottlesB2.push(bottle);
                            this.bottlesB2.forEach(function (bottle) {
                                if (bottle.style == 1) {
                                    _this.contenueAAjouterB2 += bottle.type.contenue;
                                }
                            });
                            console.log("b2");
                            console.log(this.bottlesB2);
                            console.log(this.contenueAAjouterB2);
                        }
                        else {
                            alert("le codebar doit contenir 9 caracters au maximum ");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //----vider b1 B2 ;:
    AddbottleceintPage.prototype.viderB1 = function () {
        var _this = this;
        this.barcode.scan().then(function (res) {
            _this.bottlesB1.map(function (bottle) {
                console.log(" bottle barcode", bottle.barcode);
                console.log("scanned", res.text);
                if (bottle.barcode.substring(0, bottle.barcode.length - 1) == res.text) {
                    bottle.style = -1;
                }
            });
        });
    };
    //----vider b1 B2 ;:
    AddbottleceintPage.prototype.viderB2 = function () {
        var _this = this;
        this.barcode.scan().then(function (res) {
            _this.bottlesB2.map(function (bottle) {
                if (bottle.barcode.substring(0, bottle.barcode.length - 1) == res.text) {
                    bottle.style = -1;
                }
            });
        });
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
                        _this.upcStatus = _this.global.upcmodbus.general.upcStatus;
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
    AddbottleceintPage.prototype.changeReserveType = function () {
        this.global.upcmodbus.client.setIntInHoldingRegister(40382, 1, parseInt(this.reserveType));
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
    AddbottleceintPage.prototype.ecrireLesBouteilles = function () {
        var _this = this;
        //b1
        var counter1 = 0;
        var res = [];
        this.bottlesB1.forEach(function (el) {
            if (el.style == 1 || el.style == 0)
                res = res.concat(_this.global.upcmodbus.client.getArray(5, el.barcode));
            counter1++;
        });
        for (var i = res.length; i < 45; i++) {
            res.push(0);
        }
        console.log("bottle B1 register : ");
        console.log(res);
        //b1
        var counter2 = 0;
        var res2 = [];
        this.bottlesB2.forEach(function (el) {
            if (el.style == 1 || el.style == 0)
                res2 = res2.concat(_this.global.upcmodbus.client.getArray(5, el.barcode));
            counter2++;
        });
        for (var i = res2.length; i < 45; i++) {
            res2.push(0);
        }
        console.log("bottle B1 register : ");
        console.log(res2);
        if (counter1 < 10 && counter2 < 10) {
            this.global.upcmodbus.client
                .writeMultipleRegisters(41169, res2)
                .then(function () {
                _this.global.upcmodbus.client
                    .writeMultipleRegisters(41124, res)
                    .then(function (result) {
                    //ecriture reussi des codesBars :
                    // ajouter les valeurs dans content :
                    console.log("- contenu a ajouter B1 : ", _this.contenueAAjouterB1);
                    console.log("- contenu a ajouter B2 : ", _this.contenueAAjouterB2);
                    _this.global.upcmodbus.client
                        .setFloatInHoldingRegister(40384, 1000 * (_this.contenueAAjouterB1 / 1.97))
                        .then(function (result) {
                        _this.global.upcmodbus.client
                            .setFloatInHoldingRegister(40386, 1000 * (_this.contenueAAjouterB2 / 1.97))
                            .then(function (result) {
                            alert("synchronisation reussie !");
                        })
                            .catch(function (err) { });
                    })
                        .catch(function (err) { });
                    _this.tryToRead = true;
                })
                    .catch(function (err) { });
            })
                .catch(function (err) { });
        }
        else {
            alert("Erreur : le nombre des bouteilles doit etre inferieur ou egale a 9 de chaque coté ");
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
    AddbottleceintPage.prototype.ondiffusionchnage = function () {
        var _this = this;
        var x = this.upcStatus ? 0 : 1;
        this.global.upcmodbus.client
            .setIntInHoldingRegister(40011, 1, x)
            .then(function (result) {
            _this.upcStatus = x;
        })
            .catch(function (err) {
            alert("Erreur: changement de mode de diffusion echoué ");
        });
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
            _this.reserveType = _this.global.upcmodbus.reserveType + "";
            console.log("<<<<>>>>>>>> reserve type :", _this.reserveType);
            console.log("bottles en  b1");
            console.log(_this.global.upcmodbus.reserves.bottlesB1);
            //lire les barcodes en B1 :
            _this.bottlesB1 = [];
            _this.contenueAAjouterB1 = 0;
            _this.global.upcmodbus.reserves.bottlesB1.forEach(function (barcode) {
                if (barcode != "\u0000\u0000\u0000") {
                    _this.aEcrir.b1.push(barcode);
                    var bottle_1 = {
                        barcode: barcode.replace(/[^\w\s]/gi, ""),
                        type: {},
                        style: 0,
                    };
                    console.log(bottle_1.barcode.charAt(bottle_1.barcode.length - 1));
                    var bt = _this.bottleTypedb.find(function (elem) {
                        return elem.codeUpc.toString() ==
                            bottle_1.barcode.charAt(bottle_1.barcode.length - 1);
                    });
                    console.log(bt);
                    bottle_1.type = bt;
                    _this.bottlesB1.push(bottle_1);
                }
            });
            console.log(_this.bottlesB1);
            //lire les barcodes en B2 :
            console.log("bottles en B2");
            console.log(_this.global.upcmodbus.reserves.bottlesB2);
            _this.bottlesB2 = [];
            _this.contenueAAjouterB2 = 0;
            _this.global.upcmodbus.reserves.bottlesB2
                .filter(function (el) { return el != ""; })
                .forEach(function (barcode) {
                if (barcode != "\u0000\u0000\u0000") {
                    _this.aEcrir.b2.push(barcode);
                    var bottle_2 = {
                        barcode: barcode.replace(/[^\w\s]/gi, ""),
                        type: {},
                        style: 0,
                    };
                    var bt = _this.bottleTypedb.find(function (elem) {
                        return elem.codeUpc.toString() ==
                            bottle_2.barcode.charAt(bottle_2.barcode.length - 1);
                    });
                    bottle_2.type = bt;
                    _this.bottlesB2.push(bottle_2);
                }
            });
            console.log(_this.bottlesB2);
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
    AddbottleceintPage.prototype.ionViewWillLeave = function () {
        console.log("quitter la page  :");
        clearInterval(this.do);
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] }
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]])
    ], AddbottleceintPage);
    return AddbottleceintPage;
}());



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es5.js.map