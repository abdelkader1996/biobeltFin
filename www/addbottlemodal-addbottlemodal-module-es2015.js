(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottlemodal-addbottlemodal-module"],{

/***/ "./src/app/addbottlemodal/addbottlemodal-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddbottlemodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottlemodalPageRoutingModule", function() { return AddbottlemodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addbottlemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");




const routes = [
    {
        path: '',
        component: _addbottlemodal_page__WEBPACK_IMPORTED_MODULE_3__["AddbottlemodalPage"]
    }
];
let AddbottlemodalPageRoutingModule = class AddbottlemodalPageRoutingModule {
};
AddbottlemodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddbottlemodalPageRoutingModule);



/***/ }),

/***/ "./src/app/addbottlemodal/addbottlemodal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal.module.ts ***!
  \*********************************************************/
/*! exports provided: AddbottlemodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottlemodalPageModule", function() { return AddbottlemodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottlemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbottlemodal-routing.module */ "./src/app/addbottlemodal/addbottlemodal-routing.module.ts");
/* harmony import */ var _addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");







let AddbottlemodalPageModule = class AddbottlemodalPageModule {
};
AddbottlemodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addbottlemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddbottlemodalPageRoutingModule"]
        ],
        declarations: [
            _addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"]
        ]
    })
], AddbottlemodalPageModule);



/***/ })

}]);
//# sourceMappingURL=addbottlemodal-addbottlemodal-module-es2015.js.map