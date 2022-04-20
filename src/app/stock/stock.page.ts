import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { State } from '../model/site';
import { ModalController } from '@ionic/angular';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { GlobalService } from '../api/global.service';
import { AlertController } from '@ionic/angular';
import { Code } from '../api/ApiResponse';
import { element } from 'protractor';
import { Branch } from '../model/project/branch';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {        
  logs=[];  
  stock;
  stockName=""
  token;
  addStock = false;
  remStock = false;
  retStock = false;
  retfourn=false;
  retbouteille=false;
  showRadioTF=false;
  retNotExistBottle=false;
  name = {name : "",id : 0};
  header = [];
  //rack selectionnée pour ajouter des bouteilles 
  selectedRack="null";
  //botteles types  from  database :
  bottleTypedb=[]

  //botlles barcode :
  bottleBarcodes=[]
  bottleTypeIDs=[]
  bottlesTypeName=[]
  currentBotlleType=null;

  //bouteille a retirer 
   botteilleRet=undefined;

   retourStock=false;

  
  constructor(private storage : Storage,private barcode : BarcodeScanner,private upcv3Service : Upcv3serviceService,private modalService : ModalController,private global : GlobalService, private alertController : AlertController) { }

  ngOnInit() {
    this.storage.get("stockid").then(val=>{
      this.stock = JSON.parse(val);
      this.stockName=this.stock.name;
    })

    
    if(localStorage.getItem("adds") == "0"){
        this.addStock = true;
    }// 30 € livraison LS MCB 2,5 € 120 unité MCB triphasé 6 A MCCB
    else if (localStorage.getItem("adds") == "1"){
      this.retbouteille = true;
    } else if (localStorage.getItem("adds") == "2") {
      this.retStock = true;
    }
    else if (localStorage.getItem("adds") == "3") {
      this.retfourn = true;
    }

      else if (localStorage.getItem("adds") == "4") {
        this.retbouteille = true;
        this.retourStock=true;

      }

    this.storage.get("token").then(val=>{
      this.token = val;

      //recuperer les types de bouteilles de la base de données :
      this.upcv3Service.getAllBottleTypes(val).subscribe(res=>{
        if(res.code === Code.BOTTLE_TYPE_RECOVERED){
            this.bottleTypedb = res.result;
            console.log("bottle types")
            console.log(this.bottleTypedb)
        }
      });
      
    /*  this.storage.get("stockid").then(val=>{
        this.name = JSON.parse(val);
        
        this.upcv3Service.getBottlesByStockId(this.name.id,this.token).subscribe(res=>{
          this.stock = res.result;

          this.stock.sort((a,b)=>{
            if (a.rack < b.rack) return -1;
            if (a.rack > b.rack) return 1;
            return 0;
          });
          
          this.stock.forEach(item=>{
            if(!this.header.includes(item.rack)){
              this.header.push(item.rack);
            }
          })

        })
       
    })*/

    })

  
    console.log("debug ::::::")
    console.log(this.retourStock);
  }
  remRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ''){
        
        var text = res.text;
        this.upcv3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
          if(res.result.length> 0){
            var modal = await this.modalService.create({
              component : RackcontentPage,
              componentProps : {
                rack : text
              }
            })
            modal.present();
          } else {
            alert("Aucune bouteille est associée à ce Rack !");
          }
        })
        
        
      }
      
    })
  }
  addRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        var text = res.text;
        this.upcv3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
            if(res.result.length == 0){
              this.presentAlertRack(text);
            }else {
              localStorage.setItem("rack",text);
              const modal = await this.modalService.create({
                component : AddbottlemodalPage,
                componentProps : {
                  barcode : "",
                  stockRet : this.name,
                  mode : 1
                }
              })
              modal.present();
            }
        })
        
      }
    })
  }


// scanner un rack 
  selectRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        var text = res.text;
        this.selectedRack=text;
        localStorage.setItem("rack",text);
        
      }
    })
  }
