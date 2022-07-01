import { Component, NgZone, OnInit,ChangeDetectorRef } from '@angular/core';
import { Events, Platform } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Storage } from '@ionic/storage';




declare var WifiWizard2: any;
@Component({
  selector: 'app-alarmparam',
  templateUrl: './alarmparam.page.html',
  styleUrls: ['./alarmparam.page.scss'],
})
export class AlarmparamPage  {
  do;
  check=false;
  current_ssid="NO WIFI"
  stored_ssid="NO WIFI";
  password_ssid="";
  connection_modbus=false;
  isLoading=false;
  tryToRead=false;

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
                private storage : Storage, 

              private events : Events) {
                this.global.checkMode()
               }





               ionViewWillEnter(){

                this.tryToRead=true;
                console.log("=========================================================================") 
                console.log("========================== page  ALArm :===============================") 
                console.log("=========================================================================") 

      
                this.global.connexionRequise = "UPC"
      
                console.log(" - Connexion requise :"+ this.global.connexionRequise)
                console.log(" - Connexion  actuel  (avant on read statique) :"+ this.global.statutConnexion)
      
                 this.ConnecterUPC();
      
                 this.Read()
      
                
                this.correspondancesRegistres = new CorrespondancesRegistres()
      
                               
               
        }

  
        ecrir(variable, value){

          console.log(" 1-apres ecriture this alarme  basse global  avant e criture:"+this.global.upcmodbus.alarm.alrResLowEn)

          if(variable.type=="int"){
          this.isLoading=true;
          this.global.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim,value).then(()=>{
      
            console.log("accueil ::  ecriture reussie")
           


            // lecture statique :
          this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "alarmparam").then(res=>{   
         
          if(res == true){
            this.isLoading=false;
            console.log("accueil:  lecture reussi ")
            this.subscribeRefresh()
            this.events.publish("loadParameters")
            console.log(" 2 -apres ecriture this alarme  basse global :"+this.global.upcmodbus.alarm.alrResLowEn)
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
          
          
          else if(variable.type == "float"){

            console.log(":::::::::::::::::ecrir un flottant :::::::::::::")
              this.isLoading=true;

              this.global.upcmodbus.client.setFloatInHoldingRegister(variable.adr, value).then(()=>{
                        // lecture statique :
             this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "alarmparam").then(res=>{   
         
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
            }).catch(()=>{
              alert("écriture impossible")
              this.isLoading=false;
            })
          }
          
          
          else{
            this.isLoading=true;
            this.global.upcmodbus.client.setStringArrayInHoldingResgisters(variable.adr,value).then(()=>{
        
              console.log("accueil ::  ecriture reussie")
             
              // lecture statique :
               this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "alarmparam").then(res=>{   
           
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
     console.log("(cycel alar basse)"+this.alresbasse)
    
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

        this.global.upcmodbus.onReadStatique(this.global.upcname, this.global.mode, "alarmparam").then(res=>{   
        
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
                console.log("=====changement Alarm ResBasse ===")
                var alrm = this.alresbasse == true ? 0:1;
                console.log("write :"+ alrm)
                console.log("============ ===")

                this.ecrir(this.correspondancesRegistres.alrResLowEn,alrm)
                
              }
              changeSeuilResBasse(){
                
                this.ecrir(this.correspondancesRegistres.alrResLowLevel,this.seuilresbasse)
              }
              changeAlrmResVide() {
                var alrm = !(this.alresvide == true ? 1:0);
                this.ecrir(this.correspondancesRegistres.alrResEmptyEn,alrm)
              }
              changeSeuilFluxVide() {
                this.ecrir(this.correspondancesRegistres.alrResEmptyFlow,this.seuilfluxvide)
              }
              changePeriodVide() {              
                this.ecrir(this.correspondancesRegistres.alrResEmptyTest,this.periodtestvide)
              }
              changeAlrmPresentree() {
                var alrm = !(this.alpresentre == true ?1:0);
                this.ecrir(this.correspondancesRegistres.alrPressInpEn,alrm)
              }
              changeSeuilPresentree() {
                this.ecrir(this.correspondancesRegistres.alrPressInpTol,this.seuilpresentre)
              }
              changeAlrmResSortie() {
                var alrm = !(this.alpresortie == true ?1 : 0);
                this.ecrir(this.correspondancesRegistres.alrPressOutEn,alrm)
              }             
              changeSeuilPresSortie() {
                this.ecrir(this.correspondancesRegistres.alrPressOutTol,this.seuilpresortie)
              }
              changeAlrmDebCo2() {
                var alrm = !(this.aldebco2 == true ? 1:0);
                this.ecrir(this.correspondancesRegistres.alrFlowAvgEn,alrm)
              }
              changeSeuilDebCo2() {
                this.ecrir(this.correspondancesRegistres.alrFlowSetTol,this.seuildebco2)
              }
              changeAlimRet() {
                var alrm = !(this.alimret == true ? 1:0);
                this.ecrir(this.correspondancesRegistres.alrPowBackEn,alrm)
              }
              changeAlimCoup() {
                var alrm = !(this.alimcoup == true ? 1:0);
                this.ecrir(this.correspondancesRegistres.alrPowDownEn,alrm)
              }


              ionViewWillLeave(){


                console.log("quitter la page  :")  
                clearInterval(this.do)
            
              }

              

            

}