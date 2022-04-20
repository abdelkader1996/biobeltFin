(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapportvisite-rapportvisite-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rapportvisite/rapportvisite.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rapportvisite/rapportvisite.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>rapportvisite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-grid>  \n      <ion-row style=\"display: flex; justify-content: center;\">\n        <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n          <h4>Rapport de visite</h4>\n        </ion-col>\n      </ion-row> \n      <ion-row style=\"padding-top:70%; justify-content: center; font-size: large ;\">\n        <p>Page en cours de développement</p>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RapportvisitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePageRoutingModule", function() { return RapportvisitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rapportvisite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rapportvisite.page */ "./src/app/rapportvisite/rapportvisite.page.ts");




var routes = [
    {
        path: '',
        component: _rapportvisite_page__WEBPACK_IMPORTED_MODULE_3__["RapportvisitePage"]
    }
];
var RapportvisitePageRoutingModule = /** @class */ (function () {
    function RapportvisitePageRoutingModule() {
    }
    RapportvisitePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RapportvisitePageRoutingModule);
    return RapportvisitePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.module.ts ***!
  \*******************************************************/
/*! exports provided: RapportvisitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePageModule", function() { return RapportvisitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rapportvisite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapportvisite-routing.module */ "./src/app/rapportvisite/rapportvisite-routing.module.ts");
/* harmony import */ var _rapportvisite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapportvisite.page */ "./src/app/rapportvisite/rapportvisite.page.ts");







var RapportvisitePageModule = /** @class */ (function () {
    function RapportvisitePageModule() {
    }
    RapportvisitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rapportvisite_routing_module__WEBPACK_IMPORTED_MODULE_5__["RapportvisitePageRoutingModule"]
            ],
            declarations: [_rapportvisite_page__WEBPACK_IMPORTED_MODULE_6__["RapportvisitePage"]]
        })
    ], RapportvisitePageModule);
    return RapportvisitePageModule;
}());



/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnR2aXNpdGUvcmFwcG9ydHZpc2l0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.page.ts ***!
  \*****************************************************/
/*! exports provided: RapportvisitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePage", function() { return RapportvisitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");





var RapportvisitePage = /** @class */ (function () {
    function RapportvisitePage(router, storage, global) {
        this.router = router;
        this.storage = storage;
        this.global = global;
        this.display = false;
        this.global.checkMode();
    }
    RapportvisitePage.prototype.ngOnInit = function () { };
    RapportvisitePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
    };
    RapportvisitePage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    RapportvisitePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    RapportvisitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rapportvisite',
            template: __webpack_require__(/*! raw-loader!./rapportvisite.page.html */ "./node_modules/raw-loader/index.js!./src/app/rapportvisite/rapportvisite.page.html"),
            styles: [__webpack_require__(/*! ./rapportvisite.page.scss */ "./src/app/rapportvisite/rapportvisite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], RapportvisitePage);
    return RapportvisitePage;
}());



/***/ })

}]);
//# sourceMappingURL=rapportvisite-rapportvisite-module-es5.js.map