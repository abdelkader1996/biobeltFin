(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n   \n    </ion-buttons>\n    \n    <ion-title>{{stockRet}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n     \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 style=\"text-align: center;\">Changement de bouteilles </h3>\n  <ion-button (click)=\"onSynchro()\">Synchroniser</ion-button>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n  <ion-grid style=\"padding-top: 5%;\">\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\" (click)=\"changeRes(1);\" [ngClass]=\"{'bgreen' : highlightB1, 'bgblank' : redBackground}\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\" (click)=\"changeRes(2);\" [ngClass]=\"{'bgreen' : highlightB2, 'bgblank' : redBackground}\">\n          B2\n        </h1>  \n      </ion-col>\n      <!--<ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\n        <div style=\"text-align: center;\">Contenant</div>\n      </ion-col>-->\n      <!--<ion-col size=\"6\">\n        <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenantB1\" (ngModelChange)=\"changeContenantB1();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenantB2\" (ngModelChange)=\"changeContenantB2();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\n\n      </ion-col>-->\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\n          <div style=\"text-align: center;\">Etat du Contenu</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\" [ngClass]=\"{'bgred' : redBackground}\">\n        \n        <ion-select *ngIf=\"!redBackground\" [(ngModel)]=\"statusB1\" (ngModelChange)=\"changeContentStatus('B1');\">\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label *ngIf=\"redBackground\" style=\"text-align: center;\">-</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\" [ngClass]=\"{'bgred' : redBackground}\">\n        \n        <ion-select *ngIf=\"!redBackground\" [(ngModel)]=\"statusB2\" (ngModelChange)=\"changeContentStatus('B2');\">\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\n        </ion-select>\n        <ion-label *ngIf=\"redBackground\" style=\"text-align: center;\">-</ion-label>\n      </ion-col>\n\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;background-color:green;\">\n        <div style=\"text-align: center;\">Contenu Mesuré</div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"contenuegreen\" >\n      <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"global.contenuB1\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"contenuegreen2\">\n        <div id=\"one\" class=\"ion-float-right\" style=\"font-size :x-large;text-align: center;\"><ion-input  *ngIf=\"!redBackground\" id=\"two\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"global.contenuB2\"></ion-input> <ion-label *ngIf=\"redBackground\">-</ion-label><span id=\"three\">kg</span></div>\n      </ion-col>\n      <ion-col id=\"rmv\" size=\"12\"><ion-button (click)=\"onRemove();\" color=\"danger\" size=\"block\">\n        Enlever une bouteille \n      </ion-button></ion-col>\n\n        <ion-col size=\"12\" *ngIf=\"removedBottleUnknown.length > 0\" class=\"ion-align-self-center\" style=\"background-color: yellow;\"><div style=\"text-align : center\">Bouteilles enlevées Inconnu</div> </ion-col>\n        <ion-col size=\"12\" style=\"background-color: yellow;\" *ngFor=\"let rmb of removedBottleUnknown\"><div style=\"text-align : center\">{{\"Bouteille code barre : \"+rmb}}</div></ion-col>\n      \n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>          \n          <ion-item>Capacité : <ion-input type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"global.contenantB1\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeContenant('B1');\"></ion-input> kg</ion-item>\n          <div *ngFor=\"let b1 of global.stringsB1;let i = index;\">\n          <ion-item>\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\" [ngClass]=\"{'added': global.isAddedB1[i]}\">{{b1}}</ion-label>\n            <div id = \"{{'b1'+i}}\" *ngIf=\"global.contenusB1.length > 0\" [ngClass]=\"{'added': global.isAddedB1[i]}\">\n          \n          </div>\n          \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n          \n        </div>\n        <!--<div *ngFor=\"let rmb1 of removedBottleStringB1\">\n          <ion-item>\n           <div class=\"removed\"> {{rmb1}} </div>\n          </ion-item>\n        </div>-->\n        \n        <ion-item (click)=\"onAddBottle('B1');\">\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\n        </ion-item>  \n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item>Capacité : <ion-input type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"global.contenantB2\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeContenant('B2');\"></ion-input> kg</ion-item>\n          <div *ngFor=\"let b2 of global.stringsB2;let i = index;\">\n          <ion-item>\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\" [ngClass]=\"{'added': global.isAddedB2[i]}\">{{b2}}</ion-label>\n            <div *ngIf=\"global.contenusB2.length > 0\" [ngClass]=\"{'added': global.isAddedB2[i]}\"></div>            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n          \n        </div>\n        <div *ngFor=\"let rmb2 of removedBottleStringB2\">\n          <ion-item>\n            <div class=\"removed\">{{rmb2}}</div>\n          </ion-item>\n        </div>\n        \n        <ion-item (click)=\"onAddBottle('B2');\">\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\n        </ion-item>\n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n     \n\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\" (click)=\"global.onReadStatiqueEnable()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>\n    Suivant<ion-icon name='arrow-forward'></ion-icon>\n  </ion-button>  \n</ion-footer>\n\n<!--<ion-footer>\n  <ion-button (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec le serveur </ion-button>\n\n</ion-footer>-->\n"

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
        this.stockRet = "En cours...";
        this.addressage = 41124;
        this.addressage2 = 41169;
        this.B1 = []; //codebars bouteilles en B1 sans le code upc
        this.B1Ad = []; //codebars bouteilles en B1 avec code upc
        this.stringsB1 = []; //B1 string affichée : fournisseur + codebar + désignation 
        this.B1Desig = [];
        this.isAddedB1 = [];
        this.B2 = []; //codebars bouteilles en B2 sans le code upc
        this.B2Ad = []; //codebars bouteilles en B2 avec code upc
        this.stringsB2 = []; //B2 string affichée : fournisseur + codebar + désignation 
        this.B2Desig = [];
        this.isAddedB2 = [];
        this.i = 0;
        this.y = 0;
        this.addedBottlesB1 = { barcodes: [], contenus: [] };
        this.addedBottlesB2 = { barcodes: [], contenus: [] };
        this.removedBottle = { barcodes: [] };
        this.removedBottleStringB1 = [];
        this.removedBottleStringB2 = [];
        this.removedBottleUnknown = [];
        this.isBBAM = false;
        this.contenuB1 = 0;
        this.contenuB2 = 0;
        this.highlightB1 = false;
        this.highlightB2 = false;
        this.ssid = "";
        this.redBackground = false;
        this.display = false;
        this.isLoaded = false;
        this.contenantB1 = 0;
        this.contenantB2 = 0;
        this.bottleIncB1 = [];
        this.bottleIncB2 = [];
        this.stockBottleTypes = [];
        this.stockBottleTypesModeTest = [];
        this.bottleTypesInputs = [];
        this.stockBottleTypesModeTestTmp = [];
        this.stockBottleTypesTmp = [];
        this.bottlesInTransit = [];
        this.ceintureChoisieBottles = [];
        this.contenuAjouteEnB1 = 0;
        this.contenuAjouteEnB2 = 0;
        this.addedBottlesStringsB1 = [];
        this.addedBottlesStringsB2 = [];
        this.transitBottlesBarcodes = [];
        this.ceintureChoisieBottlesBarcodes = [];
        this.global.checkMode();
    }
    AddbottleceintPage.prototype.ngOnInit = function () {
        var _this = this;
        this.global.connexionRequise = "UPC";
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
        this.storage.get("stockBottleTypes").then(function (res) { _this.stockBottleTypes = res; });
        this.storage.get("stockBottleTypesModeTest").then(function (res) { _this.stockBottleTypesModeTest = res; });
        this.storage.get("bottlesInTransit").then(function (res) { _this.bottlesInTransit = res; alert("Boutillees Transit :" + JSON.stringify(res)); });
        this.storage.get("ceintureChoisieBottles").then(function (res) { _this.ceintureChoisieBottles = res; });
        this.storage.get("addedBottlesB1").then(function (res) {
            if (res == undefined || res == null) {
                _this.addedBottlesB1 = {};
            }
            else {
                _this.addedBottlesB1 = res;
            }
        });
        this.storage.get("addedBottlesStringsB1").then(function (res) {
            if (res == undefined || res == null) {
                _this.addedBottlesStringsB1 = [];
            }
            else {
                _this.addedBottlesStringsB1 = res;
            }
        });
        this.storage.get("addedBottlesB2").then(function (res) {
            if (res == undefined || res == null) {
                _this.addedBottlesB2 = {};
            }
            else {
                _this.addedBottlesB2 = res;
            }
        });
        this.storage.get("addedBottlesStringsB2").then(function (res) {
            if (res == undefined || res == null) {
                _this.addedBottlesStringsB2 = [];
            }
            else {
                _this.addedBottlesStringsB2 = res;
            }
        });
        /*
        this.addedBottlesB1.date = new Date().toISOString().substr(0,16);
        this.addedBottlesB1.objet ="Remplissage";
        this.addedBottlesB2.date = new Date().toISOString().substr(0,16);
        this.addedBottlesB2.objet ="Remplissage";
        this.removedBottle.date = new Date().toISOString().substr(0,16);*/
        this.platform.ready().then(function () {
            _this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__["CorrespondancesRegistres"]();
            _this.global.onReadStatiqueEnable().then(function () {
                _this.subscribeRefresh();
                _this.loadBottles();
            });
        });
    };
    AddbottleceintPage.prototype.calcContenant = function (reserve) {
        if (reserve == "B1") {
            this.global.contenantB1 = 0;
            for (var i = 0; i < this.global.contenusB1.length; i++) {
                this.global.contenantB1 += parseFloat(this.global.contenusB1[i]);
            }
            this.global.upcmodbus.reserves.co2Res1StartVol = this.global.contenantB1;
        }
        else {
            if (reserve == "B2") {
                this.global.contenantB2 = 0;
                for (var i = 0; i < this.global.contenusB2.length; i++) {
                    this.global.contenantB2 += parseFloat(this.global.contenusB2[i]);
                }
                this.global.upcmodbus.reserves.co2Res2StartVol = this.global.contenantB2;
            }
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
    AddbottleceintPage.prototype.loadBottles = function () {
        var _this = this;
        //alert("load bottles")
        this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
        this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;
        this.B1 = []; //codebars sans le code upc
        this.B1Ad = []; //bouteilles en ligne
        this.stringsB1 = []; //fournisseur 
        this.B1Desig = []; //capacité    
        this.isAddedB1 = [];
        this.B2 = [];
        this.B2Ad = [];
        this.stringsB2 = [];
        this.B2Desig = [];
        this.isAddedB2 = [];
        this.bottleIncB1 = []; //bouteilles inconnues ajoutées depuis l'admin sans barcode
        this.bottleIncB2 = [];
        if (localStorage.getItem("removedStringB1")) {
            this.removedBottleStringB1 = JSON.parse(localStorage.getItem("removedStringB1"));
        }
        if (localStorage.getItem("removedStringB2")) {
            this.removedBottleStringB2 = JSON.parse(localStorage.getItem("removedStringB2"));
        }
        if (localStorage.getItem("removedBottleUnknown")) {
            this.removedBottleUnknown = JSON.parse(localStorage.getItem("removedBottleUnknown"));
        }
        //liste bouteilles en B1
        for (var i = 0; i < this.global.upcmodbus.reserves.bottlesB1.length; i++) {
            if (this.global.upcmodbus.reserves.bottlesB1[i] != undefined) {
                var text = this.global.upcmodbus.reserves.bottlesB1[i];
                if (text.substr(0, text.length - 1).includes("Inco")) {
                    this.global.bottleInconnuesB1.push(i); //bouteilles inconnues en B1       
                }
                var letterNumber = /^[0-9a-zA-Z]+$/;
                if (text[0].match(letterNumber)) { //c'est à priori un codebar          
                    text = text.replace(/[^\w\s]/gi, '');
                    var indexBottleType;
                    this.stockBottleTypes.forEach(function (element, index) {
                        if (text.charAt(text.length - 1) == element.codeUpc.toString()) { //c'est bien un codebar              
                            indexBottleType = index;
                            _this.global.contenusB1.push(_this.stockBottleTypes[indexBottleType].designation);
                            _this.global.stringsB1.push(_this.stockBottleTypes[indexBottleType].brand + " (" + text + ") " + _this.stockBottleTypes[indexBottleType].contenue);
                            _this.global.codebarsB1SansCodeUpc.push(text.substr(0, text.length - 1));
                            //this.B1Ad.push(text)
                            var count = 10 - text.length;
                            var barcode = text;
                            for (var m = 0; m < count; m++) {
                                barcode += '\0';
                            }
                            _this.global.codebarsB1.push(barcode);
                            _this.global.isAddedB1.push(false);
                        }
                    });
                }
            }
        }
        //alert(this.global.codebarsB1SansCodeUpc)
        if (this.addedBottlesStringsB1.length != 0) {
            this.addedBottlesStringsB1.forEach(function (string) {
                _this.global.stringsB1.push(string);
            });
        }
        if (this.addedBottlesB1.contenus != undefined) {
            this.addedBottlesB1.contenus.forEach(function (contenu) {
                _this.global.contenusB1.push(contenu);
            });
            this.addedBottlesB1.barcodes.forEach(function (barcode) {
                _this.global.codebarsB1.push(barcode);
            });
        }
        if (localStorage.getItem("isAddedB1")) {
            this.global.isAddedB1 = JSON.parse(localStorage.getItem("isAddedB1"));
        }
        //liste bouteilles en B2    
        for (var j = 0; j < this.global.upcmodbus.reserves.bottlesB2.length; j++) {
            if (this.global.upcmodbus.reserves.bottlesB2[j] != undefined) {
                var text2 = this.global.upcmodbus.reserves.bottlesB2[j];
                if (text2.substr(0, text.length - 1).includes("Inco")) {
                    this.global.bottleInconnuesB2.push(j);
                }
                //if(text != "" && text !="\0\0\0\0\0\0\0\0\0\0"){
                var letterNumber = /^[0-9a-zA-Z]+$/;
                if (text2[0].match(letterNumber)) { //c'est à priori un codebar
                    text2 = text2.replace(/[^\w\s]/gi, '');
                    var indexBottleType2;
                    this.stockBottleTypes.forEach(function (element, index) {
                        if (text2.charAt(text2.length - 1) == element.codeUpc.toString()) { //c'est bien un codebar
                            indexBottleType2 = index;
                            _this.global.contenusB2.push(_this.stockBottleTypes[indexBottleType2].designation);
                            _this.global.stringsB2.push(_this.stockBottleTypes[indexBottleType2].brand + " (" + text2 + ") " + _this.stockBottleTypes[indexBottleType2].contenue);
                            _this.global.codebarsB2SansCodeUpc.push(text2.substr(0, text2.length - 1));
                            //this.global.codebarsB2.push(text)
                            var count2 = 10 - text2.length;
                            var barcode2 = text2;
                            for (var m = 0; m < count2; m++) {
                                barcode2 += '\0';
                            }
                            _this.global.codebarsB2.push(barcode2);
                            _this.global.isAddedB2.push(false);
                        }
                    });
                }
            }
        }
        if (this.addedBottlesStringsB2.length != 0) {
            this.addedBottlesStringsB2.forEach(function (string) {
                _this.global.stringsB2.push(string);
            });
        }
        if (this.addedBottlesB2.contenus != undefined) {
            this.addedBottlesB2.contenus.forEach(function (contenu) {
                _this.global.contenusB2.push(contenu);
            });
            this.addedBottlesB2.barcodes.forEach(function (barcode) {
                _this.global.codebarsB2.push(barcode);
            });
        }
        if (localStorage.getItem("isAddedB2")) {
            this.global.isAddedB2 = JSON.parse(localStorage.getItem("isAddedB2"));
        }
        this.isLoaded = true;
        alert("contenus B1 : " + this.global.contenusB1);
        alert("contenus B2 : " + this.global.contenusB2);
    };
    AddbottleceintPage.prototype.onRemoveWithIndex = function (i, text, reserve) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.removedBottle.barcodes.push(text);
                localStorage.setItem("removed", JSON.stringify(this.removedBottle));
                if (reserve == "B1") {
                    this.global.upcmodbus.reserves.co2Res1StartVol -= parseFloat(this.global.contenusB1[i]);
                    if (this.global.upcmodbus.reserves.co2Res1StartVol < 0) {
                        if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                            this.global.upcmodbus.reserves.co2Res1StartVol = 0;
                        }
                    }
                    this.removedBottleStringB1.push(this.global.stringsB1[i].replace("Inconnue", text));
                    localStorage.setItem("removedStringB1", JSON.stringify(this.removedBottleStringB1));
                    this.global.codebarsB1.splice(i, 1);
                    this.global.codebarsB1SansCodeUpc.splice(i, 1);
                    this.global.contenusB1.splice(i, 1);
                    this.global.stringsB1.splice(i, 1);
                    if (this.global.isAddedB1[i]) {
                        this.global.upcmodbus.reserves.co2Res1ActVol -= parseFloat(this.global.contenusB1[i]);
                    }
                    this.global.isAddedB1.splice(i, 1);
                    this.global.upcmodbus.reserves.bottlesB1.splice(i, 1);
                    this.storage.set("isAddedB1", JSON.stringify(this.isAddedB1));
                }
                else {
                    if (reserve == "B2") {
                        this.global.upcmodbus.reserves.co2Res2StartVol -= parseFloat(this.global.contenusB2[i]);
                        if (this.global.upcmodbus.reserves.co2Res2StartVol < 0) {
                            if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                                this.global.upcmodbus.reserves.co2Res2StartVol = 0;
                            }
                        }
                        this.removedBottleStringB2.push(this.global.stringsB2[i].replace("Inconnue", text));
                        this.storage.set("removedStringB2", JSON.stringify(this.removedBottleStringB2));
                        this.global.codebarsB2.splice(i, 1);
                        this.global.codebarsB2SansCodeUpc.splice(i, 1);
                        this.global.contenusB2.splice(i, 1);
                        this.global.stringsB2.splice(i, 1);
                        if (this.global.isAddedB2[i]) {
                            this.global.upcmodbus.reserves.co2Res2ActVol -= parseFloat(this.global.contenusB2[i]);
                        }
                        this.global.isAddedB2.splice(i, 1);
                        this.global.upcmodbus.reserves.bottlesB2.splice(i, 1);
                        this.storage.set("isAddedB2", JSON.stringify(this.isAddedB2));
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    AddbottleceintPage.prototype.onRemove = function () {
        var _this = this;
        this.scan.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var addedbottle, scanned, indexB1, indexB2, indexB1front, indexB2front, indexB1Ad, indexB2Ad, reserve, input, alertInc, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.cancelled != true)) return [3 /*break*/, 5];
                        scanned = false;
                        indexB1 = -1;
                        indexB2 = -1;
                        indexB1front = -1;
                        indexB2front = -1;
                        indexB1Ad = -1;
                        indexB2Ad = -1;
                        if (this.global.codebarsB1SansCodeUpc.includes(res.text)) {
                            scanned = true;
                            reserve = "B1";
                            indexB1 = this.global.codebarsB1SansCodeUpc.indexOf(res.text);
                        }
                        if (this.global.codebarsB2SansCodeUpc.includes(res.text)) {
                            scanned = true;
                            reserve = "B2";
                            indexB2 = this.global.codebarsB2SansCodeUpc.indexOf(res.text);
                        }
                        if (!scanned) return [3 /*break*/, 1];
                        this.removedBottle.barcodes.push(res.text);
                        localStorage.setItem("removed", JSON.stringify(this.removedBottle));
                        if (reserve == "B1") { //la bouteille à enlever est en B1
                            if (this.isAddedB1[indexB1] == true) {
                                this.global.upcmodbus.reserves.co2Res1ActVol -= parseFloat(this.global.contenusB1[indexB1]);
                                this.global.contenuEnleveEnB1 += this.global.contenusB1[indexB1];
                            }
                            this.global.upcmodbus.reserves.co2Res1StartVol -= parseFloat(this.global.contenusB1[indexB1]);
                            if (this.global.upcmodbus.reserves.co2Res1ActVol < 0) {
                                if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                                    this.global.upcmodbus.reserves.co2Res1ActVol = 0;
                                }
                            }
                            this.removedBottleStringB1.push(this.stringsB1[indexB1]);
                            this.storage.set("removedStringB1", JSON.stringify(this.removedBottleStringB1));
                            if (this.global.isAddedB1[indexB1] == true) {
                                this.global.isAddedB1.splice(indexB1, 1);
                            }
                            this.global.codebarsB1.splice(indexB1, 1);
                            this.global.codebarsB1SansCodeUpc.splice(indexB1, 1);
                            this.global.stringsB1.splice(indexB1, 1);
                            this.global.contenusB1.splice(indexB1, 1);
                            this.global.upcmodbus.reserves.bottlesB1.splice(indexB1, 1);
                            this.storage.set("isAddedB1", JSON.stringify(this.isAddedB1));
                            this.calcContenant("B1");
                        }
                        else if (reserve == "B2") { //la bouteille à enlever est en B2  
                            if (this.isAddedB2[indexB2] == true) {
                                this.global.upcmodbus.reserves.co2Res2ActVol -= parseFloat(this.global.contenusB2[indexB2]);
                                this.global.contenuEnleveEnB2 += this.global.contenusB2[indexB2];
                            }
                            this.global.upcmodbus.reserves.co2Res2StartVol -= parseFloat(this.global.contenusB2[indexB2]);
                            if (this.global.upcmodbus.reserves.co2Res2ActVol < 0) {
                                if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                                    this.global.upcmodbus.reserves.co2Res2ActVol = 0;
                                }
                            }
                            this.removedBottleStringB2.push(this.global.stringsB2[indexB2]);
                            this.storage.set("removedStringB2", JSON.stringify(this.removedBottleStringB2));
                            if (this.global.isAddedB2[indexB2]) {
                                this.global.isAddedB2.splice(indexB2, 1);
                            }
                            this.global.codebarsB2.splice(indexB2, 1);
                            this.global.codebarsB2SansCodeUpc.splice(indexB2, 1);
                            this.global.stringsB2.splice(indexB2, 1);
                            this.global.contenusB2.splice(indexB2, 1);
                            this.global.upcmodbus.reserves.bottlesB2.splice(indexB2, 1);
                            this.storage.set("isAddedB2", JSON.stringify(this.global.isAddedB2));
                            this.calcContenant("B2");
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        input = [];
                        this.global.bottleInconnuesB1.forEach(function (item) {
                            input.push({
                                label: _this.global.stringsB1[item] + " en B1",
                                type: 'radio',
                                name: _this.global.contenusB1[item],
                                handler: function () {
                                    _this.onRemoveWithIndex(item, res.text, "B1");
                                    alertInc.dismiss();
                                }
                            });
                        });
                        this.global.bottleInconnuesB2.forEach(function (item) {
                            input.push({
                                label: _this.global.stringsB2[item] + " en B2",
                                type: 'radio',
                                name: _this.global.contenusB2[item],
                                handler: function () {
                                    _this.onRemoveWithIndex(item, res.text, "B2");
                                    alertInc.dismiss();
                                }
                            });
                        });
                        if (!(this.global.bottleInconnuesB1.length > 0 || this.global.bottleInconnuesB2.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCTRL.create({
                                cssClass: "nothing",
                                header: "Enlèvement Bouteille",
                                message: "Il y a des bouteilles inconnues, veuillez assigner la bouteille scannée...",
                                inputs: input
                            })];
                    case 2:
                        alertInc = _a.sent();
                        alertInc.present();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.alertCTRL.create({
                            cssClass: 'my-custom-class',
                            header: 'Enlèvement Bouteille',
                            message: "La bouteille n'a pas été scannée par le passé, Êtes vous sur de vouloir l'enlever ?",
                            buttons: [{ text: "OUI", handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var reserve, alrt, alrtinput;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    reserve = "";
                                                    return [4 /*yield*/, this.alertCTRL.create({
                                                            cssClass: 'my-custom-class',
                                                            header: 'Enlèvement Bouteille',
                                                            message: "La bouteille était-elle en B1 ou en B2 ?",
                                                            buttons: [{ text: "B1", handler: function () {
                                                                        reserve = "B1";
                                                                        alrtinput.present();
                                                                        _this.removedBottle.barcodes.push(res.text);
                                                                        localStorage.setItem("removed", JSON.stringify(_this.removedBottle)); /*this.removedBottleUnknown.push(res.text+" en B1");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                                                                    } }, {
                                                                    text: "B2", handler: function () {
                                                                        reserve = "B2";
                                                                        alrtinput.present();
                                                                        _this.removedBottle.barcodes.push(res.text);
                                                                        localStorage.setItem("removed", JSON.stringify(_this.removedBottle)); /*this.removedBottleUnknown.push(res.text+" en B2");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                                                                    }
                                                                }]
                                                        })];
                                                case 1:
                                                    alrt = _a.sent();
                                                    alrt.present();
                                                    this.bottleTypesInputs = [];
                                                    this.stockBottleTypes.forEach(function (element) {
                                                        _this.bottleTypesInputs.push({
                                                            name: element.contenue,
                                                            type: "radio",
                                                            label: element.brand + " " + element.contenue,
                                                            value: element,
                                                            handler: function (data) {
                                                                if (reserve == "B1") {
                                                                    _this.global.contenantB1 -= data.value.designation;
                                                                    _this.removedBottleStringB1.push(data.value.brand + " (" + res.text + ") " + data.value.contenue);
                                                                }
                                                                else {
                                                                    if (reserve == "B2") {
                                                                        _this.global.contenantB2 -= data.value.designation;
                                                                        _this.removedBottleStringB2.push(data.value.brand + " (" + res.text + ") " + data.value.contenue);
                                                                    }
                                                                }
                                                                if (_this.global.contenantB2 < 0)
                                                                    _this.contenantB2 = 0;
                                                                if (_this.global.contenantB1 < 0)
                                                                    _this.contenantB1 = 0;
                                                                alrtinput.dismiss();
                                                            }
                                                        });
                                                    });
                                                    return [4 /*yield*/, this.alertCTRL.create({
                                                            cssClass: "my-custom-class",
                                                            header: 'Type de Bouteille',
                                                            inputs: this.bottleTypesInputs
                                                        })];
                                                case 2:
                                                    alrtinput = _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); } }, { text: "NON", handler: function () { } }]
                        })];
                    case 4:
                        alert_1 = _a.sent();
                        alert_1.present();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            alert("Veuillez activer l'autorisation photo de l'app");
        });
    };
    AddbottleceintPage.prototype.onAddBottle = function (reserve) {
        var _this = this;
        if (this.global.mode == "modeTest") {
        }
        else {
            this.scan.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var isScanned, alrtBT, indexBottleToAdd, bottleToAdd, indexBottleToAdd, bottleToAdd;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(res.text != "")) return [3 /*break*/, 7];
                            isScanned = false;
                            this.global.codebarsB1SansCodeUpc.forEach(function (item) {
                                if (item == res.text) {
                                    isScanned = true;
                                }
                            });
                            this.global.codebarsB2SansCodeUpc.forEach(function (item) {
                                if (item == res.text) {
                                    isScanned = true;
                                }
                            });
                            if (!!isScanned) return [3 /*break*/, 6];
                            alert("!= scanned");
                            //création tableau des codebars des bouteilles en transit pour comparer avec celui scanné
                            this.transitBottlesBarcodes = [];
                            if (this.bottlesInTransit.length != 0) {
                                this.bottlesInTransit.forEach(function (element) {
                                    _this.transitBottlesBarcodes.push(element.barcode);
                                });
                            }
                            alert("pre");
                            this.ceintureChoisieBottlesBarcodes = [];
                            if (this.ceintureChoisieBottles.length != 0) {
                                this.ceintureChoisieBottles.forEach(function (element) {
                                    _this.ceintureChoisieBottlesBarcodes.push(element.barcode);
                                });
                            }
                            alert("post");
                            if (!(this.transitBottlesBarcodes.includes(res.text) == false)) return [3 /*break*/, 4];
                            alert("code scanné ne correspond pas à une bouteille en transit");
                            this.ceintureChoisieBottlesBarcodes = [];
                            if (this.ceintureChoisieBottles.length != 0) {
                                this.ceintureChoisieBottles.forEach(function (element) {
                                    _this.ceintureChoisieBottlesBarcodes.push(element.barcode);
                                });
                            }
                            if (!(this.ceintureChoisieBottlesBarcodes.includes(res.text) == false)) return [3 /*break*/, 2];
                            alert("code scanné ne correspond pas à une bouteille de l'entrepôt");
                            this.bottleTypesInputs = [];
                            this.stockBottleTypes.forEach(function (element) {
                                _this.bottleTypesInputs.push({
                                    name: element.contenue,
                                    type: "radio",
                                    label: element.brand + " " + element.contenue,
                                    value: element,
                                    handler: function (data) {
                                        _this.writeUPC(res.text, data.value.designation, data.value.brand + " (" + res.text + ") " + data.value.contenue, reserve, data.value.codeUpc);
                                    }
                                });
                            });
                            return [4 /*yield*/, this.alertCTRL.create({
                                    header: "Type de bouteille", message: "",
                                    inputs: this.bottleTypesInputs
                                })];
                        case 1:
                            alrtBT = _a.sent();
                            alrtBT.present();
                            return [3 /*break*/, 3];
                        case 2:
                            alert("entrepot");
                            indexBottleToAdd = this.ceintureChoisieBottlesBarcodes.indexOf(res.text);
                            bottleToAdd = this.ceintureChoisieBottles[indexBottleToAdd];
                            if (reserve == "B1") {
                                this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B1 pour l'affichage 
                                this.global.upcmodbus.reserves.co2Res1StartVol += parseFloat(bottleToAdd.bottleType.designation);
                                this.global.contenuAjouteEnB1 += parseFloat(bottleToAdd.bottleType.designation);
                                this.global.codebarsB1SansCodeUpc.push(bottleToAdd.barcode);
                                this.global.stringsB1.push(bottleToAdd.bottleType.brand + " (" + bottleToAdd.barcode + ") " + bottleToAdd.bottleType.contenue);
                                this.global.codebarsB1.push(bottleToAdd.barcode + bottleToAdd.bottleType.codeUpc);
                                this.global.contenusB1.push(bottleToAdd.bottleType.designation);
                                this.global.isAddedB1.push(true);
                                this.addedBottlesB1.barcodes.push(res.text);
                                this.addedBottlesB1.contenus.push(bottleToAdd.bottleType.designation);
                                this.storage.set("addedBottlesB1", this.addedBottlesB1);
                                this.addedBottlesStringsB1.push(bottleToAdd.bottleType.contenue);
                                this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1);
                                this.global.isAddedB1.push(true);
                                this.storage.set("isAddedB1", this.global.isAddedB1);
                                this.calcContenant("B1");
                            }
                            else {
                                if (reserve == "B2") {
                                    this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B2 pour l'affichage 
                                    this.global.upcmodbus.reserves.co2Res2StartVol += parseFloat(bottleToAdd.bottleType.designation);
                                    this.global.contenuAjouteEnB2 += parseFloat(bottleToAdd.bottleType.designation);
                                    this.global.codebarsB2SansCodeUpc.push(bottleToAdd.barcode);
                                    this.global.stringsB2.push(bottleToAdd.bottleType.brand + " (" + bottleToAdd.barcode + ") " + bottleToAdd.bottleType.contenue);
                                    this.global.codebarsB2.push(bottleToAdd.barcode + bottleToAdd.bottleType.codeUpc);
                                    this.global.contenusB2.push(bottleToAdd.bottleType.designation);
                                    this.global.isAddedB2.push(true);
                                    this.addedBottlesB2.barcodes.push(res.text);
                                    this.addedBottlesB2.contenus.push(bottleToAdd.bottleType.designation);
                                    this.storage.set("addedBottlesB2", this.addedBottlesB2);
                                    this.addedBottlesStringsB2.push(bottleToAdd.bottleType.contenue);
                                    this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2);
                                    this.global.isAddedB2.push(true);
                                    this.storage.set("isAddedB2", this.global.isAddedB2);
                                    this.calcContenant("B2");
                                }
                            }
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            alert("transit");
                            indexBottleToAdd = this.transitBottlesBarcodes.indexOf(res.text);
                            bottleToAdd = this.bottlesInTransit[indexBottleToAdd];
                            if (reserve == "B1") {
                                this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B1 pour l'affichage 
                                this.global.upcmodbus.reserves.co2Res1StartVol += parseFloat(bottleToAdd.bottleType.designation);
                                this.global.contenuAjouteEnB1 += parseFloat(bottleToAdd.bottleType.designation);
                                this.global.codebarsB1SansCodeUpc.push(bottleToAdd.barcode);
                                this.global.stringsB1.push(bottleToAdd.bottleType.brand + " (" + bottleToAdd.barcode + ") " + bottleToAdd.bottleType.contenue);
                                this.global.codebarsB1.push(bottleToAdd.barcode + bottleToAdd.bottleType.codeUpc);
                                this.global.contenusB1.push(bottleToAdd.bottleType.designation);
                                this.global.isAddedB1.push(true);
                                this.addedBottlesB1.barcodes.push(res.text);
                                this.addedBottlesB1.contenus.push(bottleToAdd.bottleType.designation);
                                this.storage.set("addedBottlesB1", this.addedBottlesB1);
                                this.addedBottlesStringsB1.push(bottleToAdd.bottleType.contenue);
                                this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1);
                                this.global.isAddedB1.push(true);
                                this.storage.set("isAddedB1", this.global.isAddedB1);
                                this.calcContenant("B1");
                            }
                            else {
                                if (reserve == "B2") {
                                    this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B2 pour l'affichage 
                                    this.global.upcmodbus.reserves.co2Res2StartVol += parseFloat(bottleToAdd.bottleType.designation);
                                    this.global.contenuAjouteEnB2 += parseFloat(bottleToAdd.bottleType.designation);
                                    this.global.codebarsB2SansCodeUpc.push(bottleToAdd.barcode);
                                    this.global.stringsB2.push(bottleToAdd.bottleType.brand + " (" + bottleToAdd.barcode + ") " + bottleToAdd.bottleType.contenue);
                                    this.global.codebarsB2.push(bottleToAdd.barcode + bottleToAdd.bottleType.codeUpc);
                                    this.global.contenusB2.push(bottleToAdd.bottleType.designation);
                                    this.global.isAddedB2.push(true);
                                    this.addedBottlesB2.barcodes.push(res.text);
                                    this.addedBottlesB2.contenus.push(bottleToAdd.bottleType.designation);
                                    this.storage.set("addedBottlesB2", this.addedBottlesB2);
                                    this.addedBottlesStringsB2.push(bottleToAdd.bottleType.contenue);
                                    this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2);
                                    this.global.isAddedB2.push(true);
                                    this.storage.set("isAddedB2", this.global.isAddedB2);
                                    this.calcContenant("B2");
                                }
                            }
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            alert("La bouteille est déjà en ligne !");
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AddbottleceintPage.prototype.writeUPC = function (text, contenu, string, reserve, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var count, barcode, i, d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                count = 10 - (text + index).length;
                barcode = text + index;
                for (i = 0; i < count; i++) {
                    barcode += '\0';
                }
                d = new Date();
                if (reserve == "B1") {
                    this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(contenu); //ajout contenu B1 pour l'affichage 
                    this.global.contenuAjouteEnB1 += parseFloat(contenu);
                    this.global.stringsB1.push(string);
                    this.global.codebarsB1.push(barcode);
                    this.global.codebarsB1SansCodeUpc.push(text);
                    this.global.contenusB1.push(contenu);
                    this.global.addedBottlesB1.kg.push(contenu);
                    this.global.isAddedB1.push();
                    this.addedBottlesB1.barcodes.push(text);
                    this.addedBottlesB1.contenus.push(contenu);
                    this.storage.set("addedBottlesB1", this.addedBottlesB1);
                    this.addedBottlesStringsB1.push(string);
                    this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1);
                    this.global.isAddedB1.push(true);
                    this.storage.set("isAddedB1", this.global.isAddedB1);
                    this.calcContenant("B1");
                }
                else if (reserve == "B2") {
                    this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(contenu); //ajout contenu B2 pour l'affichage 
                    this.global.contenuAjouteEnB2 += parseFloat(contenu);
                    this.global.stringsB2.push(string);
                    this.global.codebarsB2.push(barcode);
                    this.global.codebarsB2SansCodeUpc.push(text);
                    this.global.contenusB2.push(contenu);
                    this.addedBottlesB2.kg.push(contenu);
                    this.addedBottlesB2.barcodes.push(text);
                    this.addedBottlesB2.contenus.push(contenu);
                    this.storage.set("addedBottlesB2", this.addedBottlesB2);
                    this.addedBottlesStringsB2.push(string);
                    this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2);
                    this.global.isAddedB2.push(true);
                    this.storage.set("isAddedB2", this.isAddedB2);
                    this.calcContenant("B2");
                }
                return [2 /*return*/];
            });
        });
    };
    AddbottleceintPage.prototype.changeRes = function (i) {
        var _this = this;
        this.global.onWriteEnable(this.correspondancesRegistres.co2ResActive, i).then(function (res) {
            if (i == 1) {
                _this.highlightB1 = true;
                _this.highlightB2 = false;
            }
            else if (i == 2) {
                _this.highlightB2 = true;
                _this.highlightB1 = false;
            }
            _this.global.upcmodbus.reserves.co2ResActive = i;
            _this.cd.detectChanges();
        });
    };
    AddbottleceintPage.prototype.onChangeContenant = function (reserve) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(reserve == "B1")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol, this.contenantB1 / 0.001974)];
                    case 1:
                        _a.sent();
                        this.subscribeRefresh();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(reserve == "B2")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol, this.contenantB2 / 0.001974)];
                    case 3:
                        _a.sent();
                        this.subscribeRefresh();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
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
            _this.stockRet = _this.global.upcmodbus.nameId;
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
    AddbottleceintPage.prototype.onSynchro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var d, length, i, length, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = new Date();
                        this.global.logs.push(this.global.msToTime(d) + " - ON SYNCHRO");
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 0)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1FillNew, (this.global.contenuAjouteEnB1 - this.global.contenuEnleveEnB1) / 0.001974)]; //conversion en litres      
                    case 3:
                        _a.sent(); //conversion en litres      
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2FillNew, (this.global.contenuAjouteEnB2 - this.global.contenuEnleveEnB2) / 0.001974)];
                    case 4:
                        _a.sent();
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 1)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        //écriture codebars B1
                        if (this.global.codebarsB1.length != 9) {
                            length = this.global.codebarsB1.length;
                            for (i = length + 1; i <= 9; i++) {
                                this.global.codebarsB1.push("\0\0\0\0\0\0\0\0\0\0");
                            }
                        }
                        this.global.writeMultipleRegisters = true;
                        this.global.resetListeCodebarsB1 = true;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res1CodesBarres, this.global.codebarsB1)];
                    case 7:
                        _a.sent();
                        this.global.resetListeCodebarsB1 = false;
                        //écritures codebars B2
                        if (this.global.codebarsB2.length != 9) {
                            length = this.global.codebarsB2.length;
                            for (i = length + 1; i <= 9; i++) {
                                this.global.codebarsB2.push("\0\0\0\0\0\0\0\0\0\0");
                            }
                        }
                        this.global.writeMultipleRegisters = true;
                        this.global.resetListeCodebarsB2 = true;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.global.codebarsB2)];
                    case 8:
                        _a.sent();
                        this.global.resetListeCodebarsB2 = false;
                        //écriture contenants 
                        this.calcContenant("B1");
                        alert("contenus B1 : " + this.global.contenusB1);
                        alert("contenant B1 : " + this.global.contenantB1);
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol, this.global.contenantB1)];
                    case 9:
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res1StartVol = this.global.contenantB1;
                        this.calcContenant("B2");
                        alert("contenus B2 : " + this.global.contenusB2);
                        alert("contenant B2 : " + this.global.contenantB2);
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol, this.global.contenantB2)];
                    case 10:
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res2StartVol = this.global.contenantB2;
                        alert("Synchronisation terminée");
                        return [2 /*return*/];
                }
            });
        });
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