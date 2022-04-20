import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { GlobalService } from '../api/global.service';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { User } from '../model/user';

declare var WifiWizard2: any;

@Component({
  selector: 'app-finintervention',
  templateUrl: './finintervention.page.html',
  styleUrls: ['./finintervention.page.scss'],
})
export class FininterventionPage implements OnInit {
  sequence: any;
  dt= new Date(Date.now());
  dateString;
  endDateString: string;
  motive = "";
  intervenants = "";
  connectedOperator = "";
  ceintureId: any;
  ceintureError = false;
  username = "";
  password = "";
  token;
  errorFunction: any;
  json: { ceinture: number; datetime: any; operateur: string; intervenant: string; objet: string; };

  constructor(
    private storage : Storage,
    private global : GlobalService,
    private cd : ChangeDetectorRef,
    private upcv3service : Upcv3serviceService,
    private alertController : AlertController,
    
  ) { 
    this.global.checkMode()
  }

  ngOnInit() {  
   
   
  }

  ionViewWillEnter(){

    this.global.connexionRequise = "Aucune";

      this.global.checkNextPage()
    
      $("#list").empty();
      this.storage.get("sequence").then(res=>{
        this.sequence = res      
        if(this.sequence != undefined){
          if(this.sequence != ""){
            this.sequence.forEach(element=>{          
              if(element[1] == true){
                $("#list").append(
                  "<ion-row><ion-col size='11'>"+element[0]+"</ion-col><ion-col size='1'><ion-icon name='checkmark-circle' style='color:green'></ion-icon></ion-col></ion-row>"
                );     
              }
              else{ 
                $("#list").append(
                  "<ion-row><ion-col size='11'>"+element[0]+"</ion-col><ion-col size='1'><ion-icon name='close-circle-outline' style='color:crimson;'></ion-icon></ion-col></ion-row>"
                );        
              }         
            })           
          }
        }    
      })
   
  }

  async finIntervention(){
    this.global.connexionRequise = "Serveur"
    
    /*Formattage de la date pour la création de l'intervention*/
   
    var dtstring = this.dt.getFullYear()
    + '-' + this.pad2(this.dt.getMonth()+1)
    + '-' + this.pad2(this.dt.getDate())
    + 'T' + this.pad2(this.dt.getHours())
    + ':' + this.pad2(this.dt.getMinutes())
    + ':' + this.pad2(this.dt.getSeconds());
    this.endDateString = dtstring;

    var arr = await Promise.all([  
      this.getConnectedOperator(),     
      this.getMotive(),       
      this.getIntervenants(),
      this.getDate(),    
      this.getCeintureChoisieObject(),
      this.getToken()  
    ]) 

    //Opérateur connecté
    if(arr[0] != null && arr[0] != undefined){
      this.connectedOperator = arr[0]
    }
    else{
      this.connectedOperator = "";
    }

    //Objet de l'intervention
    if(arr[1] != null && arr[1] != undefined){   
      if(arr[1] != ""){   
        var motivesString = arr[1].toString()      
        var motivesTmp = motivesString.split(",")   
        this.motive = motivesTmp.join("-")        
      }
    }
    else{
      this.motive = "";
    }

    //Intervenants
    if(arr[2] != null && arr[2] != undefined){  
      if(arr[2] != ""){ 
        var intervenantsString = arr[2].toString()    
        var intervenantsTmp = intervenantsString.split(",")
        this.intervenants = intervenantsTmp.join("-")        
      }
    }
    else{
      this.intervenants = ""
    }   
    
    this.dateString = arr[3]
    
    //Ceinture    
    if(arr[4] == null || arr[4] == undefined || arr[4]==""){   
      this.ceintureError = true;
      alert("Il y a eu un problème avec la sélection de la ceinture. Resélectionnez la ceinture via la page intervention ceinture")     
    }
    else{    
      var ceinture = JSON.parse(arr[4])  
      this.ceintureId = ceinture.id      
    }

    //token
    this.token = arr[5]; 
    
    var dtstring = this.dt.getFullYear()
    + '-' + this.pad2(this.dt.getMonth()+1)
    + '-' + this.pad2(this.dt.getDate())
    + 'T' + this.pad2(this.dt.getHours())
    + ':' + this.pad2(this.dt.getMinutes())
    + ':' + this.pad2(this.dt.getSeconds());
    this.dateString = dtstring;

    
    this.storage.get("user").then(res =>{     
      this.username = res;
      this.storage.get("pass").then(res=>{
        this.password = res;
        var user = new User();
        user.username = this.username;
        user.password = this.password;     
        this.upcv3service.login(user).subscribe(async res=>{ 
          this.token = res.result;
          this.storage.set("token",res.result).then((res)=>{     
              this.createIntervention()           
          })     
        }, err => {       
          this.errorFunction = "login"         
          if(err.statusText == "Unknown Error" && err.status == 0) {  
            this.internetConnectionAlert()           
          }
          else{
            alert(JSON.stringify(err))
          }
        })     
      })    
    })
     
    
   
  }


