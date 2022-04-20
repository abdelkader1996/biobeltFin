import * as tslib_1 from "tslib";
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { GlobalService } from '../api/global.service';
let ConnectionPage = class ConnectionPage {
    constructor(platform, global, loadingCTRL, hotspot, ngZone, cd) {
        this.platform = platform;
        this.global = global;
        this.loadingCTRL = loadingCTRL;
        this.hotspot = hotspot;
        this.ngZone = ngZone;
        this.cd = cd;
        this.mode = "";
        this.level = 0;
        this.ber = 0;
        this.bertab = [];
        this.fw = 0;
        this.levelTab = [];
        this.dureTab = [];
    }
    ngOnInit() {
        this.platform.ready().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            /*if( this.platform.is('ios')){
              WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async ()=>{
                var loading = await this.loadingCTRL.create({
                  message : "Connection à l'UPC en cours...",
                  duration : 10000
                })
                loading.present();
                this.global.isBBAM = true;
                this.upc = new UPCModbus(state => {
                  this.ngZone.run(() => {
                    // Force refresh UI
                    
                      
                      //this.readDiffusionParameters();
                    
                  });
                });
                setTimeout(async ()=>{
                        await this.upc.client.connect();
      
                        this.readConnectionParams();
                        loading.dismiss();
                },5000)
                
              })
            }*/ //else if (this.platform.is("android")){
            //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async ()=>{
            var loading = yield this.loadingCTRL.create({
                message: "Connection à l'UPC en cours...",
                duration: 10000
            });
            loading.present();
            this.global.isBBAM = true;
            this.upc = new UPCModbus(state => {
                this.ngZone.run(() => {
                    // Force refresh UI
                    //this.readDiffusionParameters();
                });
            });
            yield this.upc.client.connect();
            this.readConnectionParams();
            loading.dismiss();
            /*}).catch(err=>{
              alert(JSON.stringify(err));
            })*/
            //}
        }));
    }
    readConnectionParams() {
        //40414 40415 
        //41225 41239
        var intervalconnect = setInterval(() => {
            //this.upc.client.readHoldingRegisters(41225,20).then(res=>{
            /*this.bertab.push(this.upc.client.registerToFloat([res[0],res[1]]));
            this.bertab.push(this.upc.client.registerToFloat([res[2],res[3]]));
            this.bertab.push(this.upc.client.registerToFloat([res[4],res[5]]));
            this.bertab.push(this.upc.client.registerToFloat([res[6],res[7]]));*/
            //this.upc.client.getIntFromHoldingRegister(40168,1).then(res=>{
            this.upc.client.readHoldingRegisters(41219, 50).then(res => {
                this.levelTab.push(this.upc.client.registerToFloat([res[0], res[1]]));
                this.levelTab.push(this.upc.client.registerToFloat([res[2], res[3]]));
                this.levelTab.push(this.upc.client.registerToFloat([res[4], res[5]]));
                this.bertab.push(this.upc.client.registerToFloat([res[6], res[7]]));
                this.bertab.push(this.upc.client.registerToFloat([res[8], res[9]]));
                this.bertab.push(this.upc.client.registerToFloat([res[10], res[11]]));
                this.bertab.push(this.upc.client.registerToFloat([res[12], res[13]]));
                //this.dureTab.push(this.upc.client.registerToFloat([res[14],res[15]]));
                this.dureTab.push(this.upc.client.registerToFloat([res[16], res[17]]));
                this.dureTab.push(this.upc.client.registerToFloat([res[18], res[19]]));
                this.dureTab.push(this.upc.client.registerToFloat([res[20], res[21]]));
            });
            //})
            this.upc.client.readHoldingRegisters(40414, 10).then(res => {
                var connect = this.upc.client.registerToUint32([res[0]]);
                switch (connect) {
                    case 0:
                        this.mode = 'Non enregistré';
                        this.ber = 0;
                    case 1:
                        this.mode = '2G GPRS';
                        this.ber = this.bertab[0];
                    case 2:
                        this.mode = '2G EDGE';
                        this.ber = this.bertab[1];
                    case 3:
                        this.mode = '3G WCDMA';
                        this.ber = this.bertab[2];
                    case 4:
                        this.mode = '3G HSDPA';
                        this.ber = this.bertab[2];
                    case 5:
                        this.mode = '3G HSUPA';
                        this.ber = this.bertab[2];
                    case 6:
                        this.mode = '3G HSDPA/HSUPA';
                        this.ber = this.bertab[2];
                    case 7:
                        this.mode = '4G';
                        this.ber = this.bertab[3];
                }
                this.level = this.upc.client.registerToUint32([res[1]]);
                if (this.level > 500) {
                    this.level = 0;
                }
                this.cd.detectChanges();
            }).catch(err => {
                alert("Veuillez vous connecter à BBAM");
                this.global.ssid = "ADMIN";
                this.global.isBBAM = false;
                clearInterval(intervalconnect);
            });
            //})
        }, 500);
    }
};
ConnectionPage = tslib_1.__decorate([
    Component({
        selector: 'app-connection',
        templateUrl: './connection.page.html',
        styleUrls: ['./connection.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, GlobalService, LoadingController, Hotspot, NgZone, ChangeDetectorRef])
], ConnectionPage);
export { ConnectionPage };
//# sourceMappingURL=connection.page.js.map