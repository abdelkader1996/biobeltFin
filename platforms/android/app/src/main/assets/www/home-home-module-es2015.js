(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon\r\n          name=\"globe\"\r\n          color=\"light\"\r\n          (click)=\"onSynchroB1B2();\"\r\n        ></ion-icon\r\n        >ADMIN</ion-button\r\n      >\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon name=\"wifi\" color=\"light\"></ion-icon\r\n        >{{global.ssid}}</ion-button\r\n      >\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" text-center style=\"padding-top: 5%\"\r\n        ><h3>Accueil</h3></ion-col\r\n      >\r\n      <ion-col size=\"12\">\r\n        <fieldset>\r\n          <legend>Type d'opération</legend>\r\n          <ion-button\r\n            [class.button-disabled]=\"mode_test\"\r\n            class=\"ion-text-wrap\"\r\n            color=\"primary\"\r\n            size=\"block\"\r\n            style=\"height: 7vh\"\r\n            (click)=\"goToBottles()\"\r\n          >\r\n            Mouvement de bouteilles dans l'entrepôt\r\n          </ion-button>\r\n          <ion-button\r\n            [class.button-disabled]=\"mode_test\"\r\n            color=\"primary\"\r\n            size=\"block\"\r\n            (click)=\"goToInterventionCeinture();\"\r\n            style=\"margin-top: 2%\"\r\n          >\r\n            <ion-label class=\"ion-text-wrap\">\r\n              Intervention sur une ceinture\r\n            </ion-label>\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            color=\"primary\"\r\n            size=\"block\"\r\n            (click)=\"testMode($event);\"\r\n            style=\"margin-top: 2%\"\r\n          >\r\n            <ion-label class=\"ion-text-wrap\"> Mode Test </ion-label>\r\n          </ion-button>\r\n        </fieldset>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row> </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popover/popover.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popover works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        entryComponents: [
            _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nfieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-bottom: 2%;\n  border: 1px #2E7117 solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #2E7117;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nion-select {\n  margin-top: -4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGRldmVsXFxPbmVEcml2ZVxcQnVyZWF1XFxiLURldi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5maWVsZHNldCB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlOyBcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBib3JkZXI6IDFweCAjMkU3MTE3IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5sZWdlbmQgeyAgXG4gIHdpZHRoOmZpdC1jb250ZW50OyBcbiAgZm9udC1zaXplOmxhcmdlcjtcbiAgY29sb3I6ICMyRTcxMTc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbmlvbi1zZWxlY3R7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cblxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxubGVnZW5kIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6ICMyRTcxMTc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAtNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let HomePage = class HomePage {
    constructor(ucp3service, storage, router, global, platform, ngZone, cd, loadingCtrl, popoverController, alertController) {
        this.ucp3service = ucp3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.platform = platform;
        this.ngZone = ngZone;
        this.cd = cd;
        this.loadingCtrl = loadingCtrl;
        this.popoverController = popoverController;
        this.alertController = alertController;
        //
        this.mode_test = false;
        this.globals = [];
        this.operationTypeOptions = [
            "Mouvement de bouteilles dans l'entrepôt",
            "Intervention sur une ceinture",
        ];
        this.operationType = "Mouvement de bouteilles dans l'entrepôt";
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mode_test = yield this.storage.get("mode_test");
            console.log("mode test :", this.mode_test);
            this.global.connexionRequise = "Aucune";
            if (yield this.storage.get("reconnect")) {
                this.storage.get("isInterventionNotSaved").then((res) => {
                    if (res == true) {
                        () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const loading = yield this.loadingCtrl.create({
                                message: "Sauvegarde de l'intervention en cours...",
                            });
                            loading.present();
                            var arr = yield Promise.all([this.getJson(), this.getToken()]);
                            this.json = JSON.parse(arr[0]);
                            this.token = arr[1];
                            this.createIntervention();
                        });
                        this.interventionNotSavedAlert();
                    }
                });
                yield this.storage.get("isInterventionEnCours").then((res) => {
                    if (res == true) {
                        this.interventionEnCoursAlert();
                        this.storage.set("reconnect", false);
                    }
                    else {
                        this.storage.set("reconnect", false);
                    }
                });
            }
        });
    }
    createIntervention() {
        this.ucp3service.createIntervention(this.json, this.token).subscribe((res) => {
            alert(JSON.stringify(res));
        }, (err) => {
            this.interventionNotSavedAlert();
        });
    }
    getJson() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("json");
            return res;
        });
    }
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("token");
            return res;
        });
    }
    interventionEnCoursAlert() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertController
                .create({
                header: "Attention",
                subHeader: "Intervention en cours",
                message: "Une intervention est en cours, souhaitez-vous restaurer les paramètres ?",
                buttons: [
                    {
                        text: "Non",
                        handler: () => {
                            this.global.resetParameters().then(() => {
                                resolve();
                            });
                        },
                    },
                    {
                        text: "Oui",
                        handler: () => {
                            resolve();
                        },
                    },
                ],
            })
                .then((res) => res.present());
        }));
    }
    goToInterventionCeinture() {
        this.global.mode = "intervention";
        this.storage.set("isInterventionEnCours", true).then(() => {
            this.router.navigate(["interventionceinture"]);
        });
    }
    goToBottles() {
        this.global.mode = "mvtBouteilles";
        this.router.navigate(["optionbottle"]);
    }
    /*getUpcStateConnexion() {
      this.platform.ready().then(async res=>{
        this.upc = new UPCModbus(state => {
          this.ngZone.run(() => {
            // Force refresh UI
            
              
              //this.readDiffusionParameters();
            
          });
        });
  
        await this.upc.client.connect();
  
        setTimeout(()=>{
          this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
            this.global.ssid = res;
            this.global.isBBAM = true;
            this.cd.detectChanges();
          })
        },2000)
      })
    }*/
    testMode($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*let popover = await this.popoverController.create({
              component: PopoverComponent,
            });
        
            
        
            return await popover.present();*/
            let wifi = yield WifiWizard2.getConnectedSSID();
            yield this.storage.set("ssid_upc", wifi);
            yield this.storage.set("password", "");
            this.global.mode = "intervention";
            this.storage.set("isInterventionEnCours", true).then(() => {
                this.router.navigate(["namepiege"]);
            });
            //this.global.mode="modeTest"
        });
    }
    interventionNotSavedAlert() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertController
                .create({
                header: "Attention",
                subHeader: "Intervention en cours",
                message: "L'intervention n'a pas pu être enregistrée, souhaitez-vous réessayer (vérifiez votre connexion internet) ?",
                buttons: [
                    {
                        text: "Non",
                        role: "cancel",
                        handler: () => {
                            this.global.resetParameters().then(() => {
                                resolve();
                            });
                        },
                    },
                    {
                        text: "Oui",
                        handler: () => {
                            resolve();
                        },
                    },
                ],
            })
                .then((res) => res.present());
        }));
    }
};
HomePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], HomePage);



/***/ }),

/***/ "./src/app/popover/popover.component.scss":
/*!************************************************!*\
  !*** ./src/app/popover/popover.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/popover/popover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popover/popover.component.ts ***!
  \**********************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopoverComponent = class PopoverComponent {
    constructor() { }
    ngOnInit() { }
};
PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: __webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html"),
        styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/popover/popover.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PopoverComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map