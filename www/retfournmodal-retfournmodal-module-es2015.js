(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retfournmodal-retfournmodal-module"],{

/***/ "./src/app/retfournmodal/retfournmodal-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/retfournmodal/retfournmodal-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RetfournmodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetfournmodalPageRoutingModule", function() { return RetfournmodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _retfournmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retfournmodal.page */ "./src/app/retfournmodal/retfournmodal.page.ts");




const routes = [
    {
        path: '',
        component: _retfournmodal_page__WEBPACK_IMPORTED_MODULE_3__["RetfournmodalPage"]
    }
];
let RetfournmodalPageRoutingModule = class RetfournmodalPageRoutingModule {
};
RetfournmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RetfournmodalPageRoutingModule);



/***/ }),

/***/ "./src/app/retfournmodal/retfournmodal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/retfournmodal/retfournmodal.module.ts ***!
  \*******************************************************/
/*! exports provided: RetfournmodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetfournmodalPageModule", function() { return RetfournmodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _retfournmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retfournmodal-routing.module */ "./src/app/retfournmodal/retfournmodal-routing.module.ts");
/* harmony import */ var _retfournmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retfournmodal.page */ "./src/app/retfournmodal/retfournmodal.page.ts");







let RetfournmodalPageModule = class RetfournmodalPageModule {
};
RetfournmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retfournmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetfournmodalPageRoutingModule"]
        ],
        declarations: [_retfournmodal_page__WEBPACK_IMPORTED_MODULE_6__["RetfournmodalPage"]]
    })
], RetfournmodalPageModule);



/***/ })

}]);
//# sourceMappingURL=retfournmodal-retfournmodal-module-es2015.js.map