(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commentaires-commentaires-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/commentaires/commentaires.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commentaires/commentaires.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>commentaires</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Commentaires</h4>\n      </ion-col>\n    </ion-row> \n    <ion-row style=\"padding-top:70%; justify-content: center;\">\n      <h6>Page en cours de développement</h6>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/commentaires/commentaires-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/commentaires/commentaires-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CommentairesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPageRoutingModule", function() { return CommentairesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commentaires_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentaires.page */ "./src/app/commentaires/commentaires.page.ts");




var routes = [
    {
        path: '',
        component: _commentaires_page__WEBPACK_IMPORTED_MODULE_3__["CommentairesPage"]
    }
];
var CommentairesPageRoutingModule = /** @class */ (function () {
    function CommentairesPageRoutingModule() {
    }
    CommentairesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CommentairesPageRoutingModule);
    return CommentairesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/commentaires/commentaires.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/commentaires/commentaires.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentairesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPageModule", function() { return CommentairesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _commentaires_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentaires-routing.module */ "./src/app/commentaires/commentaires-routing.module.ts");
/* harmony import */ var _commentaires_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentaires.page */ "./src/app/commentaires/commentaires.page.ts");







var CommentairesPageModule = /** @class */ (function () {
    function CommentairesPageModule() {
    }
    CommentairesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _commentaires_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentairesPageRoutingModule"]
            ],
            declarations: [_commentaires_page__WEBPACK_IMPORTED_MODULE_6__["CommentairesPage"]]
        })
    ], CommentairesPageModule);
    return CommentairesPageModule;
}());



/***/ }),

/***/ "./src/app/commentaires/commentaires.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/commentaires/commentaires.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRhaXJlcy9jb21tZW50YWlyZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/commentaires/commentaires.page.ts":
/*!***************************************************!*\
  !*** ./src/app/commentaires/commentaires.page.ts ***!
  \***************************************************/
/*! exports provided: CommentairesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPage", function() { return CommentairesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");





var CommentairesPage = /** @class */ (function () {
    function CommentairesPage(router, storage, global) {
        this.router = router;
        this.storage = storage;
        this.global = global;
        this.display = false;
        this.global.checkMode();
    }
    CommentairesPage.prototype.ngOnInit = function () { };
    CommentairesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
    };
    CommentairesPage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    CommentairesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    CommentairesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commentaires',
            template: __webpack_require__(/*! raw-loader!./commentaires.page.html */ "./node_modules/raw-loader/index.js!./src/app/commentaires/commentaires.page.html"),
            styles: [__webpack_require__(/*! ./commentaires.page.scss */ "./src/app/commentaires/commentaires.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CommentairesPage);
    return CommentairesPage;
}());



/***/ })

}]);
//# sourceMappingURL=commentaires-commentaires-module-es5.js.map