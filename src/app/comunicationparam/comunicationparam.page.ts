import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Events, Platform } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { Storage } from '@ionic/storage';

import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';
import { UPCModbus } from '../model/upcv3/upcmodbus';

declare var WifiWizard2: any;

@Component({
  selector: 'app-comunicationparam',
  templateUrl: './comunicationparam.page.html',
  styleUrls: ['./comunicationparam.page.scss'],
})
export class ComunicationparamPage {
  do;
  check=false;
  current_ssid="NO WIFI"
  stored_ssid="NO WIFI";
  password_ssid="";
  connection_modbus=false;
  isLoading=false;
  tryToRead=false;
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
              private storage : Storage,
              private events : Events) { 
                this.global.checkMode()
              }

  ionViewWillEnter(){
  
    this.tryToRead=true;
    console.log("=========================================================================") 
    console.log("========================== page  accueil :===============================") 
    console.log("=========================================================================") 

    this.global.connexionRequise = "UPC"

    console.log(" - Connexion requise :"+ this.global.connexionRequise)
    console.log(" - Connexion  actuel  (avant on read statique) :"+ this.global.statutConnexion)

     this.ConnecterUPC();

     this.Read()

    
    this.correspondancesRegistres = new CorrespondancesRegistres()                   
              
  }

  
 ConnecterUPC(){
  //connection a l 'UPC :
  console.log("> try  connecter a l upc ")
  if(this.global.mode != "modeTest"){

    this.isLoading=true;
    this.storage.get("ssid_upc").then(async stored_ssid=>{
          this.storage.get("password").then(async password=>{
          this.stored_ssid=stored_ssid;
          this.password_ssid=password;

            //recuperer l ssid  +password 
            console.log("acceuil , stored password" +password);
            console.log("acceuil , stored ssid" +stored_ssid);

            //si on est deja connecté a l upc :
            let wifi = await WifiWizard2.getConnectedSSID()

            console.log("connected ssid: "+wifi)

            if(wifi != stored_ssid){
            console.log("wifi diffrents :")

            WifiWizard2.connect(stored_ssid, password).then(()=>{
              //connexion reussi a l UPC  :
              console.log("connexion wifi up reussie :")
              this.check=true;

              this.global.statutConnexion="UPC"
              this.global.onConnectModbus().then(async ()=>{ 

               console.log("accueil , connexion modbus reussie >> ")
               this.connection_modbus=true;
               this.isLoading=false; 

               //on peut lire 
               this.tryToRead=true;
               

               
                   
              }).catch(err =>{                   
                console.log("accueil + connexion modbus échouée  ")  
                this.isLoading=false;   
                this.connection_modbus=false;          

              })
             
             
    
              
            }).catch(()=>{
             console.log("connexion impossible a l'UPC")
            })
          }else{
            this.global.onConnectModbus().then( ()=>{ //on tente une connexion modbus pour déterminer si c'est un upc
              //connexion modbus réussie : c'est un upc
             console.log("accueil + connexion modbus reussie ")
             this.connection_modbus=true;
             this.isLoading=false; 



            }).catch(err =>{                   
              console.log("accueil + connexion modbus échouée  ")  
              this.isLoading=false;  
              this.connection_modbus=false;           

            })
          }

          })

    })

  }


} 
async checkConnectionWifi(){
  let wifi = await WifiWizard2.getConnectedSSID()
  this.current_ssid=wifi;
}


