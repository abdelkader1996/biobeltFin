import { Component, OnInit, NgZone, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Storage} from '@ionic/storage';
import {InterventionV3} from '../model/interventionv3';
import { LocalDateTime } from '../model/upcv3/LocalDateTime';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { resolve } from 'url';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { first } from 'rxjs/operators'
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';
import { BottleTypesModalPage } from '../bottle-types-modal/bottle-types-modal.page';
import { element } from 'protractor';


declare var WifiWizard2: any;
declare let Ping : any;

@Component({
  selector: 'app-addbottleceint',
  templateUrl: './addbottleceint.page.html',
  styleUrls: ['./addbottleceint.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddbottleceintPage  {
  stockRet = "En cours...";
  upc : UPCModbus;
  addressage = 41124;
  addressage2 = 41169;
  B1= []; //codebars bouteilles en B1 sans le code upc
  B1Ad: string[] = []; //codebars bouteilles en B1 avec code upc
  stringsB1 = []; //B1 string affichée : fournisseur + codebar + désignation 
  B1Desig = [];  
  isAddedB1 = [];
  B2 = []; //codebars bouteilles en B2 sans le code upc
  B2Ad: string[] = []; //codebars bouteilles en B2 avec code upc
  stringsB2 = []; //B2 string affichée : fournisseur + codebar + désignation 
  B2Desig = []; 
  isAddedB2 = [];
  i = 0;
  y = 0;
  addedBottlesB1 : any = {barcodes : [], contenus : []};
  addedBottlesB2 : any = {barcodes : [], contenus : []};
  removedBottle : any = {barcodes : []};
  removedBottleStringB1 = [];
  removedBottleStringB2 = [];
  removedBottleUnknown = [];
  token : string;
  isBBAM = false;
  contenuB1 = 0;
  contenuB2 = 0;
  highlightB1 = false;
  highlightB2 = false;
  statusB1;
  statusB2;
  ssid = "";
  interval;
  redBackground = false;
  display = false;
  isLoaded = false;
  contenantB1 = 0;
  contenantB2 = 0;
  bottleIncB1 = [];
  bottleIncB2 = [];
  correspondancesRegistres: CorrespondancesRegistres;
  stockBottleTypes = [];
  stockBottleTypesModeTest = [];
  bottleTypesInputs = [];
  stockBottleTypesModeTestTmp = [];
  stockBottleTypesTmp = [];
  bottlesInTransit = [];
  ceintureChoisieBottles = [];
  barcode : string;
  contenuAjouteEnB1 = 0;
  contenuAjouteEnB2 = 0;
  addedBottlesStringsB1 = [];
  addedBottlesStringsB2 = [];
  transitBottlesBarcodes = [];
  ceintureChoisieBottlesBarcodes =[];
  

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
    
  ngOnInit(){     

    this.global.connexionRequise = "UPC"
   
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 
    
    
    this.storage.get("stockBottleTypes").then(res => { this.stockBottleTypes = res; })
    this.storage.get("stockBottleTypesModeTest").then(res => { this.stockBottleTypesModeTest = res })
    this.storage.get("bottlesInTransit").then(res => { this.bottlesInTransit = res; alert("Boutillees Transit :"+JSON.stringify(res))})  
    this.storage.get("ceintureChoisieBottles").then(res => { this.ceintureChoisieBottles = res;})
    this.storage.get("addedBottlesB1").then(res => {     
      if(res == undefined || res == null){
        this.addedBottlesB1 = {};       
      }
      else{
        this.addedBottlesB1 = res;        
      }
    })    
    this.storage.get("addedBottlesStringsB1").then(res => {  
      if(res == undefined || res == null){
        this.addedBottlesStringsB1 = [];      
      }
      else{
        this.addedBottlesStringsB1 = res;      
      }
    })
    this.storage.get("addedBottlesB2").then(res => {
      if(res == undefined || res == null){
        this.addedBottlesB2 = {};
      }
      else{
        this.addedBottlesB2 = res;
      }
    })
    this.storage.get("addedBottlesStringsB2").then(res => {
      if(res == undefined || res == null){
        this.addedBottlesStringsB2 = [];
      }
      else{
        this.addedBottlesStringsB2 = res;
      }
    }) 

    /*
    this.addedBottlesB1.date = new Date().toISOString().substr(0,16);
    this.addedBottlesB1.objet ="Remplissage";
    this.addedBottlesB2.date = new Date().toISOString().substr(0,16);
    this.addedBottlesB2.objet ="Remplissage";
    this.removedBottle.date = new Date().toISOString().substr(0,16);*/
    
    this.platform.ready().then(()=>{             
      this.correspondancesRegistres = new CorrespondancesRegistres()
      this.global.onReadStatiqueEnable().then(()=>{
        this.subscribeRefresh()
        this.loadBottles()
      })          
    })
  }
  calcContenant(reserve:string) {
    if(reserve == "B1"){
      this.global.contenantB1 = 0;
      for(var i = 0;i<this.global.contenusB1.length;i++){
        this.global.contenantB1 += parseFloat(this.global.contenusB1[i]);
      }
      this.global.upcmodbus.reserves.co2Res1StartVol = this.global.contenantB1
    }
    else{
      if(reserve == "B2"){
        this.global.contenantB2 = 0;
        for(var i = 0;i<this.global.contenusB2.length;i++){
          this.global.contenantB2 += parseFloat(this.global.contenusB2[i]);
        }
        this.global.upcmodbus.reserves.co2Res2StartVol = this.global.contenantB2
      }
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



  loadBottles() {
    
    //alert("load bottles")
    this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
    this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;
    this.B1= []; //codebars sans le code upc
    this.B1Ad = []; //bouteilles en ligne
    this.stringsB1 = []; //fournisseur 
    this.B1Desig = []; //capacité    
    this.isAddedB1 = [];
    this.B2 = [];
    this.B2Ad = [];
    this.stringsB2 = [];
    this.B2Desig = [];    
    this.isAddedB2 = [];
    this.bottleIncB1 = []; //bouteilles inconnues ajoutées depuis l'admin sans barcode
    this.bottleIncB2 = [];
   
    if(localStorage.getItem("removedStringB1")){
      this.removedBottleStringB1 = JSON.parse(localStorage.getItem("removedStringB1"));
     
    }
    if (localStorage.getItem("removedStringB2")){
      this.removedBottleStringB2 = JSON.parse(localStorage.getItem("removedStringB2"));
    }
    if(localStorage.getItem("removedBottleUnknown")){
      this.removedBottleUnknown = JSON.parse(localStorage.getItem("removedBottleUnknown"));
    }
   
       
    //liste bouteilles en B1
    for(var i = 0;i< this.global.upcmodbus.reserves.bottlesB1.length;i++){      
      if(this.global.upcmodbus.reserves.bottlesB1[i] != undefined){
        var text = this.global.upcmodbus.reserves.bottlesB1[i] 
        if(text.substr(0,text.length-1).includes("Inco")){ 
          this.global.bottleInconnuesB1.push(i); //bouteilles inconnues en B1       
        }       
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if(text[0].match(letterNumber)){ //c'est à priori un codebar          
          text = text.replace(/[^\w\s]/gi, '');
          var indexBottleType;          
          this.stockBottleTypes.forEach((element, index)=>{
            if(text.charAt(text.length-1) == element.codeUpc.toString()){ //c'est bien un codebar              
              indexBottleType = index;                      
              this.global.contenusB1.push(this.stockBottleTypes[indexBottleType].designation)
              this.global.stringsB1.push(this.stockBottleTypes[indexBottleType].brand+" ("+text+") "+this.stockBottleTypes[indexBottleType].contenue)
              this.global.codebarsB1SansCodeUpc.push(text.substr(0,text.length-1));
            
              //this.B1Ad.push(text)
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                barcode+='\0';
              }
              this.global.codebarsB1.push(barcode);       
              this.global.isAddedB1.push(false);
            }            
          })             
        }                
      }         
    }
    //alert(this.global.codebarsB1SansCodeUpc)
    
    
    if(this.addedBottlesStringsB1.length != 0){
     
      this.addedBottlesStringsB1.forEach(string => {
        this.global.stringsB1.push(string)
      })
    }
    if(this.addedBottlesB1.contenus != undefined){
     
      this.addedBottlesB1.contenus.forEach(contenu =>{
        this.global.contenusB1.push(contenu)
      })    
      this.addedBottlesB1.barcodes.forEach(barcode =>{
        this.global.codebarsB1.push(barcode)
      })
    }

    
    if(localStorage.getItem("isAddedB1")){
      this.global.isAddedB1 = JSON.parse(localStorage.getItem("isAddedB1"));
    }
    

    //liste bouteilles en B2    
    for(var j = 0;j<this.global.upcmodbus.reserves.bottlesB2.length;j++){      
      if(this.global.upcmodbus.reserves.bottlesB2[j] != undefined){
      
        var text2 = this.global.upcmodbus.reserves.bottlesB2[j]
        if(text2.substr(0,text.length-1).includes("Inco")){
          this.global.bottleInconnuesB2.push(j);
          
        }
        //if(text != "" && text !="\0\0\0\0\0\0\0\0\0\0"){
        var letterNumber = /^[0-9a-zA-Z]+$/;
       
        if(text2[0].match(letterNumber)){//c'est à priori un codebar
          text2 = text2.replace(/[^\w\s]/gi, '');
          var indexBottleType2;

          this.stockBottleTypes.forEach((element, index)=>{
            if(text2.charAt(text2.length-1) == element.codeUpc.toString()){ //c'est bien un codebar
              indexBottleType2 = index;
              
              this.global.contenusB2.push(this.stockBottleTypes[indexBottleType2].designation)
              this.global.stringsB2.push(this.stockBottleTypes[indexBottleType2].brand+" ("+text2+") "+this.stockBottleTypes[indexBottleType2].contenue)
              this.global.codebarsB2SansCodeUpc.push(text2.substr(0,text2.length-1));
              //this.global.codebarsB2.push(text)
              var count2 = 10-text2.length;
              var barcode2 = text2;
              for(var m=0;m<count2;m++){
                barcode2+='\0';
              }
              this.global.codebarsB2.push(barcode2);          

              this.global.isAddedB2.push(false);
            }
          }) 
        }        
      }       
    }
    if(this.addedBottlesStringsB2.length != 0){
      this.addedBottlesStringsB2.forEach(string => {
        this.global.stringsB2.push(string)
      })
    }      
    if(this.addedBottlesB2.contenus != undefined){
      this.addedBottlesB2.contenus.forEach(contenu =>{
        this.global.contenusB2.push(contenu)
      })
      this.addedBottlesB2.barcodes.forEach(barcode =>{
        this.global.codebarsB2.push(barcode)
      })
    }
    if(localStorage.getItem("isAddedB2")){
      this.global.isAddedB2 = JSON.parse(localStorage.getItem("isAddedB2"));
    }
    this.isLoaded = true;

    alert("contenus B1 : "+this.global.contenusB1)
    alert("contenus B2 : "+this.global.contenusB2)
  }
  
 

  async onRemoveWithIndex(i,text,reserve:string) {


    
      this.removedBottle.barcodes.push(text);
      localStorage.setItem("removed",JSON.stringify(this.removedBottle));

      if(reserve == "B1"){
        this.global.upcmodbus.reserves.co2Res1StartVol -= parseFloat(this.global.contenusB1[i]);
      
      
        if(this.global.upcmodbus.reserves.co2Res1StartVol < 0){
          if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
            this.global.upcmodbus.reserves.co2Res1StartVol = 0;
          }
        }
        this.removedBottleStringB1.push(this.global.stringsB1[i].replace("Inconnue",text));
        localStorage.setItem("removedStringB1",JSON.stringify(this.removedBottleStringB1));
  
                  
                  
        this.global.codebarsB1.splice(i,1);
        this.global.codebarsB1SansCodeUpc.splice(i,1);
        this.global.contenusB1.splice(i,1);
        this.global.stringsB1.splice(i,1);
        
        if(this.global.isAddedB1[i]){        
          this.global.upcmodbus.reserves.co2Res1ActVol -= parseFloat(this.global.contenusB1[i]);
          
        }
        this.global.isAddedB1.splice(i,1);
        this.global.upcmodbus.reserves.bottlesB1.splice(i,1);
        this.storage.set("isAddedB1",JSON.stringify(this.isAddedB1));
         
  
      }
      else{
        if(reserve == "B2"){
          this.global.upcmodbus.reserves.co2Res2StartVol -= parseFloat(this.global.contenusB2[i]);
      
      
          if(this.global.upcmodbus.reserves.co2Res2StartVol < 0){
            if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
              this.global.upcmodbus.reserves.co2Res2StartVol = 0;
            }
          }
          this.removedBottleStringB2.push(this.global.stringsB2[i].replace("Inconnue",text));
          this.storage.set("removedStringB2",JSON.stringify(this.removedBottleStringB2));
    
                    
                    
          this.global.codebarsB2.splice(i,1);
          this.global.codebarsB2SansCodeUpc.splice(i,1);
          this.global.contenusB2.splice(i,1);
          this.global.stringsB2.splice(i,1);
          
          if(this.global.isAddedB2[i]){        
            this.global.upcmodbus.reserves.co2Res2ActVol -= parseFloat(this.global.contenusB2[i]);
            
          }
          this.global.isAddedB2.splice(i,1);
          this.global.upcmodbus.reserves.bottlesB2.splice(i,1);
          this.storage.set("isAddedB2",JSON.stringify(this.isAddedB2));

        }
      }
      
      
      
              
                  
                  
         
         
        
   
  }
 
  onRemove() {    
    this.scan.scan().then(async res=>{
       
        if(res.cancelled != true){
          var addedbottle;
          var scanned = false;
          var indexB1 = -1;
          var indexB2 = -1;
          var indexB1front = -1;
          var indexB2front = -1;
          var indexB1Ad = -1;
          var indexB2Ad = -1;
          var reserve;
         
          if(this.global.codebarsB1SansCodeUpc.includes(res.text)){
            scanned = true;
            reserve = "B1"
            indexB1 = this.global.codebarsB1SansCodeUpc.indexOf(res.text)
          }
          if(this.global.codebarsB2SansCodeUpc.includes(res.text)){
            scanned = true;
            reserve = "B2"
            indexB2 = this.global.codebarsB2SansCodeUpc.indexOf(res.text)
          }           
            
         
          if(scanned){

            this.removedBottle.barcodes.push(res.text);
            localStorage.setItem("removed",JSON.stringify(this.removedBottle));

           
            if(reserve == "B1"){ //la bouteille à enlever est en B1
              if(this.isAddedB1[indexB1] == true){
                this.global.upcmodbus.reserves.co2Res1ActVol -= parseFloat(this.global.contenusB1[indexB1]);
                this.global.contenuEnleveEnB1 += this.global.contenusB1[indexB1] 
              }
              this.global.upcmodbus.reserves.co2Res1StartVol -= parseFloat(this.global.contenusB1[indexB1]); 
              
              
              if(this.global.upcmodbus.reserves.co2Res1ActVol < 0){
                if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                 this.global.upcmodbus.reserves.co2Res1ActVol = 0;
                }
              }
                
              this.removedBottleStringB1.push(this.stringsB1[indexB1]);
              this.storage.set("removedStringB1",JSON.stringify(this.removedBottleStringB1));              
                
              
              if(this.global.isAddedB1[indexB1] == true){
                this.global.isAddedB1.splice(indexB1,1);       
              }
                
              this.global.codebarsB1.splice(indexB1,1); 
              this.global.codebarsB1SansCodeUpc.splice(indexB1,1);              
              this.global.stringsB1.splice(indexB1,1);       
              this.global.contenusB1.splice(indexB1,1);                 
              this.global.upcmodbus.reserves.bottlesB1.splice(indexB1,1);
              this.storage.set("isAddedB1",JSON.stringify(this.isAddedB1));

              this.calcContenant("B1")
                  
            }
            else if(reserve == "B2"){ //la bouteille à enlever est en B2  
              
              if(this.isAddedB2[indexB2] == true){
                this.global.upcmodbus.reserves.co2Res2ActVol -= parseFloat(this.global.contenusB2[indexB2]);
                this.global.contenuEnleveEnB2 += this.global.contenusB2[indexB2]  
              }
              this.global.upcmodbus.reserves.co2Res2StartVol -= parseFloat(this.global.contenusB2[indexB2]);
             

              if(this.global.upcmodbus.reserves.co2Res2ActVol <0){
                if (window.confirm("Les bouteilles ont-elles toutes été enlevées ?")) {
                  this.global.upcmodbus.reserves.co2Res2ActVol = 0;
                }
              }
              
              this.removedBottleStringB2.push(this.global.stringsB2[indexB2]);
              this.storage.set("removedStringB2",JSON.stringify(this.removedBottleStringB2));
              
              if(this.global.isAddedB2[indexB2]){
                this.global.isAddedB2.splice(indexB2,1);     
              }

              this.global.codebarsB2.splice(indexB2,1);  
              this.global.codebarsB2SansCodeUpc.splice(indexB2,1);              
              this.global.stringsB2.splice(indexB2,1);               
              this.global.contenusB2.splice(indexB2,1);        
              this.global.upcmodbus.reserves.bottlesB2.splice(indexB2,1);               
              this.storage.set("isAddedB2",JSON.stringify(this.global.isAddedB2));

              this.calcContenant("B2")
                              
            }
            
          }
          else{ //le codebar de la bouteille à enlever ne fait pas partie des codebars enregistrés dans l'UPC
            var input = [];
            var alertInc;
            this.global.bottleInconnuesB1.forEach(item=>{ //la bouteille à enlever fait partie des bouteilles inconnues en B1
              input.push({
                label : this.global.stringsB1[item]+" en B1",
                type : 'radio', 
                name: this.global.contenusB1[item],
                handler : ()=>{
                  this.onRemoveWithIndex(item,res.text, "B1");
                  alertInc.dismiss()
                }
              });
            })
            this.global.bottleInconnuesB2.forEach(item=>{ //la bouteille à enlever fait partie des bouteilles inconnues en B2
              input.push({
                label : this.global.stringsB2[item]+" en B2",
                type : 'radio', 
                name: this.global.contenusB2[item],
                handler : ()=>{
                  this.onRemoveWithIndex(item,res.text,"B2");
                  alertInc.dismiss()
                }
              });
            })
            if(this.global.bottleInconnuesB1.length > 0 || this.global.bottleInconnuesB2.length > 0){
              alertInc = await this.alertCTRL.create({
                cssClass : "nothing",
                header : "Enlèvement Bouteille",
                message : "Il y a des bouteilles inconnues, veuillez assigner la bouteille scannée...",
                inputs : input
              })
              alertInc.present();
            }
            else {
              const alert = await this.alertCTRL.create({
                cssClass: 'my-custom-class',
                header: 'Enlèvement Bouteille',
                message: "La bouteille n'a pas été scannée par le passé, Êtes vous sur de vouloir l'enlever ?",
                buttons: [{text : "OUI", handler : async ()=>{
                  var reserve = "";
                  const alrt = await this.alertCTRL.create({
                    cssClass: 'my-custom-class',
                    header: 'Enlèvement Bouteille',
                    message : "La bouteille était-elle en B1 ou en B2 ?",
                    buttons : [{text : "B1", handler : ()=>{
                      reserve = "B1";
                      
                      alrtinput.present();
                      this.removedBottle.barcodes.push(res.text);
                      localStorage.setItem("removed",JSON.stringify(this.removedBottle));/*this.removedBottleUnknown.push(res.text+" en B1");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                    }},{
                      text : "B2", handler : ()=>{
                        reserve = "B2";
                        alrtinput.present();
                        this.removedBottle.barcodes.push(res.text);
                        localStorage.setItem("removed",JSON.stringify(this.removedBottle));/*this.removedBottleUnknown.push(res.text+" en B2");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                      }
                    } ]
                  })
                  alrt.present();              

                  this.bottleTypesInputs = [];
                  this.stockBottleTypes.forEach(element =>{            
                    this.bottleTypesInputs.push({
                      name : element.contenue, 
                      type:"radio",
                      label: element.brand + " "+element.contenue, 
                      value: element, 
                      handler:(data)=>{ 
                        if(reserve == "B1") { 
                          this.global.contenantB1 -= data.value.designation;
                          this.removedBottleStringB1.push(data.value.brand+" ("+res.text+") "+data.value.contenue);
                        }
                        else {
                          if(reserve == "B2") { 
                            this.global.contenantB2 -= data.value.designation
                            this.removedBottleStringB2.push(data.value.brand+" ("+res.text+") "+data.value.contenue);
                          }
                        }
                        if(this.global.contenantB2 < 0) this.contenantB2 = 0;
                        if(this.global.contenantB1 < 0) this.contenantB1 = 0;
                        alrtinput.dismiss();
                      }
                    })
                  })                
  
                  const alrtinput = await this.alertCTRL.create({
                    cssClass : "my-custom-class",
                    header: 'Type de Bouteille',
                    inputs : this.bottleTypesInputs
                  })
                  
                }},{text : "NON", handler : ()=>{}}]
              });
              alert.present();
            }
            
          }
        }
        
    }).catch(err=>{
      alert("Veuillez activer l'autorisation photo de l'app")
    })
  }

 
  
  onAddBottle(reserve:string){    
    if(this.global.mode == "modeTest"){
     
    }
    else{
      this.scan.scan().then(async res=>{          
        if(res.text != ""){       
          var isScanned = false;
          this.global.codebarsB1SansCodeUpc.forEach(item=>{
            if(item == res.text){
              isScanned = true;
            }
          })
          this.global.codebarsB2SansCodeUpc.forEach(item=>{
            if(item == res.text){
              isScanned = true;
            }
          })

          if(!isScanned) {   
            alert("!= scanned")      
            
            //création tableau des codebars des bouteilles en transit pour comparer avec celui scanné
            this.transitBottlesBarcodes = [];
            if(this.bottlesInTransit.length != 0){
              this.bottlesInTransit.forEach(element=>{            
                this.transitBottlesBarcodes.push(element.barcode)              
              })
            }
            alert("pre")
            this.ceintureChoisieBottlesBarcodes = [];
            if(this.ceintureChoisieBottles.length != 0){
              this.ceintureChoisieBottles.forEach(element =>{
                this.ceintureChoisieBottlesBarcodes.push(element.barcode)
              })
            }
            alert("post")

            if(this.transitBottlesBarcodes.includes(res.text) == false){ //le code scanné ne correspond à aucune des bouteilles en transit mémorisées:
              alert("code scanné ne correspond pas à une bouteille en transit")
              this.ceintureChoisieBottlesBarcodes = [];
              if(this.ceintureChoisieBottles.length != 0){
                this.ceintureChoisieBottles.forEach(element=>{
                  this.ceintureChoisieBottlesBarcodes.push(element.barcode)
                })
              }

              if(this.ceintureChoisieBottlesBarcodes.includes(res.text) == false){ //le code scanné ne correspond à aucune des bouteilles de l'entrepôt associé à la ceinture
                alert("code scanné ne correspond pas à une bouteille de l'entrepôt")      
                  this.bottleTypesInputs = [];
                  this.stockBottleTypes.forEach(element =>{            
                    this.bottleTypesInputs.push({
                      name : element.contenue, 
                      type:"radio",
                      label: element.brand + " "+element.contenue, 
                      value: element, 
                      handler:(data)=>{
                        this.writeUPC(res.text,data.value.designation,data.value.brand+" ("+res.text+") " + data.value.contenue,reserve,data.value.codeUpc)
                      }
                    })
                  })
                  const alrtBT = await this.alertCTRL.create({
                    header : "Type de bouteille",message : "",
                    inputs : this.bottleTypesInputs              
                  })
                  alrtBT.present();       
                  
                
              }
              else{ //le code scanné correspond à une bouteille de l'entrepôt associé à la ceinture
                alert("entrepot")
                var indexBottleToAdd = this.ceintureChoisieBottlesBarcodes.indexOf(res.text)
                var bottleToAdd = this.ceintureChoisieBottles[indexBottleToAdd]

                if(reserve == "B1"){
                  
                  this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B1 pour l'affichage 
                  this.global.upcmodbus.reserves.co2Res1StartVol += parseFloat(bottleToAdd.bottleType.designation)
                  this.global.contenuAjouteEnB1 += parseFloat(bottleToAdd.bottleType.designation) 

                  this.global.codebarsB1SansCodeUpc.push(bottleToAdd.barcode);
                  this.global.stringsB1.push(bottleToAdd.bottleType.brand+" ("+bottleToAdd.barcode+") "+bottleToAdd.bottleType.contenue);
                  this.global.codebarsB1.push(bottleToAdd.barcode+bottleToAdd.bottleType.codeUpc) 
                  this.global.contenusB1.push(bottleToAdd.bottleType.designation)      
                  this.global.isAddedB1.push(true);         
                 
  
                  this.addedBottlesB1.barcodes.push(res.text);
                  this.addedBottlesB1.contenus.push(bottleToAdd.bottleType.designation);                    
                  this.storage.set("addedBottlesB1",this.addedBottlesB1);

                  this.addedBottlesStringsB1.push(bottleToAdd.bottleType.contenue)
                  this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1)
              
                  this.global.isAddedB1.push(true);          
                  this.storage.set("isAddedB1",this.global.isAddedB1);
  
                  this.calcContenant("B1")
  
                }
                else{
                  if(reserve == "B2"){

                    this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B2 pour l'affichage 
                    this.global.upcmodbus.reserves.co2Res2StartVol += parseFloat(bottleToAdd.bottleType.designation)
                    this.global.contenuAjouteEnB2 += parseFloat(bottleToAdd.bottleType.designation)

                    this.global.codebarsB2SansCodeUpc.push(bottleToAdd.barcode);
                    this.global.stringsB2.push(bottleToAdd.bottleType.brand+" ("+bottleToAdd.barcode+") "+bottleToAdd.bottleType.contenue);
                    this.global.codebarsB2.push(bottleToAdd.barcode+bottleToAdd.bottleType.codeUpc)
                    this.global.contenusB2.push(bottleToAdd.bottleType.designation)                  
                    this.global.isAddedB2.push(true);                   
                      
                    this.addedBottlesB2.barcodes.push(res.text);
                    this.addedBottlesB2.contenus.push(bottleToAdd.bottleType.designation);                    
                    this.storage.set("addedBottlesB2",this.addedBottlesB2);

                    this.addedBottlesStringsB2.push(bottleToAdd.bottleType.contenue)
                    this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2)
                
                    this.global.isAddedB2.push(true);          
                    this.storage.set("isAddedB2",this.global.isAddedB2);
    
                    this.calcContenant("B2")
                  }
                }  
                
              }
            }
            else{ //le code scanné correspond à une bouteille en transit mémorisée 
              alert("transit")
              var indexBottleToAdd = this.transitBottlesBarcodes.indexOf(res.text)
              var bottleToAdd =  this.bottlesInTransit[indexBottleToAdd]  
              
              if(reserve == "B1"){

                this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B1 pour l'affichage 
                this.global.upcmodbus.reserves.co2Res1StartVol += parseFloat(bottleToAdd.bottleType.designation)
                this.global.contenuAjouteEnB1 += parseFloat(bottleToAdd.bottleType.designation)   

                this.global.codebarsB1SansCodeUpc.push(bottleToAdd.barcode);
                this.global.stringsB1.push(bottleToAdd.bottleType.brand+" ("+bottleToAdd.barcode+") "+bottleToAdd.bottleType.contenue);
                this.global.codebarsB1.push(bottleToAdd.barcode+bottleToAdd.bottleType.codeUpc)
                this.global.contenusB1.push(bottleToAdd.bottleType.designation)      
                this.global.isAddedB1.push(true);                

                this.addedBottlesB1.barcodes.push(res.text);
                this.addedBottlesB1.contenus.push(bottleToAdd.bottleType.designation);                    
                this.storage.set("addedBottlesB1",this.addedBottlesB1);

                this.addedBottlesStringsB1.push(bottleToAdd.bottleType.contenue)
                this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1)
            
                this.global.isAddedB1.push(true);          
                this.storage.set("isAddedB1",this.global.isAddedB1);

                this.calcContenant("B1")

              }
              else{
                if(reserve == "B2"){

                  this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(bottleToAdd.bottleType.designation); //ajout contenu B2 pour l'affichage 
                  this.global.upcmodbus.reserves.co2Res2StartVol += parseFloat(bottleToAdd.bottleType.designation)
                  this.global.contenuAjouteEnB2 += parseFloat(bottleToAdd.bottleType.designation)

                  this.global.codebarsB2SansCodeUpc.push(bottleToAdd.barcode);
                  this.global.stringsB2.push(bottleToAdd.bottleType.brand+" ("+bottleToAdd.barcode+") "+bottleToAdd.bottleType.contenue);
                  this.global.codebarsB2.push(bottleToAdd.barcode+bottleToAdd.bottleType.codeUpc)
                  this.global.contenusB2.push(bottleToAdd.bottleType.designation)                  
                  this.global.isAddedB2.push(true);                  

                  this.addedBottlesB2.barcodes.push(res.text);
                  this.addedBottlesB2.contenus.push(bottleToAdd.bottleType.designation);                    
                  this.storage.set("addedBottlesB2",this.addedBottlesB2);
                  
                  this.addedBottlesStringsB2.push(bottleToAdd.bottleType.contenue)
                  this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2)
              
                  this.global.isAddedB2.push(true);          
                  this.storage.set("isAddedB2",this.global.isAddedB2);
  
                  this.calcContenant("B2")
                }
              }             
             
     
            }       
            
          } else {
            alert("La bouteille est déjà en ligne !");
          }
          
        }
      })
    }
  }


  async writeUPC(text,contenu,string,reserve,index) {   
    
   
    var count = 10-(text+index).length;
    var barcode = text+index;
    for(var i =0;i<count;i++){
      barcode += '\0';
    }
    
  
      
      var d = new Date();
    
        if(reserve == "B1"){
         
          this.global.upcmodbus.reserves.co2Res1ActVol += parseFloat(contenu); //ajout contenu B1 pour l'affichage 
          this.global.contenuAjouteEnB1 += parseFloat(contenu)          
          
          
          this.global.stringsB1.push(string);
          this.global.codebarsB1.push(barcode);
          this.global.codebarsB1SansCodeUpc.push(text);
          this.global.contenusB1.push(contenu);
          this.global.addedBottlesB1.kg.push(contenu);
          this.global.isAddedB1.push()

           
          this.addedBottlesB1.barcodes.push(text);
          this.addedBottlesB1.contenus.push(contenu);                    
          this.storage.set("addedBottlesB1",this.addedBottlesB1);

          this.addedBottlesStringsB1.push(string)
          this.storage.set("addedBottlesStringsB1", this.addedBottlesStringsB1)
       
          this.global.isAddedB1.push(true);          
          this.storage.set("isAddedB1",this.global.isAddedB1);

          this.calcContenant("B1")


        
        }else if(reserve == "B2"){          
            
          this.global.upcmodbus.reserves.co2Res2ActVol += parseFloat(contenu); //ajout contenu B2 pour l'affichage 
          this.global.contenuAjouteEnB2 += parseFloat(contenu)
                  
          
          this.global.stringsB2.push(string);
          this.global.codebarsB2.push(barcode);
          this.global.codebarsB2SansCodeUpc.push(text)
          this.global.contenusB2.push(contenu);
          this.addedBottlesB2.kg.push(contenu);

          
          this.addedBottlesB2.barcodes.push(text);
          this.addedBottlesB2.contenus.push(contenu);                    
          this.storage.set("addedBottlesB2",this.addedBottlesB2);

          this.addedBottlesStringsB2.push(string)
          this.storage.set("addedBottlesStringsB2", this.addedBottlesStringsB2)
       
          this.global.isAddedB2.push(true);          
          this.storage.set("isAddedB2",this.isAddedB2);


          this.calcContenant("B2")
          
        }
          

  }
  
  
  changeRes(i) {
     
      
      this.global.onWriteEnable(this.correspondancesRegistres.co2ResActive,i).then(res=>{
          if(i == 1) {
            this.highlightB1 = true;
            this.highlightB2 = false;
          } else if(i == 2){
            this.highlightB2 = true;
            this.highlightB1 = false;
          } 
          this.global.upcmodbus.reserves.co2ResActive = i;
          
          this.cd.detectChanges();
      });
     
      
    
    
  }

  async onChangeContenant(reserve:string){
    //alert("onChangeContenant")
    //alert(this.contenantB1)
    //alert(this.contenantB2)
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
  }

  async changeContentStatus(reserve:string) {
    if(reserve == "B1"){
      await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1Status,this.statusB1)      
    }
    else{
      if(reserve == "B2"){
        await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2Status,this.statusB2)     
      }
    }
  }
  
  subscribeRefresh(){
    this.events.subscribe("loadParameters",($event)=>{

      this.stockRet = this.global.upcmodbus.nameId;
      this.statusB1 = ""+this.global.upcmodbus.reserves.co2Res1Status;
      this.statusB2 = ""+this.global.upcmodbus.reserves.co2Res2Status;
                    
      this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
      this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;
      this.global.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
      this.global.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
      this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
      this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;

    }) 
                            
      
   
                  
  }

  unsubscribeRefresh(){
    this.events.unsubscribe("loadParameters")
  }

  async onSynchro(){
   
    var d = new Date();
    this.global.logs.push(this.global.msToTime(d)+" - ON SYNCHRO")  
    
    
    //écriture contenus       
    if(this.global.upcmodbus.general.upcStatus == 1){
      await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,0)   
    } 

    await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1FillNew,(this.global.contenuAjouteEnB1-this.global.contenuEnleveEnB1)/0.001974) //conversion en litres      
    await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2FillNew,(this.global.contenuAjouteEnB2-this.global.contenuEnleveEnB2)/0.001974)
    
    if(this.global.upcmodbus.general.upcStatus == 1) {
      await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,1)
    }
    
    
    //écriture codebars B1
    if(this.global.codebarsB1.length != 9){
      var length = this.global.codebarsB1.length;
      for(var i = length+1;i<=9;i++){
        this.global.codebarsB1.push("\0\0\0\0\0\0\0\0\0\0")
      }
    }    
    this.global.writeMultipleRegisters = true;
    this.global.resetListeCodebarsB1 = true;  
    await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res1CodesBarres,this.global.codebarsB1)
    this.global.resetListeCodebarsB1 = false;


    //écritures codebars B2
    if(this.global.codebarsB2.length != 9){
      var length = this.global.codebarsB2.length;
      for(var i = length+1;i<=9;i++){
        this.global.codebarsB2.push("\0\0\0\0\0\0\0\0\0\0")
      }
    }    
    this.global.writeMultipleRegisters = true;
    this.global.resetListeCodebarsB2 = true;    
    await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.global.codebarsB2)
    this.global.resetListeCodebarsB2 = false;


    //écriture contenants 
    this.calcContenant("B1")
    alert("contenus B1 : "+this.global.contenusB1)
    alert("contenant B1 : "+this.global.contenantB1)
    await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol,this.global.contenantB1)
    this.global.upcmodbus.reserves.co2Res1StartVol = this.global.contenantB1;     
    this.calcContenant("B2")
    alert("contenus B2 : "+this.global.contenusB2)
    alert("contenant B2 : "+this.global.contenantB2)
    await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol,this.global.contenantB2)
    this.global.upcmodbus.reserves.co2Res2StartVol = this.global.contenantB2;

    alert("Synchronisation terminée")
                
  } 

  goToNextPage(){   
    clearInterval(this.global.interval); 
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }


}
