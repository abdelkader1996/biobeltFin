import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Router } from '@angular/router';
import { GlobalService } from '../api/global.service';
import { Storage } from "@ionic/storage";
import { Geolocation } from '@ionic-native/geolocation/ngx';
let InterventionceinturePage = class InterventionceinturePage {
    constructor(upcv3service, storage, router, global, geolocation) {
        this.upcv3service = upcv3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.geolocation = geolocation;
        this.motiveOptions = ["Installation", "Modification du nombre de pièges", "Remise en route", "Maintenance", "Changements de bouteilles CO2", "Changement d'UPC", "Hivernage", "Autre"];
        this.motive = ["Installation"];
        this.intervenants = [this.global.proprietaire];
        this.intervenantsChoisis = [this.global.proprietaire];
        this.nearUPC = [];
        this.nearUPCNames = [];
    }
    ;
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => {
                this.token = val;
                this.upcv3service.getOperators(this.token).subscribe(res => {
                    this.data = res.result;
                    //alert(JSON.stringify(this.data))
                    //alert(this.data[0]["lastName"])
                    for (var i = 0; i < this.data.length; i++) {
                        this.intervenants.push(this.data[i]["lastName"] + " " + this.data[i]["firstName"]);
                    }
                    //alert(this.intervenants)
                });
                this.upcv3service.getUPC3(this.token).subscribe(res => {
                    this.data2 = res.result;
                    this.geolocation.getCurrentPosition().then(res => {
                        var lat = res.coords.latitude;
                        var long = res.coords.longitude;
                        //alert(JSON.stringify(this.data2))
                        this.data2.forEach(element => {
                            if (this.getDistanceFromLatLonInKm(lat, long, element.lat, element.lng) < 30) {
                                this.nearUPC.push(element);
                            }
                            this.nearUPCNames.push(element.upcNameId);
                            //element.communicationParameters.
                            //alert(this.getDistanceFromLatLonInKm(lat, long, element.latitude, element.longitude))
                        });
                        console.log(JSON.stringify(this.nearUPC));
                        /*this.nearUPCNames.forEach(element => {
                          $("#upcList" ).append("<ion-select [(ngModel)]='ceintureChoisie'><ion-select-option *ngFor='let nearUPCName of nearUPCNames' [value]='nearUPCName'>{{nearUPCName}}</ion-select-option></ion-select>");
                        })*/
                    });
                });
            });
        });
    }
    selectionCeinture() {
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    goTo() {
        this.global.objetIntervention = this.motive;
        this.global.intervenants = this.intervenantsChoisis;
        this.router.navigate(['interventionceinture2']);
    }
};
InterventionceinturePage = tslib_1.__decorate([
    Component({
        selector: 'app-interventionceinture',
        templateUrl: './interventionceinture.page.html',
        styleUrls: ['./interventionceinture.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        Storage,
        Router,
        GlobalService,
        Geolocation])
], InterventionceinturePage);
export { InterventionceinturePage };
//# sourceMappingURL=interventionceinture.page.js.map