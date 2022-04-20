import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { GlobalService } from '../api/global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as $ from 'jquery';
let Interventionceinture2Page = class Interventionceinture2Page {
    constructor(upcv3service, storage, router, global) {
        this.upcv3service = upcv3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.motiveOptions = ["Installation", "Modification du nombre de pièges", "Remise en route", "Maintenance", "Changements de bouteilles CO2", "Changement d'UPC", "Hivernage", "Autre"];
        this.motive = this.global.objetIntervention;
        this.intervenants = [];
        this.intervenantsChoisis = this.global.intervenants;
    }
    ;
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => {
                this.token = val;
                this.upcv3service.getOperators(this.token).subscribe(res => {
                    this.data = res.result;
                    for (var i = 0; i < this.data.length; i++) {
                        this.intervenants.push(this.data[i]["lastName"] + " " + this.data[i]["firstName"]);
                    }
                });
            });
            this.motive.forEach(element => {
                $("#motiveList").append("<li>" + element + "</li>");
            });
            this.intervenantsChoisis.forEach(element => {
                $("#intervenantsList").append("<li>" + element + "</li>");
            });
        });
    }
};
Interventionceinture2Page = tslib_1.__decorate([
    Component({
        selector: 'app-interventionceinture2',
        templateUrl: './interventionceinture2.page.html',
        styleUrls: ['./interventionceinture2.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        Storage,
        Router,
        GlobalService])
], Interventionceinture2Page);
export { Interventionceinture2Page };
//# sourceMappingURL=interventionceinture2.page.js.map