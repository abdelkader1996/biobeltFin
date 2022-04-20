import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController, Platform, LoadingController } from '@ionic/angular';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {Storage} from '@ionic/storage';
import { Code } from '../api/ApiResponse';
import { BottleType } from '../model/bottleType';
import { Router } from '@angular/router';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { GlobalService } from '../api/global.service';
declare var WifiWizard2: any;

@Component({
  selector: 'app-addbottlemodal',
  templateUrl: './addbottlemodal.page.html',
  styleUrls: ['./addbottlemodal.page.scss'],
})
export class AddbottlemodalPage implements OnInit {
  barcode = "";
  token;
  bottleType : BottleType[];
  barcodes = [];
  bottleadded = [];
  stockRet;
  isMesser = [];
  designation = [];
  mode;
  upc : UPCModbus;
  addressage = 41119;
  addressage2 = 41169;
  B1= [];
  B1String = [];
  B1Desig = [];
  B1IsMesser = [];
  B2 = [];
  B2String = [];
  B2Desig = [];
  B2IsMesser = [];
  i = 0;
  y = 0;
  rack = "";
  isBBAM = false;
  listbottlesRack = [];

  constructor(private scan : BarcodeScanner,private modal : ModalController,private upcv3Service : Upcv3serviceService,private storage : Storage,private router : Router,private platform :Platform,private network : Network, private ngZone : NgZone,private loadingCTRL : LoadingController,private global : GlobalService,private cd : ChangeDetectorRef) { }

  ngOnInit() {
    //alert(this.barcode);
    this.getUpcStateConnexion()
    if (this.mode === 1000){
      this.isMesser = [];
      this.stockRet = {name : "En cours..."};
      this.platform.ready().then(()=>{
        if(this.platform.is('ios')){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(res=>{
            this.isBBAM = true;
            this.platform.ready().then(
              async readySource => {
                if (readySource == 'cordova') {
                  
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                  await this.upc.client.connect();
                  setTimeout(async ()=>{
                    await this.upc.client.getStringFromHoldingRegister(40001, 10).then(res=>{
                      this.stockRet = {
                        name : res 
                      }
                      this.cd.detectChanges();
                    })
                  },2000)
                  /*this.network.onConnect().subscribe(() => {
                    
                    if (this.network.type === this.network.Connection.WIFI) {
                      this.upc.reconnect();
                      this.upc.client.getStringFromHoldingRegister(40001, 10).then(res=>{
                        this.stockRet = {
                          name : res 
                        }
                      })
                      
                      
                    }
                  });*/
                }
              }
            );
          }).catch(err=>{
            this.stockRet = {name : "Erreur lors de la connexion UPC"};
            alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
          })
        }
        
      })
    } else {
      
      this.storage.get("token").then(val=>{

        this.token = val;
        if(localStorage.getItem("rack")){
          this.rack = localStorage.getItem("rack");
          this.upcv3Service.getBottleFromRack(this.token,this.rack).subscribe(res=>{
                  this.listbottlesRack = res.result;
                  
          })
        }
        this.upcv3Service.getAllBottleTypes(val).subscribe(res=>{
          if(res.code === Code.BOTTLE_TYPE_RECOVERED){
              this.bottleType = res.result;
          }
        })
      })
      
      if(/^\d+$/.test(this.barcode)){
        this.barcodes.push(this.barcode);
        this.barcode = "Messer ("+this.barcode+") 37.5 kg";
        
        this.isMesser.push(true);
        this.designation.push("37.5");
      }
      else if (/^[a-z0-9]+$/i.test(this.barcode)){
        this.barcodes.push(this.barcode);
        this.barcode = "Air Liquide ("+this.barcode+")";
        this.designation.push("34");
        this.isMesser.push(false);
      }
    }
    
  }
  doRefresh($event) {
    this.ngOnInit();
    $event.target.complete();
  }
  onAddBottle() {
      this.scan.scan().then(res=>{
        var isScanned = false;
        this.barcodes.forEach(item=>{
          if (item == res.text){
            alert("Vous avez déjà scanné cette bouteille");
            isScanned = true;
          }
        })
        if(!isScanned){
          if(res.text != ''){
            if (/^\d+$/.test(res.text)){
              this.bottleadded.push("Messer ("+res.text+") 37.5 kg");
              this.barcodes.push(res.text);
              this.isMesser.push(true);
              this.designation.push("37.5");
            } else {
              this.bottleadded.push("Air Liquide ("+res.text+")");
              this.barcodes.push(res.text);
              this.isMesser.push(false);
              this.designation.push("34");
            }
          }
        }
        
        
        
      })
  }
  
