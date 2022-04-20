import { Component, NgZone, OnInit,ChangeDetectorRef } from '@angular/core';
import { Events, Platform } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';
import { UPCModbus } from '../model/upcv3/upcmodbus';

@Component({
  selector: 'app-alarmparam',
  templateUrl: './alarmparam.page.html',
  styleUrls: ['./alarmparam.page.scss'],
})
export class AlarmparamPage  {
  upc : UPCModbus;
  alresbasse : boolean;
  seuilresbasse : number;
  alresvide : boolean;
  seuilfluxvide : number;
  periodtestvide : number;
  alpresentre : boolean;
  seuilpresentre : number;
  alpresortie : boolean;
  seuilpresortie : number;
  aldebco2 : boolean;
  seuildebco2 : number;
  alimret : boolean;
  alimcoup : boolean;
  name ="";
  redBackground = false;
  correspondancesRegistres: CorrespondancesRegistres;

  constructor(private global : GlobalService,
              private ngZone : NgZone,
              private platform : Platform
              ,private cd : ChangeDetectorRef,
              private events : Events) {
                this.global.checkMode()
               }
               ionViewWillEnter() {
                this.global.connexionRequise = "UPC"
                this.platform.ready().then(cordova=>{
                  this.correspondancesRegistres = new CorrespondancesRegistres()
                  this.global.onReadStatiqueEnable().then(()=>{
                    this.subscribeRefresh()
                  })
                })
              }

              subscribeRefresh(){
                this.events.subscribe("loadParameters",($event)=>{
                  this.alresbasse = this.global.upcmodbus.alarm.alrResLowEn;
                  this.alresvide = this.global.upcmodbus.alarm.alrResEmptyEn;
                  this.alpresentre = this.global.upcmodbus.alarm.alrPresInpEn;
                  this.alpresortie = this.global.upcmodbus.alarm.alrPresOutEn;
                  this.aldebco2 = this.global.upcmodbus.alarm.alrFlowAvgEn;
                  this.alimcoup = this.global.upcmodbus.alarm.alrPowDownEn;
                  this.alimret = this.global.upcmodbus.alarm.alrPowBackEn;
                  this.seuilresbasse = this.global.upcmodbus.alarm.alrResLowLevel;
                  this.seuilfluxvide = this.global.upcmodbus.alarm.alrResEmptyFlow;
                  this.seuilpresentre = this.global.upcmodbus.alarm.alrPresInpTol;
                  this.seuilpresortie = this.global.upcmodbus.alarm.alrPresOutTol;
                  this.seuildebco2 = this.global.upcmodbus.alarm.alrFlowSetTol;
                  this.periodtestvide = this.global.upcmodbus.alarm.alrResEmptyTest;
                  this.global.ssid = this.global.upcmodbus.communicationParameters.comGsmName;
                })
              }
              
              changerAlrmResbasse(){
                var alrm = !(this.alresbasse == true ? 1:0);
               
                this.global.onWriteEnable(this.correspondancesRegistres.alrResLowEn,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrResLowEn = alrm;
                })
              }
              changeSeuilResBasse(){
                
                this.global.onWriteEnable(this.correspondancesRegistres.alrResLowLevel,this.seuilresbasse)
              }
              changeAlrmResVide() {
                var alrm = !(this.alresvide == true ? 1:0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyEn,alrm)
              }
              changeSeuilFluxVide() {
                this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyFlow,this.seuilfluxvide)
              }
              changePeriodVide() {              
                this.global.onWriteEnable(this.correspondancesRegistres.alrResEmptyTest,this.periodtestvide)
              }
              changeAlrmPresentree() {
                var alrm = !(this.alpresentre == true ?1:0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrPressInpEn,alrm)
              }
              changeSeuilPresentree() {
                this.global.onWriteEnable(this.correspondancesRegistres.alrPressInpTol,this.seuilpresentre)
              }
              changeAlrmResSortie() {
                var alrm = !(this.alpresortie == true ?1 : 0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrPressOutEn,alrm)
              }             
              changeSeuilPresSortie() {
                this.global.onWriteEnable(this.correspondancesRegistres.alrPressOutTol,this.seuilpresortie)
              }
              changeAlrmDebCo2() {
                var alrm = !(this.aldebco2 == true ? 1:0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrFlowAvgEn,alrm)
              }
              changeSeuilDebCo2() {
                this.global.onWriteEnable(this.correspondancesRegistres.alrFlowSetTol,this.seuildebco2)
              }
              changeAlimRet() {
                var alrm = !(this.alimret == true ? 1:0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrPowBackEn,alrm)
              }
              changeAlimCoup() {
                var alrm = !(this.alimcoup == true ? 1:0);
                this.global.onWriteEnable(this.correspondancesRegistres.alrPowDownEn,alrm)
              }

              

            

}