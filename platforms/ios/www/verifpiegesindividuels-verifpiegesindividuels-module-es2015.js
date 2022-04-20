(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifpiegesindividuels-verifpiegesindividuels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/verifpiegesindividuels/verifpiegesindividuels.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verifpiegesindividuels/verifpiegesindividuels.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>verifpiegesindividuels</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Vérification débits pièges individuels</h4>\n      </ion-col>\n    </ion-row> \n    <ion-row style=\"padding-top:70%; justify-content: center;\">\n     <h6>Page en cours de développement</h6> \n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/verifpiegesindividuels/verifpiegesindividuels-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/verifpiegesindividuels/verifpiegesindividuels-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VerifpiegesindividuelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifpiegesindividuelsPageRoutingModule", function() { return VerifpiegesindividuelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _verifpiegesindividuels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verifpiegesindividuels.page */ "./src/app/verifpiegesindividuels/verifpiegesindividuels.page.ts");




const routes = [
    {
        path: '',
        component: _verifpiegesindividuels_page__WEBPACK_IMPORTED_MODULE_3__["VerifpiegesindividuelsPage"]
    }
];
let VerifpiegesindividuelsPageRoutingModule = class VerifpiegesindividuelsPageRoutingModule {
};
VerifpiegesindividuelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifpiegesindividuelsPageRoutingModule);



/***/ }),

/***/ "./src/app/verifpiegesindividuels/verifpiegesindividuels.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/verifpiegesindividuels/verifpiegesindividuels.module.ts ***!
  \*************************************************************************/
/*! exports provided: VerifpiegesindividuelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifpiegesindividuelsPageModule", function() { return VerifpiegesindividuelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verifpiegesindividuels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verifpiegesindividuels-routing.module */ "./src/app/verifpiegesindividuels/verifpiegesindividuels-routing.module.ts");
/* harmony import */ var _verifpiegesindividuels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifpiegesindividuels.page */ "./src/app/verifpiegesindividuels/verifpiegesindividuels.page.ts");







let VerifpiegesindividuelsPageModule = class VerifpiegesindividuelsPageModule {
};
VerifpiegesindividuelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verifpiegesindividuels_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifpiegesindividuelsPageRoutingModule"]
        ],
        declarations: [_verifpiegesindividuels_page__WEBPACK_IMPORTED_MODULE_6__["VerifpiegesindividuelsPage"]]
    })
], VerifpiegesindividuelsPageModule);



/***/ }),

/***/ "./src/app/verifpiegesindividuels/verifpiegesindividuels.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/verifpiegesindividuels/verifpiegesindividuels.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmcGllZ2VzaW5kaXZpZHVlbHMvdmVyaWZwaWVnZXNpbmRpdmlkdWVscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/verifpiegesindividuels/verifpiegesindividuels.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/verifpiegesindividuels/verifpiegesindividuels.page.ts ***!
  \***********************************************************************/
/*! exports provided: VerifpiegesindividuelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifpiegesindividuelsPage", function() { return VerifpiegesindividuelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");





let VerifpiegesindividuelsPage = class VerifpiegesindividuelsPage {
    constructor(router, storage, global) {
        this.router = router;
        this.storage = storage;
        this.global = global;
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
    }
    goToNextPage() {
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
VerifpiegesindividuelsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
VerifpiegesindividuelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verifpiegesindividuels',
        template: __webpack_require__(/*! raw-loader!./verifpiegesindividuels.page.html */ "./node_modules/raw-loader/index.js!./src/app/verifpiegesindividuels/verifpiegesindividuels.page.html"),
        styles: [__webpack_require__(/*! ./verifpiegesindividuels.page.scss */ "./src/app/verifpiegesindividuels/verifpiegesindividuels.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], VerifpiegesindividuelsPage);



/***/ })

}]);
//# sourceMappingURL=verifpiegesindividuels-verifpiegesindividuels-module-es2015.js.map