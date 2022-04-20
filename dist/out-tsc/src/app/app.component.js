import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Upcv3serviceService } from './api/upcv3service.service';
import { Code } from './api/ApiResponse';
import { GlobalService } from './api/global.service';
import { Hotspot } from '@ionic-native/hotspot/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, upcv3Service, global, hotspot) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.upcv3Service = upcv3Service;
        this.global = global;
        this.hotspot = hotspot;
        this.appPages = [
            {
                title: 'Changement de bouteilles sur ceinture',
                url: '/addbottleceint',
                icon: 'barcode'
            },
            {
                title: 'Réglage des détendeurs',
                url: '/adjustment',
                icon: 'return-right'
            },
            {
                title: "Contrôle débits Mini/Maxi",
                url: "/controldiff",
                icon: "infinite",
            },
            {
                title: 'Programmation',
                icon: 'sunny',
                url: "/synchro",
            },
            {
                title: "Connexion",
                icon: "globe",
                url: "/connection"
            }
        ];
        localStorage.setItem("BBAM", "false");
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            var token = localStorage.getItem("token");
            this.upcv3Service.getUPC3(token).subscribe(res => {
                if (res.code == Code.UPCV3_RECOVERED) {
                    localStorage.setItem("upc3", JSON.stringify(res.result));
                }
            });
        });
        /*setInterval(()=>{
          if(this.platform.is("android")) {
            this.hotspot.isConnectedToInternet().then(res=>{
              if(res && localStorage.getItem("BBAM") == "true") {
                
                this.hotspot.connectToWifi("BBAM","BioBeltService").then(()=>{
                  localStorage.setItem("BBAM","true");
                  this.global.ssid = "BBAM";
                  this.global.isBBAM = true;
                })
              } else if (res == false) {
                localStorage.setItem("BBAM","false");
              }
            }).catch(err=>{
              
            })
          } else if (this.platform.is("ios")) {
            if(localStorage.getItem("BBAM") != "true"){
              WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(res=>{
                localStorage.setItem("BBAM","true");
                this.global.ssid = "BBAM";
                this.global.isBBAM = true;
              })
            }
            
          }
          
        },5000)*/
    }
    onClearInterval() {
        clearInterval(this.global.interval);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        Router,
        Upcv3serviceService,
        GlobalService,
        Hotspot])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map