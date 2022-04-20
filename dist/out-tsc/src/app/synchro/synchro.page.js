import * as tslib_1 from "tslib";
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { User } from '../model/user';
import { LoadingController, Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UPCModbus } from 'src/app/model/upcv3/upcmodbus';
import { Router } from '@angular/router';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { Chart } from 'chart.js';
import { GlobalService } from '../api/global.service';
let SynchroPage = class SynchroPage {
    constructor(loadingCTRL, upcv3Service, platform, router, ngZone, network, hotspot, cg, global) {
        this.loadingCTRL = loadingCTRL;
        this.upcv3Service = upcv3Service;
        this.platform = platform;
        this.router = router;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cg = cg;
        this.global = global;
        this.programmes = [];
        this.pStart = [];
        this.pEnd = [];
        this.intensity = [];
        this.finishRead = false;
        this.frequency = [];
        this.frequency2 = [];
        this.sign = [];
        this.signOptions = ["+", "-"];
        this.intensityOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.frequencyOptions = ["Tous les jours", "Semaine", "Weekend", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        this.frequencyValue = ["7", "9", "8", "0", "1", "2", "3", "4", "5", "6"];
        this.colors = [];
        this.paDelay = [];
        this.paDuration = [];
        this.pcDelay = [];
        this.pcDuration = [];
        this.pAube = [];
        this.pCrepuscule = [];
        this.pAubeStart = [];
        this.pAubeEnd = [];
        this.pCrepusculeStart = [];
        this.pCrepusculeEnd = [];
        this.time = "08:10";
    }
    ngOnInit() {
        /*if(this.platform.is("ios")){
          this.platform.ready().then(()=>{
            WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async ()=>{
              this.pageInit();
            }).catch(error => {alert(JSON.stringify(error))})
          })
        }
        
        else if(this.platform.is("android")) {
          this.hotspot.connectToWifi("BBAM","BioBeltService").then(async res=>{
            this.pageInit();
          }).catch(error => {alert(JSON.stringify(error))})
        }*/
        this.pageInit();
    }
    pageInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.platform.ready().then((readySource) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (readySource == 'cordova') {
                    this.upc = new UPCModbus(state => {
                        this.ngZone.run(() => {
                            // Force refresh UI
                            //this.readDiffusionParameters();
                        });
                    });
                    yield this.upc.client.connect();
                    this.global.ssid = "BBAM";
                    this.global.isBBAM = true;
                    setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        yield this.upc.client.readHoldingRegisters(40068, 100).then(res => {
                            //programme 1 
                            var tab = [res[4], res[5]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            var tab = [res[6], res[7]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[8])]);
                            var tab = [res[9]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 2
                            tab = [res[10], res[11]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[12], res[13]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[14])]);
                            tab = [res[15]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 3
                            tab = [res[16], res[17]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[18], res[19]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[20])]);
                            tab = [res[21]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 4
                            tab = [res[22], res[23]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[24], res[25]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[26])]);
                            tab = [res[27]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 5
                            tab = [res[28], res[29]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[30], res[31]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[32])]);
                            tab = [res[33]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 6
                            tab = [res[34], res[35]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[36], res[37]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[38])]);
                            tab = [res[39]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 7
                            tab = [res[40], res[41]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[42], res[43]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[44])]);
                            tab = [res[45]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 8
                            tab = [res[46], res[47]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[48], res[49]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[50])]);
                            tab = [res[51]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 9
                            tab = [res[52], res[53]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[54], res[55]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[56])]);
                            tab = [res[57]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme 10
                            tab = [res[58], res[59]];
                            this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[60], res[61]];
                            this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[62])]);
                            tab = [res[63]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme aube
                            tab = [res[64], res[65]];
                            this.paDelay.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[66], res[67]];
                            this.paDuration.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[69]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme aube sign                      
                            if (this.upc.client.registerToUint32([res[64], res[65]]) >= 0) {
                                this.sign.push("+");
                                this.currentDawnTime = this.upc.client.registerToUint32([res[0], res[1]]);
                                this.pAubeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]])));
                                this.pAubeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]]) + this.upc.client.registerToUint32([res[66], res[67]])));
                            }
                            else {
                                this.sign.push("-");
                                this.currentDawnTime = this.upc.client.registerToUint32([res[0], res[1]]);
                                this.pAubeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]])));
                                this.pAubeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]]) + this.upc.client.registerToUint32([res[66], res[67]])));
                            }
                            //programme crepuscule
                            tab = [res[70], res[71]];
                            this.pcDelay.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[72], res[73]];
                            this.pcDuration.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                            tab = [res[75]];
                            this.intensity.push(this.upc.client.registerToUint32(tab));
                            //programme crepuscule sign
                            if (this.upc.client.registerToUint32([res[70], res[71]]) >= 0) {
                                this.sign.push("+");
                                this.currentDuskTime = this.upc.client.registerToUint32([res[2], res[3]]);
                                this.pCrepusculeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]])));
                                this.pCrepusculeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]]) + this.upc.client.registerToUint32([res[72], res[73]])));
                            }
                            else {
                                this.sign.push("-");
                                this.currentDuskTime = this.upc.client.registerToUint32([res[2], res[3]]);
                                this.pCrepusculeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]])));
                                this.pCrepusculeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]]) + this.upc.client.registerToUint32([res[72], res[73]])));
                            }
                            this.drawChartjs();
                            setTimeout(() => {
                                this.finishRead = true;
                            }, 1000);
                        }).catch(err => {
                            alert("Veuillez vous connecter à BBAM !");
                            this.global.ssid = "ADMIN";
                            this.global.isBBAM = false;
                        });
                    }), 1000);
                }
            }));
            var user = new User();
            user.username = "guillaume.barault@dipteratech.com";
            user.password = "DIPTERA_AdminBioBelt_2020";
            this.upcv3Service.login(user).subscribe(res => {
                this.token = res.result;
            });
            this.fillTab();
            //this.drawChartjs()
        });
    }
    fillTab() {
        for (var i = 0; i < 10; i++) {
            this.programmes.push(["00:00", "00:00"]);
        }
        /*for (var i = 0; i<10;i++){
          this.intensity.push("Désactivée");
        }*/
        for (var i = 0; i < 10; i++) {
            this.frequency.push("Tous les jours");
        }
        for (var i = 0; i < 10; i++) {
            this.colors.push("grey");
        }
    }
    secondsToHoursMinutes(secs) {
        if (secs < 0) {
            secs = Math.abs(secs);
        }
        var hours = Math.trunc(secs / 3600);
        var minutes = Math.trunc((secs % 3600) / 60);
        if (hours < 10) {
            this.formattedHours = "0" + hours;
        }
        else {
            this.formattedHours = hours.toString();
        }
        if (minutes < 10) {
            this.formattedMinutes = "0" + minutes;
        }
        else {
            this.formattedMinutes = minutes.toString();
        }
        var res = this.formattedHours + ":" + this.formattedMinutes;
        return res;
    }
    hoursMinutesToSeconds(hm) {
        var splitted = hm.split(":");
        var hours = parseInt(splitted[0]) * 3600;
        var minutes = parseInt(splitted[1]) * 60;
        var res = hours + minutes;
        return (res);
    }
    positiveToNegative(pos) {
        var res = -Math.abs(pos);
        return (res);
    }
    convertDaysCode(dc) {
        var res;
        switch (dc) {
            case 0:
                res = 9;
                break;
            case 1:
                res = 3;
                break;
            case 2:
                res = 4;
                break;
            case 3:
                res = 5;
                break;
            case 4:
                res = 6;
                break;
            case 5:
                res = 7;
                break;
            case 8:
                res = 9;
                break;
            case 7:
                res = 0;
                break;
            case 8:
                res = 2;
                break;
            case 9:
                res = 1;
                break;
        }
        return res;
    }
    reverseConvertDaysCode(dc) {
        var res;
        switch (dc) {
            case "Tous les jours":
                res = 7;
                break;
            case "Semaine":
                res = 9;
                break;
            case "Weekend":
                res = 8;
                break;
            case "Lundi":
                res = 1;
                break;
            case "Mardi":
                res = 2;
                break;
            case "Mercredi":
                res = 3;
                break;
            case "Jeudi":
                res = 4;
                break;
            case "Vendredi":
                res = 5;
                break;
            case "Samedi":
                res = 6;
                break;
            case "Dimanche":
                res = 0;
                break;
        }
        return res;
    }
    getUPCparams() {
        setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.upc.client.readHoldingRegisters(40068, 100).then(res => {
                //programme 1 
                var tab = [res[4], res[5]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                var tab = [res[6], res[7]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[8])]);
                var tab = [res[9]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 2
                tab = [res[10], res[11]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[12], res[13]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[14])]);
                tab = [res[15]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 3
                tab = [res[16], res[17]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[18], res[19]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[20])]);
                tab = [res[21]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 4
                tab = [res[22], res[23]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[24], res[25]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[26])]);
                tab = [res[27]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 5
                tab = [res[28], res[29]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[30], res[31]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[32])]);
                tab = [res[33]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 6
                tab = [res[34], res[35]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[36], res[37]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[38])]);
                tab = [res[39]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 7
                tab = [res[40], res[41]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[42], res[43]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[44])]);
                tab = [res[45]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 8
                tab = [res[46], res[47]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[48], res[49]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[50])]);
                tab = [res[51]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 9
                tab = [res[52], res[53]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[54], res[55]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[56])]);
                tab = [res[57]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme 10
                tab = [res[58], res[59]];
                this.pStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[60], res[61]];
                this.pEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res[62])]);
                tab = [res[63]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme aube
                tab = [res[64], res[65]];
                this.paDelay.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[66], res[67]];
                this.paDuration.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[69]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme aube sign                      
                if (this.upc.client.registerToUint32([res[64], res[65]]) >= 0) {
                    this.sign.push("+");
                    this.currentDawnTime = this.upc.client.registerToUint32([res[0], res[1]]);
                    this.pAubeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]])));
                    this.pAubeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[0], res[1]]) + this.upc.client.registerToUint32([res[64], res[65]]) + this.upc.client.registerToUint32([res[66], res[67]])));
                }
                else {
                    this.sign.push("-");
                    this.currentDawnTime = this.upc.client.registerToUint32([res[0], res[1]]);
                    this.pAubeStart[0] = this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]));
                    this.pAubeEnd[0] = this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]) + this.hoursMinutesToSeconds(this.paDuration[0]));
                }
                //programme crepuscule
                tab = [res[70], res[71]];
                this.pcDelay.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[72], res[73]];
                this.pcDuration.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32(tab)));
                tab = [res[75]];
                this.intensity.push(this.upc.client.registerToUint32(tab));
                //programme crepuscule sign
                if (this.upc.client.registerToUint32([res[70], res[71]]) >= 0) {
                    this.sign.push("+");
                    this.currentDuskTime = this.upc.client.registerToUint32([res[2], res[3]]);
                    this.pCrepusculeStart.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]])));
                    this.pCrepusculeEnd.push(this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]]) + this.upc.client.registerToUint32([res[72], res[73]])));
                }
                else {
                    this.sign.push("-");
                    this.currentDuskTime = this.upc.client.registerToUint32([res[2], res[3]]);
                    this.pCrepusculeStart[0] = this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]]));
                    this.pCrepusculeEnd[0] = this.secondsToHoursMinutes(this.upc.client.registerToUint32([res[2], res[3]]) + this.upc.client.registerToUint32([res[70], res[71]]) + this.upc.client.registerToUint32([res[72], res[73]]));
                }
                this.drawChartjs();
                setTimeout(() => {
                    this.finishRead = true;
                }, 1000);
            }).catch(err => {
                alert("Veuillez vous connecter à BBAM !");
                this.global.ssid = "ADMIN";
                this.global.isBBAM = false;
            });
        }), 5000);
    }
    onEdit(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.finishRead) {
                switch (i) {
                    case 0:
                        //Program 1            
                        yield this.upc.client.setIntInHoldingRegister(40072, 2, this.hoursMinutesToSeconds(this.pStart[0])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40074, 2, this.hoursMinutesToSeconds(this.pEnd[0])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40076, 1, this.reverseConvertDaysCode(this.frequency2[0])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40077, 1, this.intensity[0]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 1:
                        //Program 2
                        yield this.upc.client.setIntInHoldingRegister(40078, 2, this.hoursMinutesToSeconds(this.pStart[1])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40080, 2, this.hoursMinutesToSeconds(this.pEnd[1])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        ;
                        yield this.upc.client.setIntInHoldingRegister(40082, 1, this.reverseConvertDaysCode(this.frequency2[1])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40083, 1, this.intensity[1]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 2:
                        //Program 3
                        yield this.upc.client.setIntInHoldingRegister(40084, 2, this.hoursMinutesToSeconds(this.pStart[2])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40086, 2, this.hoursMinutesToSeconds(this.pEnd[2])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40088, 1, this.reverseConvertDaysCode(this.frequency2[2])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40089, 1, this.intensity[2]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 3:
                        //Program 4
                        yield this.upc.client.setIntInHoldingRegister(40090, 2, this.hoursMinutesToSeconds(this.pStart[3])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40092, 2, this.hoursMinutesToSeconds(this.pEnd[3])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40094, 1, this.reverseConvertDaysCode(this.frequency2[3])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40095, 1, this.intensity[3]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 4:
                        //Program 5
                        yield this.upc.client.setIntInHoldingRegister(40096, 2, this.hoursMinutesToSeconds(this.pStart[4])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40098, 2, this.hoursMinutesToSeconds(this.pEnd[4])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40100, 1, this.reverseConvertDaysCode(this.frequency2[4])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40101, 1, this.intensity[4]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 5:
                        //Program 6
                        yield this.upc.client.setIntInHoldingRegister(40102, 2, this.hoursMinutesToSeconds(this.pStart[5])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40104, 2, this.hoursMinutesToSeconds(this.pEnd[5])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40106, 1, this.reverseConvertDaysCode(this.frequency2[5])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40107, 1, this.intensity[5]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 6:
                        //Program 7
                        yield this.upc.client.setIntInHoldingRegister(40108, 2, this.hoursMinutesToSeconds(this.pStart[6])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40110, 2, this.hoursMinutesToSeconds(this.pEnd[6])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40112, 1, this.reverseConvertDaysCode(this.frequency2[6])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40113, 1, this.intensity[6]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 7:
                        //Program 8
                        yield this.upc.client.setIntInHoldingRegister(40114, 2, this.hoursMinutesToSeconds(this.pStart[7])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40116, 2, this.hoursMinutesToSeconds(this.pEnd[7])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40118, 1, this.reverseConvertDaysCode(this.frequency2[7])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40119, 1, this.intensity[7]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 8:
                        //Program 9
                        yield this.upc.client.setIntInHoldingRegister(40120, 2, this.hoursMinutesToSeconds(this.pStart[8])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40122, 2, this.hoursMinutesToSeconds(this.pEnd[8])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40124, 1, this.reverseConvertDaysCode(this.frequency2[8])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40125, 1, this.intensity[8]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 9:
                        //Program 10
                        yield this.upc.client.setIntInHoldingRegister(40126, 2, this.hoursMinutesToSeconds(this.pStart[9])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40128, 2, this.hoursMinutesToSeconds(this.pEnd[9])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40130, 1, this.reverseConvertDaysCode(this.frequency2[9])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40131, 1, this.intensity[9]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 10:
                        //Programme aube
                        if (this.sign[0] == "+") {
                            yield this.upc.client.setIntInHoldingRegister(40132, 2, this.hoursMinutesToSeconds(this.paDelay[0])).then(data => {
                            }).catch(err => {
                                alert(JSON.stringify(err));
                            });
                            this.pAubeStart[0] = this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]));
                            this.pAubeEnd[0] = this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]) + this.hoursMinutesToSeconds(this.paDuration[0]));
                        }
                        else {
                            yield this.upc.client.setIntInHoldingRegister(40132, 2, this.positiveToNegative(this.hoursMinutesToSeconds(this.paDelay[0]))).then(data => {
                            }).catch(err => {
                                alert(JSON.stringify(err));
                            });
                            this.pAubeStart[0] = this.secondsToHoursMinutes(this.currentDawnTime - this.hoursMinutesToSeconds(this.paDelay[0]));
                            this.pAubeEnd[0] = this.secondsToHoursMinutes(this.currentDawnTime - this.hoursMinutesToSeconds(this.paDelay[0]) + this.hoursMinutesToSeconds(this.paDuration[0]));
                        }
                        yield this.upc.client.setIntInHoldingRegister(40134, 2, this.hoursMinutesToSeconds(this.paDuration[0])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40137, 1, this.intensity[10]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                    case 11:
                        //Programme crépuscule
                        if (this.sign[1] == "+") {
                            yield this.upc.client.setIntInHoldingRegister(40138, 2, this.hoursMinutesToSeconds(this.pcDelay[0])).then(data => {
                            }).catch(err => {
                                alert(JSON.stringify(err));
                            });
                            this.pCrepusculeStart[0] = this.secondsToHoursMinutes(this.currentDuskTime + this.hoursMinutesToSeconds(this.pcDelay[0]));
                            this.pCrepusculeEnd[0] = this.secondsToHoursMinutes(this.currentDuskTime + this.hoursMinutesToSeconds(this.pcDelay[0]) + this.hoursMinutesToSeconds(this.pcDuration[0]));
                        }
                        else {
                            yield this.upc.client.setIntInHoldingRegister(40138, 2, this.positiveToNegative(this.hoursMinutesToSeconds(this.pcDelay[0]))).then(data => {
                            }).catch(err => {
                                alert(JSON.stringify(err));
                            });
                            this.pCrepusculeStart[0] = this.secondsToHoursMinutes(this.currentDuskTime - this.hoursMinutesToSeconds(this.pcDelay[0]));
                            this.pCrepusculeEnd[0] = this.secondsToHoursMinutes(this.currentDuskTime - this.hoursMinutesToSeconds(this.pcDelay[0]) + this.hoursMinutesToSeconds(this.pcDuration[0]));
                        }
                        yield this.upc.client.setIntInHoldingRegister(40140, 2, this.hoursMinutesToSeconds(this.pcDuration[0])).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        yield this.upc.client.setIntInHoldingRegister(40143, 1, this.intensity[11]).then(data => {
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                        break;
                }
                this.getUPCparams();
            }
        });
    }
    drawChartjs() {
        var stringToIntStartProgrammes = [];
        var stringToIntEndProgrammes = [];
        var stringToIntpAS;
        var stringToIntpAE;
        var stringToIntpCS;
        var stringToIntpCE;
        var barColors = [];
        this.pStart.forEach(function (element) {
            var parsed = element.split(":");
            var p = parseInt(parsed[1], 10) / 60;
            var p2 = parseInt(parsed[0]) + p;
            stringToIntStartProgrammes.push(p2);
        });
        this.pEnd.forEach(function (element) {
            var parsed = element.split(":");
            var p = parseInt(parsed[1], 10) / 60;
            var p2 = parseInt(parsed[0]) + p;
            stringToIntEndProgrammes.push(p2);
        });
        var parsedpAS = this.pAubeStart[0].split(":");
        var p = parseInt(parsedpAS[1], 10) / 60;
        var p2 = parseInt(parsedpAS[0]) + p;
        stringToIntpAS = p2;
        var parsedpAE = this.pAubeEnd[0].split(":");
        var p3 = parseInt(parsedpAE[1], 10) / 60;
        var p4 = parseInt(parsedpAE[0]) + p3;
        stringToIntpAE = p4;
        var parsedpCS = this.pCrepusculeStart[0].split(":");
        var p5 = parseInt(parsedpCS[1], 10) / 60;
        var p6 = parseInt(parsedpCS[0]) + p5;
        stringToIntpCS = p6;
        var parsedpCE = this.pCrepusculeEnd[0].split(":");
        var p7 = parseInt(parsedpCE[1], 10) / 60;
        var p8 = parseInt(parsedpCE[0]) + p7;
        stringToIntpCE = p8;
        this.intensity.forEach(intensityElement => {
            switch (intensityElement) {
                case 0:
                    barColors.push("#ffffff00");
                    break;
                case 1:
                    barColors.push("#D3D3D3");
                    break;
                case 2:
                    barColors.push("#CECECE");
                    break;
                case 3:
                    barColors.push("#C0C0C0");
                    break;
                case 4:
                    barColors.push("#A9A9A9");
                    break;
                case 5:
                    barColors.push("#9E9E9E");
                    break;
                case 6:
                    barColors.push("#8f8f8f");
                    break;
                case 7:
                    barColors.push("#808080");
                    break;
                case 8:
                    barColors.push("#696969");
                    break;
                case 9:
                    barColors.push("#303030");
                    break;
                case 10:
                    barColors.push("#130E0A");
                    break;
            }
        });
        var data = [
            [stringToIntStartProgrammes[0], stringToIntEndProgrammes[0]],
            [stringToIntStartProgrammes[1], stringToIntEndProgrammes[1]],
            [stringToIntStartProgrammes[2], stringToIntEndProgrammes[2]],
            [stringToIntStartProgrammes[3], stringToIntEndProgrammes[3]],
            [stringToIntStartProgrammes[4], stringToIntEndProgrammes[4]],
            [stringToIntStartProgrammes[5], stringToIntEndProgrammes[5]],
            [stringToIntStartProgrammes[6], stringToIntEndProgrammes[6]],
            [stringToIntStartProgrammes[7], stringToIntEndProgrammes[7]],
            [stringToIntStartProgrammes[8], stringToIntEndProgrammes[8]],
            [stringToIntStartProgrammes[9], stringToIntEndProgrammes[9]],
            [stringToIntpAS, stringToIntpAE],
            [stringToIntpCS, stringToIntpCE]
        ];
        var ctx = 'myChart';
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10", "Aube", "Crepuscule"],
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: data,
                    },
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                /*title: {
                  display: true,
                  text: 'Aube Crépuscule'
                },*/
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 24,
                                stepSize: 6
                            },
                            position: 'top'
                        }]
                }
            }
        });
    }
};
SynchroPage = tslib_1.__decorate([
    Component({
        selector: 'app-synchro',
        templateUrl: './synchro.page.html',
        styleUrls: ['./synchro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController,
        Upcv3serviceService,
        Platform,
        Router,
        NgZone, Network,
        Hotspot, ChangeDetectorRef,
        GlobalService])
], SynchroPage);
export { SynchroPage };
//# sourceMappingURL=synchro.page.js.map