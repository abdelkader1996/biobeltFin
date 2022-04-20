import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { ModalController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { AlertController } from '@ionic/angular';
import { Code } from '../api/ApiResponse';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {  

  //pour enregistrer l historique des bouteilles       
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

    //on charge depuis le storage l ID du stock , une fois l ecran apparait :
    this.storage.get("stockid").then(val=>{
      this.stock = JSON.parse(val);
      this.stockName=this.stock.name;
    })

    // on met a jour les variable en fonction du  mode  +++++++ ( a revoir ) !!!++++++
    if(localStorage.getItem("adds") == "0"){
        this.addStock = true;
    }

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
    // on charge le token de l utilisateur :
    this.storage.get("token").then(val=>{
      this.token = val;

      //recuperer les types de bouteilles de la base de données :
      this.upcv3Service.getAllBottleTypes(val).subscribe(res=>{
        if(res.code === Code.BOTTLE_TYPE_RECOVERED){
            this.bottleTypedb = res.result;
        }
      });
        

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

        //si la bouteille est presente dans la base de donnée 
        if(res.code===Code.BOTTLE_RECOVERED){
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
        //on se met en mode rajout de bouteille 
        this.retNotExistBottle=true;

        //on met a jour les donné de la bouteille  qu'on va envoyé a la base donnée :
        this.botteilleRet = {
          barcode:barecode,
          bottleType:"",
          state:"FULL",
          stock:"hjh",
          rack:"null",
          //si on est en mode retour au stock on met  l ID du stock , sinon on met un ID 000-000 (TRANSIT)
          localisationId:this.retourStock?this.stock.id:"00000000-0000-0000-0000-000000000000",
          status: this.retourStock?"ENTREPOSE":"TRANSIT",
          localisationType: this.retourStock?"STOCK":"TRANSIT"
        
      }
   }
  })
} }
})
  }
  // pour changer l ' etat de bouteille >  EMPTY | FULL | IN-USE
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail.value);
    this.botteilleRet.state = event.detail.value;
    }

    showRadio(){
      this.showRadioTF=!this.showRadioTF;
    }
 // fonction utilitaire qui permet de supprimer un barcode d'une liste 
  removeElementFromBarcodes(indexOfelement){
    this.bottleBarcodes.splice(indexOfelement, 1);
  }

   //retrait de boutielle :
   retraitdebouteille(){
   
          // mettre a jour la bouteille  dans la base de données :
      this.upcv3Service.addBottleMobile(JSON.stringify(this.botteilleRet),this.token).subscribe(res=>{
        alert(this.retourStock?"retour au stock !":"retrait de bouteille !");
        this.logs.push((this.retourStock?"( retour au stock  )":"( retrait de bouteille )")+" - "+this.botteilleRet.barcode+" | "+res.result.bottleType.brand+" "+res.result.bottleType.designation)
        //remettre les flags a false : 
        this.showRadioTF=false;
        this.retNotExistBottle=false;
      
      })

      
  }

  //retour au fournisseur des botteilles scanner 
  async delBottle() {
    //creer l'object qui contient la liste des barecodes des bouteilles  a supprimer 
    var bottleList = { barcodes : this.bottleBarcodes, }
    //envoyer l'objet a l'API :
    this.upcv3Service.returnFourn(JSON.stringify(bottleList),this.token).subscribe(res=>{
      this.bottleBarcodes=[]
    })
    

  }



  //ajouter des bouteilles au stock :(reception de bouteilles)
  async addBottle() {

    //garder une copie de la liste des bouteilles a rajouter 
    var bottleToAdd=[...this.bottleBarcodes];
    //mettre la liste des barcode a affiher a 0 
    this.bottleBarcodes=[];
    
    //parcourir la liste et les rajouter a la base de donné 
    bottleToAdd.map((item,index)=>{

    //creer l objet bottle qu'on va envoyé a la base de donnée :
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

}
