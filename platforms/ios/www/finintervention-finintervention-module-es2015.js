(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finintervention-finintervention-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/finintervention/finintervention.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/finintervention/finintervention.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4 style=\"color: #2E7117;\">Fin d'intervention</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <fieldset>\n          <legend>Liste des tâches requises</legend>  \n          <ion-grid id=\"list\">   \n            \n          </ion-grid> \n        </fieldset>        \n      </ion-col> \n    </ion-row>\n    <ion-row style=\"display: flex; justify-content: center; padding-top: 10%;\">\n      <ion-button (click)=\"finIntervention()\">TERMINER</ion-button>\n    </ion-row>  \n  </ion-grid>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/finintervention/finintervention-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/finintervention/finintervention-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FininterventionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FininterventionPageRoutingModule", function() { return FininterventionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finintervention_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finintervention.page */ "./src/app/finintervention/finintervention.page.ts");




const routes = [
    {
        path: '',
        component: _finintervention_page__WEBPACK_IMPORTED_MODULE_3__["FininterventionPage"]
    }
];
let FininterventionPageRoutingModule = class FininterventionPageRoutingModule {
};
FininterventionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FininterventionPageRoutingModule);



/***/ }),

/***/ "./src/app/finintervention/finintervention.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/finintervention/finintervention.module.ts ***!
  \***********************************************************/
/*! exports provided: FininterventionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FininterventionPageModule", function() { return FininterventionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _finintervention_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finintervention-routing.module */ "./src/app/finintervention/finintervention-routing.module.ts");
/* harmony import */ var _finintervention_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finintervention.page */ "./src/app/finintervention/finintervention.page.ts");







let FininterventionPageModule = class FininterventionPageModule {
};
FininterventionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finintervention_routing_module__WEBPACK_IMPORTED_MODULE_5__["FininterventionPageRoutingModule"]
        ],
        declarations: [_finintervention_page__WEBPACK_IMPORTED_MODULE_6__["FininterventionPage"]]
    })
], FininterventionPageModule);



/***/ }),

/***/ "./src/app/finintervention/finintervention.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/finintervention/finintervention.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  border: 1px black solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #4682B4;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nul {\n  list-style: none;\n  padding-left: 4%;\n}\n\n.item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaW50ZXJ2ZW50aW9uL0M6XFxVc2Vyc1xcZGV2ZWxcXE9uZURyaXZlXFxCdXJlYXVcXGItRGV2L3NyY1xcYXBwXFxmaW5pbnRlcnZlbnRpb25cXGZpbmludGVydmVudGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpbmludGVydmVudGlvbi9maW5pbnRlcnZlbnRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsOEJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmludGVydmVudGlvbi9maW5pbnRlcnZlbnRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7IFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgfVxuICBsZWdlbmQgeyAgXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7IFxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XG4gICAgY29sb3I6ICM0NjgyQjQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgfVxuICAuaXRlbS5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oe1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cbiIsImZpZWxkc2V0IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbmxlZ2VuZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiAjNDY4MkI0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogNCU7XG59XG5cbi5pdGVtLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/finintervention/finintervention.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/finintervention/finintervention.page.ts ***!
  \*********************************************************/