  createIntervention(){
    if(this.ceintureError == false){
      var json = {"ceinture": this.ceintureId , "datetime" : this.dateString, "operateur":this.connectedOperator, "intervenant": this.intervenants, "objet":this.motive}
      this.json = json;
      this.storage.set("json",JSON.stringify(this.json)).then(()=>{
        alert("json:"+JSON.stringify(json))
        //this.upcv3service.createIntervention(json, this.token).subscribe(res => {
          /*this.storage.set("motiveItems","");
          this.storage.set("motiveString","");
          this.storage.set("intervenantsItems","");  
          this.storage.set("intervenantsString","");   
          this.storage.set("ceintureChoisieObject", "");
          this.storage.set("ssid", "")
          this.storage.set("password", "")
          this.storage.set("currentssid","")
          this.storage.set("currentpassword","")
          this.storage.set("upcname","")      
          this.storage.set("stockBottleTypes","");
          this.storage.set("ceintureChoisieBottles", "");
          this.storage.set("commentaires", "");         
          this.storage.set("dataAlreadyLoaded","false");
          this.storage.set("json","")
          this.storage.set("isInterventionEnCours", false); 
          this.storage.set("isInterventionNotSaved",false);*/ 
          var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
          var jsonB2 = JSON.parse(localStorage.getItem("bottleB2")); 
          jsonB1.upcNameId = localStorage.getItem("upcname");
          jsonB2.upcNameId = localStorage.getItem("upcname");
          jsonB1.date = this.dateString;
          jsonB2.date = this.dateString;
          jsonB1.endate = this.endDateString;
          jsonB2.endate = this.endDateString;
          jsonB1.objet =  this.motive;
          jsonB2.objet = this.motive;
          jsonB1.intervenant = this.intervenants;
          jsonB2.intervenant = this.intervenants;
          jsonB1.connected = this.connectedOperator;
          jsonB2.connected = this.connectedOperator;
          localStorage.setItem("bottleB1",JSON.stringify(jsonB1));
          localStorage.setItem("bottleB2",JSON.stringify(jsonB2));
          this.global.onSynchroB1B2(this.token)
      },err =>{
        this.errorFunction = "createIntervention"
        if(err.status == 403) {            
          this.login()          
        }
        else{
          if(err.statusText == "Unknown Error" && err.status == 0) {            
            alert(JSON.stringify(err))
           this.internetConnectionAlert()
          }
          else{
            alert("L'intervention n'a pas pu être enregistrée : "+JSON.stringify(err))
          }
        }              
       // })     
      })
    }    
  }
  
  /*fonction formattage date*/

  pad2(number) { 
    return (number < 10 ? '0' : '') + number
  } 

  async getConnectedOperator(){
    var res = await this.storage.get("connectedOperator")
    return res
  }

  async getMotive(){
    var res = await this.storage.get("motiveString")
    return res
  }

  async getIntervenants(){
    var res = await this.storage.get("intervenantsString")
    return res
  }
  
  async getCeintureChoisieObject(){
    var res = await this.storage.get("ceintureChoisieObject")
    return res
  }  
  

  async getStockBottleTypes(){
    var res =  await this.storage.get("stockBottleTypes")
    return res
  }

  async getCeintureChoisieBottles(){
    var res = await this.storage.get("ceintureChoisieBottles")
    return res
  }

  async getCeintureChoisieCommentaires(){
    var res = await this.storage.get("ceintureChoisieCommentaires")
    return res
  }

  async getDate(){
    var res = this.storage.get("debutIntervention")
    return res
  }

  async getToken(){
    var res = await this.storage.get("token")
    return res
  }

  login(){
    this.storage.get("user").then(res =>{     
      this.username = res;
      this.storage.get("pass").then(res=>{
        this.password = res;
        var user = new User();
        user.username = this.username;
        user.password = this.password;     
        this.upcv3service.login(user).subscribe(async res=>{ 
          this.token = res.result;
          this.storage.set("token",res.result).then((res)=>{           
            switch(this.errorFunction) {
              case "createIntervention":
                this.createIntervention();
                break;
            }
          })  
         
        }, err => {       
          this.errorFunction = "login"         
          if(err.statusText == "Unknown Error" && err.status == 0) {  
            this.internetConnectionAlert()           
          }
          else{
            alert(JSON.stringify(err))
          }
        })     
      })    
    })
  }

  internetConnectionAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Connexion à internet requise",
      message : "Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.",
      buttons : [
        {
          text: "Poursuivre sans connexion", 
          role: 'cancel',
          handler: () => {
            
              this.storage.set("isInterventionNotSaved",true).then(()=>{              
                alert("L'intervention n'a pas pu être enregistrée. Un autre essai sera effectué à la prochaine ouverture de l'application.")
              })
          
            resolve();
          }
        },
        {
          text: "OK", handler: () => { 
            switch(this.errorFunction){              
              case "createIntervention":
                this.createIntervention()
                break;
              case "login": 
                this.login()
                break;          
            }                    
            resolve();      
          }
        }
      ]
    }).then(res=>res.present());
  })
  }

  confirmAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Connexion à internet requise",
      message : "Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.",
      buttons : [
        {
          text: "Poursuivre sans connexion", 
          role: 'cancel',
          handler: () => {                                                          
            resolve();
          }
        },
        {
          text: "OK", handler: () => { 
            switch(this.errorFunction){              
              case "createIntervention":
                this.createIntervention()
                break;
              case "login": 
                this.login()
                break;          
            }                    
            resolve();      
          }
        }
      ]
    }).then(res=>res.present());
  })
  }

  

}
