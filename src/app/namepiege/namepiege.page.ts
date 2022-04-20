import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from 'src/app/model/upcv3/upcmodbus';
import { AlertController, Events, Platform } from '@ionic/angular';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';


declare var WifiWizard2: any;

@Component({
  selector: 'app-namepiege',
  templateUrl: './namepiege.page.html',
  styleUrls: ['./namepiege.page.scss'],
})
export class NamepiegePage {
  name : string = "";
  nbpiege : number = 0;
  upc : UPCModbus;
  uuid : string = "";
  fusehor : number;
  horloge : string;
  aube : string;
  crep : string;
  langue : string;
  firm : string = "";
  redBackground = false;
  length = 0;
  correspondancesRegistres: CorrespondancesRegistres;
  // Pièges sauvegardes plan
  constructor(private global : GlobalService,
              private platform : Platform,
              private ngZone : NgZone,
              private cd : ChangeDetectorRef,
              private alertCTRL : AlertController,
              private events : Events
              ) {this.global.checkMode() }

              ionViewWillEnter(){

      
          this.global.connexionRequise = "UPC"

          this.correspondancesRegistres = new CorrespondancesRegistres()

          this.global.onReadStatiqueEnable().then(()=>{
            this.subscribeRefresh()
          })

          
         
          
       
            this.horloge = this.global.upcmodbus.general.upcClock
                    
          
         
  }
  doRefresh(event) {
    this.ionViewWillEnter();
    event.target.complete();

}
  toZero4(d) {
    
    return ("0000" + (+d).toString(16)).substr(-4);

  }
  onChangeName() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change upcname")
    this.global.onWriteEnable(this.correspondancesRegistres.upcNameId,this.name)
  }
  onChangePieges() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change nbpiege")
    this.global.onWriteEnable(this.correspondancesRegistres.upcTrapNum,this.nbpiege)
  }
  /*async onWipe() {
    let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Wipe ?",
                                             buttons : [{text : "Non"},{text : "Oui",handler : ()=>{
                                              this.global.onWriteModbusVariables().then(res=>{
                                                var d = new Date()
                                                this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                this.global.ecritureEnCours = true;
                                                this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,61166).then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                  this.subscribeRefresh()
                                                  this.global.ecritureEnCours = false;    
                                                }).catch(err=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                  this.subscribeRefresh()
                                                  this.global.ecritureEnCours = false;
                                                })   
                                              })
                                             }}]
                                      })
    alert.present();
  }

  async onReset() {
    let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Reset ?",
                                             buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
                                              this.global.onWriteModbusVariables().then(res=>{
                                                var d = new Date()
                                                this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                this.global.ecritureEnCours = true;
                                                this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,65535).then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                  this.subscribeRefresh()
                                                  this.global.ecritureEnCours = false;                                                
                                                }).catch(err=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                  this.subscribeRefresh()
                                                  this.global.ecritureEnCours = false; 
                                                })                                                 
                                              })
                                                
                                              
                                             }}]
    })
    alert.present();
    
  }*/
  onChangeFusHor(){    
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change fushor")
    this.global.onWriteEnable(this.correspondancesRegistres.upcTimeZone,this.fusehor)
   
  }
  
  unsubscribeRefresh(){    
    this.events.unsubscribe("loadParameters")
  }

  subscribeRefresh(){
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - subscribe")
    this.events.subscribe("loadParameters",($event)=>{
            
      this.name = this.global.upcmodbus.nameId;
      this.length = this.name.length;
    

      this.nbpiege = this.global.upcmodbus.general.upcTrapNum;

      this.uuid = this.global.upcmodbus.general.upcMcuUid;

      this.fusehor = this.global.upcmodbus.general.upcTimeZone;

      this.firm = ""+ this.global.upcmodbus.general.upcFwVer;

  
        this.horloge = this.global.upcmodbus.general.upcClock;
    })
        
  }

}
