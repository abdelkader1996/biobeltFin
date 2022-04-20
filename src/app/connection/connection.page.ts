import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { GlobalService } from '../api/global.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

declare var WifiWizard2: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage {
  upc : UPCModbus;
  mode = "";
  level = 0;
  ber = 0;
  bertab = [];
  fw = 0;
  levelTab = [];
  dureTab = [];
  redBackground = false;
  display=false;

  constructor(private platform : Platform, private global : GlobalService, private loadingCTRL : LoadingController,private hotspot : Hotspot,private ngZone : NgZone, private cd : ChangeDetectorRef,private router : Router,
    private storage : Storage
) { this.global.checkMode() }

ionViewWillEnter() {
  this.storage.set("connexionRequise","UPC")
    /*affichage bouton suivant*/    
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    })

    this.levelTab = [];
    this.bertab = [];
    this.dureTab = []
    this.platform.ready().then(async ()=>{
      
            //this.global.onConnectWiFi().then(async res=>{
                

            this.readConnectionParams();
            //})
            
            
          
    })
    
  }
  doRefresh(event) {
    this.ionViewWillEnter();
    event.target.complete();
  } 
  readConnectionParams() {
    //40414 40415 
    //41225 41239
    localStorage.setItem("currentssid",this.global.upcmodbus.communicationParameters.comGsmName);
    /*this.global.upcmodbus.client.getStringFromHoldingRegister(40045,10).then(res=>{
      this.redBackground = false;
      localStorage.setItem("currentssid",res);
      this.cd.detectChanges();
    }).catch(err=>{
      //localStorage.removeItem("isConnected");
      this.redBackground = true;
      this.cd.detectChanges();
    
      //this.ngOnInit();
    })*/
    this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen2G.toFixed(2));
    this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen3G.toFixed(2));
    this.levelTab.push(this.global.upcmodbus.communicationParameters.xComMdmRssuMoyen4G.toFixed(2));
    
    this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen2GGPRS.toFixed(2));
    this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen2GEDGE.toFixed(2));
    this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen3G.toFixed(2));
    this.bertab.push(this.global.upcmodbus.communicationParameters.xComMdmQualMoyen4G.toFixed(2));
    
    this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn2G.toFixed(2));
    this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn3G.toFixed(2));
    this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeIn4G.toFixed(2));
    this.dureTab.push(this.global.upcmodbus.communicationParameters.xComMdmRatioTimeOffline.toFixed(2));

    if(this.global.upcmodbus.communicationParameters.comMdmMode == 0){
        this.mode = 'Non enregistré';this.ber = 0;
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 1){
      this.mode =  '2G GPRS'; this.ber = this.bertab[0];
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 2){
      this.mode =  '2G EDGE'; this.ber = this.bertab[1];
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 3) {
      this.mode =  '3G WCDMA';this.ber = this.bertab[2];
    }if (this.global.upcmodbus.communicationParameters.comMdmMode == 4){
      this.mode =  '3G HSDPA';this.ber = this.bertab[2];
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 5) {
      this.mode =  '3G HSUPA';this.ber = this.bertab[2];
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 6) {
      this.mode =  '3G HSDPA/HSUPA';this.ber = this.bertab[2];
    } if(this.global.upcmodbus.communicationParameters.comMdmMode == 7){
      this.mode =  '4G';this.ber = this.bertab[3];
    }
    this.level = this.global.upcmodbus.communicationParameters.comGsmLevel;
    /*this.global.interval =
    setInterval(()=>{
     
        this.global.upcmodbus.client.readHoldingRegisters(40414,10).then(res=>{
          var connect = res[0];
          
          if(connect == 0){
            this.mode = 'Non enregistré';this.ber = 0;
          } if(connect == 1) {
            this.mode =  '2G GPRS'; this.ber = this.bertab[0];
          } if(connect == 2){
            this.mode =  '2G EDGE'; this.ber = this.bertab[1];
          } if(connect == 3){
            this.mode =  '3G WCDMA';this.ber = this.bertab[2];
          } if(connect == 4) {
            this.mode =  '3G HSDPA';this.ber = this.bertab[2];
          } if(connect == 5) {
            this.mode =  '3G HSUPA';this.ber = this.bertab[2];
          } if(connect == 6) {
            this.mode =  '3G HSDPA/HSUPA';this.ber = this.bertab[2];
          } if(connect == 7) {
            this.mode =  '4G';this.ber = this.bertab[3];
          }
          
          
          this.level = this.global.upcmodbus.client.registerToUint32([res[1]]);
          if(this.level > 500) {
            this.level = 0;
          }
          this.redBackground = false;
          this.cd.detectChanges();
          
        }).catch(err=>{
          this.redBackground = true;
          this.cd.detectChanges();
          //clearInterval(intervalconnect);
        })
        if(this.redBackground) {
          clearInterval(this.global.interval);
          this.ionViewWillEnter()
        }
    
    
      
    },500)*/
    
  }
  goToNextPage(){  
    clearInterval(this.global.interval); 
  
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }



}
