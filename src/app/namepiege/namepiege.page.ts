import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from 'src/app/model/upcv3/upcmodbus';
import { Storage } from '@ionic/storage';
import {  Router } from '@angular/router';

import { AlertController, Events, Platform } from '@ionic/angular';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';


declare var WifiWizard2: any;

@Component({
  selector: 'app-namepiege',
  templateUrl: './namepiege.page.html',
  styleUrls: ['./namepiege.page.scss'],
})
export class NamepiegePage {
  do;
  check=false;
  current_ssid="NO WIFI"
  stored_ssid="NO WIFI";
  password_ssid="";
  connection_modbus=false;
  isLoading=false;
  tryToRead=false;
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
              private storage : Storage, 
              private alertCTRL : AlertController,
              private events : Events
              ) {this.global.checkMode() }

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

            this.horloge = this.global.upcmodbus.general.upcClock
                         
         
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




 Read(){
   this.do= setInterval(()=>{

      console.log("======================== cycle ================================")
      console.log("UPC stat  ====  "+this.global.upcmodbus.state)
     
      this.checkConnectionWifi()

      // en cas de perte de connexion 
      if(this.current_ssid != this.stored_ssid && this.check){
        console.log("wifi diff >>>> ")
        console.log("reconnexion  >>>> ")

        //connecter au wifi 
        this.ConnecterUPC()
      }

    

       if(this.tryToRead && this.global.upcmodbus.state==1){
        console.log("Try to read >")

         // lecture statique :
         this.isLoading=true;

         this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "namepiege").then(res=>{   
         
          if(res == true){
            this.tryToRead=false;
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

  ngOnInit(){
    
  }


  async checkConnectionWifi(){
    let wifi = await WifiWizard2.getConnectedSSID()
    this.current_ssid=wifi;
  }


  doRefresh(event) {
    this.ionViewWillEnter();
    event.target.complete();

}


  toZero4(d) {
    
    return ("0000" + (+d).toString(16)).substr(-4);

  }



  onChangeName() {
    console.log(" Accueil :: ecrir : nome upc  ") 
    this.ecrir(this.correspondancesRegistres.upcNameId,this.name)

  }
  onChangePieges() {
    console.log(" Accueil :: ecrir : num piege ")   
    this.ecrir(this.correspondancesRegistres.upcTrapNum,this.nbpiege) 
  }

  ecrir(variable, value){
    if(variable.type=="int"){
    this.isLoading=true;
    this.global.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim,value).then(()=>{

      console.log("accueil ::  ecriture reussie")
     
      // lecture statique :
       this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "namepiege").then(res=>{   
   
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
      this.global.upcmodbus.client.setStringArrayInHoldingResgisters(variable,value).then(()=>{
  
        console.log("accueil ::  ecriture reussie")
       
        // lecture statique :
         this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "namepiege").then(res=>{   
     
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
  async onWipe() {
    let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Wipe ?",
    buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
    // ecrire la commande  EEEE dans 40011 pour faire un wipe
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
      
  }}]});
  alert.present();

                                              
    }



    async onReset() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Reset ?",
      buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
      // ecrire la commande  EEEE dans 40011 pour faire un wipe
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
        
    }}]});
    alert.present();
  
                                                
      }
    /*
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
    this.ecrir(this.correspondancesRegistres.upcTimeZone,this.fusehor)
   
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

  ionViewWillLeave(){


    console.log("quitter la page  :")  
    clearInterval(this.do)

  }

}
