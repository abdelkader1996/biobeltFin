import { Component, OnInit, NgZone, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Storage} from '@ionic/storage';

import { Upcv3serviceService } from '../api/upcv3service.service';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { resolve } from 'url';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { first } from 'rxjs/operators'
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';

declare var WifiWizard2: any;
declare let Ping : any;

@Component({
  selector: 'app-addbottleceint',
  templateUrl: './addbottleceint.page.html',
  styleUrls: ['./addbottleceint.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddbottleceintPage  {
  do;
  check=false;
  current_ssid="NO WIFI"
  stored_ssid="NO WIFI";
  password_ssid="";
  connection_modbus=false;
  isLoading=false;
  tryToRead=false;

  highlightB1 = false;
  highlightB2 = false;
  statusB1;
  statusB2;
  contenuB1;
  contenuB2;


  correspondancesRegistres: CorrespondancesRegistres;


  constructor(
    private platform : Platform,
    private ngZone : NgZone,
    private network : Network,
    private scan : BarcodeScanner,
    private modalCtrl : ModalController,
    private loadingCTRL : LoadingController,
    private cd: ChangeDetectorRef, 
    private upcv3Service : Upcv3serviceService,
    private storage : Storage,
    private hotspot : Hotspot,
    private global : GlobalService,
    private alertCTRL : AlertController,
    private router :Router,
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
       this.tryToRead=false;

        // lecture statique :
        this.isLoading=true;

        this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "addbottleceint").then(res=>{   
        
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

 
 async checkConnectionWifi(){
  let wifi = await WifiWizard2.getConnectedSSID()
  this.current_ssid=wifi;
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







  
  changeContentStatusB1(reserve: string) {
    if(reserve == "B1"){
      this.global.onWriteEnable(this.correspondancesRegistres.co2Res1Status,parseInt(this.statusB1))
    }
    else{
      if(reserve == "B2"){
        this.global.onWriteEnable(this.correspondancesRegistres.co2Res2Status,parseInt(this.statusB2))
      }
    }    
  }

  ecrir(variable, value){
    if(variable.type=="int"){
    this.isLoading=true;
    this.global.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim,value).then(()=>{
  
      console.log("accueil ::  ecriture reussie")
     
      // lecture statique :
       this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "addbottleceint").then(res=>{   
   
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
        this.subscribeRefresh()

  
        console.log("accueil ::  ecriture reussie")
       
        // lecture statique :
         this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "addbottleceint").then(res=>{   
     
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
  
  
  

  
  changeRes(i) {
   
      this.ecrir(this.correspondancesRegistres.co2ResActive,i)
    
  }


  async onChangeContenant(reserve:string){
    /*
    if(reserve == "B1"){
      await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol,this.contenantB1/0.001974)
      this.subscribeRefresh()
    }
    else{
      if(reserve == "B2"){
        await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol,this.contenantB2/0.001974)
        this.subscribeRefresh()
      }
    }  
    */
  }


   changeContentStatus(reserve:string) {
    if(reserve == "B1"){
      this.ecrir(this.correspondancesRegistres.co2Res1Status,this.statusB1)      
    }
    else{
      if(reserve == "B2"){
        this.ecrir(this.correspondancesRegistres.co2Res2Status,this.statusB2)     
      }
    }
  }
  
  
  subscribeRefresh(){
    this.events.subscribe("loadParameters",($event)=>{

      this.statusB1 = ""+this.global.upcmodbus.reserves.co2Res1Status;
      this.statusB2 = ""+this.global.upcmodbus.reserves.co2Res2Status;
                    
      this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
      this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;

      this.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
      this.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
      this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
      this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;

    }) 
                            
      
   
                  
  }

  unsubscribeRefresh(){
    this.events.unsubscribe("loadParameters")
  }



  goToNextPage(){   
    clearInterval(this.global.interval); 
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }


}
