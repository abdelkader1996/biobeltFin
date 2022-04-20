import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { Platform, LoadingController, Events } from '@ionic/angular';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { Network } from '@ionic-native/network/ngx';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';


declare var WifiWizard2: any;

@Component({
  selector: 'app-cdiff',
  templateUrl: './cdiff.page.html',
  styleUrls: ['./cdiff.page.scss'],
})
export class CdiffPage implements OnInit {
  textdiff = "ADJUST";
  colordif = "light";
  textplaydiff = "DIFF";
  colorplayfiff = "light";
  colordis = "light";
  colorcheck = "light";
  offsetPE = 0;
  offsetPS = 0;
  offsetdeb = 0;
  pidprog = 0;
  pidint = 0;
  pider = 0;
  upc : UPCModbus;
  fluxmax : number = 0;
  intensity : number = 0;
  resActive : number = 0;
  temp : number = 0;
  debiRef : number = 0;
  peRef : number = 0;
  psRef : number = 0;
  debiMes : number = 0;
  peMes : number = 0;
  psMes : number = 0;
  psComp : number = 0;
  psCompMes : number = 0;
  upc3s : UPCV3[];
  backgroundeb = false;
  backgrounddangerdeb = false;
  diffcolor = "light";
  typediff = "Mode de diffusion";
  redBackground = false;
  display = false;
  correspondancesRegistres: CorrespondancesRegistres;
  
  //diffusion à l'arrêt start reload front detectchange 

  constructor(private global :GlobalService,
              private platform : Platform,
              private loadingCTRL : LoadingController,
              private ngZone : NgZone,
              private hotspot : Hotspot,
              private network : Network,
              private cd : ChangeDetectorRef,
              private router : Router,
              private storage : Storage,
              private events : Events,
              ) {
                this.global.checkMode()
               }

  ngOnInit() {}
  ionViewWillEnter(){
    
    this.global.connexionRequise = "UPC"
    
    /*affichage bouton suivant*/    
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 
    this.upc3s = JSON.parse(localStorage.getItem("upc3"));

    this.correspondancesRegistres = new CorrespondancesRegistres()
    
    this.global.onReadStatiqueEnable().then(()=>{
      this.subscribeRefresh()
    })            
        
   
  }
  
  startstop() {    
    this.onChangeDiff();
  }
  doRefresh(event) {
    this.unsubscribeRefresh()
    this.global.onReadStatiqueEnable().then(()=>{
      this.subscribeRefresh()
    })  
  }

  
  onChangeDiff() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change diff")
    this.global.onWriteEnable(this.correspondancesRegistres.upcMode,2)
  }

  onDisableDiff() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on disable diff")
    this.global.onWriteEnable(this.correspondancesRegistres.upcMode,0)
  }

  onEnableDiff() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on enable diff")
    this.global.onWriteEnable(this.correspondancesRegistres.upcMode,1)
  }

  onCheck() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on check")
    this.global.onWriteEnable(this.correspondancesRegistres.upcMode,3).then(()=>{
      this.colorcheck = "primary";
      this.colordis = "light";
      this.colorplayfiff = "light";
      this.colordif = "light";
      this.typediff = "Mode CHECK Pressions";
      this.diffcolor = "warning";       
    })
  }

  changeIntensity() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change intensity")
    this.global.onWriteEnable(this.correspondancesRegistres.upcDiffLvlAdj,this.intensity)
  }
  
  changeFluxMax() {    
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change flux max")
    this.global.onWriteEnable(this.correspondancesRegistres.co2FlowRefAdj,this.fluxmax) 
  }

  changeResAct() {    
    this.resActive = this.resActive == 1 ? 2 : 1;
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change res act")
    this.global.onWriteEnable(this.correspondancesRegistres.co2ResActAdj,this.resActive) 
  }

  changePID() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change PID")
    this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidProp,this.pidprog) 
  }

  changeINT() {    
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change INT")
    this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidInteg,this.pidint) 
  }

  changeDIR() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change DIR")
    this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidDiff,this.pider) 
  }

  changeoffsetPE() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change offsetPE")
    this.global.onWriteEnable(this.correspondancesRegistres.co2PressInpOffs,this.offsetPE) 
  }

  changeoffsetPS() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change offsetPS")
    this.global.onWriteEnable(this.correspondancesRegistres.co2PressoutOffs,this.offsetPS) 
  } 

  changeoffsetdeb() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change offsetdeb")
    this.global.onWriteEnable(this.correspondancesRegistres.co2FlowOffs,this. offsetdeb) 
  }

  goToNextPage(){    
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }

  subscribeRefresh(){

  this.events.subscribe("loadParameters",($event)=>{
      var status = this.global.upcmodbus.general.upcStatus;
      if(status == 0){
        this.colordis = "danger";
        this.colorcheck = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Diffusion OFF";
        this.diffcolor = "danger";
      }else if (status == 3) {
        this.colorcheck = "primary";
        this.colordis = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Mode CHECK Pressions";
        this.diffcolor = "warning";
      }else if(status == 2) {
        this.colordif = "primary";
        this.colorplayfiff = "light";
        this.colordis ="light"
        this.colorcheck = "light";
        this.diffcolor = "tertiary";
        this.typediff = "Mode ADJUST";
      } else {
        this.colorplayfiff = "primary";
        this.colordif = "light";
        this.colorcheck = "light";
        this.colordis = "light";
        this.typediff = "Diff. programmée ACTIF";
        this.diffcolor = "primary";
      }
    this.offsetPE = this.global.upcmodbus.diffusions.co2PressInpOffs
    this.offsetPS = this.global.upcmodbus.diffusions.co2PressOutOffs  
    this.offsetdeb =  this.global.upcmodbus.diffusions.co2FlowOffs    
    this.pidprog = this.global.upcmodbus.general.upcCo2PidProp           
    this.pidint = this.global.upcmodbus.general.upcCo2PidInteg 
    this.pider = this.global.upcmodbus.general.upcCo2PidDiff
  
  
    //40018

    this.fluxmax = this.global.upcmodbus.general.co2FlowRefAdj
    
    //40065
    this.intensity = this.global.upcmodbus.diffusions.upcDiffLvlAdj
    
    //40150
      this.resActive = this.global.upcmodbus.reserves.co2ResActAdj                
       
        this.debiRef = (this.fluxmax*this.intensity)/10;
        //this.global.interval = setInterval(async ()=>{
       

            //40416
            //this.intensity = this.upc.client.registerToUint32(res[0]); 
           //40435                    
           this.peMes = this.global.upcmodbus.diffusions.co2PresInpAvg

           //40437                    
           this.psMes = this.global.upcmodbus.diffusions.co2PresOutAvg 

           //40439                     
           this.debiMes = this.global.upcmodbus.diffusions.co2FlowAvg
           if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100) <5){
            this.backgroundeb = true;
            this.backgrounddangerdeb = false;
          } else if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100)<10) {
            
            this.backgrounddangerdeb = true;
          } else {
            this.backgroundeb = false;
            this.backgrounddangerdeb = false;
          }

           //40451                    
           this.temp = this.global.upcmodbus.diffusions.co2TempAvg

           //40463                   
           this.psCompMes = this.global.upcmodbus.diffusions.co2PressOutComp
         
        })
      }


      unsubscribeRefresh(){
        this.events.unsubscribe("loadParameters")
      }
         

    
  


}
