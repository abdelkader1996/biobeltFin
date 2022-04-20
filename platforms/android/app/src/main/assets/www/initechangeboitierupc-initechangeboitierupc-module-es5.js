(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["initechangeboitierupc-initechangeboitierupc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/initechangeboitierupc/initechangeboitierupc.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/initechangeboitierupc/initechangeboitierupc.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>initechangeboitierupc</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Initialisation / Echange boitier UPC</h4>\n      </ion-col>\n    </ion-row> \n    <ion-row style=\"padding-top:70%; justify-content: center;\">\n      <h6>Page en cours de développement</h6>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf=\"display\">\n  <ion-button style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/initechangeboitierupc/initechangeboitierupc-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/initechangeboitierupc/initechangeboitierupc-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InitechangeboitierupcPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitechangeboitierupcPageRoutingModule", function() { return InitechangeboitierupcPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _initechangeboitierupc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initechangeboitierupc.page */ "./src/app/initechangeboitierupc/initechangeboitierupc.page.ts");




var routes = [
    {
        path: '',
        component: _initechangeboitierupc_page__WEBPACK_IMPORTED_MODULE_3__["InitechangeboitierupcPage"]
    }
];
var InitechangeboitierupcPageRoutingModule = /** @class */ (function () {
    function InitechangeboitierupcPageRoutingModule() {
    }
    InitechangeboitierupcPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InitechangeboitierupcPageRoutingModule);
    return InitechangeboitierupcPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/initechangeboitierupc/initechangeboitierupc.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/initechangeboitierupc/initechangeboitierupc.module.ts ***!
  \***********************************************************************/
/*! exports provided: InitechangeboitierupcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitechangeboitierupcPageModule", function() { return InitechangeboitierupcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _initechangeboitierupc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initechangeboitierupc-routing.module */ "./src/app/initechangeboitierupc/initechangeboitierupc-routing.module.ts");
/* harmony import */ var _initechangeboitierupc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initechangeboitierupc.page */ "./src/app/initechangeboitierupc/initechangeboitierupc.page.ts");







var InitechangeboitierupcPageModule = /** @class */ (function () {
    function InitechangeboitierupcPageModule() {
    }
    InitechangeboitierupcPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _initechangeboitierupc_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitechangeboitierupcPageRoutingModule"]
            ],
            declarations: [_initechangeboitierupc_page__WEBPACK_IMPORTED_MODULE_6__["InitechangeboitierupcPage"]]
        })
    ], InitechangeboitierupcPageModule);
    return InitechangeboitierupcPageModule;
}());



/***/ }),

/***/ "./src/app/initechangeboitierupc/initechangeboitierupc.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/initechangeboitierupc/initechangeboitierupc.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXRlY2hhbmdlYm9pdGllcnVwYy9pbml0ZWNoYW5nZWJvaXRpZXJ1cGMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/initechangeboitierupc/initechangeboitierupc.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/initechangeboitierupc/initechangeboitierupc.page.ts ***!
  \*********************************************************************/
/*! exports provided: InitechangeboitierupcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitechangeboitierupcPage", function() { return InitechangeboitierupcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var InitechangeboitierupcPage = /** @class */ (function () {
    function InitechangeboitierupcPage(storage, router, global) {
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.display = false;
        this.global.checkMode();
    }
    InitechangeboitierupcPage.prototype.ngOnInit = function () { };
    InitechangeboitierupcPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
    };
    InitechangeboitierupcPage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    InitechangeboitierupcPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
    ]; };
    InitechangeboitierupcPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initechangeboitierupc',
            template: __webpack_require__(/*! raw-loader!./initechangeboitierupc.page.html */ "./node_modules/raw-loader/index.js!./src/app/initechangeboitierupc/initechangeboitierupc.page.html"),
            styles: [__webpack_require__(/*! ./initechangeboitierupc.page.scss */ "./src/app/initechangeboitierupc/initechangeboitierupc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], InitechangeboitierupcPage);
    return InitechangeboitierupcPage;
}());



/***/ })

}]);
//# sourceMappingURL=initechangeboitierupc-initechangeboitierupc-module-es5.js.map