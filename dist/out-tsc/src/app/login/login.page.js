import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { User } from '../model/user';
import { Storage } from '@ionic/storage';
let LoginPage = class LoginPage {
    constructor(upc3serv, navCtrl, toastCtrl, loadingCtrl, storage) {
        this.upc3serv = upc3serv;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.isLog = false;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            localStorage.setItem("BBAM", null);
            setTimeout(() => {
                this.email.setFocus();
            }, 500);
            yield this.storage.get('user').then(val => this.username = val);
            yield this.storage.get('pass').then(val => this.password = val);
            yield this.storage.get('remember').then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (res === 1) {
                    const loading = yield this.loadingCtrl.create({
                        message: 'Connexion en cours...'
                    });
                    loading.present();
                    let user = new User();
                    user.username = this.username;
                    user.password = this.password;
                    this.upc3serv.login(user).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        loading.dismiss();
                        if (res.result) {
                            localStorage.setItem("token", res.result);
                            this.navCtrl.navigateRoot('home');
                        }
                        else {
                            // Check code
                            switch (res.code) {
                                case 'TOKEN_WRONG_IDENTIFIERS':
                                    let toast = yield this.toastCtrl.create({
                                        message: 'Identifiants incorrects !',
                                        duration: 3000,
                                        position: 'top'
                                    });
                                    toast.present();
                                    break;
                            }
                        }
                    }), (err) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        // Hide loading
                        loading.dismiss();
                        let toast = yield this.toastCtrl.create({
                            message: 'Impossible de se connecter à internet !',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    }));
                }
                else {
                    this.isLog = true;
                }
            }));
        });
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Show loading
            const loading = yield this.loadingCtrl.create({
                message: 'Connexion en cours...'
            });
            loading.present();
            // Request
            let user = new User();
            user.username = this.username;
            user.password = this.password;
            this.upc3serv.login(user).subscribe((data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // Hide loading
                loading.dismiss();
                // Check state
                if (data.result) {
                    this.storage.set('token', data.result);
                    localStorage.setItem("token", data.result);
                    this.storage.set('user', user.username);
                    this.storage.set('pass', user.password);
                    this.storage.set('remember', 1);
                    this.navCtrl.navigateRoot('home');
                }
                else {
                    // Check code
                    switch (data.code) {
                        case 'TOKEN_WRONG_IDENTIFIERS':
                            let toast = yield this.toastCtrl.create({
                                message: 'Identifiants incorrects !',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            break;
                    }
                }
            }), (err) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // Hide loading
                loading.dismiss();
                let toast = yield this.toastCtrl.create({
                    message: 'Impossible de se connecter à internet !',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }));
        });
    }
};
tslib_1.__decorate([
    ViewChild('email', { static: false }),
    tslib_1.__metadata("design:type", Object)
], LoginPage.prototype, "email", void 0);
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        NavController,
        ToastController,
        LoadingController,
        Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map