//scanner un rack et charger les bouteilles associées 
  scanRack(){    
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        var text = res.text;
        this.selectedRack=text;
        localStorage.setItem("rack",text);
        this.upcv3Service.getBottleFromRack(this.token,text).subscribe(async res=>{
          res.result.map(element=>this.bottleBarcodes.push(element.barcode))
        })
        
      }
    })


  }


  //scanner une bouteille:
  scanBottle() {
   


    let barecode="";
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        var text = res.text;
        this.bottleBarcodes.push(text) 
        this.bottleTypeIDs.push(this.currentBotlleType)  
        barecode=res.text;
        
           //si on est en mode retrait de bouteille  :
    if (this.retbouteille){

       await this.upcv3Service.getBottleByBarCode(res.text,this.token).subscribe(res=>{

        if(res.code===Code.BOTTLE_RECOVERED){

          //si la bouteille est presente dans la base de donnée 
          var bottle=res.result;
          bottle.bottleType=res.result.bottleType.id;
        

          this.botteilleRet = {
      
          barcode:barecode,
          bottleType:res.result.bottleType,
          state:res.result.state,
          stock:"hjh",
          rack:res.result.rack,
          localisationId:this.retourStock?this.stock.id:"00000000-0000-0000-0000-000000000000",
          status: this.retourStock?"ENTREPOSE":"TRANSIT",
          localisationType: this.retourStock?"STOCK":"TRANSIT"
        
      }


        }else{
        // si elle n existe pas , on demande de la creer :
        alert("la bouteille scannée n existe pas dans la base de donnée  ")
        this.retNotExistBottle=true;
        this.botteilleRet = {
          barcode:barecode,
          bottleType:"",
          state:"FULL",
          stock:"hjh",
          rack:"null",
          localisationId:this.retourStock?this.stock.id:"00000000-0000-0000-0000-000000000000",
          status: this.retourStock?"ENTREPOSE":"TRANSIT",
          localisationType: this.retourStock?"STOCK":"TRANSIT"
        
      }

        }
      
      })
  

    }
      }
    })
 

  }

  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail.value);
    this.botteilleRet.state = event.detail.value;
    }

    showRadio(){
      this.showRadioTF=!this.showRadioTF;
    }

  removeElementFromBarcodes(indexOfelement){

    this.bottleBarcodes.splice(indexOfelement, 1);
  }

   //retrait de boutielle :
   retraitdebouteille(){
   
          // mettre a jour la bouteille  dans la base de données :
      this.upcv3Service.addBottleMobile(JSON.stringify(this.botteilleRet),this.token).subscribe(res=>{
        alert(this.retourStock?"retour au stock !":"retrait de bouteille !");
        this.logs.push(this.retourStock?"( retour au stock  )":"( retrait de bouteille )"+" - "+this.botteilleRet.barcode+" | "+res.result.bottleType.brand+" "+res.result.bottleType.designation)
        this.showRadioTF=false;
        this.retNotExistBottle=false;
      
      })

      
  }




  async presentAlertRack(text) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nouveau Rack',
      subHeader: '',
      message: 'Vous avez ajouter un nouveau rack ?',
      buttons: [{text : 'Annuler', handler : ()=>{}},{text:'Confirmer',
                  handler : async ()=>{
                    localStorage.setItem("rack",text);
              const modal = await this.modalService.create({
                component : AddbottlemodalPage,
                componentProps : {
                  barcode : "",
                  stockRet : this.name,
                  mode : 1
                }
              })
              modal.present();
                  }
    }],
      
    });

    await alert.present();
  }

  retRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        localStorage.setItem("rack",res.text);
        var modal = await this.modalService.create({
          component : AddbottlemodalPage,
          componentProps : {
            barcode : "",
            stockRet : this.name,
            mode : 2
          }
        })
        modal.present();
      }
    })
  }
  async delBottle() {
    
    var bottleList = {
     
      barcodes : this.bottleBarcodes,
     
    }
    console.log(JSON.stringify(bottleList))
    
    this.upcv3Service.returnFourn(JSON.stringify(bottleList),this.token).subscribe(res=>{
      this.bottleBarcodes=[]
    })
    

  }


  async addBottle() {
    /*
    var bottleList = {
      bottleType : this.bottleTypeIDs,
      stock : this.stock.id,
      //date : date,
      barcodes : this.bottleBarcodes,
      rack : this.selectedRack,
      empty : 0
    }

    this.upcv3Service.addToStockMob(JSON.stringify(bottleList),this.token).subscribe(res=>{
      this.bottleBarcodes=[]
    })
    */

    var bottleToAdd=[...this.bottleBarcodes];
    this.bottleBarcodes=[];

    bottleToAdd.map((item,index)=>{
          var bottle = {
      
            barcode:item,
            bottleType:this.bottleTypeIDs[index],
            state:"FULL",
            stock : this.stock.id,
            localisationId: this.stock.id,
            rack : this.selectedRack,
            status:"ENTREPOSE",
            localisationType:"STOCK"
          
        }
             
         // mettre a jour la bouteille  dans la base de données :
          this.upcv3Service.addBottleMobile(JSON.stringify(bottle),this.token).subscribe(res=>alert("bouteille ajoutée !"))

    })
    

  }


  async retBottles() {
    this.barcode.scan().then(async code=>{
      if(code.text != ''){
        localStorage.setItem("rack",null);
        var modal = await this.modalService.create({
          component : AddbottlemodalPage,
          componentProps : {
            barcode : code.text,
            stockRet : this.name,
            mode : 2
          }
        })
        modal.present();
      }
    })
  }

}