Read(){
  this.do= setInterval(()=>{

     console.log("======================== cycle ================================")
    
     this.checkConnectionWifi()

     // en cas de perte de connexion 
     if(this.current_ssid != this.stored_ssid && this.check){
       console.log("wifi diff >>>> ")
       console.log("reconnexion  >>>> ")

       //connecter au wifi 
       this.ConnecterUPC()
     }

   

      if(this.tryToRead){
       console.log("Try to read >")

        // lecture statique :
        this.isLoading=true;

        this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "comunicationparam").then(res=>{   
        
         if(res == true){
           this.isLoading=false;
           console.log(">  lecture reussi ")
           this.subscribeRefresh()
           this.events.publish("loadParameters")
           this.global.lectureStatiqueEnCours = false;
           this.global.displayLoading = false;
           this.tryToRead=false;
         }
         else{ 
                 console.log(">  lecture echouée  ")
                 this.isLoading=false;
                 this.tryToRead=true;
                 this.global.statutConnexion="Aucune"
                 this.global.lectureStatiqueEnCours = false;
                 this.global.displayLoading = false;
               
               }      
       
       }).catch(err=>{
         this.tryToRead=true;
         this.isLoading=false;
         console.log("acceuil::erreur lecture")
         console.log(err)
         
       })

       //fin de lecture statique :

      }

   },500);

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
   
    this.ecrir(this.correspondancesRegistres.comMdmName,this.modemGSM)     
  }

  onChangeMDMGSMPass() {
   this.ecrir(this.correspondancesRegistres.comMdmPass,this.modemGSMpass)      
  }
  
  onChangeSSID() {
    
    this.ecrir(this.correspondancesRegistres.comWifiSsid,this.ssid)      
  }

  onChangeMDP() {
   this.ecrir(this.correspondancesRegistres.comWifiPassW,this.password)    
  }

  onChangeChannel() {
   this.ecrir(this.correspondancesRegistres.comWifiApCh,this.channel)
  }

  onChangeURL() {
    this.ecrir(this.correspondancesRegistres.comWebSrvUrl,this.url)
  }

  onChangeAPNUS() {
  this.ecrir(this.correspondancesRegistres.comMdmApnUser,this.apnuser)     
  }

  onChangeAPNPass() {
   this.ecrir(this.correspondancesRegistres.comMdmApnPass,this.apnpass)    
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

  ionViewWillLeave(){


    console.log("quitter la page  :")  
    clearInterval(this.do)

  }

  
  ecrir(variable, value){
    if(variable.type=="int"){
    this.isLoading=true;
    this.global.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim,value).then(()=>{

      console.log("accueil ::  ecriture reussie")
     
      // lecture statique :
       this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "comunicationparam").then(res=>{   
   
    if(res == true){
      this.isLoading=false;
      console.log("accueil:  lecture reussi ")

      this.subscribeRefresh()
      this.events.publish("loadParameters")
      this.global.lectureStatiqueEnCours = false;
      this.global.displayLoading = false;
      this.tryToRead=false;
    }
    else{ 
              this.isLoading=false;
           
              this.global.statutConnexion="Aucune"
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
          
          }      
  
  }).catch(err=>{
    this.isLoading=false;
    console.log("acceuil::erreur lecture")
    console.log(err)
    
  })

  //fin de lecture statique :

}).catch(()=>{
  this.isLoading=false;
  console.log("num piege ::écriture impossible")
})
    }else{
      this.isLoading=true;
      this.global.upcmodbus.client.setStringArrayInHoldingResgisters(variable.adr,value).then(()=>{
  
        console.log("accueil ::  ecriture reussie")
       
        // lecture statique :
         this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "comunicationparam").then(res=>{   
     
      if(res == true){
        this.isLoading=false;
        console.log("accueil:  lecture reussi ")
  
        this.subscribeRefresh()
        this.events.publish("loadParameters")
        this.global.lectureStatiqueEnCours = false;
        this.global.displayLoading = false;
        this.tryToRead=false;
      }
      else{ 
                this.isLoading=false;
             
                this.global.statutConnexion="Aucune"
                this.global.lectureStatiqueEnCours = false;
                this.global.displayLoading = false;
            
            }      
    
    }).catch(err=>{
      this.isLoading=false;
      console.log("acceuil::erreur lecture")
      console.log(err)
      
    })
  
    //fin de lecture statique :
  
  }).catch(()=>{
    this.isLoading=false;
    console.log("num piege ::écriture impossible")
  })

    }
  }

  //Synchro bouteilles polling synchro URGENT 
  //Différence bouteille présent et ajouter URL serveur
  //Paramètre de PID et offsets modifiable
  //Intensté adjust Paramètres actif et non adjust Mode de diffusion sur l'état
}
