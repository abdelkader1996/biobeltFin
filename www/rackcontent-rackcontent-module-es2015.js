(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rackcontent-rackcontent-module"],{

/***/ "./src/app/rackcontent/rackcontent-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/rackcontent/rackcontent-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RackcontentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RackcontentPageRoutingModule", function() { return RackcontentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rackcontent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");




const routes = [
    {
        path: '',
        component: _rackcontent_page__WEBPACK_IMPORTED_MODULE_3__["RackcontentPage"]
    }
];
let RackcontentPageRoutingModule = class RackcontentPageRoutingModule {
};
RackcontentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RackcontentPageRoutingModule);



/***/ }),

/***/ "./src/app/rackcontent/rackcontent.module.ts":
/*!***************************************************!*\
  !*** ./src/app/rackcontent/rackcontent.module.ts ***!
  \***************************************************/
/*! exports provided: RackcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RackcontentPageModule", function() { return RackcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rackcontent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rackcontent-routing.module */ "./src/app/rackcontent/rackcontent-routing.module.ts");
/* harmony import */ var _rackcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");







let RackcontentPageModule = class RackcontentPageModule {
};
RackcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rackcontent_routing_module__WEBPACK_IMPORTED_MODULE_5__["RackcontentPageRoutingModule"]
        ],
        declarations: [_rackcontent_page__WEBPACK_IMPORTED_MODULE_6__["RackcontentPage"]]
    })
], RackcontentPageModule);



/***/ })

}]);
//# sourceMappingURL=rackcontent-rackcontent-module-es2015.js.map