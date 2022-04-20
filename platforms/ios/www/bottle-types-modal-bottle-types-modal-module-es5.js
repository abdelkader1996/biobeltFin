(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottle-types-modal-bottle-types-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bottle-types-modal/bottle-types-modal.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottle-types-modal/bottle-types-modal.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-title>Bouteilles</ion-title>\n    <ion-buttons slot=\"end\"><ion-button fill=\"clear\" size=\"default\" (click)=\"onDismiss();\"><ion-label>Close</ion-label></ion-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  In Modal\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/bottle-types-modal/bottle-types-modal-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bottle-types-modal/bottle-types-modal-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BottleTypesModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleTypesModalPageRoutingModule", function() { return BottleTypesModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bottle_types_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottle-types-modal.page */ "./src/app/bottle-types-modal/bottle-types-modal.page.ts");




var routes = [
    {
        path: '',
        component: _bottle_types_modal_page__WEBPACK_IMPORTED_MODULE_3__["BottleTypesModalPage"]
    }
];
var BottleTypesModalPageRoutingModule = /** @class */ (function () {
    function BottleTypesModalPageRoutingModule() {
    }
    BottleTypesModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BottleTypesModalPageRoutingModule);
    return BottleTypesModalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/bottle-types-modal/bottle-types-modal.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bottle-types-modal/bottle-types-modal.module.ts ***!
  \*****************************************************************/
/*! exports provided: BottleTypesModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleTypesModalPageModule", function() { return BottleTypesModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottle_types_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottle-types-modal-routing.module */ "./src/app/bottle-types-modal/bottle-types-modal-routing.module.ts");
/* harmony import */ var _bottle_types_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottle-types-modal.page */ "./src/app/bottle-types-modal/bottle-types-modal.page.ts");







var BottleTypesModalPageModule = /** @class */ (function () {
    function BottleTypesModalPageModule() {
    }
    BottleTypesModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bottle_types_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["BottleTypesModalPageRoutingModule"]
            ],
            declarations: [_bottle_types_modal_page__WEBPACK_IMPORTED_MODULE_6__["BottleTypesModalPage"]]
        })
    ], BottleTypesModalPageModule);
    return BottleTypesModalPageModule;
}());



/***/ }),

/***/ "./src/app/bottle-types-modal/bottle-types-modal.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/bottle-types-modal/bottle-types-modal.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRsZS10eXBlcy1tb2RhbC9ib3R0bGUtdHlwZXMtbW9kYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bottle-types-modal/bottle-types-modal.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/bottle-types-modal/bottle-types-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: BottleTypesModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleTypesModalPage", function() { return BottleTypesModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BottleTypesModalPage = /** @class */ (function () {
    function BottleTypesModalPage(modal) {
        this.modal = modal;
    }
    BottleTypesModalPage.prototype.ngOnInit = function () {
    };
    BottleTypesModalPage.prototype.closeModal = function () {
        this.modal.dismiss({
            'dismissed': true
        });
    };
    BottleTypesModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    BottleTypesModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottle-types-modal',
            template: __webpack_require__(/*! raw-loader!./bottle-types-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/bottle-types-modal/bottle-types-modal.page.html"),
            styles: [__webpack_require__(/*! ./bottle-types-modal.page.scss */ "./src/app/bottle-types-modal/bottle-types-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BottleTypesModalPage);
    return BottleTypesModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=bottle-types-modal-bottle-types-modal-module-es5.js.map