  onClose() {
    this.modal.dismiss();
  }
  onSynchroB1B2() {
    this.global.onSynchroB1B2(this.token);
  }

  onSynchro() {
    if (this.mode === 1){
      var bottleTypes = [];
      /*this.bottleType.forEach(item=>{
        for(var i = 0;i<this.designation.length;i++){
          
          if (item.designation == this.designation[i]){
            bottleTypes.push(item.id);
          }
        }
        
      })*/
      this.designation.forEach(item=>{
        for(var i =0;i<this.bottleType.length;i++){
            if(item == this.bottleType[i].designation){
                bottleTypes.push(this.bottleType[i].id);
            }
        }
      })
      var date = new Date();
      var bottle = {
        bottleType : bottleTypes,
        stock : this.stockRet.id,
        //date : date,
        barcodes : this.barcodes,
        rack : this.rack,
        empty : 0
      }
      
      
      this.upcv3Service.addToStockMob(bottle,this.token).subscribe(res=>{
        this.modal.dismiss();
      })
      
    }
    else if (this.mode == 0){
      var bottleDel = {
        barcodes : this.barcodes
      }

      this.upcv3Service.returnFourn(bottleDel,this.token).subscribe(res=>{
        //alert (JSON.stringify(res));
        this.modal.dismiss();
      })
    } else if(this.mode == 2 || this.mode == 3) {
        //add empty bottle
        var bottleTypes = [];
      /*this.bottleType.forEach(item=>{
        for(var i = 0;i<this.designation.length;i++){
          
          if (item.designation == this.designation[i]){
            bottleTypes.push(item.id);
          }
        }
        
      })*/
      this.designation.forEach(item=>{
        for(var i =0;i<this.bottleType.length;i++){
            if(item == this.bottleType[i].designation){
                bottleTypes.push(this.bottleType[i].id);
            }
        }
      })
      var date = new Date();
      var bottle = {
        bottleType : bottleTypes,
        stock : this.stockRet.id,
        //date : date,
        barcodes : this.barcodes,
        rack : this.rack,
        empty : 1
      }
      
      
      this.upcv3Service.addToStockMob(bottle,this.token).subscribe(res=>{
        this.modal.dismiss();
      })
    }
    
  }
  onScanBarCodeB2() {
    this.scan.scan().then(res=>{
      var isScanned = false;
      this.B1.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      this.B2.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      if(!isScanned) {
        if(res.text != ""){
          if(/^\d+$/.test(res.text)) {
            this.B2String.push("Messer ("+res.text+") 37.5 kg");
            this.B2Desig.push("37.5");
            this.B2IsMesser.push(true);
          }
          else {
            this.B2String.push("Air Liquide ("+res.text+")");
            this.B2Desig.push("34");
            this.B2IsMesser.push(false);
          }
          this.B2.push(res.text);
        }
      } else {
        alert("Vous avez déjà scanner la bouteille !");
      }
      
      
    })
  }
  onScanBarCodeB1() {
    this.scan.scan().then(res=>{
      var isScanned = false;
      this.B1.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      this.B2.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      if(!isScanned) {
        if(res.text != ""){
          if(/^\d+$/.test(res.text)) {
            this.B1String.push("Messer ("+res.text+") 37.5 kg");
            this.B1Desig.push("37.5");
            this.B1IsMesser.push(true);
          }
          else {
            this.B1String.push("Air Liquide ("+res.text+")");
            this.B1Desig.push("34");
            this.B1IsMesser.push(false);
          }
          this.B1.push(res.text);
        }
      } else {
        alert("Vous avez déjà scanner la bouteille !");
      }
      
      
    })
  }
  getUpcStateConnexion() {
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
          //this.global.ssid = res;
          //this.global.isBBAM = true;
          this.cd.detectChanges();
        })
      },2000)
    })
  }
  onSynchroCeint() {
    this.upc.client.setStringInHoldingRegister(this.addressage,this.B1[this.i].substr(0,8)).then(
      res=>{
        //this.booleanB1 = true;
        this.addressage += 10;
        this.i++;
        alert("Ecriture sur l'upc en B1, état : "+JSON.stringify(res));
      }    
    ).catch(error=>{
      alert(JSON.stringify(error));
    });

    this.upc.client.setStringInHoldingRegister(this.addressage2,this.B2[this.y].substr(0,8)).then(
      res=>{
        //this.booleanB2 = true;
        this.addressage2 += 10;
        this.y++;
        alert("Ecriture sur l'upc en B2, état : "+JSON.stringify(res));
      }    
    ).catch(error=>{
      alert(JSON.stringify(error));
    });
  }
  

}

