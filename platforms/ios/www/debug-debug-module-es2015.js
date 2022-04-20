(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debug-debug-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/debug/debug.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/debug/debug.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>    \n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Logs</h4>\n      </ion-col>\n    </ion-row>  \n    <ion-row> \n      <ul id=\"logsList\"></ul>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/debug/debug-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/debug/debug-routing.module.ts ***!
  \***********************************************/
/*! exports provided: DebugPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPageRoutingModule", function() { return DebugPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _debug_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug.page */ "./src/app/debug/debug.page.ts");




const routes = [
    {
        path: '',
        component: _debug_page__WEBPACK_IMPORTED_MODULE_3__["DebugPage"]
    }
];
let DebugPageRoutingModule = class DebugPageRoutingModule {
};
DebugPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DebugPageRoutingModule);



/***/ }),

/***/ "./src/app/debug/debug.module.ts":
/*!***************************************!*\
  !*** ./src/app/debug/debug.module.ts ***!
  \***************************************/
/*! exports provided: DebugPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPageModule", function() { return DebugPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _debug_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debug-routing.module */ "./src/app/debug/debug-routing.module.ts");
/* harmony import */ var _debug_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debug.page */ "./src/app/debug/debug.page.ts");







let DebugPageModule = class DebugPageModule {
};
DebugPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _debug_routing_module__WEBPACK_IMPORTED_MODULE_5__["DebugPageRoutingModule"]
        ],
        declarations: [_debug_page__WEBPACK_IMPORTED_MODULE_6__["DebugPage"]]
    })
], DebugPageModule);



/***/ }),

/***/ "./src/app/debug/debug.page.scss":
/*!***************************************!*\
  !*** ./src/app/debug/debug.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYnVnL2RlYnVnLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/debug/debug.page.ts":
/*!*************************************!*\
  !*** ./src/app/debug/debug.page.ts ***!
  \*************************************/
/*! exports provided: DebugPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPage", function() { return DebugPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let DebugPage = class DebugPage {
    constructor(global) {
        this.global = global;
        this.logs = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.logs = this.global.logs;
        this.global.connexionRequise = "Aucune";
        this.logs.forEach(element => {
            jquery__WEBPACK_IMPORTED_MODULE_3__("#logsList").append("<li>" + element + "</li>");
        });
    }
};
DebugPage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
DebugPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-debug',
        template: __webpack_require__(/*! raw-loader!./debug.page.html */ "./node_modules/raw-loader/index.js!./src/app/debug/debug.page.html"),
        styles: [__webpack_require__(/*! ./debug.page.scss */ "./src/app/debug/debug.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
], DebugPage);



/***/ })

}]);
//# sourceMappingURL=debug-debug-module-es2015.js.map