/*! exports provided: FininterventionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FininterventionPage", function() { return FininterventionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");








let FininterventionPage = class FininterventionPage {
    constructor(storage, global, cd, upcv3service, alertController) {
        this.storage = storage;
        this.global = global;
        this.cd = cd;
        this.upcv3service = upcv3service;
        this.alertController = alertController;
        this.dt = new Date(Date.now());
        this.motive = "";
        this.intervenants = "";
        this.connectedOperator = "";
        this.ceintureError = false;
        this.username = "";
        this.password = "";
        this.global.checkMode();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.global.connexionRequise = "Aucune";
        this.global.checkNextPage();
        jquery__WEBPACK_IMPORTED_MODULE_4__("#list").empty();
        this.storage.get("sequence").then(res => {
            this.sequence = res;
            if (this.sequence != undefined) {
                if (this.sequence != "") {
                    this.sequence.forEach(element => {
                        if (element[1] == true) {
                            jquery__WEBPACK_IMPORTED_MODULE_4__("#list").append("<ion-row><ion-col size='11'>" + element[0] + "</ion-col><ion-col size='1'><ion-icon name='checkmark-circle' style='color:green'></ion-icon></ion-col></ion-row>");
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_4__("#list").append("<ion-row><ion-col size='11'>" + element[0] + "</ion-col><ion-col size='1'><ion-icon name='close-circle-outline' style='color:crimson;'></ion-icon></ion-col></ion-row>");
                        }
                    });
                }
            }
        });
    }
    finIntervention() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.global.connexionRequise = "Serveur";
            /*Formattage de la date pour la création de l'intervention*/
            var dtstring = this.dt.getFullYear()
                + '-' + this.pad2(this.dt.getMonth() + 1)
                + '-' + this.pad2(this.dt.getDate())
                + 'T' + this.pad2(this.dt.getHours())
                + ':' + this.pad2(this.dt.getMinutes())
                + ':' + this.pad2(this.dt.getSeconds());
            this.endDateString = dtstring;
            var arr = yield Promise.all([
                this.getConnectedOperator(),
                this.getMotive(),
                this.getIntervenants(),
                this.getDate(),
                this.getCeintureChoisieObject(),
                this.getToken()
            ]);
            //Opérateur connecté
            if (arr[0] != null && arr[0] != undefined) {
                this.connectedOperator = arr[0];
            }
            else {
                this.connectedOperator = "";
            }
            //Objet de l'intervention
            if (arr[1] != null && arr[1] != undefined) {
                if (arr[1] != "") {
                    var motivesString = arr[1].toString();
                    var motivesTmp = motivesString.split(",");
                    this.motive = motivesTmp.join("-");
                }
            }
            else {
                this.motive = "";
            }
            //Intervenants
            if (arr[2] != null && arr[2] != undefined) {
                if (arr[2] != "") {
                    var intervenantsString = arr[2].toString();
                    var intervenantsTmp = intervenantsString.split(",");
                    this.intervenants = intervenantsTmp.join("-");
                }
            }
            else {
                this.intervenants = "";
            }
            this.dateString = arr[3];
            //Ceinture    
            if (arr[4] == null || arr[4] == undefined || arr[4] == "") {
                this.ceintureError = true;
                alert("Il y a eu un problème avec la sélection de la ceinture. Resélectionnez la ceinture via la page intervention ceinture");
            }
            else {
                var ceinture = JSON.parse(arr[4]);
                this.ceintureId = ceinture.id;
            }
            //token
            this.token = arr[5];
            var dtstring = this.dt.getFullYear()
                + '-' + this.pad2(this.dt.getMonth() + 1)
                + '-' + this.pad2(this.dt.getDate())
                + 'T' + this.pad2(this.dt.getHours())
                + ':' + this.pad2(this.dt.getMinutes())
                + ':' + this.pad2(this.dt.getSeconds());
            this.dateString = dtstring;
            this.storage.get("user").then(res => {
                this.username = res;
                this.storage.get("pass").then(res => {
                    this.password = res;
                    var user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
                    user.username = this.username;
                    user.password = this.password;
                    this.upcv3service.login(user).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.token = res.result;
                        this.storage.set("token", res.result).then((res) => {
                            this.createIntervention();
                        });
                    }), err => {
                        this.errorFunction = "login";
                        if (err.statusText == "Unknown Error" && err.status == 0) {
                            this.internetConnectionAlert();
                        }
                        else {
                            alert(JSON.stringify(err));
                        }
                    });
                });
            });
        });
    }
    createIntervention() {
        if (this.ceintureError == false) {
            var json = { "ceinture": this.ceintureId, "datetime": this.dateString, "operateur": this.connectedOperator, "intervenant": this.intervenants, "objet": this.motive };
            this.json = json;
            this.storage.set("json", JSON.stringify(this.json)).then(() => {
                alert("json:" + JSON.stringify(json));
                //this.upcv3service.createIntervention(json, this.token).subscribe(res => {
                /*this.storage.set("motiveItems","");
                this.storage.set("motiveString","");
                this.storage.set("intervenantsItems","");
                this.storage.set("intervenantsString","");
                this.storage.set("ceintureChoisieObject", "");
                this.storage.set("ssid", "")
                this.storage.set("password", "")
                this.storage.set("currentssid","")
                this.storage.set("currentpassword","")
                this.storage.set("upcname","")
                this.storage.set("stockBottleTypes","");
                this.storage.set("ceintureChoisieBottles", "");
                this.storage.set("commentaires", "");
                this.storage.set("dataAlreadyLoaded","false");
                this.storage.set("json","")
                this.storage.set("isInterventionEnCours", false);
                this.storage.set("isInterventionNotSaved",false);*/
                var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
                var jsonB2 = JSON.parse(localStorage.getItem("bottleB2"));
                jsonB1.upcNameId = localStorage.getItem("upcname");
                jsonB2.upcNameId = localStorage.getItem("upcname");
                jsonB1.date = this.dateString;
                jsonB2.date = this.dateString;
                jsonB1.endate = this.endDateString;
                jsonB2.endate = this.endDateString;
                jsonB1.objet = this.motive;
                jsonB2.objet = this.motive;
                jsonB1.intervenant = this.intervenants;
                jsonB2.intervenant = this.intervenants;
                jsonB1.connected = this.connectedOperator;
                jsonB2.connected = this.connectedOperator;
                localStorage.setItem("bottleB1", JSON.stringify(jsonB1));
                localStorage.setItem("bottleB2", JSON.stringify(jsonB2));
                this.global.onSynchroB1B2(this.token);
            }, err => {
                this.errorFunction = "createIntervention";
                if (err.status == 403) {
                    this.login();
                }
                else {
                    if (err.statusText == "Unknown Error" && err.status == 0) {
                        alert(JSON.stringify(err));
                        this.internetConnectionAlert();
                    }
                    else {
                        alert("L'intervention n'a pas pu être enregistrée : " + JSON.stringify(err));
                    }
                }
                // })     
            });
        }
    }
    /*fonction formattage date*/
    pad2(number) {
        return (number < 10 ? '0' : '') + number;
    }
    getConnectedOperator() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("connectedOperator");
            return res;
        });
    }
    getMotive() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("motiveString");
            return res;
        });
    }
    getIntervenants() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("intervenantsString");
            return res;
        });
    }
    getCeintureChoisieObject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("ceintureChoisieObject");
            return res;
        });
    }
    getStockBottleTypes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("stockBottleTypes");
            return res;
        });
    }
    getCeintureChoisieBottles() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("ceintureChoisieBottles");
            return res;
        });
    }
    getCeintureChoisieCommentaires() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("ceintureChoisieCommentaires");
            return res;
        });
    }
    getDate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = this.storage.get("debutIntervention");
            return res;
        });
    }
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield this.storage.get("token");
            return res;
        });
    }
    login() {
        this.storage.get("user").then(res => {
            this.username = res;
            this.storage.get("pass").then(res => {
                this.password = res;
                var user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
                user.username = this.username;
                user.password = this.password;
                this.upcv3service.login(user).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.token = res.result;
                    this.storage.set("token", res.result).then((res) => {
                        switch (this.errorFunction) {
                            case "createIntervention":
                                this.createIntervention();
                                break;
                        }
                    });
                }), err => {
                    this.errorFunction = "login";
                    if (err.statusText == "Unknown Error" && err.status == 0) {
                        this.internetConnectionAlert();
                    }
                    else {
                        alert(JSON.stringify(err));
                    }
                });
            });
        });
    }
    internetConnectionAlert() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertController.create({
                header: "Attention",
                subHeader: "Connexion à internet requise",
                message: "Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.",
                buttons: [
                    {
                        text: "Poursuivre sans connexion",
                        role: 'cancel',
                        handler: () => {
                            this.storage.set("isInterventionNotSaved", true).then(() => {
                                alert("L'intervention n'a pas pu être enregistrée. Un autre essai sera effectué à la prochaine ouverture de l'application.");
                            });
                            resolve();
                        }
                    },
                    {
                        text: "OK", handler: () => {
                            switch (this.errorFunction) {
                                case "createIntervention":
                                    this.createIntervention();
                                    break;
                                case "login":
                                    this.login();
                                    break;
                            }
                            resolve();
                        }
                    }
                ]
            }).then(res => res.present());
        }));
    }
    confirmAlert() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertController.create({
                header: "Attention",
                subHeader: "Connexion à internet requise",
                message: "Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.",
                buttons: [
                    {
                        text: "Poursuivre sans connexion",
                        role: 'cancel',
                        handler: () => {
                            resolve();
                        }
                    },
                    {
                        text: "OK", handler: () => {
                            switch (this.errorFunction) {
                                case "createIntervention":
                                    this.createIntervention();
                                    break;
                                case "login":
                                    this.login();
                                    break;
                            }
                            resolve();
                        }
                    }
                ]
            }).then(res => res.present());
        }));
    }
};
FininterventionPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
FininterventionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finintervention',
        template: __webpack_require__(/*! raw-loader!./finintervention.page.html */ "./node_modules/raw-loader/index.js!./src/app/finintervention/finintervention.page.html"),
        styles: [__webpack_require__(/*! ./finintervention.page.scss */ "./src/app/finintervention/finintervention.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], FininterventionPage);



/***/ })

}]);
//# sourceMappingURL=finintervention-finintervention-module-es2015.js.map