import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import {Upcv3serviceService} from '../api/upcv3service.service';
import{ApiResponse, Code} from '../api/ApiResponse'
import { UPCV3 } from '../model/upcv3/upcv3';
import {User} from '../model/user';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import {GlobalService} from '../api/global.service';
import { Site } from '../model/site';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { AlertController, LoadingController, Platform, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  upcv3: UPCV3[];
  
  token:string;
  value:string;
  operators:any;
  op:any;
  upc : UPCModbus;

  globals = [];

  operationTypeOptions=["Mouvement de bouteilles dans l'entrepôt","Intervention sur une ceinture"];
  operationType = "Mouvement de bouteilles dans l'entrepôt";
  json: any;

  constructor(private ucp3service:Upcv3serviceService,
              private storage:Storage,
              private router : Router,
              private global:GlobalService,
              private platform : Platform,
              private ngZone : NgZone,
              private cd : ChangeDetectorRef,
              public loadingCtrl: LoadingController,
              private popoverController: PopoverController,
              private alertController : AlertController) {
         
    
  }
  async ionViewWillEnter(){
    this.global.connexionRequise = "Aucune"
    
    
    if(await this.storage.get("reconnect")){
      this.storage.get("isInterventionNotSaved").then(res=>{
        if(res == true){
          async () => {
            const loading = await this.loadingCtrl.create({
            message: "Sauvegarde de l'intervention en cours..."
          });
          loading.present();
          var arr = await Promise.all([  
            this.getJson(),      
            this.getToken()  
          ]) 
          
            this.json = JSON.parse(arr[0])
            this.token = arr[1]

            this.createIntervention()           
                  
        }
         
          this.interventionNotSavedAlert()
        }
      })
      await this.storage.get("isInterventionEnCours").then(res=>{
        if(res == true){
          this.interventionEnCoursAlert()
          this.storage.set("reconnect", false)
        }
        else{          
          this.storage.set("reconnect", false)
        }
      })
      
    }


  } 

  createIntervention(){
    this.ucp3service.createIntervention(this.json,this.token).subscribe(res=>{
      alert(JSON.stringify(res))
    }, err => {
      this.interventionNotSavedAlert()
    })
  }
 
  async getJson(){
    var res = await this.storage.get("json");
    return res;
  }

  async getToken(){
    var res = await this.storage.get("token");
    return res;
  }

  interventionEnCoursAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
    this.alertController.create({
    header : "Attention",
    subHeader : "Intervention en cours",
    message : "Une intervention est en cours, souhaitez-vous restaurer les paramètres ?",
    buttons : [
      {
        text: "Non", handler: () => {                      
          this.global.resetParameters().then(()=>{
            resolve();
          })  
        }
      },
      {
        text: "Oui", handler: () => {                         
          resolve();          
        }
      }
    ]
  }).then(res=>res.present());
  })
}



  goToInterventionCeinture(){   
    this.global.mode="intervention";
    this.storage.set("isInterventionEnCours",true).then(()=>{
      this.router.navigate(['interventionceinture']); 
    })                
  }

  goToBottles(){  
    this.global.mode="mvtBouteilles";     
    this.router.navigate(['optionbottle']);         
  }
  /*getUpcStateConnexion() {
    this.platform.ready().then(async res=>{
      this.upc = new UPCModbus(state => {
        this.ngZone.run(() => {
          // Force refresh UI
          
            
            //this.readDiffusionParameters();
          
        });
      });

      await this.upc.client.connect();

      setTimeout(()=>{
        this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
          this.global.ssid = res;
          this.global.isBBAM = true;
          this.cd.detectChanges();
        })
      },2000)
    })
  }*/

  testMode($event){
    /*let popover = await this.popoverController.create({
      component: PopoverComponent,          
    });
    return await popover.present();*/
    this.global.mode="modeTest"
    this.router.navigate(["namepiege"])
    
  }

  interventionNotSavedAlert(){
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Intervention en cours",
      message : "L'intervention n'a pas pu être enregistrée, souhaitez-vous réessayer (vérifiez votre connexion internet) ?",
      buttons : [
        {
          text: "Non", 
          role: 'cancel',
          handler: () => {                    
            this.global.resetParameters().then(()=>{
              resolve();
            })            
          }
        },
        {
          text: "Oui", handler: () => {                         
            resolve();          
          }
        }
      ]
    }).then(res=>res.present());
    })
  }
  



}
