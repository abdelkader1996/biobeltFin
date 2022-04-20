import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Events, Platform } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';
import { UPCModbus } from '../model/upcv3/upcmodbus';

@Component({
  selector: 'app-comunicationparam',
  templateUrl: './comunicationparam.page.html',
  styleUrls: ['./comunicationparam.page.scss'],
})
export class ComunicationparamPage {
  upc : UPCModbus;
  modemGSM : string;
  modemGSMpass : string;
  ssid : string;
  password : string;
  channel : number;
  url : string;
  apn : string;
  apnuser:string;
  apnpass:string;
  adIp : string;
  redBackground = false;
  correspondancesRegistres: CorrespondancesRegistres;

  constructor(private global : GlobalService,
              private platform : Platform,
              private ngZone : NgZone,
              private cd : ChangeDetectorRef,
              private events : Events) { 
                this.global.checkMode()
              }

  ionViewWillEnter(){
                
               
    this.global.connexionRequise = "UPC"

    this.correspondancesRegistres = new CorrespondancesRegistres()

                    
    this.global.onReadStatiqueEnable().then(()=>{
      this.subscribeRefresh()
    })  
              
  }
  doRefresh(event) {
    this.unsubscribeRefresh()
    this.global.onReadStatiqueEnable().then(()=>{
      this.subscribeRefresh()
    })  
  }

  int2ip (ipInt) {
    return ( (ipInt>>>24) +'.' + (ipInt>>16 & 255) +'.' + (ipInt>>8 & 255) +'.' + (ipInt & 255) );
  }

  onChangeMDMGSM() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change mdm id")
    this.global.onWriteEnable(this.correspondancesRegistres.comMdmName,this.modemGSM)     
  }

  onChangeMDMGSMPass() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change mdm pass")
    this.global.onWriteEnable(this.correspondancesRegistres.comMdmPass,this.modemGSMpass)      
  }
  
  onChangeSSID() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change wifi ssid")
    this.global.onWriteEnable(this.correspondancesRegistres.comWifiSsid,this.ssid)      
  }

  onChangeMDP() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change wifi pass")
    this.global.onWriteEnable(this.correspondancesRegistres.comWifiPassW,this.password)    
  }

  onChangeChannel() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change channel")
    this.global.onWriteEnable(this.correspondancesRegistres.comWifiApCh,this.channel)
  }

  onChangeURL() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change url")
    this.global.onWriteEnable(this.correspondancesRegistres.comWebSrvUrl,this.url)
  }

  onChangeAPNUS() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change apnusr")
    this.global.onWriteEnable(this.correspondancesRegistres.comMdmApnUser,this.apnuser)     
  }

  onChangeAPNPass() {
    var d=new Date()
    this.global.logs.push(this.global.msToTime(d.getTime())+" - appel on change apnpass")
    this.global.onWriteEnable(this.correspondancesRegistres.comMdmApnPass,this.apnpass)    
  }

  unsubscribeRefresh(){
    this.events.unsubscribe("loadParameters")
  }

  subscribeRefresh(){
    this.events.subscribe("loadParameters",($event)=>{
      this.modemGSM = this.global.upcmodbus.communicationParameters.comMdmName;
      this.modemGSMpass = this.global.upcmodbus.communicationParameters.comGsmPass;

      this.ssid = this.global.upcmodbus.communicationParameters.comGsmName;
      this.password = this.global.upcmodbus.communicationParameters.comWiFiPass;
      this.channel = this.global.upcmodbus.communicationParameters.comWifiApCh;
      this.url = this.global.upcmodbus.communicationParameters.comWebSrvUrl;
      this.apn = this.global.upcmodbus.communicationParameters.comMdmApnId2;
      this.apnuser = this.global.upcmodbus.communicationParameters.comMdmApnUser;
      this.apnpass = this.global.upcmodbus.communicationParameters.comMdmApnPass;
      this.adIp = this.global.upcmodbus.communicationParameters.comGsmIpAdr;

      
      
    })
        
  }
  //Synchro bouteilles polling synchro URGENT 
  //Différence bouteille présent et ajouter URL serveur
  //Paramètre de PID et offsets modifiable
  //Intensté adjust Paramètres actif et non adjust Mode de diffusion sur l'état
}
