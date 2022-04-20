import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';

declare var WifiWizard2: any;

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  upc : UPCModbus;
  co2PresOutRef = [];
  co2PresInp1 = [];
  cos2PresInp2 = [];
  co2PresOutSet = [];
  textdiff = "Start";
  colordif = "primary";
  redBackground = false;
  pres = [{
    id : 1, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 2, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 3, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 4, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 5, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 6, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 7, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 8, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 9, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  },{
    id : 10, peb1 : 0 , peb2 : 0, ps : 0, psref : 0,
  }]
  display = false;

  constructor(private platform : Platform,
              private loadingCTRL : LoadingController,
              private global : GlobalService,
              private ngZone :NgZone,
              private network : Network,
              private hotspot : Hotspot,
              private cd : ChangeDetectorRef,
              private router : Router,
              private storage : Storage) { 
                this.global.checkMode()
              }

  ngOnInit() {}
  ionViewWillEnter(){
    /*affichage bouton suivant*/    
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 
    
    this.platform.ready().then(()=>{
      //this.global.onConnectWiFi().then(res=>{
        this.global.upcmodbus.client.readHoldingRegisters(40271,20).then(res=>{
          
          for(var i =0; i<this.pres.length;i++){
            this.pres[i].psref = this.global.upcmodbus.client.registerToFloat([res[i],res[i+1]]);
            this.redBackground = false;
            this.colordif = "primary";
            this.cd.detectChanges();
          }
        }).catch(err=>{
          this.redBackground = true;
          this.colordif = "danger";
          this.cd.detectChanges();
        })
        this.global.upcmodbus.client.readHoldingRegisters(40229,20).then(res=>{
               
                
          this.pres[0].peb1 = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
          this.pres[1].peb1 = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
          this.pres[2].peb1 = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
          this.pres[3].peb1 = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
          this.pres[4].peb1 = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
          this.pres[5].peb1 = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
          this.pres[6].peb1 = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
          this.pres[7].peb1 = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
          this.pres[8].peb1 = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
          this.pres[9].peb1 = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
          this.cd.detectChanges();
      })
      this.global.upcmodbus.client.readHoldingRegisters(40249,20).then(res=>{
        this.pres[0].peb2 = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
          this.pres[1].peb2 = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
          this.pres[2].peb2 = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
          this.pres[3].peb2 = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
          this.pres[4].peb2 = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
          this.pres[5].peb2 = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
          this.pres[6].peb2 = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
          this.pres[7].peb2 = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
          this.pres[8].peb2 = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
          this.pres[9].peb2 = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
          this.cd.detectChanges();
      })
      this.global.upcmodbus.client.readHoldingRegisters(40356,20).then(res=>{
        this.pres[0].ps = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
          this.pres[1].ps = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
          this.pres[2].ps = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
          this.pres[3].ps = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
          this.pres[4].ps = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
          this.pres[5].ps = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
          this.pres[6].ps = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
          this.pres[7].ps = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
          this.pres[8].ps = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
          this.pres[9].ps = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
          this.cd.detectChanges();
      })
      this.global.interval = setInterval(()=>{
        this.global.upcmodbus.client.getIntFromHoldingRegister(40168,1).then(res=>{
            this.redBackground = false;
            this.cd.detectChanges();
        }).catch(err=>{
          this.redBackground = true;
          this.colordif = "danger";
          this.cd.detectChanges();
        })
        if(this.redBackground) {
          clearInterval(this.global.interval);
          this.ngOnInit();
        }
      },500)
      //})
    })
    
  }
  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }
  startstop() {
    var interval;
    if(this.textdiff == "Start"){
      this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,3).then(res=>{
        this.textdiff = "Stop";
        this.colordif = "danger";
        interval = setInterval(()=>{
            
              
                
                
                this.global.upcmodbus.client.readHoldingRegisters(40229,20).then(res=>{
                 
                  
                    this.pres[0].peb1 = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
                    this.pres[1].peb1 = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
                    this.pres[2].peb1 = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
                    this.pres[3].peb1 = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
                    this.pres[4].peb1 = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
                    this.pres[5].peb1 = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
                    this.pres[6].peb1 = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
                    this.pres[7].peb1 = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
                    this.pres[8].peb1 = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
                    this.pres[9].peb1 = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
                    this.cd.detectChanges();
                })
                this.global.upcmodbus.client.readHoldingRegisters(40249,20).then(res=>{
                  this.pres[0].peb2 = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
                    this.pres[1].peb2 = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
                    this.pres[2].peb2 = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
                    this.pres[3].peb2 = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
                    this.pres[4].peb2 = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
                    this.pres[5].peb2 = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
                    this.pres[6].peb2 = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
                    this.pres[7].peb2 = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
                    this.pres[8].peb2 = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
                    this.pres[9].peb2 = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
                    this.cd.detectChanges();
                })
                this.global.upcmodbus.client.readHoldingRegisters(40356,20).then(res=>{
                  this.pres[0].ps = this.global.upcmodbus.client.registerToFloat([res[0],res[1]]);
                    this.pres[1].ps = this.global.upcmodbus.client.registerToFloat([res[2],res[3]]);
                    this.pres[2].ps = this.global.upcmodbus.client.registerToFloat([res[4],res[5]]);
                    this.pres[3].ps = this.global.upcmodbus.client.registerToFloat([res[6],res[7]]);
                    this.pres[4].ps = this.global.upcmodbus.client.registerToFloat([res[8],res[9]]);
                    this.pres[5].ps = this.global.upcmodbus.client.registerToFloat([res[10],res[11]]);
                    this.pres[6].ps = this.global.upcmodbus.client.registerToFloat([res[12],res[13]]);
                    this.pres[7].ps = this.global.upcmodbus.client.registerToFloat([res[14],res[15]]);
                    this.pres[8].ps = this.global.upcmodbus.client.registerToFloat([res[16],res[17]]);
                    this.pres[9].ps = this.global.upcmodbus.client.registerToFloat([res[18],res[19]]);
                    this.cd.detectChanges();
                })
             
              
            
        },500)
      })
    }else {
      this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,0).then(res=>{
        this.textdiff = "Start";
        this.colordif = "primary";
        clearInterval(interval);
      })
    }
    
  }

  goToNextPage(){    
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }

 

}

