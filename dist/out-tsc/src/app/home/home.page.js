import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Code } from '../api/ApiResponse';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GlobalService } from '../api/global.service';
let HomePage = class HomePage {
    constructor(ucp3service, storage, router, global) {
        this.ucp3service = ucp3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.operationTypeOptions = ["Mouvement de bouteilles dans l'entrepôt", "Intervention sur une ceinture"];
        this.operationType = "Mouvement de bouteilles dans l'entrepôt";
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => { this.token = val; });
            yield this.ucp3service.getUPC3(this.token).subscribe(res => {
                switch (res.code) {
                    case Code.UPCV3_RECOVERED:
                        this.upcv3 = res.result;
                        break;
                    case Code.UNAUTHORIZED:
                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                        break;
                }
            });
            yield this.ucp3service.getOperators(this.token).subscribe(res => {
                switch (res.code) {
                    case Code.OPERATOR_RECOVERED:
                        this.operators = res.result;
                        break;
                    case Code.UNAUTHORIZED:
                        this.operators = [];
                        break;
                }
            });
        });
    }
    goToPieges() {
        this.global.upc3 = this.upcv3[this.value];
        this.global.op = this.op;
        this.router.navigate(['instalpieges']);
    }
    goTo(operationType) {
        switch (this.operationType) {
            case this.operationTypeOptions[0]:
                this.router.navigate(["optionbottle"]);
                break;
            case this.operationTypeOptions[1]:
                this.router.navigate(['interventionceinture']);
                break;
        }
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        Storage,
        Router,
        GlobalService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map