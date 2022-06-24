import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

import { AlertController, Events, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Upcv3serviceService } from './api/upcv3service.service';
import { Code } from './api/ApiResponse';
import { GlobalService } from './api/global.service';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from './model/upcv3/upcmodbus';
import { NetworkService } from './api/network.service';
import { Network } from '@ionic-native/network/ngx';
import {Storage} from "@ionic/storage";
import { resolve } from 'url';
import { UPCV3 } from './model/upcv3/upcv3';

declare var WifiWizard2: any;
declare var appPagesModeIntervention;
declare var appPagesModeMvtBouteilles;
declare var appPagesModeTest;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  stockRet = "";
  public appPages = [
    {
      title : "Accueil",
      url : "/home"
    },
    {
      title : "Intervention sur Ceinture",
      url : "/interventionceinture",
      icon : "hammer"
    },
    {
      title : "Paramètres Généraux UPC",
      url : "/namepiege"
    },
    {
      title : "Initialisation / Echange boitier UPC",
      url : "/initechangeboitierupc"
    },
    {
      title : "Modification du nombre de pièges",
      url : "/modifnbpieges"
    },
    {
      title : "Vérification débits pièges individuels",
      url : "/verifpiegesindividuels"
    },
    {
      title: 'Changement de bouteilles sur ceinture',
      url: '/addbottleceint',
      icon: 'barcode'
    }, {
      title : "Mouvements de bouteilles",
      url : "/optionbottle"
    },
    {
      title: 'Réglage des détendeurs',
      url: '/adjustment',
      icon: 'return-right'
    },
    {
      title : "Contrôle débits Mini/Maxi",
      url : "/controldiff",
      icon : "infinite",
    },
    {
      title: 'Programmation',
      icon:'sunny',
      url : "/synchro",
    },
    {
      title : "Etat de la Connexion",
      icon : "globe",
      url : "/connection"
    },
    {
      title : "Contrôle Diffusion",
      url : "/cdiff"
    },
    {
      title : "Mesure des pressions de sortie",
      url : "/check",
    },
    {
      title : "Paramètre de Communication",
      url : "/comunicationparam",
      icon : "wifi"
    },
    {
      title : "Paramètre d'Alarme",
      url : "/alarmparam",
      icon : "alarm"
    },
    {
      title : "Commentaires",
      url : "/commentaires"
    },
    {
      title : "Rapport de visite",
      url : "/rapportvisite"
    },
    {
      title : "Fin d'intervention",
      url : "/finintervention"
    }

    
  ];
  
  upc : UPCModbus;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private upcv3Service : Upcv3serviceService,
    private global : GlobalService,
    private hotspot: Hotspot,
    private ngZone : NgZone,
    public networkProvider: NetworkService,
    public events: Events,
    public network: Network,
    private cd : ChangeDetectorRef,
    public alertController: AlertController,
    public storage : Storage,
  ){
  
    localStorage.removeItem("isAddedB1")
    localStorage.removeItem("isAddedB2")

    this.platform.ready().then(res=>{
      this.global.pages = [];
      this.global.count = 0;  
      this.global.connexionRequise = "Aucune"
        /*let i = 1;
        setTimeout(this.run,500); */
        let i = 1;
        var d=new Date()

        this.global.logs.push(this.global.msToTime(d.getTime())+" ********* debut application *********")

        setInterval(()=>{
          this.global.logs.push(this.global.msToTime(d.getTime())+" ======= interval =====")
          this.global.logs.push(this.global.msToTime(d.getTime())+" connexion requise :"+this.global.connexionRequise)
          this.global.logs.push(this.global.msToTime(d.getTime())+"ssid   : "+this.global.ssid)
          this.global.logs.push(this.global.msToTime(d.getTime())+"current ssid  : "+this.global.currentssid)

          this.global.logs.push(this.global.msToTime(d.getTime())+"page   : "+this.global.currentPage)

          return new Promise<void>(async (resolve, reject)=>{   
            /*if(this.global.connexionRequise == "Aucune"){
              this.global.onConnect("").then(()=>{
                resolve()
              })
            }
            else{*/
              if(this.global.connexionRequise == "UPC"){
                var d=new Date()
                this.global.logs.push(this.global.msToTime(d.getTime())+" - connexion requise upc")
                this.global.logs.push(this.global.msToTime(d.getTime())+" - flags interval lc : "+this.global.lectureCycliqueEnCours+" - e : "+this.global.ecritureEnCours+" - oc : "+this.global.onConnectEnCours)
                if(this.global.lectureCycliqueEnCours != true ){
                  this.global.lectureCycliqueEnCours = true; 
                  this.global.startReadDate = new Date()
                  this.global.logs.push(this.global.msToTime(d.getTime())+" - flags onreadcyclique ls : "+this.global.lectureStatiqueEnCours+" - e : "+this.global.ecritureEnCours+" - oc : "+this.global.onConnectEnCours)
                  if(this.global.ecritureEnCours == true || this.global.lectureStatiqueEnCours == true || this.global.onConnectEnCours == true){                    
                    this.global.logs.push(this.global.msToTime(d.getTime())+" - wait")
                    this.global.lectureCycliqueEnCours = false;
                    resolve()                    
                  }
                  else{
                    this.global.startReadDate = new Date()
                    var d = new Date()
                    this.global.logs.push(this.global.msToTime(d)+" - Appel onReadCycliqueEnable")
                    /*
                    this.global.onReadCycliqueEnable().then(()=>{
                      this.global.lectureCycliqueEnCours = false;
                      resolve()
                    });
                    */
                  }                  
                }
                else{    
                  this.global.startReadDate = new Date();
                  var d = new Date();
                  this.global.logs.push(this.global.msToTime(d.getTime())+" - lecture cyclique en cours -> wait")           
                  resolve()
                }
              }
              else{
                this.global.startReadDate = new Date();
                var d = new Date()
                this.global.logs.push(this.global.msToTime(d.getTime())+" - connexion requise != UPC")               
                resolve()
              }                        
            //}
            
          })
        }, 500);      
        
      this.initializeApp();
      
      })
  }




  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Session Précédente',
      message: 'Voulez-vous restaurez la session précédente ?',
      buttons: [{
        text : 'NON',
        handler : async ()=>{localStorage.clear();this.stockRet = "";await this.storage.remove("motive");await this.storage.remove("intervenantsChoisis");await this.storage.remove("ceintureChoisieName");await this.storage.remove("ceintureChoisieObject");await this.storage.remove("nearUpcList")}
      },{
        text : "OUI"
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //Restaurer la session 
  //WifiWizard2.getConnectedSSID()
  initializeApp() {
    
    this.platform.ready().then(() => {
      
      /*this.networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        this.global.isBBAM = true;
        this.global.ssid = "BBAM"; 
        this.cd.detectChanges();   
    });

    // Online event
    this.events.subscribe('network:online', () => {
        this.global.isBBAM = false;
        this.global.ssid = "ADMIN";  
        this.cd.detectChanges();        
    });*/

      this.statusBar.styleDefault();
      this.splashScreen.hide();      
     

    });
    /*if(this.platform.is("android")){
      var isUPC = true;
      setInterval(()=>{

        this.hotspot.isWifiOn().then(res=>{
          if (res == true) {
            WifiWizard2.getConnectedSSID().then(res=>{
              
              if(this.network.type == this.network.Connection.WIFI){
                this.global.isBBAM = true;
                this.global.ssid = res;
                if(res.length <= 10) {
                  localStorage.setItem("currentssid",this.global.ssid);
                 
                  //alert(localStorage.getItem("ssid") );
                  if (localStorage.getItem("ssid") != res) {
                    //alert("Vous n'êtes pas connecté au bon UPC !");
                  }
                }
              
                
                
                
                
              } else if(this.network.type == this.network.Connection.CELL) {
                this.global.isBBAM = false;
                this.global.ssid = "ADMIN";
                
                localStorage.removeItem("isConnected");
                //this.global.onConnectWiFi();
              } else if(this.network.type == this.network.Connection.NONE){
                this.global.isBBAM = false;
                this.global.ssid = "";
                localStorage.removeItem("isConnected");
              }
          }).catch(err=>{
            if (this.network.type == this.network.Connection.NONE){
              this.global.isBBAM = false;
              this.global.ssid = "";
            } else {
              this.global.isBBAM = false;
              this.global.ssid = "ADMIN";
              
            }
            localStorage.removeItem("isConnected");
          })
          } else {
            this.global.isBBAM = false;
            this.global.ssid = "ADMIN";
          }
        })
        
        if (localStorage.getItem("upcname")){
          this.stockRet = localStorage.getItem("upcname");
        }
        if(localStorage.getItem("ssid")){
          
          this.global.isBBAM = true;
          this.global.ssid = localStorage.getItem("ssid");
        } else {
          this.global.isBBAM = false;
          this.global.ssid = "ADMIN";
        }
        if (localStorage.getItem("upcname")){
          this.stockRet = localStorage.getItem("upcname");
        }
      },1000)
    } else if(this.platform.is("ios")){
      setInterval(()=>{
        if (localStorage.getItem("upcname")){
          this.stockRet = localStorage.getItem("upcname");
        }
        WifiWizard2.getConnectedSSID().then(res=>{
          
          if(this.network.type == this.network.Connection.WIFI){
            this.global.isBBAM = true;
            this.global.ssid = res;
            /*this.storage.get("ssid").then(res=>{
              
              if(!res){
                
              }
            })
            if(res.length <= 10) {
              localStorage.setItem("currentssid",this.global.ssid);
            }
            
            
          } else if(this.network.type == this.network.Connection.CELL) {
            this.global.isBBAM = false;
            this.global.ssid = "ADMIN";
            localStorage.removeItem("isConnected");
            //this.global.onConnectWiFi();
          } else if(this.network.type == this.network.Connection.NONE){
            this.global.isBBAM = false;
            this.global.ssid = "";
            localStorage.removeItem("isConnected");
          }
        }).catch(err=>{
          if (this.network.type == this.network.Connection.NONE){
            this.global.isBBAM = false;
            this.global.ssid = "";
          } else {
            this.global.isBBAM = false;
            this.global.ssid = "ADMIN";
            
          }
          localStorage.removeItem("isConnected");
        })
      },1000)
      /*WifiWizard2.getConnectedSSID().then(res=>{
        if(res.includes("BBAM")){
          this.global.isBBAM = true;
          this.global.ssid = res;
        } else {
          this.global.isBBAM = false;
          this.global.ssid = "ADMIN";
        }
      })
      
    }
    
    /*setInterval(()=>{
      if(this.platform.is("android")) {
        this.hotspot.isConnectedToInternet().then(res=>{
          if(res && localStorage.getItem("BBAM") == "true") {
            
            this.hotspot.connectToWifi("BBAM","BioBeltService").then(()=>{
              localStorage.setItem("BBAM","true");
              this.global.ssid = "BBAM";
              this.global.isBBAM = true;
            })
          } else if (res == false) {
            localStorage.setItem("BBAM","false");
          }
        }).catch(err=>{
          
        })
      } else if (this.platform.is("ios")) {
        if(localStorage.getItem("BBAM") != "true"){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(res=>{
            localStorage.setItem("BBAM","true");
            this.global.ssid = "BBAM";
            this.global.isBBAM = true;
          })
        }
        
      }
      
    },5000)*/
    
  }
  onClearInterval(url) {
    clearInterval(this.global.interval);
    this.router.navigate([url]);
    this.events.unsubscribe("loadParameters")
    // version_id project_id 
  }
  goToConn() {
    this.router.navigate(['testmode']);
  }
  
  /*onClick(url) {
    
    //this.navCtrl.navigateForward("listecommande/encours",{replaceUrl : true});
    this.router.navigate([url]);
  }*/


}

